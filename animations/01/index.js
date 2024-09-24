
  const canvas = document.getElementById('canvas'), 
  bulbula = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
  }
  
  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomRGB() {
    return `rgb(${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))}, ${Math.floor(random(0, 256))})`;
  }

  function createParticle(x, y) {
    particles.push({ 
      x, y, 
      size: random(20, 80), 
      speedX: random(-2, 2), 
      speedY: random(-2, 2), 
      color: randomRGB(), 
      opacity: random(0.5, 1)
    });
  }

  function loop() {
    bulbula.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.size > 1);  // Remove small particles
    particles.forEach(p => {
      p.x += p.speedX; p.y += p.speedY; p.size *= 0.98;
      bulbula.globalAlpha = p.opacity;
      bulbula.fillStyle = p.color;
      bulbula.beginPath(); bulbula.arc(p.x, p.y, p.size, 0, Math.PI * 2); bulbula.fill();
    });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resizeCanvas);
  canvas.addEventListener('mousemove', e => createParticle(e.clientX, e.clientY));
  resizeCanvas(); loop();

