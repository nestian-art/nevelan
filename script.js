const home = document.querySelector("#home");
const navbar = document.querySelector("ul");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove("scrolled");
        } else {
            navbar.classList.add("scrolled");
        }
    });
}, {
    threshold: 0
});

observer.observe(home);


const slides = document.querySelector(".slides");
const images = slides.querySelectorAll("img");

let index = 0;

function nextSlide() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 4000);