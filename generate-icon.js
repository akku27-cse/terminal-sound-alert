const fs = require('fs');
const { createCanvas } = require('canvas');

const width = 128;
const height = 128;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#2D2D30';
ctx.roundRect(0, 0, 128, 128, 16);
ctx.fill();

// Terminal window
ctx.strokeStyle = '#007ACC';
ctx.lineWidth = 2;
ctx.fillStyle = '#1E1E1E';
ctx.roundRect(16, 24, 96, 64, 4);
ctx.fill();
ctx.stroke();

// Terminal prompt
ctx.fillStyle = '#4EC9B0';
ctx.font = 'bold 16px monospace';
ctx.fillText('$', 24, 48);
ctx.fillRect(36, 38, 32, 3);

// Speaker icon
ctx.fillStyle = '#FFD700';
ctx.beginPath();
ctx.moveTo(72, 44);
ctx.lineTo(72, 60);
ctx.lineTo(80, 60);
ctx.lineTo(88, 68);
ctx.lineTo(88, 36);
ctx.lineTo(80, 44);
ctx.closePath();
ctx.fill();

// Sound waves
ctx.strokeStyle = '#FFD700';
ctx.lineWidth = 3;
ctx.lineCap = 'round';
ctx.beginPath();
ctx.moveTo(88, 44);
ctx.quadraticCurveTo(96, 44, 96, 52);
ctx.quadraticCurveTo(96, 60, 88, 60);
ctx.stroke();

ctx.lineWidth = 2.5;
ctx.globalAlpha = 0.7;
ctx.beginPath();
ctx.moveTo(92, 40);
ctx.quadraticCurveTo(104, 40, 104, 52);
ctx.quadraticCurveTo(104, 64, 92, 64);
ctx.stroke();

ctx.lineWidth = 2;
ctx.globalAlpha = 0.5;
ctx.beginPath();
ctx.moveTo(96, 36);
ctx.quadraticCurveTo(112, 36, 112, 52);
ctx.quadraticCurveTo(112, 68, 96, 68);
ctx.stroke();

// Status indicators
ctx.globalAlpha = 1;
ctx.fillStyle = '#4EC9B0';
ctx.beginPath();
ctx.arc(28, 100, 6, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#F48771';
ctx.beginPath();
ctx.arc(48, 100, 6, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#FFD700';
ctx.beginPath();
ctx.arc(68, 100, 6, 0, Math.PI * 2);
ctx.fill();

// Save
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('icon.png', buffer);
console.log('Icon created: icon.png');
