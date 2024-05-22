// script.js

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const newTransform = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransform}%)`;
}

function moveSlide(n) {
    showSlide(currentIndex + n);
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 7000); // Altere o tempo aqui, se necessário
}

// Inicia o carrossel automático
setTimeout(autoSlide, 3000);
