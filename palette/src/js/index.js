import '../scss/main.scss';

import Paint from './utils/paint.class';
// import { changeTool } from './utils/changeTool';
// import { Tools } from './utils/Tools';

// const canvas = document.getElementById('canvas');
// console.log(canvas.ctxData);

// changeTool();

// const tool = new Tools(document.querySelector('.tools'));
let currentColor = document.getElementById('current-color').value;
const prevColor = document.getElementById('prev-color');

const paint = new Paint('canvas');
paint.activeTool = 'pencil';
paint.selectedColor = currentColor;
paint.init();

document.querySelectorAll('[data-tool]').forEach(
  item => {
    item.addEventListener('click', () => {
      document.querySelector('.tool--active').classList.toggle('tool--active');
      item.classList.toggle('tool--active');

      let selectedTool = item.getAttribute('data-tool');
      paint.activeTool = selectedTool;

      switch (selectedTool) {
        case 'pencil':
          break;
      
        case 'fill':
          break;

        case 'color':
          break;
      }
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
});

document.getElementById('prev-color').addEventListener('click', () => {
  prevColor.style.backgroundColor = currentColor;
  currentColor = prevColor.value;
  paint.selectedColor = currentColor;
  document.getElementById('current-color').value = currentColor;
});
