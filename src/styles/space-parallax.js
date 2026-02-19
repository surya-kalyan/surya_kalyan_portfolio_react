// Add parallax scrolling effect to stars
document.addEventListener('DOMContentLoaded', function() {
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('body::before');
    
    if (parallax) {
      const yPos = -(scrolled * 0.5);
      parallax.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
});