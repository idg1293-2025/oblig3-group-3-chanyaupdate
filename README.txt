Documentation: 

Oblig3 

https://github.com/idg1293-2025/oblig3-group-3.git

## How to Run the Project

1. Download or clone the project folder from GitHub.
2. Open the `index.html` file in your browser (double click or drag into a browser window).
3. Make sure the file structure is preserved (HTML, styles, and assets must remain in their folders).
4. No installation is required – everything runs in the browser.

Recommended browser: Chrome or Firefox (to ensure GSAP and animations work smoothly).


STORYBOARD:
1. Hero Section
Visual: Floating Earth and clouds with a dark, atmospheric background
Text: Title and description of the project
Interaction: User clicks “Start” to begin the story

2–3. Medical imagery
Visual: Earth’s medical record, doctor entering the room
Text: No dialogue – quiet introduction
Purpose: Establish mood and mystery

4–5. Dialogue begins
Visual: Earth in the room
Text: “Hello, Earth. What brings you here today?”
Interaction: Scroll to reveal emotional dialogue slowly

6–9. Earth opens up emotionally
Visual: Close-up images of Earth
Text: Descriptions of environmental degradation
Effect: Deeper emotional tone builds

10–13. Conflict builds
Visual: Earth starts to realize the truth
Text: “You’re not here to heal me…”
Purpose: Emotional turning point

14. Spotlight scene
Visual: Radial spotlight effect focuses on Earth
Text: “No. Not like this.”
Mood: Reflection and realization

15–25. Flashback & memory
Visual: Series of dark, atmospheric images
Text: “There was warmth… strength… breath…”
Effect: Poetic pacing, environmental nostalgia

26–36. Betrayal of nature
Visual: Earth’s face; emotional darkness
Text: “They silenced the winds... burned the forests…”
Purpose: Peak of emotional intensity

37. Glitch sequence
Visual: Background starts to glitch and distort
Text: “I remember now.”
Effect: Glitch intensifies → white flash → blackout

38. Final messages
Visual: Black screen
Text:
“Some endings are chosen by silence.”
“To turn away is still a choice.”
“This is the only home we have.”
“Take action. Now.”
Effect: White text fades in one by one → powerful ending

Structure: 
-  I used a simple structure in our project with one scss file with variables, styling and animations etc. 
- Then the js and images are in assets 
- The html stays outside and we moved the task in its own folder to tidy it.

UPDATE/ improvements:
- I used more classes but kept a similar structures 
- I wanted to shorten the story but keep the same concept 

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

UPDATE/ improvements:
- I added a new method of compiling css styling for the cloud which made the code abit shorter and easier to manage and look at. 

Animations:
- @keyframes floatClouds and floatEarth are used to create subtle, looping floating animations for the hero items to make the page feel more alive.
- @keyframes for the cloud as well with some delay 

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

JavaScript Adjustments:
The original JavaScript handled smooth scrolling from the Hero section and basic text fades.
As the project developed into a full scroll-based narrative, we had to extend the JavaScript to support multiple sections, control text fade timings with GSAP ScrollTrigger, trigger glitch animations using IntersectionObserver, and coordinate the blackout sequence.

These adjustments allowed the story to evolve naturally as users scrolled, matching the intended emotional pacing and creating a seamless transition between scenes.

UPDATE: 
- I kept the java the same for the scroll trigger but added spesific ones for dialogs and interactivity 



Animations used:
- Floats (earth and cloud)
- Text-fade in 
- Hero button hover 

------
LIVE SERVER: https://chanyas.folk.ntnu.no/tellus-climatechange/oblig3.group-3-chanyaupdate/index.html