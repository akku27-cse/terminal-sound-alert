import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export class SoundPlayer {
    private outputChannel: vscode.OutputChannel;
    private extensionPath: string;

    constructor(outputChannel: vscode.OutputChannel, extensionPath: string) {
        this.outputChannel = outputChannel;
        this.extensionPath = extensionPath;
    }

    async playSound(soundType: 'success' | 'failure' | 'warning'): Promise<void> {
        this.outputChannel.appendLine(`\n=== PLAY SOUND REQUEST: ${soundType.toUpperCase()} ===`);
        
        const config = vscode.workspace.getConfiguration('commandAudioNotifier');
        const enabled = config.get<boolean>('enableSound', true);

        this.outputChannel.appendLine(`Sound enabled: ${enabled}`);

        if (!enabled) {
            this.outputChannel.appendLine('Sound playback disabled in settings');
            return;
        }

        const volume = config.get<number>('volume', 1.0);
        let soundPath: string;

        switch (soundType) {
            case 'success':
                soundPath = config.get<string>('successSound', 'sounds/success.mp3');
                break;
            case 'failure':
                soundPath = config.get<string>('failureSound', 'sounds/fail.mp3');
                break;
            case 'warning':
                soundPath = config.get<string>('warningSound', 'sounds/warning.mp3');
                break;
        }

        const fullPath = path.join(this.extensionPath, soundPath);
        this.outputChannel.appendLine(`Sound file path: ${fullPath}`);
        this.outputChannel.appendLine(`Volume: ${volume}`);
        this.outputChannel.appendLine(`Platform: ${process.platform}`);

        try {
            await this.playSoundFile(fullPath, volume);
            this.outputChannel.appendLine(`✓ Sound played successfully`);
        } catch (error) {
            this.outputChannel.appendLine(`✗ Error playing sound: ${error}`);
        }
    }

    private async playSoundFile(filePath: string, volume: number): Promise<void> {
        const platform = process.platform;
        const volumePercent = Math.round(volume * 100);

        try {
            if (platform === 'win32') {
                // Windows: Use PowerShell with better WMP control
                const psCommand = `
                    Add-Type -AssemblyName presentationCore;
                    $mediaPlayer = New-Object System.Windows.Media.MediaPlayer;
                    $mediaPlayer.Open([System.Uri]::new('${filePath.replace(/\\/g, '\\\\')}'));
                    $mediaPlayer.Volume = ${volume};
                    $mediaPlayer.Play();
                    Start-Sleep -Milliseconds 3000;
                    $mediaPlayer.Stop();
                    $mediaPlayer.Close();
                `.replace(/\n/g, ' ').trim();
                await execAsync(`powershell -ExecutionPolicy Bypass -Command "${psCommand}"`);
            } else if (platform === 'darwin') {
                await execAsync(`afplay -v ${volume} "${filePath}"`);
            } else {
                try {
                    await execAsync(`paplay --volume=${volumePercent * 655} "${filePath}"`);
                } catch {
                    try {
                        await execAsync(`mpg123 -f ${volumePercent * 327} "${filePath}"`);
                    } catch {
                        await execAsync(`aplay "${filePath}"`);
                    }
                }
            }
        } catch (error) {
            throw new Error(`Failed to play sound on ${platform}: ${error}`);
        }
    }
}
