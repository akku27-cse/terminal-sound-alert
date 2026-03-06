import * as vscode from 'vscode';
import { SoundPlayer } from './soundPlayer';

export class TerminalWatcher {
    private outputChannel: vscode.OutputChannel;
    private soundPlayer: SoundPlayer;
    private terminalDataListeners: Map<vscode.Terminal, vscode.Disposable> = new Map();
    private terminalBuffers: Map<vscode.Terminal, string> = new Map();
    private warningKeywords = ['warning', 'warn', 'deprecated', 'WARN', 'WARNING', 'DEPRECATED'];
    private commandInProgress: Map<vscode.Terminal, boolean> = new Map();

    constructor(outputChannel: vscode.OutputChannel, soundPlayer: SoundPlayer) {
        this.outputChannel = outputChannel;
        this.soundPlayer = soundPlayer;
    }

    activate(context: vscode.ExtensionContext): void {
        // Try to use Shell Integration API if available (VS Code 1.93+)
        if (vscode.window.onDidEndTerminalShellExecution) {
            context.subscriptions.push(
                vscode.window.onDidEndTerminalShellExecution(async (e) => {
                    await this.handleShellExecution(e);
                })
            );
            this.outputChannel.appendLine('Terminal watcher activated with Shell Integration API');
        } else {
            this.outputChannel.appendLine('Shell Integration API not available, using fallback method');
        }

        // Fallback: Monitor terminal creation and data
        context.subscriptions.push(
            vscode.window.onDidOpenTerminal((terminal) => {
                this.setupTerminalMonitoring(terminal);
            })
        );

        // Monitor existing terminals
        vscode.window.terminals.forEach(terminal => {
            this.setupTerminalMonitoring(terminal);
        });

        // Listen for key presses in terminal (Enter key = command execution)
        context.subscriptions.push(
            vscode.window.onDidChangeActiveTerminal((terminal) => {
                if (terminal) {
                    this.outputChannel.appendLine(`Active terminal changed: ${terminal.name}`);
                }
            })
        );

        this.outputChannel.appendLine('Terminal watcher activated');
    }

    private setupTerminalMonitoring(terminal: vscode.Terminal): void {
        if (this.terminalDataListeners.has(terminal)) {
            return;
        }

        // Monitor terminal data if API is available
        if ((terminal as any).onDidWriteData) {
            const listener = (terminal as any).onDidWriteData((data: string) => {
                this.handleTerminalData(terminal, data);
            });
            this.terminalDataListeners.set(terminal, listener);
        }
    }

    private handleTerminalData(terminal: vscode.Terminal, data: string): void {
        // Accumulate terminal output
        const currentBuffer = this.terminalBuffers.get(terminal) || '';
        this.terminalBuffers.set(terminal, currentBuffer + data);

        // Detect command completion by looking for prompt patterns
        // This is a heuristic approach
        if (this.isCommandComplete(data)) {
            setTimeout(() => {
                this.processBufferedOutput(terminal);
            }, 100);
        }
    }

    private isCommandComplete(data: string): boolean {
        // Common prompt indicators
        return data.includes('$') || 
               data.includes('>') || 
               data.includes('#') ||
               data.match(/\n.*[@$>#]\s*$/) !== null;
    }

    private async processBufferedOutput(terminal: vscode.Terminal): Promise<void> {
        const output = this.terminalBuffers.get(terminal) || '';
        
        if (!output.trim()) {
            return;
        }

        // Simple heuristic: check for error indicators
        const hasError = this.detectError(output);
        const hasWarning = this.detectWarnings(output);

        if (hasError) {
            this.outputChannel.appendLine('Detected: FAILURE');
            await this.soundPlayer.playSound('failure');
        } else if (hasWarning) {
            this.outputChannel.appendLine('Detected: WARNING');
            await this.soundPlayer.playSound('warning');
        } else if (output.length > 10) {
            this.outputChannel.appendLine('Detected: SUCCESS');
            await this.soundPlayer.playSound('success');
        }

        // Clear buffer
        this.terminalBuffers.set(terminal, '');
    }

    private async handleShellExecution(e: vscode.TerminalShellExecutionEndEvent): Promise<void> {
        const exitCode = e.exitCode ?? 0;
        const commandLine = e.execution.commandLine.value;
        
        this.outputChannel.appendLine(`Command: ${commandLine}, Exit code: ${exitCode}`);

        let output = '';
        try {
            const stream = e.execution.read();
            for await (const data of stream) {
                output += data;
            }
        } catch (error) {
            // Ignore read errors
        }

        if (exitCode !== 0) {
            this.outputChannel.appendLine('Result: FAILURE');
            await this.soundPlayer.playSound('failure');
        } else {
            const hasWarnings = this.detectWarnings(output);
            if (hasWarnings) {
                this.outputChannel.appendLine('Result: WARNING');
                await this.soundPlayer.playSound('warning');
            } else {
                this.outputChannel.appendLine('Result: SUCCESS');
                await this.soundPlayer.playSound('success');
            }
        }
    }

    private detectError(output: string): boolean {
        const lowerOutput = output.toLowerCase();
        return lowerOutput.includes('error') ||
               lowerOutput.includes('failed') ||
               lowerOutput.includes('exception') ||
               lowerOutput.includes('fatal');
    }

    private detectWarnings(output: string): boolean {
        if (!output) {
            return false;
        }
        const lowerOutput = output.toLowerCase();
        return this.warningKeywords.some(keyword => 
            lowerOutput.includes(keyword.toLowerCase())
        );
    }
}
