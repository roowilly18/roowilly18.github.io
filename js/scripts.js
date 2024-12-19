// Initialize AOS
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready, initializing AOS...");
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        once: true,     // Animation happens only once
    });
});
