 function getCurrentTimeColor() {
    const time = new Date();
    const r = (time.getHours() * 10) % 256;
    const g = (time.getMinutes() * 4) % 256;
    const b = (time.getSeconds() * 4) % 256;
    return `rgb(${r}, ${g}, ${b})`;
  }

  
  gsap.utils.toArray('.shape').forEach((shape, i) => {
    gsap.timeline({ repeat: -1, repeatDelay: 1 })
      .to(shape, {
        duration: 2,
        ease: "elastic.out(1, 0.5)",
        scale: 1.5,
        backgroundColor: getCurrentTimeColor,
        rotate: 360,
        borderRadius: '0%',
        yoyo: true
      })
      .to(shape, {
        duration: 1.5,
        ease: "power2.inOut",
        morphSVG: { type: "polygon", points: "50,15 90,85 10,85" },
        delay: 0.5,
      })
      .to(shape, {
        scale: 1,
        rotate: -180,
        borderRadius: '50%',
        duration: 2,
        backgroundColor: getCurrentTimeColor,
        ease: "elastic.out(1, 0.5)"
      });
  });


  setInterval(() => {
    gsap.to('.shape', { backgroundColor: getCurrentTimeColor(), duration: 1 });
  }, 1000);