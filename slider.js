const imagesObj = {
  iPhone: ['images/iphone1.jpg', 'images/iphone2.jpg', 'images/iphone3.jpg'],
  Huawei: ['images/huawei1.jpg', 'images/huawei2.jpg', 'images/huawei3.jpg'],
  Samsung: ['images/samsung1.jpg', 'images/samsung2.jpg', 'images/samsung3.jpg'],
  Lenovo: ['images/lenovo1.jpg', 'images/lenovo2.jpg', 'images/lenovo3.jpg'],
  MacBook: ['images/macbook1.jpg', 'images/macbook2.jpg', 'images/macbook3.jpg'],
  Dell: ['images/dell1.jpg', 'images/dell2.jpg', 'images/dell3.jpg'],
  HP: ['images/hp1.jpg', 'images/hp2.jpg', 'images/hp3.jpg'],
  ZenBook: ['images/zenbook1.jpg', 'images/zenbook2.jpg', 'images/zenbook3.jpg']
};

function generateSliderLayout(productName) {
  const images = imagesObj[productName];
  return `
  <div class="slider">
  <div class="indicators">
          ${images.map((indicator, index) => `<div class="indicator ${index === 0 ? "active" : ""}" data-id="${index}"></div>`).join("")}
  </div>
      <div class="slides">
          ${images.map((slide, index) => `<div class="slide ${index === 0 ? "active" : ""}"><img src="${slide}" alt="${productName}"></div>`).join("")}
      </div>
      <div class="controls">
          <button class="prev-btn">Prev</button>
          <button class="next-btn">Next</button>
      </div>
  </div>`;
}

let currentSlide = 0;
const interval = 3000;
let slideInterval;

function startSlider() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, interval);
}

function nextSlide() {
  clearInterval(slideInterval);
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');

  slideInterval = setInterval(nextSlide, interval);
}

function prevSlide() {
  clearInterval(slideInterval);
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');

  slideInterval = setInterval(nextSlide, interval);
}

function changeSlides() {
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
}

function stopShowing() {
  let isPlaying = true;
  document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
      if (isPlaying) {
        clearInterval(slideInterval);
        console.log("Slider is stopped");
      } else {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, interval);
        console.log("Slider is playing");
      }
      isPlaying = !isPlaying;
    }
  })
}

function activateSlide(index) {
  clearInterval(slideInterval);
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');

  slides[currentSlide].classList.remove('active');
  indicators[currentSlide].classList.remove('active');

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');

  slideInterval = setInterval(nextSlide, interval);
}

function activateIndicator() {
  const indicators = document.querySelectorAll('.indicator');

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener('click', () => {
      activateSlide(i)
    });
  }
};

function handleKeyboardControl() {
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
      nextSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, interval);
    } else if (event.code === 'ArrowLeft') {
      prevSlide();
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, interval);
    }
  })
}

function touchEvents() {
  document.querySelector('.slides').addEventListener('touchstart', (event) => {
    clearInterval(slideInterval);
    start = event.touches[0].clientX;
    event.preventDefault();
  })
  document.querySelector('.slides').addEventListener('touchend', (event) => {
    end = event.changedTouches[0].clientX;
    const diff = end - start;
    if (diff > 50) {
      prevSlide();
    } else if (diff < 50) {
      nextSlide();
    }
    event.preventDefault();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  })
}
function initializeSlider() {
  setTimeout(() => {
    startSlider();
    changeSlides();
    stopShowing();
    activateIndicator();
    handleKeyboardControl();
    touchEvents();
  }, 100);
}