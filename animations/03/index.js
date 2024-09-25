const cursorCore = document.querySelector('.cursor-core');
const cursorOuter = document.querySelector('.cursor-outer');

document.addEventListener('mousemove', (e) => {
  gsap.to(cursorCore, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1,
    ease: 'power2.out'
  });
});


document.addEventListener('mousemove', (e) => {
  gsap.to(cursorOuter, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2,
    ease: 'power3.out'
  });
});