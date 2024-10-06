let backToTopButton = document.getElementById("backToTop");

/* Show the button after scrolling down 300 pixels */
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

/* Smooth scrolling to the top when the button is clicked */
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); // Toggle the active class
};
