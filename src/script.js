// define the slide index
let slideindex = 0;

// define prev and next buttons
const buttonPrev = document.querySelector(".carousel-button-prev");
const buttonNext = document.querySelector(".carousel-button-next");
const scrollDown = document.getElementsByClassName("scrollDown")[0];
const topsection = document.querySelector("nav")
const carouselSection = document.getElementsByClassName("carousel-container")[0];




window.addEventListener("scroll", toggleScrollButton);

function toggleScrollButton() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";

    }
}

scrollDown.addEventListener("click", scrollTarget);

function scrollTarget() {
    if (window.scrollY >= carouselSection.getBoundingClientRect().top) {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-down'></i>";
        autoScroll(topsection);
    } else {
        scrollDown.innerHTML = "Scroll <i class='fa-solid fa-caret-up'></i>";
        autoScroll(carouselSection);
    }
}

function autoScroll(scrollTarget) {
    scrollTarget.scrollIntoView({behavior: "smooth"});
}


// carousel
buttonPrev.addEventListener("click", function() {

    slideindex--;
    carousel();
});
buttonNext.addEventListener("click", function() {
    slideindex++;
    carousel();
});

// define the carousel function
function carousel() {
    // define the slides
    var slides = document.getElementsByClassName("carousel-item");
    
    // hide all slides initially
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }

    // check if slide index is bigger than the amount of slides
    if (slideindex >= slides.length) {
        slideindex = 0;
    }

    // make sure the slide index is not negative
    if (slideindex < 0) {
        slideindex = slides.length - 1;
    }

    // reveal current slide
    slides[slideindex].style.display = "block";
}

// call the carousel function when the page loads
carousel();


