
function round(n) {
  return isNaN(n) ? '' : Number(n).toFixed(2);
}

function updateSquareAndCube(dict, lang) {
  const a = parseFloat(document.getElementById('square-a').value);
  const aa = parseFloat(document.getElementById('cube-a').value);
  if (!isNaN(a)) {
    document.getElementById('square-perim').textContent = `${dict[lang]["square-perimeter"].split("=")[0]} = ${round(4 * a)} units`;
    document.getElementById('square-area').textContent = `${dict[lang]["square-area"].split("=")[0]} = ${round(a * a)} units²`;
    document.getElementById('area-cube').textContent = `${dict[lang]["cube-area"].split("=")[0]} = ${round(6 * aa * aa)} units²`;
    document.getElementById('vol-cube').textContent = `${dict[lang]["cube-volume"].split("=")[0]} = ${round(aa * aa * aa)} units³`;
  } else {
    document.getElementById('square-perim').textContent = '';
    document.getElementById('square-area').textContent = '';
    document.getElementById('area-cube').textContent = '';
    document.getElementById('vol-cube').textContent = '';
  }
}

function updateRectangleAndPrism(dict, lang) {
  const l = parseFloat(document.getElementById('rect-l').value);
  const w = parseFloat(document.getElementById('rect-w').value);
  const pl = parseFloat(document.getElementById('prism-l').value);
  const pw = parseFloat(document.getElementById('prism-w').value);
  const ph = parseFloat(document.getElementById('prism-h').value);

  if (!isNaN(l) && !isNaN(w)) {
    document.getElementById('rect-perim').textContent = `${dict[lang]["rect-perimeter"].split("=")[0]} = ${round(2 * (l + w))} units`;
    document.getElementById('rect-area').textContent = `${dict[lang]["rect-area"].split("=")[0]} = ${round(l * w)} units²`;
  } else {
    document.getElementById('rect-perim').textContent = '';
    document.getElementById('rect-area').textContent = '';
  }

  if (!isNaN(pl) && !isNaN(pw) && !isNaN(ph)) {
    document.getElementById('prism-area').textContent = `${dict[lang]["prism-area"].split("=")[0]} = ${round(2 * (pl * pw + pl * ph + pw * ph))} units²`;
    document.getElementById('prism-vol').textContent = `${dict[lang]["prism-volume"].split("=")[0]} = ${round(pl * pw * ph)} units³`;
  } else {
    document.getElementById('prism-area').textContent = '';
    document.getElementById('prism-vol').textContent = '';
  }
}

function updateTriangleAndPyramid(dict, lang) {
  const b = parseFloat(document.getElementById('tri-b').value);
  const h = parseFloat(document.getElementById('tri-h').value);
  const pb = parseFloat(document.getElementById('pyr-b').value);
  const ph = parseFloat(document.getElementById('pyr-h').value);
  const pH = parseFloat(document.getElementById('pyr-H').value);

  if (!isNaN(b) && !isNaN(h)) {
    document.getElementById('tri-perim').textContent = `${dict[lang]["triangle-perimeter"].split("=")[0]} ≈ ${round(2 * b)} units`;
    document.getElementById('tri-area').textContent = `${dict[lang]["triangle-area"].split("=")[0]} = ${round((b * h) / 2)} units²`;
  } else {
    document.getElementById('tri-perim').textContent = '';
    document.getElementById('tri-area').textContent = '';
  }

  if (!isNaN(pb) && !isNaN(ph) && !isNaN(pH)) {
    document.getElementById('pyr-area').textContent = `${dict[lang]["pyramid-area"].split("=")[0]} ≈ ${round(pb * ph + pb * pb)} units²`;
    document.getElementById('pyr-vol').textContent = `${dict[lang]["pyramid-volume"].split("=")[0]} = ${round((pb * pb * pH) / 3)} units³`;
  } else {
    document.getElementById('pyr-area').textContent = '';
    document.getElementById('pyr-vol').textContent = '';
  }
}

function updateCircleAndSphere(dict, lang) {
  const r = parseFloat(document.getElementById('circ-r').value);
  const rs = parseFloat(document.getElementById('sphe-r').value);
  if (!isNaN(r)) {
    const pi = Math.PI;
    document.getElementById('circ-perim').textContent = `${dict[lang]["circle-perimeter"].split("=")[0]} = ${round(2 * pi * r)} units`;
    document.getElementById('circ-area').textContent = `${dict[lang]["circle-area"].split("=")[0]} = ${round(pi * r * r)} units²`;
    document.getElementById('sph-area').textContent = `${dict[lang]["sphere-area"].split("=")[0]} = ${round(4 * pi * rs * rs)} units²`;
    document.getElementById('sph-vol').textContent = `${dict[lang]["sphere-volume"].split("=")[0]} = ${round((4 / 3) * pi * rs * rs * rs)} units³`;
  } else {
    document.getElementById('circ-perim').textContent = '';
    document.getElementById('circ-area').textContent = '';
    document.getElementById('sph-area').textContent = '';
    document.getElementById('sph-vol').textContent = '';
  }
}

function updateCylinderAndCone(dict, lang) {
  const rCyl = parseFloat(document.getElementById('cyl-r').value);
  const hCyl = parseFloat(document.getElementById('cyl-h').value);
  const rCone = parseFloat(document.getElementById('cone-r').value);
  const hCone = parseFloat(document.getElementById('cone-h').value);
  const pi = Math.PI;

  if (!isNaN(rCyl) && !isNaN(hCyl)) {
    document.getElementById('cyl-area').textContent = `${dict[lang]["cylinder-area"].split("=")[0]} = ${round(2 * pi * rCyl * rCyl + 2 * pi * rCyl * hCyl)} units²`;
    document.getElementById('cyl-vol').textContent = `${dict[lang]["cylinder-volume"].split("=")[0]} = ${round(pi * rCyl * rCyl * hCyl)} units³`;
  } else {
    document.getElementById('cyl-area').textContent = '';
    document.getElementById('cyl-vol').textContent = '';
  }

  if (!isNaN(rCone) && !isNaN(hCone)) {
    const slant = Math.sqrt(rCone * rCone + hCone * hCone);
    document.getElementById('cone-area').textContent = `${dict[lang]["cone-area"].split("=")[0]} ≈ ${round(pi * rCone * (rCone + slant))} units²`;
    document.getElementById('cone-vol').textContent = `${dict[lang]["cone-volume"].split("=")[0]} = ${round((1 / 3) * pi * rCone * rCone * hCone)} units³`;
  } else {
    document.getElementById('cone-area').textContent = '';
    document.getElementById('cone-vol').textContent = '';
  }
}

function loadLang(lang) {
  fetch('lang.json')
    .then(res => res.json())
    .then(dict => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[lang] && dict[lang][key]) {
          el.textContent = dict[lang][key];
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

// Detect initial language
const defaultLang = navigator.language.slice(0, 2);
const supportedLangs = ["en", "es", "fr"];
const initialLang = supportedLangs.includes(defaultLang) ? defaultLang : "en";

// Event listeners
document.querySelectorAll('input[type="number"]').forEach(e => {
  e.addEventListener('input', () => {
    fetch('lang.json')
      .then(res => res.json())
      .then(dict => {
        updateSquareAndCube(dict, document.documentElement.lang);
        updateRectangleAndPrism(dict, document.documentElement.lang);
        updateTriangleAndPyramid(dict, document.documentElement.lang);
        updateCircleAndSphere(dict, document.documentElement.lang);
        updateCylinderAndCone(dict, document.documentElement.lang);
      });
  });
});

loadLang(initialLang);
