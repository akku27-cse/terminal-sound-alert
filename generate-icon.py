from PIL import Image, ImageDraw, ImageFont
import os

# Create image
img = Image.new('RGBA', (128, 128), (45, 45, 48, 255))
draw = ImageDraw.Draw(img)

# Terminal window
draw.rounded_rectangle([(16, 24), (112, 88)], radius=4, fill=(30, 30, 30, 255), outline=(0, 122, 204, 255), width=2)

# Terminal prompt line
draw.rectangle([(36, 38), (68, 41)], fill=(78, 201, 176, 255))

# Speaker icon (simplified)
speaker_points = [(72, 44), (72, 60), (80, 60), (88, 68), (88, 36), (80, 44)]
draw.polygon(speaker_points, fill=(255, 215, 0, 255))

# Sound waves (arcs)
draw.arc([(88, 44), (96, 60)], 270, 90, fill=(255, 215, 0, 255), width=3)
draw.arc([(92, 40), (104, 64)], 270, 90, fill=(255, 215, 0, 180), width=2)
draw.arc([(96, 36), (112, 68)], 270, 90, fill=(255, 215, 0, 128), width=2)

# Status indicators (circles)
draw.ellipse([(22, 94), (34, 106)], fill=(78, 201, 176, 255))  # Success - green
draw.ellipse([(42, 94), (54, 106)], fill=(244, 135, 113, 255))  # Failure - red
draw.ellipse([(62, 94), (74, 106)], fill=(255, 215, 0, 255))    # Warning - yellow

# Terminal prompt symbol
try:
    font = ImageFont.truetype("consola.ttf", 16)
except:
    try:
        font = ImageFont.truetype("Courier New.ttf", 16)
    except:
        font = ImageFont.load_default()

draw.text((24, 38), "$", fill=(78, 201, 176, 255), font=font)

# Save
img.save('icon.png')
print("Icon created successfully: icon.png")
