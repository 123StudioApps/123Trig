// js/common.js
document.addEventListener("DOMContentLoaded", () => {
  // Inject shared header
  fetch("/partials/header.html")
    .then((r) => r.text())
    .then((html) => {
      document.getElementById("site-header").innerHTML = html;

      // 👉 Notify other scripts that header (and its elements) are ready
      window.dispatchEvent(new Event("header-ready"));
    })
    .catch((err) => console.error("Header load error:", err));

  // Inject shared footer (if exists)
  fetch("/partials/footer.html")
    .then((r) => r.text())
    .then((html) => document.body.insertAdjacentHTML("beforeend", html))
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

// --- Inject Google Analytics ---
(function loadAnalytics() {
  if (window.gtag) return; // prevent double load

  // create script tag for gtag.js
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-7TLKLNJ9HN";
  document.head.appendChild(gaScript);

  // configure analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", "G-7TLKLNJ9HN");
})();

// --- Inject Google AdSense (Auto Ads) ---
(function loadAdSense() {
  if (document.querySelector('script[src*="adsbygoogle.js"]')) return; // prevent duplicate load

  const adScript = document.createElement("script");
  adScript.async = true;
  adScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4301378904417353";
  adScript.crossOrigin = "anonymous";
  document.head.appendChild(adScript);

  // optional: add meta tag for account verification if not already in DOM
  if (!document.querySelector('meta[name="google-adsense-account"]')) {
    const meta = document.createElement("meta");
    meta.name = "google-adsense-account";
    meta.content = "ca-pub-4301378904417353";
    document.head.appendChild(meta);
  }
})();