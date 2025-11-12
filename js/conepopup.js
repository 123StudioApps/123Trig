// conePopup.js
import * as THREE from "https://esm.sh/three@0.177.0";
import { OrbitControls } from "https://esm.sh/three@0.177.0/examples/jsm/controls/OrbitControls.js";

let renderer, camera, controls, scene, pyramid;
let sides = 3,
  speed = 0.02;
let sideCountDisplay; 

export function initConePopup() {
const popupHTML = `
  <div id="popupContainer" style="display:none;">
    <div id="popupInner">
      <button id="closeBtn">✕</button>
      <div id="ui">
        <label for="speedSlider">Speed:</label>
        <input type="range" id="speedSlider" min="0.001" max="0.1" step="0.001" value="0.02" />
        <span id="speedValue">0.02</span>
      </div>
      <div id="sideCounter">Sides: <span id="sideCount">3</span></div>
      <div id="canvasContainer"></div>
    </div>
  </div>`;


  // 🔧 1. inject popup
  const target = document.getElementById('cone-popup-container');
  if (target) target.innerHTML = popupHTML;
  else document.body.insertAdjacentHTML('beforeend', popupHTML);

  // 🔧 2. wire close button
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.onclick = hideConePopup;

  // 🔧 3. grab UI handles
  const speedSlider = document.getElementById("speedSlider");
  const speedValue = document.getElementById("speedValue");
  sideCountDisplay = document.getElementById("sideCount");

  speedSlider.addEventListener("input", () => {
    speed = parseFloat(speedSlider.value);
    speedValue.textContent = speed.toFixed(3);
  });

  // 🔧 4. start 3D scene
  const container = document.getElementById('canvasContainer');
  if (!container) {
    console.error('❌ canvasContainer not found');
    return;
  }

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 1, 6);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.target.set(0, 1, 0);
  controls.update();

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7.5);
  scene.add(light);

  animate();

  window.addEventListener("resize", () => {
    if (!camera || !renderer) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}


export function showConePopup() {
  const popup = document.getElementById("popupContainer");
  popup.style.display = "flex";

  requestAnimationFrame(() => {
    console.log("📣 showConePopup triggered");
    const container = document.getElementById("canvasContainer");
    const w = container.clientWidth;
    const h = container.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    controls.update();
  });
  
}
export function hideConePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

function createPyramid(s, h = 2) {
  return new THREE.Mesh(
    new THREE.ConeGeometry(1, h, s),
    new THREE.MeshNormalMaterial({ wireframe: true })
  );
}

function updatePyramid() {
  if (pyramid) scene.remove(pyramid);
  pyramid = createPyramid(Math.floor(sides));
  pyramid.rotation.y = Math.PI / 4;
  pyramid.position.y = 1;
  scene.add(pyramid);
  sideCountDisplay.textContent = Math.floor(sides);
}

function animate() {
  requestAnimationFrame(animate);
  sides += speed;
  if (sides > 100) sides = 3;
  updatePyramid();
  controls.update();
  renderer.render(scene, camera);
}
