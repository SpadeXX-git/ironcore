
let lightmode = false;

document.querySelector(".lightmode").addEventListener("click", function () {
    lightmode = !lightmode;

    if (lightmode) {
        document.body.style.backgroundImage = "none";
        document.body.style.color = "black";
        document.querySelector(".header-text-text").style.color = "black";
        document.querySelectorAll(".header, footer").forEach(item => {
            item.style.backgroundColor = "white";
        });
        document.querySelectorAll(".logo, .headerlink, h5, .nav-item, .footer-text").forEach(item => {
            item.style.color = "black";
        });
    } else {
        document.body.style.backgroundImage = "";
        document.body.style.color = "";
        document.querySelector(".header-text-text").style.color = "";
        document.querySelectorAll(".header, footer").forEach(item => {
            item.style.backgroundColor = "";
        });
        document.querySelectorAll(".logo, .headerlink, h5, .nav-item, .footer-text").forEach(item => {
            item.style.color = "";
        });
    }
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.Tlinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('open');
        }
    });
}
