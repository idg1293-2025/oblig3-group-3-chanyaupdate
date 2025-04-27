const startButton = document.getElementById('startButton');

if (startButton) {
  startButton.addEventListener('click', () => {
    console.log('Start button clicked!');

    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // 👈 ensures it scrolls to the TOP of the section
      });
    }
  });
}