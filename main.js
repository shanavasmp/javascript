function changeText() {
    document.getElementById("myText").innerHTML = "Hello! The text has been changed.";
}
        function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}
function toggleText() {
    var paragraph = document.getElementById("myParagraph");
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

function changeText() {
    document.getElementById("textToChange").innerHTML = "The text has been changed!";
}
function showLoader() {
    // Show the loader
    var loader = document.getElementById('loader');
    loader.style.display = 'block';

    // Hide the loader after 3 seconds
    setTimeout(function() {
        loader.style.display = 'none';
    }, 3000);
}


let currentIndex = 0;

function moveSlide(step) {
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
currentIndex = (currentIndex + step + totalSlides) % totalSlides; // Circular navigation
slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
moveSlide(1);
}, 3000);
// Function to check if the element is in the viewport
function showOnScroll() {
    const element = document.getElementById('fadeInElement');
    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // Check if the element is within the viewport
    if (elementPosition < screenHeight) {
        element.classList.add('visible');
    }
}

// Listen for scroll events
window.addEventListener('scroll', showOnScroll);
        function startAnimation() {
    var box = document.getElementById('animateBox');
    box.classList.add('animate'); // Add the animation class
}
let currentSlide = 0;

function moveSlide(step) {
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;

// Update current slide index
currentSlide = (currentSlide + step + totalSlides) % totalSlides;

// Move the slides
slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(() => {
moveSlide(1);
}, 3000);