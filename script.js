// ==========================================
// DARK AND LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");

// Load Saved Theme
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☼";
} else {
    themeToggle.textContent = "☾";
}

// Theme Toggle Button
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☼";
        localStorage.setItem("portfolio-theme", "dark");

    } else {

        themeToggle.textContent = "☾";
        localStorage.setItem("portfolio-theme", "light");

    }

});


// ==========================================
// MOBILE NAVBAR
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and Close Mobile Menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

document.querySelectorAll("#navLinks a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


// ==========================================
// SCROLL ANIMATION
// ==========================================

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


// Apply Animation to All Sections
document.querySelectorAll("section").forEach(function (section) {

    section.classList.add("reveal");

    observer.observe(section);

});


// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log("Portfolio Website Loaded Successfully!");
console.log("Welcome to Aryan Rajput's Portfolio!");
