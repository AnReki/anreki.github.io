const slider = document.querySelector('.slider');
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function goToSlide(index) {
  if (index < 0) {
    index = slideCount - 1;
  } else if (index >= slideCount) {
    index = 0;
  }
  currentIndex = index;
  const translateX = -currentIndex * 100 + '%';
  slider.style.transform = `translateX(${translateX})`;
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

// 自动播放
setInterval(nextSlide, 3000); // 每隔3秒自动切换到下一张

// 添加按钮点击事件
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);
