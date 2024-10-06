let backToTopButton = document.getElementById("backToTop");
let openMenuBtn = document.getElementById("openMenuBtn")
let closeMenuBtn = document.getElementById("closeMenuBtn")
let mobileNav = document.getElementById("mobileNav")

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


// Open Mobile Nav
openMenuBtn.addEventListener("click", function () {
    mobileNav.style.width = "100%";
});

// Close Mobile Nav
closeMenuBtn.addEventListener("click", function () {
    mobileNav.style.width = "0";
});
