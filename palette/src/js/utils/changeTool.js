let currentTool = 'pencil';

function toolHandler (evt) {
  console.log(evt.target);
  currentTool = tool;
  // document.querySelector('.tool--active').classList.remove('tool--active');
  // this.classList.add('tool--active');
}

export function changeTool () {
  const pencil = document.getElementById('tool-pencil');
  const fillBucket = document.getElementById('tool-fill');
  const colorPicker = document.getElementById('tool-color');

  pencil.addEventListener('click', toolHandler);

  colorPicker.addEventListener('click', () => {
    currentTool = 'color';
    document.querySelector('.tool--active').classList.remove('tool--active');
    colorPicker.classList.add('tool--active');
  });

  fillBucket.addEventListener('click', () => {
    currentTool = 'fill';
    document.querySelector('.tool--active').classList.remove('tool--active');
    fillBucket.classList.add('tool--active');
  });

  document.addEventListener('keydown', (evt) => {
    switch (evt.code) {
      case 'KeyP':
        currentTool = 'pencil';
        document.querySelector('.tool--active').classList.remove('tool--active');
        pencil.classList.add('tool--active');
        break;

      case 'KeyF':
        currentTool = 'fill';
        document.querySelector('.tool--active').classList.remove('tool--active');
        fillBucket.classList.add('tool--active');
        break;
      case 'KeyC':
        currentTool = 'color';
        document.querySelector('.tool--active').classList.remove('tool--active');
        colorPicker.classList.add('tool--active');
        break;
      default:
    }
  });
}
