// sliding.js

let slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  Array.from(slides).forEach(slide => slide.style.display = "none");

  // Reset index if it exceeds the length of slides
  slideIndex = (slideIndex >= slides.length) ? 0 : slideIndex;

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Increment index for the next iteration
  slideIndex++;

  // Call showSlides function again after 2000 milliseconds (4 seconds)
  setTimeout(showSlides, 4000);
}

// Start the slideshow when the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  showSlides();
});
