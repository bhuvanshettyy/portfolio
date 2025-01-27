console.log('javascript.js loaded');

function openLink(url) {
    window.open(url, '_blank');
}

function openPDF(pdfPath) {
    window.open(pdfPath, '_blank');
}




let scrollContainer = document.querySelector('.scroll-container');
let stopButton = document.querySelector('#stopButton');

stopButton.addEventListener('click', function() {
    let animationPlayState = scrollContainer.style.animationPlayState;
    if (animationPlayState === 'paused') {
        scrollContainer.style.animationPlayState = 'running';
    } else {
        scrollContainer.style.animationPlayState = 'paused';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let scrollContainer = document.querySelector('.scroll-container');
    let scrollItems = scrollContainer.querySelector('.scroll-items');
    let toggleButton = document.querySelector('#toggleButton');

    // Function to start the animation
    function startAnimation() {
        scrollItems.style.animationPlayState = 'running';
    }

    // Function to pause the animation
    function pauseAnimation() {
        scrollItems.style.animationPlayState = 'paused';
    }

    // Intersection Observer to start the animation when the section comes into view
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimation();
            } else {
                pauseAnimation();
            }
        });
    }, {
        threshold: 0.1 // Start the animation when 10% of the section is visible
    });

    observer.observe(scrollContainer);

    // Toggle button to pause/resume the animation
    toggleButton.addEventListener('click', function() {
        if (scrollItems.style.animationPlayState === 'paused') {
            scrollItems.style.animationPlayState = 'running';
        } else {
            scrollItems.style.animationPlayState = 'paused';
        }
    });
});
