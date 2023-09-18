import { useEffect, useState } from "react";
import s from "./pixelCursor.module.css";

export default function PixelsCursor() {
  let width, height;
  let pixels = [];
  let coloredPixels = [];
  let colors = ["#EAFF87", "#EAFF87", "#EAFF87", "#EAFF87", "#EAFF87"];
  let currentPixel = 0;
  const mousePosition = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0, l = pixels.length; i < l; i++) {
        pixels[i][4] = 0;
      }

      for (var i = 0, l = coloredPixels.length; i < l; i++) {
        var pix =
          Math.floor(coloredPixels[i].y / 10) * (Math.floor(width / 10) + 1) +
          Math.floor(coloredPixels[i].x / 10);
        if (pixels[pix]) {
          pixels[pix][4] = coloredPixels[i].color;
          pixels[pix][5] = coloredPixels[i].alpha;
        }

        if (coloredPixels[i].alpha > 0) coloredPixels[i].alpha -= 0.008;
        if (coloredPixels[i].alpha < 0) coloredPixels[i].alpha = 0;
        coloredPixels[i].x += coloredPixels[i].vx;
        coloredPixels[i].y += coloredPixels[i].vy;
      }

      for (var i = 0, l = pixels.length; i < l; i++) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#222";
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
        ctx.globalAlpha = pixels[i][5];
        ctx.fillStyle = pixels[i][4];
        ctx.fillRect(pixels[i][0], pixels[i][1], pixels[i][2], pixels[i][3]);
      }
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      pixels = [];
      for (var y = 0; y < height / 10; y++) {
        for (var x = 0; x < width / 10; x++) {
          pixels.push([x * 10, y * 10, 8, 8, "#222", 1]);
        }
      }
    };

    const draw = () => {
      launchPixel();
      launchPixel();
      drawGrid();
      requestAnimationFrame(draw);
    };

    const initColoredPixels = () => {
      for (var i = 0; i < 300; i++) {
        coloredPixels.push({
          x: width / 2,
          y: height / 2,
          alpha: 0,
          color: colors[i % 5],
          vx: -1 + Math.random() * 2,
          vy: -1 + Math.random() * 2,
        });
      }
    };

    const launchPixel = () => {
      coloredPixels[currentPixel].x = mousePosition.x;
      coloredPixels[currentPixel].y = mousePosition.y;
      coloredPixels[currentPixel].alpha = 1;
      currentPixel++;
      if (currentPixel > 299) currentPixel = 0;
    };

    resize();
    initColoredPixels();
    draw();
    window.addEventListener("resize", resize);

    // Добавляем обработчики событий только для блока canvas
    canvas.addEventListener("mousemove", function (e) {
      mousePosition.x = e.pageX - canvas.getBoundingClientRect().left;
      mousePosition.y = e.pageY - canvas.getBoundingClientRect().top;
    });

    const touchMove = (e) => {
      e.preventDefault();
      mousePosition.x =
        e.touches[0].pageX - canvas.getBoundingClientRect().left;
      mousePosition.y = e.touches[0].pageY - canvas.getBoundingClientRect().top;
    };

    canvas.addEventListener("touchstart", touchMove);
    canvas.addEventListener("touchmove", touchMove);
  }, []);

  return <canvas className={s.canvas} id="canvas"></canvas>;
}
