export default class Color {
  constructor(canvas, point) {
    this.ctx = canvas.getContext('2d');
    this.imageData = this.ctx.getImageData(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.targetColor = this.getPixel(point);
    this.hexColor = `#${this.rgbToHex(this.targetColor[0], this.targetColor[1], this.targetColor[2])}`;
  }

  getColor() {
    return this.hexColor;
  }

  getPixel(point) {
    if (point.x < 0 || point.y < 0 || point.x >= this.imageData.width, point.y >= this.imageData.height) {
      return [-1, -1, -1, -1]; //impossible color 
    } else {
      const offset = (point.y * this.imageData.width + point.x) * 4;
      return [
        this.imageData.data[offset + 0], //red
        this.imageData.data[offset + 1], //green
        this.imageData.data[offset + 2], //blue
        this.imageData.data[offset + 3] //alpha
      ];
    }
  }

  rgbToHex(r,g,b) {
    return this.toHex(r) + this.toHex(g) + this.toHex(b);
  }

  toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16) + "0123456789ABCDEF".charAt(n%16);
  }
}
