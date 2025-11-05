// --- i18n.js : global language handler ---

window.dict = {};
window.lang = "en";

function loadLang(lang) {
  return fetch("/data/lang.json")
    .then((res) => res.json())
    .then((json) => {
      window.dict = json;
      if (!json[lang]) lang = "en";
      window.lang = lang;
      document.documentElement.lang = lang;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (json[lang] && json[lang][key]) el.innerHTML = json[lang][key];
      });

      window.dispatchEvent(new Event("i18n-ready"));
    })
    .catch((err) => console.error("i18n load error:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  const supported = ["en","es","fr","pt","de","it","zh","ja"];
  const saved = localStorage.getItem("lang");
  const defaultLang = navigator.language.slice(0,2);
  const lang = supported.includes(saved)
    ? saved
    : supported.includes(defaultLang)
    ? defaultLang
    : "en";

  loadLang(lang);

  // wait for the header-ready event instead of a timeout
  window.addEventListener("header-ready", () => {
    const langEl = document.getElementById("lang-switcher");
    if (langEl) {
      langEl.value = lang;
      langEl.addEventListener("change", () => {
        const newLang = langEl.value;
        localStorage.setItem("lang", newLang);
        loadLang(newLang);
      });
    }
  });
});
