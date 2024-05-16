import { returnBtn } from './helpers/returnBtn.js';
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
document.body.prepend(returnBtn, canvas);

canvas.width = 800;
canvas.height = 1000;

//SQUARE RECT***********************************

const colors = ['red', 'green', 'blue'];

let rectX = 100;
let rectY = 100;
const rectWidth = 300;
const rectHeight = 200;

for (let i = 0; i < colors.length; i += 1) {
  console.log(colors[i]);
  context.beginPath();
  context.fillStyle = colors[i];
  context.rect(rectX, rectY, rectWidth, rectHeight);
  context.fill();
  context.lineWidth = 10;
  context.stroke();
  rectX += 50;
  rectY += 55;
}

// CIRCLE ARC***********************************
const arcX = 350;
const arcY = 315;
const radius = 50;
const startAngle = -Math.PI / 4;
const endAngle = Math.PI / 4;
const counterClockwise = false; //false is clockwise rotation
// const endAngle = 7;

context.beginPath();
context.arc(
  arcX,
  arcY,
  radius,
  radiansToDegrees(-45),
  radiansToDegrees(260),
  counterClockwise
);
// context.arc(arcX, arcY, radius, startAngle, endAngle, counterClockwise);

context.lineWidth = 3;
context.strokeStyle = 'red';
context.fillStyle = 'yellow';
context.fill();
context.stroke();

function radiansToDegrees(arcDegree) {
  //function that converts radians to degrees
  return (arcDegree / 180) * Math.PI;
}
