let slideIndex = 0;

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade"); /* Remove fade class for all slides */
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("fade"); /* Add fade class to the current slide */
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Call showSlides every 5 seconds (5000 milliseconds)
setInterval(showSlides, 3000)

document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById('back-to-top-btn');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
