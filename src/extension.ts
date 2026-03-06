import * as vscode from 'vscode';
import { SoundPlayer } from './soundPlayer';
import { TerminalWatcher } from './terminalWatcher';

let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
    outputChannel = vscode.window.createOutputChannel('Terminal Sound Alerts');
    outputChannel.appendLine('Terminal Sound Alerts extension activated');
    outputChannel.show();

    const soundPlayer = new SoundPlayer(outputChannel, context.extensionPath);

    // Register test commands
    context.subscriptions.push(
        vscode.commands.registerCommand('terminalSoundAlert.testSuccess', async () => {
            outputChannel.appendLine('Testing SUCCESS sound...');
            await soundPlayer.playSound('success');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('terminalSoundAlert.testFailure', async () => {
            outputChannel.appendLine('Testing FAILURE sound...');
            await soundPlayer.playSound('failure');
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('terminalSoundAlert.testWarning', async () => {
            outputChannel.appendLine('Testing WARNING sound...');
            await soundPlayer.playSound('warning');
        })
    );

    const terminalWatcher = new TerminalWatcher(outputChannel, soundPlayer);
    terminalWatcher.activate(context);

    outputChannel.appendLine('All components initialized successfully');
    vscode.window.showInformationMessage('Terminal Sound Alerts activated! Check Output panel for logs.');
}

export function deactivate() {
    if (outputChannel) {
        outputChannel.appendLine('Terminal Sound Alerts extension deactivated');
        outputChannel.dispose();
    }
}
