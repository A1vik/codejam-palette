import '../scss/main.scss';

import Paint from './utils/paint.class';

let currentColor = document.getElementById('current-color').value;
const prevColor = document.getElementById('prev-color');

const paint = new Paint('canvas');
paint.activeTool = 'pencil';
paint.selectedColor = currentColor;
paint.init();

if (localStorage.getItem('canvas') !== null || localStorage.getItem('canvas') !== undefined) {
  const dataURL = localStorage.getItem('canvas');
  const img = new Image();
  img.src = dataURL;
  img.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
  };
}

document.querySelectorAll('[data-tool]').forEach(
  item => {
    item.addEventListener('click', () => {
      document.querySelector('.tool--active').classList.toggle('tool--active');
      item.classList.toggle('tool--active');

      let selectedTool = item.getAttribute('data-tool');
      paint.activeTool = selectedTool;
    });
});

document.querySelectorAll('[data-color]').forEach(
  item => item.addEventListener('click', () => {
    const color = item.getAttribute('data-color');
    prevColor.style.backgroundColor = currentColor;
    prevColor.value = currentColor;
    currentColor = color;
    paint.selectedColor = color;
    document.getElementById('current-color').value = color;
  })
);

const currColor = document.getElementById('current-color');
currColor.addEventListener('change', () => {
  prevColor.style.backgroundColor = currentColor;
  prevColor.value = currentColor;
  currentColor = currColor.value;
  paint.selectedColor = currentColor;
  console.log(document.getElementById('current-color').value);
});

document.getElementById('prev-color').addEventListener('click', () => {
  prevColor.style.backgroundColor = currentColor;
  currentColor = prevColor.value;
  paint.selectedColor = currentColor;
  document.getElementById('current-color').value = currentColor;
});

document.querySelector('.canvas--clear').addEventListener('click', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.addEventListener('keydown', e => {
  let target;
  switch (e.code) {
    case 'KeyB':
      paint.activeTool = 'fill';
      target = 'fill';
      break;
    case 'KeyP':
      paint.activeTool = 'pencil';
      target = 'pencil';
      break;
    case 'KeyC':
      paint.activeTool = 'color';
      target = 'color';
      break;
    default:
      paint.activeTool = 'pencil';
      target = 'pencil';
  }
  const targetTool = document.querySelector(`[data-tool=${target}]`);
  document.querySelector('.tool--active').classList.toggle('tool--active');
  targetTool.classList.toggle('tool--active');
});
