// Smooth fade-in animation for main content
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  main.style.opacity = 0;
  main.style.transition = "opacity 1.5s ease";

  setTimeout(() => {
    main.style.opacity = 1;
  }, 300);

  // Typing effect (optional)
  const text = "India’s #1 food delivery app";
  const boldText = main.querySelector("p b");
  let index = 0;

  function typeText() {
    if (index <= text.length) {
      boldText.textContent = text.slice(0, index++);
      setTimeout(typeText, 60);
    }
  }

  typeText();
});
