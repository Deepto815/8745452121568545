// ===============================
// SECTION BUTTONS
// ===============================

const buttons = document.querySelectorAll(".exp");
const sections = document.querySelectorAll(".section, .slideshow");

buttons[0].addEventListener("click", () => {
    sections[0].scrollIntoView({
        behavior: "smooth"
    });
});

buttons[1].addEventListener("click", () => {
    sections[1].scrollIntoView({
        behavior: "smooth"
    });
});


// ===============================
// LOADING SCREEN
// ===============================

const startTime = Date.now();


// Create loader
const loader = document.createElement("div");

loader.className = "loader";

loader.innerHTML = `
    <div class="loader-content">

        <div class="loader-title">
            INITIALIZING SURPRISE...
        </div>

        <div class="loader-bar">
            <div class="loader-progress"></div>
        </div>

        <div class="loader-status">
            LOADING...
        </div>

    </div>
`;


// Put loader at the beginning of the page
document.body.prepend(loader);


// ===============================
// LOADING MESSAGES
// ===============================

const status = loader.querySelector(".loader-status");

const messages = [
    "LOADING...",
    "INITIALIZING KNOWLEDGE...",
    "SOLVING NUMERICALS...",
    "ANALYZING CHEMICAL REACTIONS...",
    "CHECKING BIOLOGICAL SYSTEMS...",
    "COMPILING CODE...",
    "CALCULATING EVERYTHING...",
    "GIFT FOR THE GOAT IS READY ✓"
];

let messageIndex = 0;


// Change message every 400ms
const messageInterval = setInterval(() => {

    if (messageIndex < messages.length - 1) {

        messageIndex++;

        status.textContent = messages[messageIndex];

    }

}, 400);


// ===============================
// WHEN PAGE FINISHES LOADING
// ===============================

window.addEventListener("load", () => {

    // Stop changing messages
    clearInterval(messageInterval);

    // Final message
    status.textContent = "GIFT FOR THE GOAT IS READY ✓";


    // Calculate how long the loader has been visible
    const elapsed = Date.now() - startTime;


    // Minimum loader time = 1 second
    const remaining = Math.max(1000 - elapsed, 0);


    setTimeout(() => {

        // Keep READY message visible for a tiny moment
        setTimeout(() => {

            loader.classList.add("loaded");


            // Remove loader after fade-out
            setTimeout(() => {

                loader.remove();

            }, 700);

        }, 150);

    }, remaining);

});


// ===============================
// IMAGE SLIDESHOW
// ===============================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;


// ===============================
// SHOW SLIDE
// ===============================

function showSlide(index) {

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");


    currentSlide = index;


    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

}


// ===============================
// AUTOMATIC SLIDESHOW
// ===============================

setInterval(() => {

    const nextSlide = (currentSlide + 1) % slides.length;

    showSlide(nextSlide);

}, 5000);


// ===============================
// DOT POINTERS
// ===============================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});