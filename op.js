function nextImage(button) {
    const carouselContainer = button.closest('.carousel-container');
    const images = carouselContainer.querySelectorAll('.project-image');
    let currentImageIndex = Array.from(images).findIndex(image => !image.classList.contains('d-none'));

    images[currentImageIndex].classList.add('d-none');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.remove('d-none');
}

function prevImage(button) {
    const carouselContainer = button.closest('.carousel-container');
    const images = carouselContainer.querySelectorAll('.project-image');
    let currentImageIndex = Array.from(images).findIndex(image => !image.classList.contains('d-none'));

    images[currentImageIndex].classList.add('d-none');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.remove('d-none');
}