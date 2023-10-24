let windowW = window.innerWidth;
let windowH = window.innerHeight;
let channelLen = 4;
let imgOrigin;
let isLoaded = false;
let imgSrc = "my.image.path";
let cellSizeStart = 80;
let cellSize = cellSizeStart;

function setup() {
  color(255, 0, 0);
  background(0);
  createCanvas(windowW, windowH);
  loadImage(imgSrc, function (img) {
    imgOrigin = img;
    imgOrigin.loadPixels();
    isLoaded = true;
  });
}

function draw() {
  clear();
  background(0);
  noStroke();
  if (isLoaded) {
    cellSize -= 1;
    if (cellSize > 1) {
      push();
      translate((width - imgOrigin.width) / 2, (height - imgOrigin.height) / 2);
      for (let y = 0; y < imgOrigin.height; y += cellSize) {
        for (let x = 0; x < imgOrigin.width; x += cellSize) {
          let r, g, b, a;
          let index;
          index = (y * imgOrigin.width + x) * channelLen;
          r = imgOrigin.pixels[index];
          g = imgOrigin.pixels[index + 1];
          b = imgOrigin.pixels[index + 2];
          a = imgOrigin.pixels[index + 3];
          fill(r, g, b, a);
          rect(x, y, cellSize, cellSize);
        }
      }
      pop();
    } else {
      push();
      translate((width - imgOrigin.width) / 2, (height - imgOrigin.height) / 2);
      image(imgOrigin, 0, 0);
      pop();
    }
  }
}

function mouseClicked() {
  cellSize = cellSizeStart;
}
