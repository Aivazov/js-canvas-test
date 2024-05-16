import { returnBtn } from './helpers/returnBtn.js';
const canvas = document.createElement('canvas');
document.body.append(canvas);

canvas.width = 2000;
canvas.height = 1300;

const CELL = 2;

const context = canvas.getContext('2d');
document.body.prepend(returnBtn);
fetchImage();

async function fetchImage() {
  const imageSource = await loadImage('../sq7.jpg');
  // context.drawImage(imageSource, 0, 0); //just image without fills
  // context.drawImage(imageSource, 0, 0, canvas.width, canvas.height); //image object-fit
  // context.drawImage(imageSource, 350, 600, 2000, 1100, 50, 50, 720, 400); //cropping image

  // imageSource.width = canvas.width;
  // imageSource.height = canvas.height;

  for (let axisY = 0; axisY < imageSource.height; axisY += 1) {
    for (let axisX = 0; axisX < imageSource.width; axisX += 1) {
      if ((axisX + axisY) % 2 === 0) {
        continue;
      }

      context.drawImage(
        imageSource,
        axisX * CELL,
        axisY * CELL,
        CELL,
        CELL,
        axisX * CELL,
        axisY * CELL,
        CELL,
        CELL
      );
    }
  }
}

function loadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => resolve(image);
  });
}
// canvas.append(image);
