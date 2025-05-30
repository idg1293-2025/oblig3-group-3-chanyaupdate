// Here i added detailed notes and comments for better undertanding and also that i can use for my js practices :) 
// I took this opportunity to learn more about GSAP and different js functions which benefits me in the upcoming exam so that is why there are small notes 

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// Run when the entire HTML document is fully loaded and parsed
document.addEventListener('DOMContentLoaded', () => {
  // === Scroll to first scene on "Start" button click ===
  const startButton = document.getElementById('startButton'); // Select the Start button
  const firstScene = document.querySelector('#scene1');       // Select the first scene section
  // Add click listener if button and scene exist, scroll smoothly to first scene
  startButton?.addEventListener('click', () => scrollToScene(firstScene));

  // this will animate content blocks and middle text as they enter/leave viewport on scroll ===
  document.querySelectorAll('.text-block, .middle-text').forEach(block => {
    // Initially hide the block and move it down 20px (ready for animation)
    gsap.set(block, { opacity: 0, y: 20 });

    // Create scroll trigger linked to this block
    ScrollTrigger.create({
      trigger: block,         // Element to watch
      start: 'top 90%',       // Animation start point relative to viewport
      end: 'bottom 20%',      // Animation end point relative to viewport
      scrub: 0.5,             // Smooth scrubbing tied to scroll progress
      onEnter: () => gsap.to(block, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }),      // Fade in and slide up
      onLeave: () => gsap.to(block, { opacity: 0, y: -20, duration: 1.5, ease: 'power2.in' }),     // Fade out and slide up out of view
      onEnterBack: () => gsap.to(block, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }),  // Fade in and slide down on reverse scroll
      onLeaveBack: () => gsap.to(block, { opacity: 0, y: 20, duration: 1.5, ease: 'power2.in' })   // Fade out and slide down when scrolling back
    });
  });

  // Scene 5: Manual typing effect for dialog facts (interactive)
  // Define the facts to be typed out in the dialog
  // and track the current index and typing state
  const facts = [
    "Deforestation destroys 10 million hectares of forest every year.",
    "Over 800 million people go to bed hungry each night.",
    "Air pollution causes 7 million premature deaths annually."
  ];
  let currentIndex = 0;  // Track which fact to show next
  let isTyping = false;  // Track if typing is in progress
  const dialogLine = document.querySelector('.dialog-line'); // Text container for typing effect
  const continueBtn = document.getElementById('continue-btn'); // Button to advance dialog

  // Function to type text letter by letter
  function typeText(text, callback) {
    let i = 0;
    dialogLine.textContent = '';  // Clear previous text
    isTyping = true;              // Mark typing started

    const interval = setInterval(() => {
      if (i < text.length) {
        dialogLine.textContent += text.charAt(i++);  // Add one char at a time
      } else {
        clearInterval(interval);  // Stop typing when done
        isTyping = false;         // Mark typing finished
        callback?.();             // Call callback if provided
      }
    }, 40); // Speed of typing in ms per character
  }

  // Button click event (listnener) to trigger typing next fact or disable button when done
  continueBtn?.addEventListener('click', () => {
    if (isTyping) return;  // Prevent spamming button while typing
    if (currentIndex < facts.length) {
      typeText(facts[currentIndex], () => currentIndex++);  // Type next fact
    } else {
      typeText("I am sick! and...");  // Final message
      continueBtn.disabled = true;    // Disable button after final message
    }
  });

  // this is the Fade-in animation for final scenes as user scrolls down 
  ['#scene-help', '#scene-ignore', '#ending'].forEach(id => {
    const el = document.querySelector(id);
    if (!el) return;

    // Set initial state hidden and offset down
    gsap.set(el, { opacity: 0, y: 50 });

    // Create scroll trigger to fade in and slide up when scene enters viewport
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out'
        });
        el.classList.add('visible-scene'); // Optional: add class for CSS if needed
      }
    });
  });

  // Smooth scroll to top on Back to Top button click 
  document.getElementById('backToTop')?.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: 'power2.inOut'
    });
  });
});

// 1Helper: Scroll smoothly to a scene by ID 
function goToScene(id) {
  const section = document.getElementById(id);
  if (section) scrollToScene(section);
}

// 2Helper: Perform the smooth scrolling animation to target element 
function scrollToScene(target) {
  const y = target.getBoundingClientRect().top + window.pageYOffset;
  gsap.to(window, {
    duration: 1.5,
    scrollTo: { y },
    ease: 'power2.inOut'
  });
}

// This animate each text block inside .scene-story on scroll ===
document.querySelectorAll('.scene-story .text-block').forEach(block => {
  // Set initial hidden and offset state
  gsap.set(block, { opacity: 0, y: 30 });

  ScrollTrigger.create({
    trigger: block,
    start: 'top 90%',
    onEnter: () => {
      gsap.to(block, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      });
    },
    onLeaveBack: () => {
      gsap.to(block, { opacity: 0, y: 30, duration: 1.2, ease: 'power2.in' });
    }
  });
});