import { returnBtn } from './helpers/returnBtn.js';
const canvas = document.createElement('canvas');
document.body.append(canvas);

const context = canvas.getContext('2d');

document.body.prepend(returnBtn);
canvas.width = 800;
canvas.height = 750;
