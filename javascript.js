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
});