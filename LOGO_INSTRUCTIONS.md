# Logo Conversion Instructions

The extension needs a PNG logo for VS Code Marketplace.

## Option 1: Use Online Converter
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icon.svg`
3. Set dimensions to 128x128
4. Download as `icon.png`

## Option 2: Use ImageMagick (if installed)
```bash
magick convert -background none -resize 128x128 icon.svg icon.png
```

## Option 3: Use Inkscape (if installed)
```bash
inkscape icon.svg --export-type=png --export-filename=icon.png -w 128 -h 128
```

## Option 4: Use Node.js (sharp library)
```bash
npm install sharp
node -e "require('sharp')('icon.svg').resize(128,128).png().toFile('icon.png')"
```

After creating icon.png, the package.json has been updated to reference it.
