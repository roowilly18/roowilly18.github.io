// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready, initializing AOS...");
    AOS.init({
    duration: 1200, // Animation duration
    easing: "ease-in-out", // Easing for animations
    once: true // Animation occurs only once when scrolling
});
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
