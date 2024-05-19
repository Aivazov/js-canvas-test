import { returnBtn } from "./helpers/returnBtn.js";
const form = document.createElement("form");
form.classList.add("arbitrary-form__style");

// const inpX = document.createElement('input');
// inpX.classList.add('arbitrary-input__style');
// inpX.placeholder = 'x';

// const inpY = document.createElement('input');
// inpY.classList.add('arbitrary-input__style');
// inpY.placeholder = 'y';

const inpWidth = document.createElement("input");
inpWidth.classList.add("arbitrary-input__style");
inpWidth.placeholder = "width";

const inpHeight = document.createElement("input");
inpHeight.classList.add("arbitrary-input__style");
inpHeight.placeholder = "height";

const inpRadius = document.createElement("input");
inpRadius.classList.add("arbitrary-input__style");
inpRadius.placeholder = "radius";

const submitBtn = document.createElement("button");
submitBtn.textContent = "Shape";
submitBtn.classList.add("arbitrary-submit__btn");

const canvas = document.createElement("canvas");

document.body.append(form);
form.append(inpWidth, inpHeight, inpRadius, submitBtn);

document.body.append(canvas);

const context = canvas.getContext("2d");
document.body.prepend(returnBtn);

canvas.width = 800;
canvas.height = 750;

drawStar(100, 100, 8, 30, 15);
// shape();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    // x: Number(inpX.value),
    // y: Number(inpY.value),
    width: Number(inpWidth.value),
    height: Number(inpHeight.value),
    radius: Number(inpRadius.value),
  };
  const { x, y, width, height, radius } = obj;

  if (!width || !height || !radius) {
    console.log("Please fill all the fields");
    return;
  }

  clearCanvas();
  drawsRoundedRect(x, y, width, height, radius);
  // drawsRoundedRect(50, 50, 400, 500, 45);
});

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function shape() {
  context.beginPath();
  context.moveTo(10, canvas.height / 2);
  context.lineTo(310, canvas.height / 2);
  context.lineTo(160, canvas.height / 4);
  // context.lineTo(10, canvas.height / 2); //we have already declared method closePath() to get back to our first line of the shape
  context.closePath();
  context.fill();
  context.stroke();
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
  var rot = (Math.PI / 2) * 3;
  var x = cx;
  var y = cy;
  var step = Math.PI / spikes;

  context.beginPath();
  context.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    context.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    context.lineTo(x, y);
    rot += step;
  }
  context.lineTo(cx, cy - outerRadius);
  context.closePath();
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.stroke();
  context.fillStyle = "skyblue";
  context.fill();
}

function drawsRoundedRect(x = 100 / 2, y = 100, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.arc(x + width - radius, y + radius, radius, -Math.PI / 2, 0);
  context.lineTo(x + width, y + height - radius);
  context.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2);

  context.lineTo(x + radius, y + height);
  context.arc(x + radius, y + height - radius, radius, Math.PI / 2, -Math.PI);

  context.lineTo(x, y + radius);
  context.arc(x + radius, y + radius, radius, -Math.PI, -Math.PI / 2);

  context.stroke();
}
