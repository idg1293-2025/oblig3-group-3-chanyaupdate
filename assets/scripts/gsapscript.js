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

//scrolltrigger for text animation

gsap.registerPlugin(ScrollTrigger); // Make sure ScrollTrigger is active (id name being scroll trigger)

const texts = document.querySelectorAll('.text-block');

texts.forEach(text => {
  gsap.set(text, { opacity: 0, y: 50 }); // Set starting state (kan justere om du trenger)

  ScrollTrigger.create({
    trigger: text, // Each text-block is a trigger
    start: "top 80%", // This is to start the animation when the top of the text is 80% down the viewport
    onEnter: () => {
      gsap.to(text, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }
  });
});