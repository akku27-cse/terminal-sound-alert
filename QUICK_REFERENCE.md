# Terminal Sound Alerts - Quick Reference

## 🚀 Quick Start

```bash
npm install
npm run compile
# Press F5 to run
```

## 📁 Project Structure

```
command-audio-notifier/
├── src/
│   ├── extension.ts         # Main entry point, activates extension
│   ├── soundPlayer.ts       # Handles audio playback, volume control
│   └── terminalWatcher.ts   # Monitors terminals, detects exit codes
├── sounds/                  # Audio files (add your own MP3s)
├── .vscode/                 # VS Code debug/build configuration
└── out/                     # Compiled JavaScript (auto-generated)
```

## 🎯 Core Logic

### Result Detection Flow

```
Terminal Command Completes
    ↓
Check Exit Code
    ↓
├─ exitCode !== 0 → FAILURE sound
└─ exitCode === 0
       ↓
   Scan Output for Warning Keywords
       ↓
   ├─ Has warnings → WARNING sound
   └─ No warnings → SUCCESS sound
```

### Warning Keywords

`warning`, `warn`, `WARN`, `WARNING`, `deprecated`, `DEPRECATED`

## 🔧 Key Components

### extension.ts
- Creates output channel for logging
- Initializes SoundPlayer and TerminalWatcher
- Entry point: `activate()` and `deactivate()`

### soundPlayer.ts
- Cross-platform audio playback
- Windows: PowerShell + Windows Media Player
- macOS: afplay
- Linux: paplay → mpg123 → aplay (fallback chain)
- Volume control support

### terminalWatcher.ts
- Listens to `onDidCloseTerminal` and `onDidChangeTerminalState`
- Captures exit codes via `terminal.exitStatus`
- Scans output for warning keywords
- Triggers appropriate sound via SoundPlayer

## ⚙️ Configuration

```json
{
  "commandAudioNotifier.enableSound": true,
  "commandAudioNotifier.volume": 1.0,
  "commandAudioNotifier.successSound": "sounds/success.mp3",
  "commandAudioNotifier.failureSound": "sounds/fail.mp3",
  "commandAudioNotifier.warningSound": "sounds/warning.mp3"
}
```

## 🧪 Testing Commands

```bash
# Success
echo "Hello World"

# Failure
exit 1

# Warning
echo "warning: test warning message"
npm install  # (if packages have deprecation warnings)
```

## 📝 NPM Scripts

```bash
npm run compile    # Compile TypeScript
npm run watch      # Watch mode for development
npm run lint       # Run ESLint
vsce package       # Create .vsix package
```

## 🐛 Debugging

1. Set breakpoints in `.ts` files
2. Press `F5` to start Extension Development Host
3. Check "Terminal Sound Alerts" in Output panel
4. Use Debug Console to inspect variables

## 📊 Logging

All events logged to Output Channel: "Terminal Sound Alerts"

Logs include:
- Extension activation
- Terminal events (close, exit)
- Exit codes detected
- Sound playback attempts
- Errors

## 🔍 Common Issues

### Sound not playing?
- Check Output panel for errors
- Verify sound files exist
- Ensure `enableSound` is true
- Test system audio

### Extension not activating?
- Check Extension Host output
- Verify `package.json` activation events
- Run `npm install` and `npm run compile`

### TypeScript errors?
- Delete `out/` folder
- Run `npm run compile`
- Check `tsconfig.json`

## 🎨 Customization Ideas

- Add custom warning keywords configuration
- Support for different sound formats
- Per-command sound customization
- Sound themes
- Notification badges
- Configurable output scanning depth

## 📦 Publishing Checklist

- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Test on all platforms
- [ ] Add actual sound files
- [ ] Run `vsce package`
- [ ] Test `.vsix` installation
- [ ] Publish: `vsce publish`

## 🔗 Useful Links

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Terminal API](https://code.visualstudio.com/api/references/vscode-api#Terminal)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

## 💡 Tips

- Use `npm run watch` during development
- Check Output panel frequently
- Test with real-world commands
- Consider edge cases (long-running commands, multiple terminals)
- Keep sound files short (1-3 seconds)

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

MIT License - See [LICENSE.md](LICENSE.md)
