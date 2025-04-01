'use strict';

// Отримуємо елементи
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  // Отримуємо розміри контейнера (стіни) та павука
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Обчислюємо позицію для центрування павука
  const centerX = (wallRect.width - spiderRect.width - 10) / 2;
  const centerY = (wallRect.height - spiderRect.height - 10) / 2;

  // Встановлюємо позицію павука
  spider.style.position = 'absolute';
  spider.style.left = `${centerX}px`;
  spider.style.top = `${centerY}px`;
}
