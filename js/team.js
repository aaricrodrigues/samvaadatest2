function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  window.onload= function() {
  Particles.init({
  selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true,
  maxParticles:200,
  speed:0.3
  });
};

Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 100,
  
    // options for breakpoints
    responsive: [
      {
        breakpoint: 950,
        options: { 
          color: ['#DA0463', '#404B69', '#DBEDF3'],
          connectParticles: true,
          maxParticles: 70
        }
      },
      {
        breakpoint: 768,
        options: {  
          color: ['#DA0463', '#404B69', '#DBEDF3'],
          connectParticles: true,
          maxParticles: 50
        }
      },
      {
        breakpoint: 425,
        options: { 
          color: ['#DA0463', '#404B69', '#DBEDF3'],
          connectParticles: true,
          maxParticles: 40
        }
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0 // disables particles.js
        }
      }
    ]
  });
  

  // Get the background element
const background = document.querySelector('.background');

// Get the particles instance
const particles = Particles.init({
  selector: '.background',
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  connectParticles: true,
  maxParticles: 200,
  speed: 0.3
});

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollTop = window.pageYOffset;

  // Update the top property of the background element
  background.style.top = `${scrollTop}px`;
});
