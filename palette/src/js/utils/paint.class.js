import { getMouseCoordsOnCanvas } from './utils';
import Fill from './fill.class';

export default class Paint {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.SCALE = 128;
  }

  set activeTool(tool) {
    this.tool = tool;
    console.log(this.tool);
  }

  set selectedColor(color) {
    this.color = color;
    this.ctx.strokeStyle = this.color;
  }

  init() {
    this.canvas.onmousedown = e => this.onMouseDown(e);
  }

  onMouseDown(e) {
    this.savedData = this.ctx.getImageData(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

    this.canvas.onmousemove = e => this.onMouseMove(e);
    document.onmouseup = e => this.onMouseUp(e);

    this.startPos = getMouseCoordsOnCanvas(e, this.canvas);

    if (this.tool === 'pencil') {
      // this.ctx.beginPath();
      // this.ctx.moveTo(this.startPos.x, this.startPos.y);
    } else if (this.tool === 'fill') {
      new Fill(this.canvas, this.startPos, this.color);
    }
  }

  onMouseMove(e) {
    this.currentPos = getMouseCoordsOnCanvas(e, this.canvas);

    switch (this.tool) {
      case 'pencil':
        this.draw(e);
        break;
    
      default:
        break;
    }
  }

  onMouseUp() {
    this.canvas.onmousemove = null;
    document.onmouseup = null;
  }

  draw(e) {
    // this.ctx.lineWidth = 12;
    // this.ctx.lineTo(this.currentPos.x, this.currentPos.y);
    // this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(getPosition(e.offsetX), getPosition(e.offsetY), this.SCALE, this.SCALE);
  }
}

const getPosition = (x) => {
  if (x >= 0 && x <= 128){
      return 0;
  } else if (x > 129 && x <= 256){
      return 128;
  } else if (x > 257 && x <= 384){
      return 256;
  } else if (x > 385 && x <= 512){
      return 384;
  }
};