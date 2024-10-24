const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isThrottled = false;

// Изначально показываем первый слайд
function showCurrentSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'flex' : 'none';
    });
}

// Переключение слайдов
function changeSlide(direction) {
    if (isThrottled) return;
    isThrottled = true;

    setTimeout(() => {
        isThrottled = false;
    }, 1000);

    if (direction === 'down') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else if (direction === 'up') {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }

    showCurrentSlide(); // Показать текущий слайд
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        changeSlide('down');
    } else {
        changeSlide('up');
    }
});

// Кнопка для переключения на следующий слайд
const nextSlideBtn = document.getElementById('next-slide-btn');
nextSlideBtn.addEventListener('click', () => {
    changeSlide('down');
});

// Инициализация с первого слайда
showCurrentSlide();
