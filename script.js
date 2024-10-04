let backToTopButton = document.getElementById("backToTop");

/*show the button after scrolling down 300 pixel*/
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

/*smooth scrolling to the top when the button is clicked*/
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
