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

const radios = document.querySelectorAll('input[name="filter"]');
const items = document.querySelectorAll('.item');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedValue = radio.value;

        items.forEach(item => {
            if (item.getAttribute('data-value') === selectedValue) {
                item.style.display = 'block'; // Show the selected item
            } else {
                item.style.display = 'none'; // Hide other items
            }
        });
    });
});

document.getElementById('add-button').addEventListener('click', function() {
    // Create a new input element
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'input[]';
    newInput.placeholder = 'Enter text';

    // Append the new input field to the container
    document.getElementById('input-container').appendChild(newInput);
});
// Select the toggle button
const toggleButton = document.getElementById('toggleButton');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the "active" class
    toggleButton.classList.toggle('active');

    // Toggle the button text based on its state
    if (toggleButton.classList.contains('active')) {
        toggleButton.textContent = 'ON';
    } else {
        toggleButton.textContent = 'OFF';
    }
});