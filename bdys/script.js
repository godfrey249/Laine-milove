// Typing effect
const message = "You make my world brighter, my heart happier, and my life more beautiful. ❤️";
let i = 0;
function typeEffect() {
    if (i < message.length) {
        document.getElementById("typingText").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Love Letter
function startSurprise() {
    document.getElementById("loveLetter").style.display = "block";
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
}
function closeLetter() {
    document.getElementById("loveLetter").style.display = "none";
}

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) slide.classList.add("active");
    });
}
function changeSlide(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    showSlide(currentSlide);
}

// Auto slideshow every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);
