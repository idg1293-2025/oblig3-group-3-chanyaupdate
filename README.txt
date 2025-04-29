Documentation: 

Oblig3 

Structure: 
- We used a simple structure in our project with one scss file with variables, styling and animations etc. 
- Then the js and images are in assets 
- The html stays outside and we moved the task in its own folder to tidy it.

---

HERO SECTION:
The hero section is the opening visual of the site. It uses a background image and layered animated elements such as the Earth and clouds. 
The section is divided into two parts:
- .hero-items: Includes the animated Earth image and multiple cloud images floating gently.
- .hero-content: Includes a headline, a description paragraph, and a "Start" button that begins the interactive experience.
Animations in the hero are done using simple CSS keyframes to create floating effects on the Earth and clouds.

---

SCSS (CSS Styling):
The SCSS controls the overall design of the website and makes it responsive.
- Global Variables: Colors, fonts, and sizes are declared at the top for easy management.
- Body and Typography: The body uses 'Courier Prime' for text and 'Poppins' for titles, with a dark background.
- Images: All images are styled to be responsive and cover the screen.
- Text blocks (.text-block, .middle-text, .end-message) are initially hidden (opacity: 0, moved down) and styled with padding, font settings, and transitions for smooth entrance animations.
- Hero Section (.screen--hero): Designed to take up the full viewport (100vh), center the hero content, and create a smooth animated background experience using float animations on images.
- Responsive Design: Special styles ensure the hero section adjusts nicely for smaller screens below 700px wide.

Animations:
- @keyframes floatClouds and floatEarth are used to create subtle, looping floating animations for the hero items to make the page feel more alive.

---

JAVASCRIPT:
GSAP (GreenSock Animation Platform) is used for advanced, smooth animation handling.

1. Smooth Scroll (ScrollToPlugin):
- When the user clicks the "Start" button, the page smoothly scrolls down to the first story section.
- This is handled with `gsap.to()` using the ScrollToPlugin for a controlled, smooth scrolling experience.

2. Scroll-triggered Text Animation (ScrollTrigger):
- As the user scrolls down the page, text blocks (.text-block, .middle-text, and .end-message) fade in and move upwards into view.
- This is achieved by registering ScrollTrigger and using it to watch each text element.
- GSAP sets the initial hidden state and then animates each element when it enters 80% down the viewport.

---

Why GSAP?
- We chose gsap  because it allows for smoother, more customizable animations compared to basic CSS transitions or vanilla JavaScript.
- We also focused on images and text and p5 would be better for svg animations. 
- It offers better performance, ease of timing control, and professional scroll-triggered animations.

---
Future Improvements:
If time allowed, we would add subtle ambient background sound, adaptive scroll speeds, and an animated sprout or star as a final visual element after the final message.
