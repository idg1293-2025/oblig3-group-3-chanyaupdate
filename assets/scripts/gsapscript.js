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
// Activate ScrollTrigger

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const texts = document.querySelectorAll('.text-block, .end-message, .middle-text'); 

texts.forEach(text => {
  gsap.set(text, { opacity: 0, y: 50 });

  //ScrollTrigger for each text-block
  ScrollTrigger.create({
    trigger: text,
    start: "top 80%",
    onEnter: () => {
      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  });
});


// Glitch effect on image
// Waits 3s after image is visible, then starts mild glitch
// After 2s of mild glitch, switches to intense glitch


const glitchImg = document.querySelector('.glitch-img');

  if (glitchImg) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // when glitch-image comes in view:
          setTimeout(() => {
            glitchImg.classList.add('start-glitch');

            // after 2 seconds,  over to intens glitch
            setTimeout(() => {
              glitchImg.classList.add('full-glitch');
            }, 2000);

          }, 3000); // waits 3 seconds after visibility
        }
      });
    }, { threshold: 0.5 }); // 50% image visible before it begins

    observer.observe(glitchImg);
  }