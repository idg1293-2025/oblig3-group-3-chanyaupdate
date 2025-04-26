// Select all sections and articles to observe
// will add names from html later so it works 
const observedEls = document.querySelectorAll("section, article");

// IntersectionObserver callback
function callback(entries, observer) {
    entries.forEach((entry) => {
        const hiddenClass = entry.target.dataset.hidden;

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (hiddenClass) entry.target.classList.remove(hiddenClass);
        } else {
            entry.target.classList.remove("show");
            if (hiddenClass) entry.target.classList.add(hiddenClass);
        }
    });
}

// Observer options
const options = {
    rootMargin: "-10% 0%",
};

// Create observer instance
const observer = new IntersectionObserver(callback, options);

// Observe each element
observedEls.forEach((el) => observer.observe(el));