// Array of Image URLs
const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
];

// Initialize Variables
let currentIndex = 0; // Tracks the currently displayed image
const sliderImage = document.getElementById('sliderImage'); // Image element
const intervalTime = 10000; // 10 seconds for automatic slideshow
let slideInterval; // Holds the interval for automatic slideshow

// Function to Display the Current Image
function showImage(index) {
  sliderImage.src = images[index]; // Update the image source
}

// Event Listener for "Previous" Button
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
  showImage(currentIndex); // Display the updated image
  resetSlideshow(); // Reset the automatic slideshow
}

// Event Listener for "Next" Button
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image
  showImage(currentIndex); // Display the updated image
  resetSlideshow(); // Reset the automatic slideshow
}

// Function for Automatic Slideshow
function startSlideshow() {
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    showImage(currentIndex); // Display the updated image
  }, intervalTime);
}

// Function to Reset the Slideshow Timer
function resetSlideshow() {
  clearInterval(slideInterval); // Stop the current slideshow
  startSlideshow(); // Restart the slideshow
}

// Initialize the Slider
function initSlider() {
  showImage(currentIndex); // Display the first image
  startSlideshow(); // Start the automatic slideshow
}

// Run the Slider Initialization
initSlider();
