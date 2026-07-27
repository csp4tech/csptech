(function () {
  const FRAME_COUNT = 300;
  const FRAME_PATH = i => `assets/frames/solar/frame_${String(i + 1).padStart(4, "0")}.jpg`;

  const canvas = document.getElementById("solarCanvas");
  if (!canvas) return; // section not present on this page — no-op

  const ctx = canvas.getContext("2d");
  const stage = document.querySelector(".solar-scroll-section");

  const images = new Array(FRAME_COUNT);
  let currentFrame = 0;

  for (let i = 0; i < FRAME_COUNT; i++) {
    const img = new Image();
    img.src = FRAME_PATH(i);
    if (i === 0) img.onload = () => drawFrame(0);
    images[i] = img;
  }

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawFrame(currentFrame);
  }

  function drawFrame(index) {
    const img = images[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }

  function updateFrameFromScroll() {
    const scrollableHeight = stage.offsetHeight - window.innerHeight;
    const scrollY = window.scrollY - stage.offsetTop;
    let progress = scrollableHeight > 0 ? scrollY / scrollableHeight : 0;
    progress = Math.min(Math.max(progress, 0), 1);

    const frameIndex = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)));
    if (frameIndex !== currentFrame) currentFrame = frameIndex;
    drawFrame(currentFrame);
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateFrameFromScroll(); ticking = false; });
      ticking = true;
    }
  });

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("load", () => { resizeCanvas(); updateFrameFromScroll(); });
  resizeCanvas();
})();
