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

function updateParallelogram(dict, lang) {
  const pb = parseFloat(document.getElementById("pllg-b").value);
  const ph = parseFloat(document.getElementById("pllg-h").value);
  const ps = parseFloat(document.getElementById("pllg-s").value);

  if (!isNaN(pb) && !isNaN(ps) ) {
    document.getElementById("pllg-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(2 * (pb + ps)) +
      " " +
      dict[lang]["units"];
    
  } else {
    document.getElementById("pllg-perim").textContent = "";
    
  }

  if (!isNaN(pb) && !isNaN(ph)) {
    document.getElementById("pllg-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(pb * ph) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    
    document.getElementById("pllg-area").textContent = "";
  }
}

function updateRhombus(dict, lang) {
  const rha = parseFloat(document.getElementById("rh-a").value);
  const rd1 = parseFloat(document.getElementById("rh-d1").value);
  const rd2 = parseFloat(document.getElementById("rh-d2").value);

  if (!isNaN(rha) ) {
    document.getElementById("rh-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(4 * (rha)) +
      " " +
      dict[lang]["units"];
    
  } else {
    document.getElementById("rha-perim").textContent = "";
    
  }

  if (!isNaN(rd1) && !isNaN(rd2)) {
    document.getElementById("rh-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(rd1 * rd2)/2 +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    
    document.getElementById("rh-area").textContent = "";
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
      dict[lang]["perimeter"] + " = " + dict[lang]["not-implemented"];
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
      round(2 * r) +
      "π" +
      " = " +
      round(2 * pi * r) +
      " " +
      dict[lang]["units"];
    document.getElementById("circ-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(r * r) +
      "π" +
      " = " +
      round(pi * r * r) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("sph-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(4 * rs * rs) +
      "π" +
      " = " +
      round(4 * pi * rs * rs) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("sph-vol").textContent =
      dict[lang]["volume"] +
      " = (" +
      round(4 * rs * rs * rs) +
      "π)/3" +
      " = " +
      round((4 / 3) * rs * rs * rs) +
      "π" +
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
      round(2 * rCyl * rCyl + 2 * rCyl * hCyl) +
      "π" +
      " = " +
      round(2 * pi * rCyl * rCyl + 2 * pi * rCyl * hCyl) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("cyl-vol").textContent =
      dict[lang]["volume"] +
      " = " +
      round(rCyl * rCyl * hCyl) +
      "π" +
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
      " = (" +
      round(rCone * rCone) +
      " + " +
      round(rCone) +
      "√(" +
      round(rCone * rCone + hCone * hCone) +
      "))π" +
      " = " +
      round(rCone * (rCone + Math.sqrt(rCone * rCone + hCone * hCone))) +
      "π" +
      " = " +
      round(pi * rCone * (rCone + Math.sqrt(rCone * rCone + hCone * hCone))) +
      " " +
      dict[lang]["units"] +
      "²";
    document.getElementById("cone-vol").textContent =
      dict[lang]["volume"] +
      " = (" +
      round(rCone * rCone * hCone) +
      "π)/3" +
      " = " +
      round((1 / 3) * rCone * rCone * hCone) +
      "π" +
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
function updateRightTriangle(dict, lang) {
  const a = parseFloat(document.getElementById("triR-b").value);
  const b = parseFloat(document.getElementById("triR-h").value);

  if (!isNaN(a) && !isNaN(b)) {
    const c = Math.sqrt(a * a + b * b);
    const perim = a + b + c;
    const area = (a * b) / 2;

    document.getElementById("triR-c").textContent =
    "c = " +  
    round(c) + 
    " " + 
    dict[lang]["units"];

    document.getElementById("triR-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(perim) +
      " " +
      dict[lang]["units"];

    document.getElementById("triR-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(area) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    document.getElementById("triR-c").textContent = "";
    document.getElementById("triR-perim").textContent = "";
    document.getElementById("triR-area").textContent = "";
  }
}

function updateIsoscelesTriangle(dict, lang) {
  const b = parseFloat(document.getElementById("triIso-b").value);
  const h = parseFloat(document.getElementById("triIso-h").value);

  if (!isNaN(b) && !isNaN(h)) {
    // Mitad de la base
    const halfBase = b / 2;

    // Lado igual usando Pitágoras: s² = (b/2)² + h²
    const s = Math.sqrt(halfBase * halfBase + h * h);

    // Perímetro y área
    const perim = 2 * s + b;
    const area = (b * h) / 2;

    // Mostrar resultados
    document.getElementById("triIso-side").textContent =
      round(s) + " " + dict[lang]["units"];

    document.getElementById("triIso-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(perim) +
      " " +
      dict[lang]["units"];

    document.getElementById("triIso-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(area) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    document.getElementById("triIso-side").textContent = "";
    document.getElementById("triIso-perim").textContent = "";
    document.getElementById("triIso-area").textContent = "";
  }
}

function updateEquilateralTriangle(dict, lang) {
  const a = parseFloat(document.getElementById("triEq-a").value);

  if (!isNaN(a)) {
    // Cálculos
    const h = (Math.sqrt(3) / 2) * a;
    const perim = 3 * a;
    const area = (Math.sqrt(3) / 4) * a * a;

    // Mostrar resultados
    document.getElementById("triEq-h").textContent =
      round(h) + " " + dict[lang]["units"];

    document.getElementById("triEq-perim").textContent =
      dict[lang]["perimeter"] +
      " = " +
      round(perim) +
      " " +
      dict[lang]["units"];

    document.getElementById("triEq-area").textContent =
      dict[lang]["area"] +
      " = " +
      round(area) +
      " " +
      dict[lang]["units"] +
      "²";
  } else {
    document.getElementById("triEq-h").textContent = "";
    document.getElementById("triEq-perim").textContent = "";
    document.getElementById("triEq-area").textContent = "";
  }
}

function updatePENTAG(dict, lang) {
  const a  = parseFloat(document.getElementById("penta-a").value);   // side length
  const ap = parseFloat(document.getElementById("penta-ap").value);  // apothem

  if (!isNaN(a)) {
  document.getElementById("penta-perim").textContent = dict[lang]["perimeter"] + " = " + round(5 * a)  + dict[lang]["units"];
  document.getElementById("penta-area").textContent = dict[lang]["area"] +" = " +round((5 * a * ap )/2)+" " +dict[lang]["units"] +"²";
  }else{
  document.getElementById("penta-perim").textContent = "" ;
  document.getElementById("penta-area").textContent = "";
  }
  }

function updateHEXAG(dict, lang) {
  const a  = parseFloat(document.getElementById("hexa-a").value);   // side length
  // const ap = parseFloat(document.getElementById("hexa-ap").value);  // apothem

  if (!isNaN(a)) {
  document.getElementById("hexa-perim").textContent = dict[lang]["perimeter"] + " = " + round(6 * a)  + dict[lang]["units"];
  document.getElementById("hexa-area").textContent = dict[lang]["area"] +" = " +round((3*(Math.sqrt(3))*a*a)/2)+" " +dict[lang]["units"] +"²";
  }else{
  document.getElementById("hexa-perim").textContent = "" ;
  document.getElementById("hexa-area").textContent = "";
  }
  }


function updateNGon(dict, lang) {
  const n  = parseInt(document.getElementById("ngon-n").value, 10);
  const a  = parseFloat(document.getElementById("ngon-a").value);   // side length
  const ap = parseFloat(document.getElementById("ngon-ap").value);  // apothem

  if (!isNaN(a)) {
  document.getElementById("ngon-r").textContent = "r = " + round(Math.sqrt((a/2)**2 +ap**2)) + dict[lang]["units"];
  document.getElementById("ngon-perim").textContent = dict[lang]["perimeter"] + " = " + round(n * a)  + dict[lang]["units"];
  document.getElementById("ngon-area").textContent = dict[lang]["area"] +" = " +round((n * a * ap )/2)+" " +dict[lang]["units"] +"²";
  }else{
  document.getElementById("ngon-r").textContent = "";
  document.getElementById("ngon-perim").textContent = "" ;
  document.getElementById("ngon-area").textContent = "";
  }
  }

function updateEllipse(dict, lang) {
  const a  = parseFloat(document.getElementById("ell-a").value);   
  const b = parseFloat(document.getElementById("ell-b").value);  

  if (!isNaN(a) && !isNaN(b)) {

  document.getElementById("ell-perim").textContent = dict[lang]["perimeter"] + " = " + NaN;
  document.getElementById("ell-area").textContent = dict[lang]["area"] +" = " + round((Math.PI * a * b )) +" " +dict[lang]["units"] +"²";
  }else{
  
  document.getElementById("ell-perim").textContent = "" ;
  document.getElementById("ell-area").textContent = "";
  }
  }

function updateGenericPrism(dict, lang) {
  const A = parseFloat(document.getElementById("gpris-A").value);
  const P = parseFloat(document.getElementById("gpris-P").value);
  const h = parseFloat(document.getElementById("gpris-h").value);

  if (!isNaN(A) && !isNaN(P) && !isNaN(h)) {
    const V = A * h;
    const S = 2 * A + P * h;
    document.getElementById("gpris-vol").textContent =
      dict[lang]["volume"] + " = " + V.toFixed(2) + " " + dict[lang]["units"] + "³";
    document.getElementById("gpris-area").textContent =
      dict[lang]["surface-area"] + " = " + S.toFixed(2) + " " + dict[lang]["units"] + "²";
  } else {
    document.getElementById("gpris-vol").textContent = "";
    document.getElementById("gpris-area").textContent = "";
  }
}

function updateObliquePrism(dict, lang) {
  const A = parseFloat(document.getElementById("slpr-A").value);
  // const P = parseFloat(document.getElementById("slpr-P").value);
  const h = parseFloat(document.getElementById("slpr-h").value);
  // const l = parseFloat(document.getElementById("slpr-l").value);

  if (!isNaN(A) /*&& !isNaN(P)*/ && !isNaN(h) /*&& !isNaN(l)*/) {
    const V = A * h;
    // const S = 2 * A + P * l;
    document.getElementById("slpr-vol").textContent =
      dict[lang]["volume"] + " = " + V.toFixed(2) + " " + dict[lang]["units"] + "³";
    // document.getElementById("slpr-area").textContent =
    //   dict[lang]["surface-area"] + " = " + S.toFixed(2) + " " + dict[lang]["units"] + "²";
  } else {
    document.getElementById("slpr-vol").textContent = "";
    // document.getElementById("slpr-area").textContent = "";
  }
}

function updateGenericPyramid(dict, lang) {
  const A = parseFloat(document.getElementById("gpyr-A").value);
  // const P = parseFloat(document.getElementById("gpyr-P").value);
  const h = parseFloat(document.getElementById("gpyr-h").value);
  // const l = parseFloat(document.getElementById("gpyr-l").value);

  if (!isNaN(A)  && !isNaN(h) ) {
    const V = (A * h) / 3;
    // const S = A + (P * l) / 2;
    document.getElementById("gpyr-vol").textContent =
      dict[lang]["volume"] + " = " + V.toFixed(2) + " " + dict[lang]["units"] + "³";
    // document.getElementById("gpyr-area").textContent =
    //   dict[lang]["surface-area"] + " = " + S.toFixed(2) + " " + dict[lang]["units"] + "²";
  } else {
    document.getElementById("gpyr-vol").textContent = "";
    // document.getElementById("gpyr-area").textContent = "";
  }
}

function updateObliquePyramid(dict, lang) {
  const A = parseFloat(document.getElementById("slpyr-A")?.value);
  const h = parseFloat(document.getElementById("slpyr-h")?.value);

  if (!isNaN(A) && !isNaN(h)) {
    const V = (A * h) / 3;
    const out = dict[lang]["volume"] + " = " + V.toFixed(2) + " " + dict[lang]["units"] + "³";
    const el = document.getElementById("slpyr-vol");
    if (el) el.textContent = out;
  } else {
    const el = document.getElementById("slpyr-vol");
    if (el) el.textContent = "";
  }

  // optional: clear surface area field if it exists on the card
  const areaEl = document.getElementById("slpyr-area");
  if (areaEl) areaEl.textContent = "";
}



function loadLang(lang) {
  fetch("/data/lang.json")
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
      updateParallelogram(dict, lang);
      updateRhombus(dict, lang);
      updateRightTriangle(dict, lang);
      updateIsoscelesTriangle(dict, lang);
      updateEquilateralTriangle(dict, lang);
      updateTriangleAndPyramid(dict, lang);
      updatePENTAG(dict, lang);
      updateHEXAG(dict, lang);
      updateNGon(dict, lang);
      updateEllipse(dict, lang);
      updateCircleAndSphere(dict, lang);
      updateCylinderAndCone(dict, lang);
      updateGenericPrism(dict, lang);
      updateObliquePrism(dict, lang);
      updateGenericPyramid(dict, lang);
      updateObliquePyramid(dict, lang);
      
    });
}

// // Detect initial language
// const defaultLang = navigator.language.slice(0, 2);
// const supportedLangs = ["en", "es", "fr", "pt", "de", "it"];
// const initialLang = supportedLangs.includes(defaultLang) ? defaultLang : "en";

// Event listeners
document.querySelectorAll('input[type="number"]').forEach((e) => {
  e.addEventListener("input", () => {
    fetch("/data/lang.json")
      .then((res) => res.json())
      .then((dict) => {
        updateSquareAndCube(dict, document.documentElement.lang);
        updateRectangleAndPrism(dict, document.documentElement.lang);
        updateParallelogram(dict, document.documentElement.lang);
        updateRhombus(dict, document.documentElement.lang);
        updateRightTriangle(dict, document.documentElement.lang);
        updateIsoscelesTriangle(dict, document.documentElement.lang);
        updateEquilateralTriangle(dict, document.documentElement.lang);
        updatePENTAG(dict, document.documentElement.lang);
        updateHEXAG(dict, document.documentElement.lang);
        updateNGon(dict, document.documentElement.lang);
        updateEllipse(dict, document.documentElement.lang);
        updateTriangleAndPyramid(dict, document.documentElement.lang);
        updateCircleAndSphere(dict, document.documentElement.lang);
        updateCylinderAndCone(dict, document.documentElement.lang);
        updateGenericPrism(dict, document.documentElement.lang);
        updateObliquePrism(dict, document.documentElement.lang);
        updateGenericPyramid(dict, document.documentElement.lang);
        updateObliquePyramid(dict, document.documentElement.lang)
      });
  });
});
