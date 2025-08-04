


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create floating hearts
function createHeart() {
    const heartsContainer = document.getElementById('floatingHearts');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Auto-create hearts every few seconds
setInterval(createHeart, 3000);

// Counter animation
function animateCounter() {
    const counter = document.getElementById('daysCounter');
    let count = 0;
    const target = 365;
    const increment = target / 100;

    const timer = setInterval(() => {
        count += increment;
        if (count >= target) {
            counter.textContent = target;
            clearInterval(timer);
        } else {
            counter.textContent = Math.floor(count);
        }
    }, 20);
}

// Start counter when page loads
window.addEventListener('load', animateCounter);

// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Image Modal Functions
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
let currentImageIndex = 0;
const galleryImages = [
    { src: '/assets/img/gallery/1.jpg', alt: 'Adventure' },
    { src: '/assets/img/gallery/2.jpg', alt: 'Nature' },
    { src: '/assets/img/gallery/3.jpg', alt: 'Sunset' },
    { src: '/assets/img/gallery/4.jpg', alt: 'City' },
    { src: '/assets/img/gallery/5.jpg', alt: 'Mountains' },
    { src: '/assets/img/gallery/6.jpg', alt: 'Beach' }
];

function openImageModal(imageSrc, altText) {
    // Find the index of the clicked image
    currentImageIndex = galleryImages.findIndex(img => img.src === imageSrc);
    if (currentImageIndex === -1) currentImageIndex = 0;

    updateModalImage();
    imageModal.style.display = 'block';
}

function closeImageModal() {
    imageModal.style.display = 'none';
}

function changeImage(direction) {
    // Add fade-out animation for both image and caption
    modalImage.classList.add('fade-out');
    modalCaption.classList.add('fade-out');

    setTimeout(() => {
        currentImageIndex += direction;

        // Loop through images
        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        } else if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }

        updateModalImage();

        // Add directional slide-in animation
        setTimeout(() => {
            modalImage.classList.remove('fade-out');
            modalCaption.classList.remove('fade-out');

            // Add directional animation based on navigation direction
            if (direction > 0) {
                modalImage.classList.add('slide-right');
            } else {
                modalImage.classList.add('slide-left');
            }

            modalCaption.classList.add('fade-in');

            // Remove animation classes after completion
            setTimeout(() => {
                modalImage.classList.remove('slide-left', 'slide-right');
                modalCaption.classList.remove('fade-in');
            }, 400);
        }, 50);
    }, 200);
}

function updateModalImage() {
    const currentImage = galleryImages[currentImageIndex];
    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.alt;
    modalCaption.textContent = currentImage.alt;
}

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    if (event.target == imageModal) {
        closeImageModal();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (imageModal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'Escape') {
            closeImageModal();
        }
    }
});