console.log('header.js loaded');

/**
 * Intro type effect
 */
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
