const typedElement = document.querySelector('.typed-text');
if (typedElement) {
    let typed_strings = typedElement.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed-text', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
    console.log('Typed.js initialized');
}

function openLink(url) {
    window.open(url, '_blank');
}

function openPDF(pdfPath) {
    window.open(pdfPath, '_blank');
}

let scrollContainer = document.querySelector('.scroll-container');
let stopButton = document.querySelector('#stopButton');
stopButton.addEventListener('click', function() {
    scrollContainer.style.animationPlayState = 'paused';  // Stop the animation
    console.log('Animation paused');
});

console.log('main.js loaded');
