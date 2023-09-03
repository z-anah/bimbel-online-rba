document.addEventListener("DOMContentLoaded", function() {
    const animatedDiv = document.querySelector(".animated-div");
    const scrollTrigger = document.querySelector(".scroll-trigger");

    // Calculate the scroll position to trigger the animation
    const triggerOffset = scrollTrigger.getBoundingClientRect().top;

    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY;
        if (scrollY >= triggerOffset) {
            animatedDiv.style.animationPlayState = "running";
        }
    });
});
