// --- sincostan.js : only for the sin/cos/tan page ---

window.addEventListener("i18n-ready", () => {
  const lang = window.lang;
  const dict = window.dict;

  const $ = (id) => document.getElementById(id);
  const els = ["angle", "a", "b", "c", "mode"].map((id) => $(id));
  els.forEach((el) => el && el.addEventListener("input", compute));

  function round6(x) {
    return Number.isFinite(x) ? Math.round(x * 1e6) / 1e6 : NaN;
  }

  function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
  }

  function clearAll() {
    ["sin", "cos", "tan", "out_a", "out_b", "out_c", "thetaOut", "phiOut"].forEach((id) => {
      const e = $(id);
      if (e) e.textContent = "NA";
    });
  }

  function fillOutputs(s, co, ta, theta, phi, a, b, c) {
    const put = (id, val) => {
      const e = $(id);
      if (e) e.textContent = Number.isFinite(val) ? round6(val) : "NA";
    };
    put("sin", s);
    put("cos", co);
    put("tan", ta);
    put("out_a", a);
    put("out_b", b);
    put("out_c", c);
    const mode = $("mode")?.value;
    const thetaEl = $("thetaOut");
    if (thetaEl)
      thetaEl.textContent = Number.isFinite(theta)
        ? mode === "deg"
          ? round6((theta * 180) / Math.PI) + " deg"
          : round6(theta) + " rad"
        : "NA";
    const phiEl = $("phiOut");
    if (phiEl)
      phiEl.textContent = Number.isFinite(phi)
        ? mode === "deg"
          ? round6((phi * 180) / Math.PI) + " deg"
          : round6(phi) + " rad"
        : "NA";
  }

  function compute() {
    const warn = $("warn");
    if (warn) warn.textContent = "";

    const mode = $("mode")?.value;
    const A = parseFloat($("angle")?.value);
    const a = parseFloat($("a")?.value);
    const b = parseFloat($("b")?.value);
    const c = parseFloat($("c")?.value);

    const given = [A, a, b, c].filter(Number.isFinite).length;
    if (given < 2) {
      clearAll();
      if (warn)
        warn.innerHTML =
          dict[lang]["trig-input-hint"] ||
          "Give any two inputs (angle+side or two sides).";
      return;
    }
    if (given > 2) {
      clearAll();
      if (warn)
        warn.innerHTML =
          dict[lang]["trig-input-error"] ||
          "Too many inputs — setup invalid.";
      return;
    }

    let theta = Number.isFinite(A)
      ? mode === "deg"
        ? (A * Math.PI) / 180
        : A
      : NaN;

    let a2 = a, b2 = b, c2 = c;
    if (Number.isFinite(a2) && Number.isFinite(b2) && !Number.isFinite(c2)) c2 = Math.hypot(a2, b2);
    if (Number.isFinite(a2) && Number.isFinite(c2) && !Number.isFinite(b2)) b2 = Math.sqrt(Math.max(c2 * c2 - a2 * a2, 0));
    if (Number.isFinite(b2) && Number.isFinite(c2) && !Number.isFinite(a2)) a2 = Math.sqrt(Math.max(c2 * c2 - b2 * b2, 0));

    if (!Number.isFinite(theta)) {
      if (Number.isFinite(a2) && Number.isFinite(c2) && c2 > 0)
        theta = Math.asin(clamp(a2 / c2, -1, 1));
      else if (Number.isFinite(b2) && Number.isFinite(c2) && c2 > 0)
        theta = Math.acos(clamp(b2 / c2, -1, 1));
      else if (Number.isFinite(a2) && Number.isFinite(b2) && b2 !== 0)
        theta = Math.atan(a2 / b2);
    }

    if (Number.isFinite(theta)) {
      if (!Number.isFinite(a2) && Number.isFinite(c2)) a2 = c2 * Math.sin(theta);
      if (!Number.isFinite(b2) && Number.isFinite(c2)) b2 = c2 * Math.cos(theta);
      if (!Number.isFinite(c2) && Number.isFinite(a2)) c2 = a2 / Math.sin(theta);
      if (!Number.isFinite(c2) && Number.isFinite(b2)) c2 = b2 / Math.cos(theta);
      if (!Number.isFinite(a2) && Number.isFinite(b2)) a2 = b2 * Math.tan(theta);
      if (!Number.isFinite(b2) && Number.isFinite(a2)) b2 = a2 / Math.tan(theta);
    }

    const phi = Number.isFinite(theta) ? Math.PI / 2 - theta : NaN;
    const s = Math.sin(theta || NaN);
    const co = Math.cos(theta || NaN);
    const ta = Math.tan(theta || NaN);
    fillOutputs(s, co, ta, theta, phi, a2, b2, c2);
  }
});
