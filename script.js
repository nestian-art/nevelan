let navbar = document.querySelector(".navbar")
let lastScrollY = window.scrollY;

window.addEventListener("wheel", (event) => {
    let currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide");
    }
    lastScrollY = currentScrollY;
})