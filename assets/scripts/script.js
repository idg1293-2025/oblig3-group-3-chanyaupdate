//The start button function 
//Chanya: 
const startButton = document.getElementById('startButton');

if (startButton) {
  startButton.addEventListener('click', () => {
    console.log('Start button clicked!');
    
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// Observation of sections (Intersection Observer) fikses etter bilder 
const sections = document.querySelectorAll('.screen'); 
const options = {
  threshold: 0.3 
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(`Entered section: ${entry.target.className}`);
      entry.target.classList.add('visible'); 
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, options);

// Observe each section
sections.forEach(section => {
  observer.observe(section);
});