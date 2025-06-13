let dict = {};

function round(n) {
  return isNaN(n) ? "" : Number(n).toFixed(2);
}

function updateSquareAndCube(dict, lang) {
  const a = parseFloat(document.getElementById("square-a").value);
  const aa = parseFloat(document.getElementById("cube-a").value);
  if (!isNaN(a)) {
    document.getElementById("square-perim").textContent = `${
      dict[lang]["perimeter"]
    } = ${round(4 * a)} units`;
    document.getElementById("square-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(a * a) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("area-cube").textContent =
      dict[lang]["area"] +
      " = " +
      round(6 * aa * aa) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("vol-cube").textContent =
      dict[lang]["volume"] +
      " = " +
      round(aa * aa * aa) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("square-perim").textContent = "";
    document.getElementById("square-area").textContent = "";
    document.getElementById("area-cube").textContent = "";
    document.getElementById("vol-cube").textContent = "";
  }
}

function updateRectangleAndPrism(dict, lang) {
  const l = parseFloat(document.getElementById("rect-l").value);
  const w = parseFloat(document.getElementById("rect-w").value);
  const pl = parseFloat(document.getElementById("prism-l").value);
  const pw = parseFloat(document.getElementById("prism-w").value);
  const ph = parseFloat(document.getElementById("prism-h").value);

  if (!isNaN(l) && !isNaN(w)) {
    document.getElementById("rect-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(2 * (l + w)) +
      " " +
      dict[lang]["units"];
    document.getElementById("rect-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(l * w) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    document.getElementById("rect-perim").textContent = "";
    document.getElementById("rect-area").textContent = "";
  }

  if (!isNaN(pl) && !isNaN(pw) && !isNaN(ph)) {
    document.getElementById("prism-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(2 * (pl * pw + pl * ph + pw * ph)) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("prism-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round(pl * pw * ph) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("prism-area").textContent = "";
    document.getElementById("prism-vol").textContent = "";
  }
}

function updateTriangleAndPyramid(dict, lang) {
  const b = parseFloat(document.getElementById("tri-b").value);
  const h = parseFloat(document.getElementById("tri-h").value);
  const pb = parseFloat(document.getElementById("pyr-b").value);
  const ph = parseFloat(document.getElementById("pyr-h").value);
  const pH = parseFloat(document.getElementById("pyr-H").value);

  if (!isNaN(b) && !isNaN(h)) {
    document.getElementById("tri-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      dict[lang]["not-implemented"];
    document.getElementById("tri-area").textContent =
      dict[lang]["area"] +
      " = " +
      round((b * h) / 2) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    document.getElementById("tri-perim").textContent = "";
    document.getElementById("tri-area").textContent = "";
  }

  if (!isNaN(pb) && !isNaN(ph) && !isNaN(pH)) {
    document.getElementById("pyr-area").textContent =
      dict[lang]["area"] + " = " + dict[lang]["not-implemented"];
    document.getElementById("pyr-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round((pb * ph * pH) / 6) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("pyr-area").textContent = "";
    document.getElementById("pyr-vol").textContent = "";
  }
}

function updateCircleAndSphere(dict, lang) {
  const r = parseFloat(document.getElementById("circ-r").value);
  const rs = parseFloat(document.getElementById("sphe-r").value);
  if (!isNaN(r)) {
    const pi = Math.PI;
    document.getElementById("circ-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(2 * pi * r) +
      " " +
      dict[lang]["units"];
    document.getElementById("circ-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(pi * r * r) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("sph-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(4 * pi * rs * rs) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("sph-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round((4 / 3) * pi * rs * rs * rs) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("circ-perim").textContent = "";
    document.getElementById("circ-area").textContent = "";
    document.getElementById("sph-area").textContent = "";
    document.getElementById("sph-vol").textContent = "";
  }
}

function updateCylinderAndCone(dict, lang) {
  const rCyl = parseFloat(document.getElementById("cyl-r").value);
  const hCyl = parseFloat(document.getElementById("cyl-h").value);
  const rCone = parseFloat(document.getElementById("cone-r").value);
  const hCone = parseFloat(document.getElementById("cone-h").value);
  const pi = Math.PI;

  if (!isNaN(rCyl) && !isNaN(hCyl)) {
    document.getElementById("cyl-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(2 * pi * rCyl * rCyl + 2 * pi * rCyl * hCyl) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("cyl-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round(pi * rCyl * rCyl * hCyl) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("cyl-area").textContent = "";
    document.getElementById("cyl-vol").textContent = "";
  }

  if (!isNaN(rCone) && !isNaN(hCone)) {
    const slant = Math.sqrt(rCone * rCone + hCone * hCone);
    document.getElementById("cone-area").textContent =
      dict[lang]["area"] +
      " ≈ " +
      round(pi * rCone * (rCone + Math.sqrt(rCone * rCone + hCone * hCone))) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("cone-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round((1 / 3) * pi * rCone * rCone * hCone) +
      " " +
      dict[lang]["units"] +
      "³";
  } else {
    document.getElementById("cone-area").textContent = "";
    document.getElementById("cone-vol").textContent = "";
  }
}

function loadLang(lang) {
  fetch("lang.json")
    .then((res) => res.json())
    .then((json) => {
      dict = json;

      if (!dict[lang]) {
        console.warn("Unknown language code:", lang, "→ falling back to 'en'");
        lang = "en";
      }

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[lang] && dict[lang][key]) {
          el.innerHTML = dict[lang][key];
        }
      });

      document.documentElement.lang = lang;

      updateSquareAndCube(dict, lang);
      updateRectangleAndPrism(dict, lang);
      updateTriangleAndPyramid(dict, lang);
      updateCircleAndSphere(dict, lang);
      updateCylinderAndCone(dict, lang);
    });
}

// // Detect initial language
// const defaultLang = navigator.language.slice(0, 2);
// const supportedLangs = ["en", "es", "fr", "pt", "de", "it"];
// const initialLang = supportedLangs.includes(defaultLang) ? defaultLang : "en";

// Event listeners
document.querySelectorAll('input[type="number"]').forEach((e) => {
  e.addEventListener("input", () => {
    fetch("lang.json")
      .then((res) => res.json())
      .then((dict) => {
        updateSquareAndCube(dict, document.documentElement.lang);
        updateRectangleAndPrism(dict, document.documentElement.lang);
        updateTriangleAndPyramid(dict, document.documentElement.lang);
        updateCircleAndSphere(dict, document.documentElement.lang);
        updateCylinderAndCone(dict, document.documentElement.lang);
      });
  });
});

// loadLang(initialLang);
// document.getElementById('lang-switcher').value = initialLang;

const langEl = document.getElementById("lang-switcher");
if (langEl) {
  langEl.value = initialLang;
  langEl.addEventListener("change", () => {
    loadLang(langEl.value);
  });
  loadLang(initialLang);
}
