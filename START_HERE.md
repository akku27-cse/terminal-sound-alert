# 🎵 Terminal Sound Alerts - START HERE

## 🎯 What is This?

A VS Code extension that plays different sounds when terminal commands complete:
- ✅ **Success sound** - Command completed successfully
- ❌ **Failure sound** - Command failed
- ⚠️ **Warning sound** - Command succeeded but has warnings

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Add Sound Files
Replace these placeholder files with real MP3 audio files:
- `sounds/success.mp3`
- `sounds/fail.mp3`
- `sounds/warning.mp3`

**Get free sounds:** [Freesound.org](https://freesound.org/) | [Mixkit](https://mixkit.co/free-sound-effects/)

### 3️⃣ Run Extension
```bash
npm run compile
```
Then press **F5** in VS Code

## 🧪 Test It

In the new VS Code window that opens:

```bash
# Test success
echo "Hello"

# Test failure
exit 1

# Test warning
echo "warning: test"
```

## 📚 Documentation Guide

| File | When to Read |
|------|--------------|
| **[GETTING_STARTED.md](GETTING_STARTED.md)** | First time setup |
| **[README.md](README.md)** | Features and usage |
| **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** | Code overview |
| **[SETUP.md](SETUP.md)** | Advanced setup |
| **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** | Complete overview |
| **[CONTRIBUTING.md](CONTRIBUTING.md)** | Want to contribute? |

## 🔧 Common Commands

```bash
npm run compile    # Compile TypeScript
npm run watch      # Auto-compile on save
npm run lint       # Check code quality
vsce package       # Create .vsix file
```

## 📊 View Logs

1. Open Output panel: `Ctrl+Shift+U`
2. Select "Terminal Sound Alerts" from dropdown
3. See all events and errors

## ⚙️ Configure

`File → Preferences → Settings` → Search "Terminal Sound Alerts"

Or add to `settings.json`:
```json
{
  "commandAudioNotifier.enableSound": true,
  "commandAudioNotifier.volume": 0.8
}
```

## 🏗️ Project Structure

```
command-audio-notifier/
├── src/
│   ├── extension.ts         # Main entry point
│   ├── soundPlayer.ts       # Plays sounds
│   └── terminalWatcher.ts   # Monitors terminals
├── sounds/                  # Your audio files
└── out/                     # Compiled code
```

## 🎓 How It Works

```
Terminal Command Runs
    ↓
Command Completes
    ↓
Extension Detects Exit Code
    ↓
├─ Exit code ≠ 0 → Play FAILURE sound
└─ Exit code = 0
       ↓
   Check output for warnings
       ↓
   ├─ Has warnings → Play WARNING sound
   └─ No warnings → Play SUCCESS sound
```

## ❓ Troubleshooting

### No sound?
- ✅ Check sound files exist
- ✅ Check `enableSound` is `true`
- ✅ Check system audio not muted
- ✅ View Output panel for errors

### Extension not working?
```bash
rm -rf out/
npm install
npm run compile
```
Then press F5 again

## 🚀 Next Steps

1. ✅ Complete Quick Start above
2. 📖 Read [GETTING_STARTED.md](GETTING_STARTED.md) for details
3. 🎨 Customize sounds and settings
4. 📦 Package: `vsce package`
5. 🌐 Publish to VS Code Marketplace

## 💡 Pro Tips

- Use `npm run watch` during development
- Keep sounds 1-3 seconds long
- Test with real commands: `npm install`, `git push`, etc.
- Check Output panel when debugging

## 🎉 That's It!

You now have a working VS Code extension that provides audio feedback for terminal commands.

**Need help?** Check the documentation files or open an issue.

**Ready to customize?** Edit files in `src/` and press `Ctrl+Shift+F5` to reload.

---

**Built with ❤️ for developers**
