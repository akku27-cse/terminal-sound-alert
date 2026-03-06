# Terminal Sound Alerts

A Visual Studio Code extension that plays different sounds based on terminal command results - success, failure, or warning.

## Features

- 🔊 **Audio Feedback**: Get instant audio notifications when terminal commands complete
- ✅ **Success Sound**: Plays when a command exits with code 0 and no warnings
- ❌ **Failure Sound**: Plays when a command exits with a non-zero exit code
- ⚠️ **Warning Sound**: Plays when a command succeeds but contains warning keywords
- 🎚️ **Volume Control**: Adjustable volume settings
- ⚙️ **Customizable**: Configure your own sound files and preferences

## Installation

### From VSIX
1. Download the `.vsix` file
2. Open VS Code
3. Go to Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
4. Click the `...` menu at the top
5. Select "Install from VSIX..."
6. Choose the downloaded file

### From Source
1. Clone this repository
2. Run `npm install`
3. Run `npm run compile`
4. Press `F5` to open a new VS Code window with the extension loaded

## Usage

1. Open the integrated terminal in VS Code (`Ctrl+` ` or `Cmd+` `)
2. Run any command
3. When the command completes, you'll hear:
   - **Success sound** - Command completed successfully without warnings
   - **Failure sound** - Command failed (non-zero exit code)
   - **Warning sound** - Command succeeded but produced warnings

### Warning Detection

The extension detects warnings by scanning terminal output for these keywords:
- `warning`
- `warn`
- `WARN`
- `WARNING`
- `deprecated`
- `DEPRECATED`

## Configuration

Access settings via `File > Preferences > Settings` and search for "Terminal Sound Alerts"

### Available Settings

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `commandAudioNotifier.enableSound` | boolean | `true` | Enable or disable sound notifications |
| `commandAudioNotifier.successSound` | string | `sounds/success.mp3` | Path to success sound file |
| `commandAudioNotifier.failureSound` | string | `sounds/fail.mp3` | Path to failure sound file |
| `commandAudioNotifier.warningSound` | string | `sounds/warning.mp3` | Path to warning sound file |
| `commandAudioNotifier.volume` | number | `1.0` | Volume level (0.0 to 1.0) |

### Example Configuration

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

To use your own sound files:

1. Place your audio files (MP3, WAV, etc.) in a folder
2. Update the settings with the path to your files (relative to extension root or absolute path)
3. Reload VS Code

## Supported Platforms

- ✅ **Windows** - Uses PowerShell with Windows Media Player
- ✅ **macOS** - Uses `afplay` command
- ✅ **Linux** - Uses `paplay`, `mpg123`, or `aplay`

## Logging

View extension logs in the Output panel:

1. Open Output panel (`Ctrl+Shift+U` or `Cmd+Shift+U`)
2. Select "Terminal Sound Alerts" from the dropdown

Logs include:
- Command execution events
- Detected results (success/failure/warning)
- Sound playback status
- Error messages

## Examples

### Success Example
```bash
$ npm install
# Installs successfully → Success sound plays
```

### Failure Example
```bash
$ npm run build
# Build fails → Failure sound plays
```

### Warning Example
```bash
$ npm install
# Installs with deprecation warnings → Warning sound plays
```

## Troubleshooting

### No sound playing?

1. Check that `commandAudioNotifier.enableSound` is set to `true`
2. Verify sound files exist at the configured paths
3. Check the Output panel for error messages
4. Ensure your system audio is not muted

### Sound files not found?

- Use absolute paths in settings if relative paths don't work
- Verify file extensions match your audio files
- Check file permissions

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Watch mode for development
npm run watch

# Package extension
vsce package
```

### Project Structure

```
command-audio-notifier/
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript configuration
├── src/
│   ├── extension.ts      # Main entry point
│   ├── soundPlayer.ts    # Audio playback logic
│   └── terminalWatcher.ts # Terminal monitoring
├── sounds/               # Default sound files
│   ├── success.mp3
│   ├── fail.mp3
│   └── warning.mp3
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

See [LICENSE.md](LICENSE.md) for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## Credits

Created with ❤️ for developers who want audio feedback from their terminal commands.
