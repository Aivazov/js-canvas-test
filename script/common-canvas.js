import { returnBtn } from './helpers/returnBtn.js';

const canvas = document.createElement('canvas');
document.body.append(canvas);
const context = canvas.getContext('2d');

document.body.prepend(returnBtn);

canvas.width = 800;
canvas.height = 1000;

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.stroke();

// context.beginPath();
// context.moveTo(250, 250);
// context.lineTo(500, 0);
// context.stroke();

// context.beginPath();
// context.moveTo(500, 0);
// context.lineTo(0, 0);
// context.stroke();

// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(500, 0);
// context.lineTo(0, 0);
// // context.lineJoin = 'miter' default value
// context.lineJoin = 'round';
// context.lineCap = 'round';
// context.lineWidth = 10;
// // context.lineJoin = 'bevel';
// context.stroke();

// context.beginPath();
// context.moveTo(400, 400);
// context.lineTo(200, 400);

// context.lineWidth = 15;
// context.strokeStyle = 'red';
// context.lineCap = 'round';
// context.stroke();

// context.beginPath();
// context.moveTo(100, 0);
// context.lineTo(0, 200);
// context.lineWidth = 1;
// context.stroke();

// context.beginPath();
// context.moveTo(200, 0);
// context.lineTo(0, 400);
// context.stroke();

// context.beginPath();
// context.moveTo(300, 0);
// context.lineTo(0, 600);
// context.stroke();

firstDiagonalLine(100, 200);
secondDiagonalLine(700, 100);
firstHorizontalLine(30);
secondHorizontalLine(50);
thirdHorizontalLine(0);
verticalRedLine(650);

function firstDiagonalLine(x, y) {
  for (let i = 0; i < 12; i += 1) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(0, y);
    context.lineWidth = 1;
    context.strokeStyle = '#555';
    context.stroke();
    x += 100;
    y += 200;
  }
}

function secondDiagonalLine(x, y) {
  for (let i = 0; i < 13; i += 1) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(750, y);
    context.strokeStyle = '#e5e0e0';
    context.stroke();
    x -= 100;
    y += 200;
  }
}

function firstHorizontalLine(y = 100) {
  for (let i = 0; i < 20; i += 1) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(800, y);
    context.strokeStyle = '#555';
    context.stroke();
    y += 90;
  }
}

function secondHorizontalLine(y = 130) {
  for (let i = 0; i < 20; i += 1) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(800, y);
    context.strokeStyle = '#555';
    context.stroke();
    y += 90;
  }
}

function thirdHorizontalLine(y = 100) {
  for (let i = 0; i < 20; i += 1) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(800, y);
    context.strokeStyle = '#555';
    context.stroke();
    y += 90;
  }
}

function verticalRedLine(x) {
  context.beginPath();
  context.moveTo(x, 0);
  context.lineTo(x, 1000);
  context.strokeStyle = 'red';
  context.lineWidth = 2;
  context.stroke();
}
