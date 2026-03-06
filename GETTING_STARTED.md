# Getting Started with Terminal Sound Alerts

## 📋 Prerequisites

- Visual Studio Code (version 1.75.0 or higher)
- Node.js (version 18.x or higher)
- npm (comes with Node.js)

## 🎯 Installation Steps

### Step 1: Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This installs all required packages including TypeScript and VS Code extension dependencies.

### Step 2: Add Sound Files

**IMPORTANT:** The extension requires actual audio files to work.

Replace the placeholder files in the `sounds/` directory with real MP3 audio files:

- `sounds/success.mp3` - A pleasant sound for successful commands
- `sounds/fail.mp3` - An alert sound for failed commands  
- `sounds/warning.mp3` - A cautionary sound for warnings

**Where to find free sounds:**
- [Freesound.org](https://freesound.org/)
- [Mixkit](https://mixkit.co/free-sound-effects/)
- [Zapsplat](https://www.zapsplat.com/)

**Recommended sound characteristics:**
- Duration: 1-3 seconds
- Format: MP3 or WAV
- Volume: Normalized (not too loud)

### Step 3: Compile the Extension

```bash
npm run compile
```

This compiles TypeScript files from `src/` to JavaScript in `out/`.

### Step 4: Run the Extension

1. Open the project in VS Code
2. Press `F5` (or Run → Start Debugging)
3. A new "Extension Development Host" window opens
4. The extension is now active in this window

## 🧪 Testing the Extension

In the Extension Development Host window:

### Test 1: Success Sound

Open the integrated terminal and run:
```bash
echo "Test successful command"
```

You should hear the success sound when the command completes.

### Test 2: Failure Sound

Run a command that fails:
```bash
exit 1
```

You should hear the failure sound.

### Test 3: Warning Sound

Run a command that produces warnings:
```bash
echo "warning: this is a test warning"
```

You should hear the warning sound.

### Test 4: Real-World Example

```bash
npm install
```

- If successful with no warnings → Success sound
- If successful with deprecation warnings → Warning sound
- If fails → Failure sound

## 📊 Viewing Logs

1. In the Extension Development Host window
2. Open Output panel: `View → Output` (or `Ctrl+Shift+U`)
3. Select "Terminal Sound Alerts" from the dropdown
4. You'll see logs like:

```
Terminal Sound Alerts extension activated
Terminal watcher activated
Terminal exited: bash, Exit code: 0
Processing result - Exit code: 0
Result: SUCCESS
Playing success sound: d:\terminal-sound-alert\sounds\success.mp3
```

## ⚙️ Configuring the Extension

### Option 1: Via Settings UI

1. `File → Preferences → Settings` (or `Ctrl+,`)
2. Search for "Terminal Sound Alerts"
3. Adjust settings:
   - Enable/disable sounds
   - Change volume (0.0 to 1.0)
   - Customize sound file paths

### Option 2: Via settings.json

Press `Ctrl+Shift+P`, type "Preferences: Open Settings (JSON)", and add:

```json
{
  "commandAudioNotifier.enableSound": true,
  "commandAudioNotifier.volume": 0.8,
  "commandAudioNotifier.successSound": "sounds/success.mp3",
  "commandAudioNotifier.failureSound": "sounds/fail.mp3",
  "commandAudioNotifier.warningSound": "sounds/warning.mp3"
}
```

## 🔧 Development Workflow

### Watch Mode (Recommended for Development)

Instead of manually compiling after each change:

```bash
npm run watch
```

This automatically recompiles when you save TypeScript files.

### Making Changes

1. Edit files in `src/`
2. Save (auto-compiles if watch mode is on)
3. Press `Ctrl+Shift+F5` to reload the Extension Development Host
4. Test your changes

### Debugging

1. Set breakpoints by clicking left of line numbers in `.ts` files
2. Press `F5` to start debugging
3. Trigger the code path (run terminal commands)
4. Execution pauses at breakpoints
5. Inspect variables in Debug panel

## 📦 Building for Distribution

### Create VSIX Package

```bash
# Install vsce globally (one-time)
npm install -g @vscode/vsce

# Package the extension
vsce package
```

This creates `command-audio-notifier-1.0.0.vsix`.

### Install VSIX Locally

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Click `...` menu → "Install from VSIX..."
4. Select the `.vsix` file
5. Reload VS Code

### Share with Others

Send the `.vsix` file to others who can install it the same way.

## 🌐 Platform-Specific Setup

### Windows

No additional setup required. Uses built-in PowerShell and Windows Media Player.

### macOS

No additional setup required. Uses built-in `afplay` command.

### Linux

Install audio playback tools:

**Ubuntu/Debian:**
```bash
sudo apt-get install pulseaudio-utils mpg123
```

**Fedora:**
```bash
sudo dnf install pulseaudio-utils mpg123
```

**Arch:**
```bash
sudo pacman -S pulseaudio mpg123
```

## ❓ Troubleshooting

### Extension doesn't activate

**Check:**
- Extension Host output panel for errors
- Run `npm install` and `npm run compile`
- Restart VS Code

### No sound plays

**Check:**
- Sound files exist in `sounds/` directory
- Files are valid audio files (not placeholders)
- `commandAudioNotifier.enableSound` is `true`
- System audio is not muted
- Output panel for error messages

### TypeScript compilation errors

**Fix:**
```bash
# Clean and rebuild
rm -rf out/
npm run compile
```

### Changes not taking effect

**Fix:**
- Reload Extension Development Host: `Ctrl+Shift+F5`
- Or close and press `F5` again

## 🎓 Next Steps

1. ✅ Install dependencies
2. ✅ Add sound files
3. ✅ Compile and test
4. 📖 Read [README.md](README.md) for features
5. 🔧 Read [SETUP.md](SETUP.md) for advanced setup
6. 📚 Read [QUICK_REFERENCE.md](QUICK_REFERENCE.md) for code overview
7. 🤝 Read [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

## 💡 Tips

- Keep sound files short (1-3 seconds) for quick feedback
- Test with various commands (npm, git, build scripts)
- Adjust volume to your preference
- Use watch mode during development
- Check Output panel when debugging

## 🆘 Getting Help

- Check the Output panel: "Terminal Sound Alerts"
- Review logs for error messages
- Open an issue on GitHub
- Read the documentation files

## 🎉 Success!

If you hear sounds when running terminal commands, congratulations! The extension is working correctly.

Enjoy your audio-enhanced terminal experience! 🔊
