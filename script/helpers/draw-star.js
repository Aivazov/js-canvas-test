export function drawStar(cx, cy, spikes, outerRadius, innerRadius, context) {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

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
