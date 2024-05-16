import { returnBtn } from './helpers/returnBtn.js';
const canvas = document.createElement('canvas');
document.body.append(canvas);

const context = canvas.getContext('2d');

document.body.prepend(returnBtn);
canvas.width = 800;
canvas.height = 750;

const textX = 10;
const textY = 100;

// context.beginPath();
// context.font = '30px Mono';
// context.fillStyle = 'red';
// context.textAlign = 'left';
// context.fillText('string to render', textX, textY);

// context.font = '36px Helvetica';
// context.textAlign = 'center';
// context.textBaseline = 'top';
// context.strokeText('stroked text', textX, textY * 3);

context.beginPath();
context.moveTo(10, textY);
context.lineTo(canvas.width, textY);
context.strokeStyle = 'red';
context.lineWidth = 4;
context.stroke();

const options = [
  'top',
  'alphabetic',
  'hanging',
  'middle',
  'ideographic',
  'bottom',
];

let measureCounter = 0;
for (let i = 0; i < options.length; i += 1) {
  const text = options[i];
  const measurement = context.measureText(text);
  const capitalLetter = text.charAt(0).toUpperCase();
  const slicedWord = text.slice(1);
  context.font = '28px Mono';
  // context.textAlign = align;
  context.textBaseline = text;
  context.fillText(capitalLetter + slicedWord, textX + measureCounter, textY);
  measureCounter += measurement.width * 1.4;
  console.log(measureCounter);
  // drawText('Top', textX, textY + 2, el);
}

// function drawText(text, x, y, baseLine) {
//   const measurement = context.measureText(text);
//   console.log(measurement.width);
//   context.font = '28px Mono';
//   // context.textAlign = align;
//   context.textBaseline = baseLine;
//   context.fillText(text, x + measurement.width, y);
// }
