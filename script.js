
document.addEventListener("DOMContentLoaded", () => {
  // Highlight the active navigation link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function updateActiveLink() {
    let current = "home";

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 150) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${current}`;

      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();

  // Animate project cards when they appear
  const cards = document.querySelectorAll(".project-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cards.forEach((card) => observer.observe(card));
  } else {
    cards.forEach((card) => card.classList.add("visible"));
  }
});
