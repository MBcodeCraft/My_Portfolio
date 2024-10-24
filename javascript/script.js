let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ']').classList.add ('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// New Adjustment
function changeSlide(button, n) {
    const carousel = button.parentElement.querySelector(".carousel");
    const images = Array.from(carousel.querySelectorAll("img"));
    
    // Find the current image that is displayed
    let currentIndex = images.findIndex(img => img.style.display === "block");

    // Hide the current image
    if (currentIndex !== -1) {
        images[currentIndex].style.display = "none";
    }

    // Calculate the next index
    currentIndex = (currentIndex + n + images.length) % images.length;

    // Show the next image
    images[currentIndex].style.display = "block";
}

// Function to apply the color to --main-color
function applyColor(color) {
    document.documentElement.style.setProperty('--main-color', color);
}

// Check if a color is already saved in localStorage and apply it when the page loads
window.addEventListener('load', () => {
    const savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        applyColor(savedColor); // Apply the saved color
    }
});

const colorIcons = document.querySelectorAll('.color-switcher .bx');

// Add click event listener to the color toggle button to show/hide the color list
const colorToggle = document.getElementById('color-toggle');
const colorSwitcher = document.querySelector('.color-switcher');

colorToggle.addEventListener('click', () => {
    // Toggle the 'hidden' class to show/hide the color options
    colorSwitcher.classList.toggle('hidden');
});

colorIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const color = e.target.dataset.color;

        // Apply the selected color
        applyColor(color);

        // Save the selected color in localStorage so it persists on page reload
        localStorage.setItem('selectedColor', color);

        // Hide the color options after a selection
        colorSwitcher.classList.add('hidden');
    });
});

