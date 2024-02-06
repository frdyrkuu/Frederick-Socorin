document.addEventListener('mousemove', e => {
  let elements = document.querySelectorAll('.mouse-cursor-gradient-tracking');

  elements.forEach(element => {
    let rect = element.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    element.style.setProperty('--x', x + 'px');
    element.style.setProperty('--y', y + 'px');
  });
});

