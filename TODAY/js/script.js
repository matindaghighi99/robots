// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal elements once they scroll into view
const revealTargets = document.querySelectorAll(".reveal, .showcase__content");

if (revealTargets.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));
}

// Darken the navbar once the page is scrolled
const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  },
  { passive: true }
);

// Mobile menu toggle
const toggle = document.querySelector(".navbar__toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (toggle && mobileMenu) {
  const closeMenu = () => {
    toggle.classList.remove("is-open");
    mobileMenu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  // Close the panel after picking a destination
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// Contact form — no backend yet, so acknowledge and reset
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    const success = contactForm.querySelector(".form__success");
    success.hidden = false;
  });
}
