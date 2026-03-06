# Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Sound Files

Replace the placeholder files in the `sounds/` directory with actual MP3 audio files:
- `sounds/success.mp3` - Plays on successful command completion
- `sounds/fail.mp3` - Plays on command failure
- `sounds/warning.mp3` - Plays when warnings are detected

### 3. Compile TypeScript

```bash
npm run compile
```

### 4. Run the Extension

Press `F5` in VS Code to open a new Extension Development Host window with the extension loaded.

## Development Workflow

### Watch Mode

For active development, use watch mode to automatically recompile on changes:

```bash
npm run watch
```

### Testing

1. Press `F5` to launch Extension Development Host
2. Open the integrated terminal (`Ctrl+` ` or `Cmd+` `)
3. Run test commands:
   ```bash
   # Test success
   echo "Hello World"
   
   # Test failure
   exit 1
   
   # Test warning
   echo "warning: this is a test"
   ```
4. Check the "TerminalTone" output channel for logs

### Debugging

1. Set breakpoints in TypeScript files
2. Press `F5` to start debugging
3. Use the Debug Console to inspect variables

## Building for Production

### Package the Extension

```bash
# Install vsce if you haven't already
npm install -g @vscode/vsce

# Package the extension
vsce package
```

This creates a `.vsix` file that can be installed in VS Code.

### Install the VSIX

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Click the `...` menu
4. Select "Install from VSIX..."
5. Choose your `.vsix` file

## Configuration

### Extension Settings

After installation, configure the extension in VS Code settings:

```json
{
  "commandAudioNotifier.enableSound": true,
  "commandAudioNotifier.volume": 0.8,
  "commandAudioNotifier.successSound": "sounds/success.mp3",
  "commandAudioNotifier.failureSound": "sounds/fail.mp3",
  "commandAudioNotifier.warningSound": "sounds/warning.mp3"
}
```

### Custom Sound Files

To use custom sounds:

1. Place your audio files anywhere accessible
2. Update settings with absolute or relative paths
3. Reload VS Code

Example with absolute paths:
```json
{
  "commandAudioNotifier.successSound": "C:/Users/YourName/sounds/success.mp3",
  "commandAudioNotifier.failureSound": "C:/Users/YourName/sounds/fail.mp3",
  "commandAudioNotifier.warningSound": "C:/Users/YourName/sounds/warning.mp3"
}
```

## Platform-Specific Notes

### Windows
- Uses PowerShell with Windows Media Player
- Supports MP3, WAV, WMA formats
- No additional dependencies required

### macOS
- Uses built-in `afplay` command
- Supports most audio formats
- No additional dependencies required

### Linux
- Tries `paplay` (PulseAudio) first
- Falls back to `mpg123` or `aplay`
- Install if needed:
  ```bash
  # Ubuntu/Debian
  sudo apt-get install pulseaudio-utils mpg123
  
  # Fedora
  sudo dnf install pulseaudio-utils mpg123
  
  # Arch
  sudo pacman -S pulseaudio mpg123
  ```

## Troubleshooting

### TypeScript Compilation Errors

```bash
# Clean and rebuild
rm -rf out/
npm run compile
```

### Extension Not Loading

1. Check the Extension Host output panel for errors
2. Verify `package.json` activation events
3. Ensure all dependencies are installed

### Sound Not Playing

1. Check Output panel: "TerminalTone"
2. Verify sound files exist and are valid
3. Test system audio with other applications
4. Check volume settings in extension configuration

## Project Structure

```
command-audio-notifier/
├── package.json              # Extension manifest and configuration
├── tsconfig.json             # TypeScript compiler options
├── .vscodeignore            # Files to exclude from package
├── .gitignore               # Git ignore rules
├── README.md                # User documentation
├── CHANGELOG.md             # Version history
├── LICENSE.md               # MIT License
├── SETUP.md                 # This file
├── src/
│   ├── extension.ts         # Main entry point
│   ├── soundPlayer.ts       # Audio playback logic
│   └── terminalWatcher.ts   # Terminal monitoring
├── sounds/
│   ├── success.mp3          # Success sound file
│   ├── fail.mp3             # Failure sound file
│   └── warning.mp3          # Warning sound file
└── out/                     # Compiled JavaScript (generated)
```

## Publishing

### Prerequisites

1. Create a publisher account at https://marketplace.visualstudio.com/
2. Generate a Personal Access Token (PAT)
3. Login with vsce:
   ```bash
   vsce login your-publisher-name
   ```

### Publish to Marketplace

```bash
# Update version in package.json first
vsce publish
```

### Publish Specific Version

```bash
vsce publish patch  # 1.0.0 -> 1.0.1
vsce publish minor  # 1.0.0 -> 1.1.0
vsce publish major  # 1.0.0 -> 2.0.0
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and feature requests, please use the GitHub issue tracker.
