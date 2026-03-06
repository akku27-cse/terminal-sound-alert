# Publishing to VS Code Marketplace

## Prerequisites

### 1. Install vsce (VS Code Extension Manager)
```bash
npm install -g @vscode/vsce
```

### 2. Create a Personal Access Token (PAT)

1. Go to https://dev.azure.com/
2. Sign in with your Microsoft account
3. Click on your profile icon → "Personal access tokens"
4. Click "New Token"
5. Configure:
   - **Name**: VS Code Marketplace
   - **Organization**: All accessible organizations
   - **Expiration**: Custom (1 year recommended)
   - **Scopes**: Custom defined → **Marketplace** → Check "Acquire" and "Manage"
6. Click "Create" and **SAVE THE TOKEN** (you won't see it again!)

### 3. Create a Publisher

```bash
vsce create-publisher santujana
```

Or create via web: https://marketplace.visualstudio.com/manage/createpublisher

Login with your PAT:
```bash
vsce login santujana
```

## Pre-Publishing Checklist

- [x] Icon added (icon.png - 128x128)
- [x] README.md with features, installation, usage
- [x] CHANGELOG.md with version history
- [x] LICENSE.md (MIT License)
- [x] package.json with all required fields:
  - [x] name
  - [x] displayName
  - [x] description
  - [x] version
  - [x] publisher
  - [x] icon
  - [x] repository
  - [x] license
  - [x] keywords
  - [x] categories
- [x] .vscodeignore configured
- [x] Sound files included

## Build and Test

### 1. Compile TypeScript
```bash
npm run compile
```

### 2. Test the extension
Press `F5` in VS Code to launch Extension Development Host

### 3. Package the extension
```bash
vsce package
```

This creates a `.vsix` file (e.g., `terminal-sound-alert-1.0.0.vsix`)

### 4. Test the packaged extension
```bash
code --install-extension terminal-sound-alert-1.0.0.vsix
```

## Publish to Marketplace

### Option 1: Publish via Command Line
```bash
vsce publish
```

### Option 2: Publish Specific Version
```bash
vsce publish 1.0.0
```

### Option 3: Publish with Version Bump
```bash
vsce publish patch  # 1.0.0 → 1.0.1
vsce publish minor  # 1.0.0 → 1.1.0
vsce publish major  # 1.0.0 → 2.0.0
```

### Option 4: Manual Upload
1. Package: `vsce package`
2. Go to https://marketplace.visualstudio.com/manage/publishers/santujana
3. Click "New extension" → "Upload"
4. Upload the `.vsix` file

## Post-Publishing

### Verify Your Extension
1. Visit: https://marketplace.visualstudio.com/items?itemName=santujana.terminal-sound-alert
2. Check that all information displays correctly
3. Test installation: `code --install-extension santujana.terminal-sound-alert`

### Update Extension
When you make changes:
1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Compile: `npm run compile`
4. Publish: `vsce publish`

## Common Issues

### Issue: "Publisher not found"
**Solution**: Create publisher first with `vsce create-publisher santujana`

### Issue: "Icon not found"
**Solution**: Ensure `icon.png` exists in root directory and is referenced in package.json

### Issue: "Missing repository"
**Solution**: Add repository field in package.json

### Issue: "README too short"
**Solution**: Ensure README.md has substantial content (already done ✓)

## Useful Commands

```bash
# Show extension info
vsce show santujana.terminal-sound-alert

# List all files that will be packaged
vsce ls

# Unpublish (use with caution!)
vsce unpublish santujana.terminal-sound-alert

# Update publisher info
vsce update-publisher santujana
```

## Marketplace Statistics

After publishing, you can view:
- Install count
- Ratings and reviews
- Download statistics

Visit: https://marketplace.visualstudio.com/manage/publishers/santujana

## Next Steps

1. Share your extension on social media
2. Add badges to README.md:
   ```markdown
   ![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/santujana.terminal-sound-alert)
   ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/santujana.terminal-sound-alert)
   ![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/santujana.terminal-sound-alert)
   ```
3. Respond to user feedback and issues
4. Plan future features

## Resources

- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
- [Marketplace](https://marketplace.visualstudio.com/)
