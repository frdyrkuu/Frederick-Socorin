ScrollReveal({
    duration: 500,
    distance: '500px',
    easing: 'ease-in'
});

ScrollReveal().reveal('.reveal-items', { duration: 1000, reset: false });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom', reset: false });
ScrollReveal().reveal('.reveal-top', { origin: 'top', reset: false });
ScrollReveal().reveal('.reveal-left', { origin: 'left', reset: false });
ScrollReveal().reveal('.reveal-right', { origin: 'right', reset: false });

ScrollReveal().reveal('.reveal-rotate', { origin: 'bottom', rotate: { x: 1000, z: 1000 } });


// RESETS

ScrollReveal().reveal('.reveal-bottom-reset', { origin: 'bottom', reset: true });
ScrollReveal().reveal('.reveal-left-reset', { origin: 'left', reset: false });
ScrollReveal().reveal('.reveal-right-reset', { origin: 'right', reset: true });

ScrollReveal().reveal('.reveal-left-subheadline1', { duration: 700, origin: 'left', reset: false });
ScrollReveal().reveal('.reveal-left-subheadline2', { duration: 1000, origin: 'left', reset: false });