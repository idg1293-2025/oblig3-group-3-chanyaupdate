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

gsap.registerPlugin(ScrollTrigger);

const texts = document.querySelectorAll('.text-block, .end-message, .middle-text'); 

texts.forEach(text => {
  gsap.set(text, { opacity: 0, y: 50 });

  ScrollTrigger.create({
    trigger: text,
    start: "top 80%",
    onEnter: () => {
      gsap.to(text, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
    }
  });
});
