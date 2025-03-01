// gallery.js
let currentSlide = 0;
const slides = []; // Will be populated with image paths

function initGallery(imagePaths) {
    slides.push(...imagePaths);
    const gallery = document.querySelector('.gallery');
    const dotsContainer = document.querySelector('.gallery-dots');
    
    // Create slides and dots
    slides.forEach((path, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url(${path})`;
        if (index === 0) slide.classList.add('active');
        gallery.appendChild(slide);
        
        const dot = document.createElement('button');
        dot.className = 'gallery-dot';
        if (index === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
}

function goToSlide(index) {
    const allSlides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.gallery-dot');
    
    allSlides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    allSlides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000);
