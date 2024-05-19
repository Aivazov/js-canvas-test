import { returnBtn } from "./helpers/returnBtn.js";
import { animation } from "./helpers/animation-func.js";
import { drawStar } from "./helpers/draw-star.js";
const canvas = document.createElement("canvas");
document.body.append(canvas);

const context = canvas.getContext("2d");

document.body.prepend(returnBtn);
canvas.width = 800;
canvas.height = 750;

const circleAnimationParams = {
  angle: 0,
  angleSpeed: Math.PI * 0.01,
  // x: 200 / 2 + 50 * Math.cos(this.angle),
  // y: 200 / 2 + 50 * Math.sin(this.angle),
  radius: 15,
  startPoint: 0,
  endPoint: Math.PI * 2,
};

const triangleAnimationsParams = {
  centerX: canvas.width / 2,
  centerY: 100,
  radius: 10,
  angle: 0,
  angleSpeed: Math.PI * 0.01,
};

const starAnimationsParams = {
  centerX: 50,
  centerY: 300,
  radius: 10,
  angle: 0,
  angleSpeed: Math.PI * 0.03,
};

// animation({
//   clear() {
//     context.clearRect(0, 0, 250, 250);
//   },
//   update() {
//     circleAnimationParams.angle += circleAnimationParams.angleSpeed;
//   },
//   render() {
//     context.beginPath();
//     context.arc(
//       200 / 2 + 50 * Math.cos(circleAnimationParams.angle),
//       200 / 2 + 50 * Math.sin(circleAnimationParams.angle),
//       circleAnimationParams.radius,
//       circleAnimationParams.startPoint,
//       circleAnimationParams.endPoint
//     );
//     context.closePath();
//     context.stroke();
//   },
// });

// animation({
//   clear() {
//     context.clearRect(251, 50, canvas.width, canvas.height);
//   },
//   update() {
//     triangleAnimationsParams.angle += triangleAnimationsParams.angleSpeed;
//   },
//   render() {
//     const diffAngle = (Math.PI * 2) / 3;
//     const { centerX, centerY, radius, angle } = triangleAnimationsParams;
//     context.beginPath();
//     context.moveTo(
//       centerX + radius * Math.cos(angle),
//       centerY + radius * Math.sin(angle)
//     );
//     context.lineTo(
//       centerX + radius * Math.cos(angle + diffAngle),
//       centerY + radius * Math.sin(angle + diffAngle)
//     );
//     context.lineTo(
//       centerX + radius * Math.cos(angle + 2 * diffAngle),
//       centerY + radius * Math.sin(angle + 2 * diffAngle)
//     );
//     context.closePath();
//     context.fill();
//   },
// });

// animation({
//   clear() {
//     context.clearRect(40, 250, 100, 400);
//   },
//   update() {
//     starAnimationsParams.angle += starAnimationsParams.angleSpeed;
//   },
//   render() {
//     const diffAngle = (Math.PI * 2) / 3;
//     const { centerX, centerY, radius, angle } = starAnimationsParams;
//     context.beginPath();
//     context.moveTo(
//       centerX + radius * Math.cos(angle),
//       centerY + radius * Math.sin(angle)
//     );
//     context.lineTo(
//       centerX + radius * Math.cos(angle + diffAngle),
//       centerY + radius * Math.sin(angle + diffAngle)
//     );
//     context.lineTo(
//       centerX + radius * Math.cos(angle + 2 * diffAngle),
//       centerY + radius * Math.sin(angle + 2 * diffAngle)
//     );
//     // context.lineTo(
//     //   centerX + radius * Math.cos(angle + diffAngle),
//     //   centerY + radius * Math.sin(angle + diffAngle)
//     // );
//     context.closePath();
//     context.fill();
//     context.stroke();
//   },
// });

// drawStar(100, 100, 8, 30, 15, context);
let angle = 0;
everyTick();
function everyTick(timestamp) {
  requestAnimationFrame(everyTick);
  let prevTimestamp = 0;

  const difference = timestamp - prevTimestamp;
  prevTimestamp = timestamp;
  angle += Math.PI * 0.01;

  context.clearRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  // context.arc(
  //   200 / 2 + 50 * Math.cos(angle),
  //   200 / 2 + 50 * Math.sin(angle),
  //   15,
  //   0,
  //   Math.PI * 2
  // );
  drawStar(100, 100, 8, 30 / 2 + 50 * Math.cos(angle), 15, context);
  // drawStar(100, 100, 8, 30 * Math.sin(angle), 15 * Math.cos(angle), context);

  context.stroke();
}
