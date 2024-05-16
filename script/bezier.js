import { returnBtn } from './helpers/returnBtn.js';
// const canvas = document.querySelector('canvas');
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.prepend(returnBtn, canvas);

const squareColor = '#f7afaf';
const lineColor = '#ff8383';
const circleLineColor = '#000';
const circleFillColor = '#fff';
const bezierColor = '#ff1d1d';

canvas.width = 600;
canvas.height = 750;

verticalLineForSquare();
horizontalLineForSquare();

let startBezierX = 0;
let startBezierY = canvas.height;
let cpx = 400;
let cpy = 500;
let bezierEndX = canvas.width;
let bezierEndY = 0;

context.beginPath();
context.moveTo(startBezierX, startBezierY);
// context.quadraticCurveTo(cpx, cpy, bezierEndX, bezierEndY);
context.bezierCurveTo(cpx, cpy, cpx / 2, cpy / 2, bezierEndX, bezierEndY);
context.lineWidth = 3;
context.strokeStyle = bezierColor;
// context.fillStyle = 'red';
// context.fill();
context.stroke();
straightLines();

function straightLines() {
  const lineOneX = 0;
  const lineOneY = canvas.height;
  const lineTwoX = canvas.width;
  const lineTwoY = canvas.height / 2;
  const lineThreeX = 0;
  const lineThreeY = canvas.height / 2;
  const lineFourX = canvas.width;
  const lineFourY = 0;

  context.beginPath();
  context.moveTo(lineOneX, lineOneY);
  context.lineTo(lineTwoX, lineTwoY);
  context.lineTo(lineThreeX, lineThreeY);
  context.lineTo(lineFourX, lineFourY);
  context.strokeStyle = lineColor;
  context.lineWidth = 3;
  context.stroke();
  renderCircle(lineOneX + 8, lineOneY - 8);
  renderCircle(lineTwoX - 8, lineTwoY);
  renderCircle(lineThreeX + 8, lineThreeY);
  renderCircle(lineFourX - 8, lineFourY + 8);
}

function horizontalLineForSquare() {
  const horizontalX = 0;
  let horizontalY = 15;
  const horizontalEndX = canvas.width;
  let horizontalEndY = 15;

  for (let i = 0; i < canvas.height / 15; i += 1) {
    context.beginPath();
    context.moveTo(horizontalX, horizontalY);
    context.lineTo(horizontalEndX, horizontalEndY);
    context.strokeStyle = squareColor;
    context.stroke();
    horizontalY += 15;
    horizontalEndY += 15;
  }
}

function verticalLineForSquare() {
  let verticalX = 15;
  const verticalY = 0;
  let verticalEndX = 15;
  const verticalEndY = canvas.height;

  for (let i = 0; i < canvas.width / 15; i += 1) {
    context.beginPath();
    context.moveTo(verticalX, verticalY);
    context.lineTo(verticalEndX, verticalEndY);
    context.strokeStyle = squareColor;
    context.stroke();
    verticalX += 15;
    verticalEndX += 15;
  }
}

function renderCircle(
  arcX,
  arcY,
  radius = 7,
  startAngle = -Math.PI / 1,
  endAngle = Math.PI / 1,
  counterClockwise = false
) {
  context.beginPath();
  context.arc(arcX, arcY, radius, startAngle, endAngle, counterClockwise);
  context.fillStyle = circleFillColor;
  context.strokeStyle = circleLineColor;
  context.fill();
  context.stroke();
}
