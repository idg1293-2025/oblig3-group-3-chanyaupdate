gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // Scroll to first scene
  const startButton = document.getElementById('startButton');
  const firstScene = document.querySelector('#scene1');
  
  if (startButton && firstScene) {
    startButton.addEventListener('click', () => scrollToScene(firstScene));
  }

  // Animate .text-block and .middle-text on scroll
  document.querySelectorAll('.text-block, .middle-text').forEach(block => {
    gsap.set(block, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: block,
      start: "top 90%",
      end: "bottom 20%",
      scrub: 0.5,
      onEnter: () => gsap.to(block, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }),
      onLeave: () => gsap.to(block, { opacity: 0, y: -20, duration: 1.5, ease: "power2.in" }),
      onEnterBack: () => gsap.to(block, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(block, { opacity: 0, y: 20, duration: 1.5, ease: "power2.in" })
    });
  });

  // Scene 5: Manual "Next" dialog typing
  const facts = [
    "Deforestation destroys 10 million hectares of forest every year.",
    "Over 800 million people go to bed hungry each night.",
    "Air pollution causes 7 million premature deaths annually."
  ];

  let currentIndex = 0;
  const dialogLine = document.querySelector(".dialog-line");
  const button = document.getElementById("continue-btn");

  // Typewriter function
  let isTyping = false;
  function typeText(text, callback) {
    let charIndex = 0;
    dialogLine.textContent = "";
    isTyping = true;

    const interval = setInterval(() => {
      if (charIndex < text.length) {
        dialogLine.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(interval);
        isTyping = false;
        if (callback) callback();
      }
    }, 40); // speed
  }

  // Button event handler for typing
  button.addEventListener("click", () => {
    if (isTyping) return; 

    if (currentIndex < facts.length) {
      typeText(facts[currentIndex], () => currentIndex++);
    } else {
      typeText("I am sick! and...");
      button.disabled = true;
    }
  });

  // Fade-in for final scenes
  ['#scene-help', '#scene-ignore', '#ending'].forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      gsap.set(section, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out'
          });
          section.classList.add('visible-scene');
        }
      });
    }
  });

  // Scroll back to top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0 },
        ease: "power2.inOut"
      });
    });
  }
});

// Generic scroll helper for scene buttons
function goToScene(id) {
  const section = document.getElementById(id);
  if (section) scrollToScene(section);
}

// Robust scroll function
function scrollToScene(targetSection) {
  const rect = targetSection.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetY = rect.top + scrollTop;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: targetY },
    ease: "power2.inOut"
  });
}
