//gsap js for smooth scrolling 
//Chanya 
gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('startButton'); // Id: name of the button

  if (startButton) {
    startButton.addEventListener('click', function () {
      const firstSection = document.querySelectorAll('section')[1]; // Select the first section after the header
      if (firstSection) {
        gsap.to(window, { duration: 1, scrollTo: { y: firstSection, offsetY: 0 }, ease: "power2.inOut" }); // this is the animation for the scroll
      }
    });
  }
});
// compared to vanilla codes, gsap gives more control over the animation and is more efficient