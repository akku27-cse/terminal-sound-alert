# ✅ TerminalTone - Installation Checklist

Use this checklist to ensure everything is set up correctly.

## 📋 Pre-Installation

- [ ] Node.js installed (v18.x or higher)
  ```bash
  node --version
  ```

- [ ] npm installed (comes with Node.js)
  ```bash
  npm --version
  ```

- [ ] VS Code installed (v1.75.0 or higher)
  ```bash
  code --version
  ```

## 📦 Installation Steps

### Step 1: Dependencies
- [ ] Navigate to project directory
  ```bash
  cd d:\terminal-sound-alert
  ```

- [ ] Install npm packages
  ```bash
  npm install
  ```

- [ ] Verify node_modules folder created
  ```bash
  dir node_modules
  ```

### Step 2: Sound Files
- [ ] Download 3 sound files (MP3 format recommended)
  - Success sound (pleasant, positive)
  - Failure sound (alert, negative)
  - Warning sound (cautionary, attention)

- [ ] Replace placeholder files:
  - [ ] `sounds/success.mp3`
  - [ ] `sounds/fail.mp3`
  - [ ] `sounds/warning.mp3`

- [ ] Verify files are actual audio (not text placeholders)
  - Right-click → Properties → Check file size > 1KB

### Step 3: Compilation
- [ ] Compile TypeScript
  ```bash
  npm run compile
  ```

- [ ] Verify `out` folder created
  ```bash
  dir out
  ```

- [ ] Check for compiled files:
  - [ ] `out/extension.js`
  - [ ] `out/soundPlayer.js`
  - [ ] `out/terminalWatcher.js`

## 🧪 Testing

### Step 4: Run Extension
- [ ] Open project in VS Code
  ```bash
  code .
  ```

- [ ] Press `F5` to launch Extension Development Host
- [ ] New VS Code window opens with extension loaded

### Step 5: Verify Activation
- [ ] Open Output panel (`Ctrl+Shift+U`)
- [ ] Select "TerminalTone" from dropdown
- [ ] See activation message:
  ```
  TerminalTone extension activated
  Terminal watcher activated
  All components initialized successfully
  ```

### Step 6: Test Success Sound
- [ ] Open integrated terminal in Extension Development Host
- [ ] Run: `echo "Test success"`
- [ ] Hear success sound
- [ ] See log: "Result: SUCCESS"

### Step 7: Test Failure Sound
- [ ] In terminal, run: `exit 1`
- [ ] Hear failure sound
- [ ] See log: "Result: FAILURE"

### Step 8: Test Warning Sound
- [ ] In terminal, run: `echo "warning: test"`
- [ ] Hear warning sound
- [ ] See log: "Result: SUCCESS with WARNINGS"

## ⚙️ Configuration

### Step 9: Verify Settings
- [ ] Open Settings (`Ctrl+,`)
- [ ] Search: "TerminalTone"
- [ ] See all 5 settings:
  - [ ] Enable Sound
  - [ ] Volume
  - [ ] Success Sound
  - [ ] Failure Sound
  - [ ] Warning Sound

### Step 10: Test Configuration
- [ ] Change volume to 0.5
- [ ] Run test command
- [ ] Verify sound is quieter

- [ ] Disable sounds (set enableSound to false)
- [ ] Run test command
- [ ] Verify no sound plays
- [ ] See log: "Sound playback disabled in settings"

- [ ] Re-enable sounds

## 🔧 Development Setup

### Step 11: Watch Mode
- [ ] Open terminal in project
- [ ] Run: `npm run watch`
- [ ] See: "Watching for file changes"
- [ ] Edit `src/extension.ts` (add a comment)
- [ ] Save file
- [ ] See automatic recompilation

### Step 12: Debugging
- [ ] Set breakpoint in `src/extension.ts` (line 8)
- [ ] Press `F5`
- [ ] Verify debugger stops at breakpoint
- [ ] Press `F5` to continue
- [ ] Remove breakpoint

### Step 13: Linting
- [ ] Run: `npm run lint`
- [ ] Verify no errors
- [ ] If errors, fix them

## 📦 Packaging

### Step 14: Install VSCE
- [ ] Install vsce globally
  ```bash
  npm install -g @vscode/vsce
  ```

- [ ] Verify installation
  ```bash
  vsce --version
  ```

### Step 15: Update Metadata
- [ ] Open `package.json`
- [ ] Update `publisher` field with your name
- [ ] Update `version` if needed
- [ ] Save file

### Step 16: Create Package
- [ ] Run: `vsce package`
- [ ] Verify `.vsix` file created
  ```bash
  dir *.vsix
  ```

### Step 17: Test VSIX Installation
- [ ] Close Extension Development Host
- [ ] In main VS Code: Extensions → `...` → Install from VSIX
- [ ] Select the `.vsix` file
- [ ] Reload VS Code
- [ ] Open terminal and test commands
- [ ] Verify sounds play

## 🌐 Platform Testing

### Windows
- [ ] Test on Windows
- [ ] Verify PowerShell sound playback works
- [ ] Check Output panel for errors

### macOS (if available)
- [ ] Test on macOS
- [ ] Verify afplay works
- [ ] Check Output panel for errors

### Linux (if available)
- [ ] Install audio tools:
  ```bash
  sudo apt-get install pulseaudio-utils mpg123
  ```
- [ ] Test on Linux
- [ ] Verify paplay/mpg123 works
- [ ] Check Output panel for errors

## 📊 Final Verification

### Step 18: Real-World Testing
- [ ] Test with `npm install`
- [ ] Test with `git status`
- [ ] Test with build commands
- [ ] Test with failing commands
- [ ] Test with commands that produce warnings

### Step 19: Documentation Review
- [ ] Read [START_HERE.md](START_HERE.md)
- [ ] Read [README.md](README.md)
- [ ] Skim [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- [ ] Bookmark [SETUP.md](SETUP.md) for reference

### Step 20: Cleanup
- [ ] Remove test terminals
- [ ] Clear Output panel
- [ ] Close Extension Development Host
- [ ] Commit changes to git (if using version control)

## 🎉 Success Criteria

You're done when:
- ✅ Extension activates without errors
- ✅ All three sounds play correctly
- ✅ Configuration settings work
- ✅ Logs appear in Output panel
- ✅ VSIX package created successfully
- ✅ Extension works when installed from VSIX

## ❌ Troubleshooting

### Issue: npm install fails
**Solution:**
- Check internet connection
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and retry

### Issue: Compilation errors
**Solution:**
- Check TypeScript version: `npx tsc --version`
- Delete `out` folder
- Run `npm run compile` again

### Issue: Extension doesn't activate
**Solution:**
- Check Extension Host output panel
- Verify `package.json` syntax
- Restart VS Code

### Issue: No sound plays
**Solution:**
- Verify sound files are real audio (not text)
- Check file paths in settings
- Test system audio with other apps
- Check Output panel for errors

### Issue: F5 doesn't work
**Solution:**
- Verify `.vscode/launch.json` exists
- Check for TypeScript compilation errors
- Try `Ctrl+Shift+P` → "Debug: Start Debugging"

## 📞 Getting Help

If stuck:
1. Check Output panel: "TerminalTone"
2. Review error messages
3. Consult documentation files
4. Open GitHub issue with:
   - VS Code version
   - Node.js version
   - Error messages
   - Steps to reproduce

## 🚀 Next Steps After Completion

- [ ] Customize sound files to your preference
- [ ] Adjust volume and settings
- [ ] Share with team members
- [ ] Consider publishing to VS Code Marketplace
- [ ] Star the repository (if applicable)
- [ ] Provide feedback

---

**Congratulations! 🎊**

If all checkboxes are checked, your TerminalTone extension is fully installed and working!
