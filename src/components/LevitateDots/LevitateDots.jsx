import { useEffect } from "react";
import s from "./levitateDots.module.css";

export default function LevitateDots() {
  useEffect(() => {
    const canvas = document.getElementById("dotsCanvas");
    canvas.width = 480;
    canvas.height = 59;
    const ctx = canvas.getContext("2d");

    const dotSize = 4;
    const animationSpeed = 0.75; // Скорость анимации

    // Создайте массив точек с их начальными позициями
    const dots = [
      { x: 451.824, y: 44.7975 },
      { x: 467.417, y: 50.0283 },
      { x: 509, y: 18.6423 },
      { x: 462.22, y: 23.8731 },
      { x: 492.301, y: 36.9977 },
      { x: 436.23, y: 29.1044 },
      { x: 503.802, y: 34.3353 },
      { x: 436.23, y: 39.5661 },
      { x: 457.022, y: 39.5661 },
      { x: 509, y: 39.5661 },
    ];

    function drawDot(x, y) {
      ctx.beginPath();
      ctx.rect(x, y, dotSize, dotSize);
      ctx.fillStyle = "currentColor"; // Замените цвет на желаемый цвет
      ctx.fill();
      ctx.closePath();
    }

    function animateDots() {
      requestAnimationFrame(animateDots);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < dots.length; i++) {
        const translateY =
          Math.sin(performance.now() * animationSpeed + i * 0.1) * 5;
        const { x, y } = dots[i];
        drawDot(x, y - translateY);
      }
    }

    animateDots();
  }, []);
  return <canvas className={s.canvas} id="dotsCanvas"></canvas>;
}
