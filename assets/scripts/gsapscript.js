gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  // Scroll to first scene on start button click
  const startButton = document.getElementById('startButton');
  const firstScene = document.querySelector('#scene1');

  if (startButton && firstScene) {
    startButton.addEventListener('click', () => {
      scrollToScene(firstScene);
    });
  }

  // Animate all text blocks (.text-block and .middle-text) on scroll
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

  // Scene 5: Manual dialog typing (user clicks "Next")
document.querySelectorAll('.text-block[data-lines]:not(.auto-dialog)').forEach(block => {
  const button = block.querySelector('button');
  const paragraph = block.querySelector('.dialog-line');
  const lines = block.dataset.lines.split('|');
  block.dataset.current = "0";

  if (button && paragraph) {
    button.addEventListener('click', function () {
      if (button.dataset.typing === "true") return;

      let current = parseInt(block.dataset.current);
      if (current >= lines.length) {
        button.style.display = "none";
        return;
      }

      paragraph.textContent = "";
      button.dataset.typing = "true";
      const text = lines[current];
      let i = 0;

      function typeChar() {
        if (i < text.length) {
          paragraph.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, 30); // Typing speed
        } else {
          button.dataset.typing = "false";
          block.dataset.current = current + 1;
        }
      }

      typeChar();
    });
  }
});

  // Auto-typing effect for blocks without buttons
  document.querySelectorAll('.text-block.auto-dialog[data-lines]').forEach(block => {
    const paragraph = block.querySelector('.dialog-line');
    const lines = block.dataset.lines.split('|');
    let current = 0;

    function typeLine(text, callback) {
      paragraph.textContent = "";
      let i = 0;

      function typeChar() {
        if (i < text.length) {
          paragraph.textContent += text.charAt(i);
          i++;
          setTimeout(typeChar, 35);
        } else if (callback) {
          callback();
        }
      }

      typeChar();
    }

    ScrollTrigger.create({
      trigger: block,
      start: "top 90%",
      once: true,
      onEnter: () => {
        function next() {
          if (current < lines.length) {
            typeLine(lines[current], () => {
              current++;
              setTimeout(next, 700); // Pause between lines
            });
          }
        }
        next();
      }
    });
  });

  // Reveal end scenes (fade in on scroll)
  ['#scene-help', '#scene-ignore', '#ending'].forEach(selector => {
    const section = document.querySelector(selector);
    if (section) {
      gsap.set(section, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: section,
        start: 'top 80%',
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
});

// Function to scroll to any scene with padding offset
function goToScene(id) {
  const section = document.getElementById(id);
  if (section) scrollToScene(section);
}

// Smooth scroll with offset helper
function scrollToScene(targetSection) {
  const offset = 80; // Adjust this as needed
  const targetY = targetSection.getBoundingClientRect().top + window.scrollY - offset;

  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y: targetY },
    ease: "power2.inOut"
  });
}

// Scroll back to top
document.getElementById('backToTop')?.addEventListener('click', () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: 0 },
    ease: "power2.inOut"
  });
});