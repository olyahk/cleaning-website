// Put the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Fake form submit (so it feels real without backend)
// Later we can connect it to Google Forms / Formspree / EmailJS
const quoteForm = document.getElementById("quoteForm");
const formNote = document.getElementById("formNote");

quoteForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops page refresh
  formNote.textContent = "Sent! (Demo) — Next we’ll connect this to a real inbox.";
  quoteForm.reset();
});
