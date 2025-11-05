// js/common.js
document.addEventListener("DOMContentLoaded", () => {
  // Inject shared header
  fetch("/partials/header.html")
    .then(r => r.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
      initMenuToggle(); // after injection
    })
    .catch(err => console.error("Header load failed:", err));

  // Inject shared footer (if exists)
  fetch("/partials/footer.html")
    .then(r => r.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html))
    .catch(() => {}); // optional

  // Example: language persistence (if your i18n already handles it, skip)
  const savedLang = localStorage.getItem("lang");
  if (savedLang) document.documentElement.lang = savedLang;
});

function initMenuToggle() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
}
