/* dsh-whale-particles — browser half.
 * Compiled-for-the-loader bundle: window.__ModuleLoader__.load({id, factory}).
 * No ESM import/export statements allowed in this file.
 *
 * Engine = whale-dots.html v11 (validated by the author):
 *   - every dot has its own low-frequency smooth force (not a shared field,
 *     not per-frame white noise);
 *   - manual mode: disturbance radiates from the cursor;
 *   - auto (screensaver) mode: waves sweeping the whale artwork from any
 *     360-degree angle + full-screen breathing, no repeated neighbour.
 */
window.__ModuleLoader__.load({
  id: "dsh-whale-particles",
  factory: (require) => {
    "use strict";
    var module = { exports: {} };
    var exports = module.exports;

    /* ------------------------------------------------------------------
     * 鲸鱼剪影路径(内联自 DeepSeek Harness hero 素材,随 dsh-homepage-skin
     * 以 MIT 授权分发;发布前可替换为自绘/合规轮廓)。
     * ------------------------------------------------------------------ */
    var WHALE_PATH = "M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746V14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z";

    /* ---------------- 配置(对应 HTML 原型里作者确认的最终参数) ------------- */
    var CFG = {      repelR: 200,       // 扰动半径 px
      repelA: 6500,      // 径向推斥(净空)
      agiA: 18000,       // 每粒自有力强度
      springS: 140,      // 回位刚度
      damping: 17,       // 阻尼
      density: 4000,     // 鲸鱼点数(目标)
      whaleScale: 0.4,   // 鲸鱼宽度/视口
      baseY: 0.44,
      waveSpeed: 100,
      waveHalf: 100,
      waveDiag: 0.7,
      autoGap: 0,
      dirRandom: true,
      gridOn: true,
      outlineOnly: false,
      shape: "square",
      subject: "whale",       // "whale" 鲸鱼 | "photo" 照片(透明 PNG alpha 蒙版)
      photoAlpha: 32,         // 照片 alpha 阈值 0..255(低于=透明)
      photoInvert: false,
    };

    // 出厂参数快照(“恢复默认值”用;须在读取 localStorage 之前生成)
    var CFG_DEFAULT = JSON.parse(JSON.stringify(CFG));

    // 载入用户保存的参数(localStorage),缺失项用上面的默认值
    var CFG_KEYS = ["repelR", "repelA", "agiA", "springS", "damping", "density",
      "whaleScale", "baseY", "waveSpeed", "waveHalf", "waveDiag", "autoGap",
      "dirRandom", "gridOn", "outlineOnly", "shape",
      "subject", "photoAlpha", "photoInvert"];
    try {
      var savedCfg = JSON.parse(localStorage.getItem("dsh-whale:cfg") || "{}");
      if (savedCfg && typeof savedCfg === "object") {
        for (var kk in savedCfg) {
          if (CFG_KEYS.indexOf(kk) >= 0 && typeof savedCfg[kk] === typeof CFG[kk]) CFG[kk] = savedCfg[kk];
        }
      }
    } catch (e) {}

    /* --------------------- 注入样式(门控于 body 属性) --------------------- */
    var STYLE = "body[data-dsh-whale]{background:transparent}" +
      "html:has(body[data-dsh-whale][data-ds-dark-theme]){background-color:#06090f}" +
      "html:has(body[data-dsh-whale]:not([data-ds-dark-theme])){background-color:#f7f6f3}" +
      "body[data-dsh-whale] .pI_x6G_frame{background:transparent;isolation:isolate}" +
      "body[data-dsh-whale] .wSkVaW_root,body[data-dsh-whale] .ydkMvW_root{background:transparent}" +
      "body[data-dsh-whale][data-ds-dark-theme] .pI_x6G_sidebarCol{background:rgba(9,19,32,.55)}" +
      "body[data-dsh-whale]:not([data-ds-dark-theme]) .pI_x6G_sidebarCol{background:rgba(255,255,255,.5)}" +
      /* 空会话(hero):输入栏整体下移,别挡住鲸鱼;有对话(active)时自然失效 */
      "body[data-dsh-whale] .wSkVaW_root[data-phase=hero] .wSkVaW_composerSeat{margin-top:clamp(380px,56vh,860px)}" +
      "#dsh-whale-particles-layer{position:fixed;inset:0;z-index:-1;pointer-events:none}" +
      "#dsh-whale-particles-layer canvas{width:100%;height:100%;display:block}" +
      "#dsh-whale-chip{position:fixed;right:14px;bottom:14px;z-index:9999;display:flex;align-items:center;gap:8px;" +
        "padding:6px 10px;border-radius:999px;font:12px/1.4 system-ui,sans-serif;cursor:pointer;user-select:none;" +
        "background:rgba(16,24,38,.78);color:#cfe0ff;border:1px solid rgba(255,255,255,.18);" +
        "backdrop-filter:blur(8px);box-shadow:0 4px 14px rgba(0,0,0,.25)}" +
      "#dsh-whale-chip span.whale-mode{font-weight:600}" +
      "#dsh-whale-chip .whale-gear{font-size:13px;opacity:.85}" +
      "#dsh-whale-chip .whale-status{opacity:.65;max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
      "#dsh-whale-panel{position:fixed;top:54px;right:14px;z-index:9999;width:262px;max-height:calc(100vh - 90px);overflow:auto;" +
        "background:rgba(15,23,38,.94);color:#dbe7ff;border:1px solid rgba(255,255,255,.16);border-radius:12px;" +
        "padding:10px 12px 12px;font:12px/1.5 system-ui,sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.38)}" +
      "#dsh-whale-panel h3{margin:0 0 2px;font-size:12px;font-weight:600}" +
      "#dsh-whale-panel .hint3{opacity:.6;margin-bottom:4px}" +
      "#dsh-whale-panel label{display:flex;align-items:center;gap:8px;margin-top:6px}" +
      "#dsh-whale-panel label span{width:96px;flex:none;opacity:.85}" +
      "#dsh-whale-panel input[type=range]{flex:1;min-width:0;accent-color:#4d7cfe}" +
      "#dsh-whale-panel input[type=checkbox]{accent-color:#4d7cfe}" +
      "#dsh-whale-panel .val{width:34px;flex:none;text-align:right;opacity:.75;font-variant-numeric:tabular-nums}" +
      "#dsh-whale-panel .row{display:flex;gap:8px;margin-top:10px}" +
      "#dsh-whale-panel button{flex:1;padding:5px 0;border-radius:8px;border:1px solid rgba(255,255,255,.18);" +
        "background:rgba(255,255,255,.07);color:inherit;cursor:pointer;font:inherit}" +
      "#dsh-whale-panel button.on{background:rgba(77,124,254,.35);border-color:rgba(130,165,255,.85)}";

    var DARK = {
      grid: "rgba(150,180,235,", gridA: 0.10,
      dot: [148, 190, 255], dotA: 0.95,
    };
    var LIGHT = {
      grid: "rgba(70,95,150,", gridA: 0.16,
      dot: [40, 68, 130], dotA: 0.9,
    };

    /* ---------------------------- 状态/工具 ---------------------------- */
    var W = 0, H = 0, dpr = 1;
    var contentCX = 0;      // 鲸鱼水平中心(内容区中心,自动跟随左侧栏宽度)
    var centerTarget = 0;   // 平滑补间的目标中心
    var fish = { pts: [], home: [] };
    var gridPts = [];
    var mouse = { x: -1e4, y: -1e4, active: false };
    var raf = 0, last = 0, running = true;
    var theme = document.body && document.body.hasAttribute("data-ds-dark-theme") ? DARK : LIGHT;
    var auto = { manual: true, item: null, idleAt: 0, lastKind: null, lastAngle: null };
    var disposed = [];

    var smoothstep = (a, b, x) => { var t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    var easeInOut = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
    var frac = (v) => v - Math.floor(v);

    var path = null, bbox = null, testCtx = null;
    var photoA = null, photoUrl = null, photoErr = null, photoLoading = false;

    // ---------- 照片(透明 PNG alpha 蒙版)支持 ----------
    // 统一坐标系:照片宽度 = 20 单位(与鲸鱼路径同一量级,whaleScale 按 bbox 宽度缩放)
    function alphaAt(x, y) {
      if (!photoA) return 0;
      var s = 20 / (photoA.w - 1 || 1);
      var px = Math.min(photoA.w - 1, Math.max(0, Math.round(x / s)));
      var py = Math.min(photoA.h - 1, Math.max(0, Math.round(y / s)));
      return photoA.data[(py * photoA.w + px) * 4 + 3];
    }
    function subjectHit(x, y) {
      if (CFG.subject === "photo" && photoA) {
        var a = alphaAt(x, y);
        return CFG.photoInvert ? a < CFG.photoAlpha : a >= CFG.photoAlpha;
      }
      return !!path && !!testCtx && testCtx.isPointInPath(path, x, y);
    }
    function photoBBoxUnits() {
      var minPx = Infinity, minPy = Infinity, maxPx = -1, maxPy = -1;
      for (var py = 0; py < photoA.h; py++) {
        for (var px = 0; px < photoA.w; px++) {
          var a = photoA.data[(py * photoA.w + px) * 4 + 3];
          var on = CFG.photoInvert ? a < CFG.photoAlpha : a >= CFG.photoAlpha;
          if (on) {
            if (px < minPx) minPx = px;
            if (px > maxPx) maxPx = px;
            if (py < minPy) minPy = py;
            if (py > maxPy) maxPy = py;
          }
        }
      }
      if (minPx === Infinity) return null;
      var s = 20 / (photoA.w - 1 || 1);
      return { minX: minPx * s, minY: minPy * s, maxX: maxPx * s, maxY: maxPy * s };
    }
    function decodePhoto(img) {
      var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
      var sc = Math.min(1, 160 / Math.max(iw, ih));
      var w = Math.max(1, Math.round(iw * sc)), h = Math.max(1, Math.round(ih * sc));
      var cv = document.createElement("canvas");
      cv.width = w; cv.height = h;
      var c2 = null;
      try { c2 = cv.getContext("2d", { willReadFrequently: true }); } catch (e) {}
      if (!c2) c2 = cv.getContext("2d");
      c2.drawImage(img, 0, 0, w, h);
      var id = c2.getImageData(0, 0, w, h);
      photoA = { w: w, h: h, data: new Uint8ClampedArray(id.data.buffer) };
      photoErr = null;
      // 存一个小蒙版 PNG(几 KB)供下次启动用,不保存原图
      try {
        var small = cv.toDataURL("image/png");
        if (small && small.length < 400000) {
          photoUrl = small;
          localStorage.setItem("dsh-whale:photo", small);
        }
      } catch (e) {}
      buildPath();
      resampleWhale();
    }
    function ensurePhotoLoad() {
      if (CFG.subject !== "photo" || photoA || photoLoading) return;
      if (photoUrl === null) { try { photoUrl = localStorage.getItem("dsh-whale:photo") || null; } catch (e) {} }
      if (!photoUrl) return;
      photoLoading = true;
      var img = new Image();
      img.onload = function () { photoLoading = false; try { decodePhoto(img); } catch (e) {} };
      img.onerror = function () { photoLoading = false; photoErr = "蒙版读取失败"; };
      img.src = photoUrl;
    }
    function importPhoto(file) {
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var url = String(rd.result);
          CFG.subject = "photo";
          persistCfg();
          photoUrl = url;
          var img = new Image();
          img.onload = function () { try { decodePhoto(img); } catch (e) { photoErr = "处理失败"; } };
          img.onerror = function () { photoErr = "图片读取失败"; };
          img.src = url;
        } catch (e) { photoErr = "无法读取该文件"; }
      };
      rd.readAsDataURL(file);
    }

    function buildPath() {
      if (CFG.subject === "photo") {
        if (photoA) { path = null; testCtx = null; bbox = photoBBoxUnits(); return; }
        return;   // 照片尚未就绪:保留当前画面(鲸鱼),解码完成后会重建
      }
      try { path = new Path2D(WHALE_PATH); } catch (e) { path = null; }
      if (!path) return;
      testCtx = document.createElement("canvas").getContext("2d");
      var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (var gy = 0; gy <= 190; gy++) {
        for (var gx = 0; gx <= 250; gx++) {
          if (testCtx.isPointInPath(path, gx / 10, gy / 10)) {
            if (gx / 10 < minX) minX = gx / 10;
            if (gx / 10 > maxX) maxX = gx / 10;
            if (gy / 10 < minY) minY = gy / 10;
            if (gy / 10 > maxY) maxY = gy / 10;
          }
        }
      }
      bbox = (minX === Infinity) ? null : { minX: minX, minY: minY, maxX: maxX, maxY: maxY };
    }

    function resampleWhale() {
      var usePhoto = CFG.subject === "photo" && !!photoA;
      if (!usePhoto && (!path || !bbox)) return;
      if (usePhoto && !bbox) return;
      var bw = Math.max(1, bbox.maxX - bbox.minX);
      var bh = Math.max(1, bbox.maxY - bbox.minY);
      var unit = (W * CFG.whaleScale) / bw;
      var cxp = contentCX || W / 2, cyp = H * CFG.baseY;
      var step = Math.max(0.12, Math.sqrt((bw * bh) / Math.max(100, CFG.density * 2.2)));
      var pts = [];
      var x0 = bbox.minX, y0 = bbox.minY;
      for (var y = y0 - step / 2; y <= bbox.maxY + step / 2; y += step) {
        for (var x = x0 - step / 2; x <= bbox.maxX + step / 2; x += step) {
          var inside = subjectHit(x, y);
          var onEdge = !inside && (subjectHit(x - step / 4, y)
            || subjectHit(x + step / 4, y)
            || subjectHit(x, y - step / 4)
            || subjectHit(x, y + step / 4));
          if (CFG.outlineOnly ? onEdge : (inside || onEdge)) {
            var jit = unit * step * 0.42;
            var s = 0.9 + Math.pow(Math.random(), 2.2) * 3.8;
            pts.push({
              hx: cxp + (x - x0 - bw / 2) * unit + (Math.random() - 0.5) * jit,
              hy: cyp + (y - y0 - bh / 2) * unit + (Math.random() - 0.5) * jit,
              s: s, rot: Math.random() * Math.PI,
            });
          }
        }
      }
      var want = CFG.outlineOnly ? Math.min(CFG.density * 0.5, pts.length) : CFG.density;
      if (pts.length > want * 1.15) {
        pts.sort(function () { return Math.random() - 0.5; });
        pts.length = Math.floor(want);
      }
      var home = pts;
      var r0 = Math.max(W, H) * 0.55;
      fish = { home: home, pts: home.map(function (p) {
        return {
          x: p.hx + (Math.random() - 0.5) * 2 * r0,
          y: p.hy + (Math.random() - 0.5) * 2 * r0,
          vx: 0, vy: 0, s: p.s, rot: Math.random() * Math.PI,
          w1: 0.6 + Math.random() * 1.9, w2: 0.6 + Math.random() * 1.9,
          f1: Math.random() * 6.2832, f2: Math.random() * 6.2832,
          f3: Math.random() * 6.2832, f4: Math.random() * 6.2832,
        };
      }) };
    }

    function buildGrid() {
      gridPts = [];
      var gap = Math.max(56, Math.min(104, W / 14));
      for (var y = gap / 2; y < H; y += gap) {
        for (var x = gap / 2; x < W; x += gap) {
          gridPts.push({ x: x, y: y, hx: x, hy: y, vx: 0, vy: 0 });
        }
      }
    }

    /* ---------- 内容区中心(左侧栏展开/收起时鲸鱼保持居中) ---------- */
    function measureContentCenter() {
      var w = W || window.innerWidth;
      var cands = [".pI_x6G_sidebarCol", '[data-slot="sidebar"]'];
      for (var i = 0; i < cands.length; i++) {
        var el = document.querySelector(cands[i]);
        if (!el) continue;
        var r = el.getBoundingClientRect();
        if (r.width > 30 && r.left >= 0 && r.left < w * 0.5) {
          return r.right + Math.max(0, (w - r.right)) / 2;
        }
      }
      return w / 2;
    }
    // 中心变化时平移整只鲸鱼(不打断动画),并同步正在进行的波
    function shiftWhaleCenter(dx) {
      if (Math.abs(dx) < 0.01) return;
      contentCX += dx;
      for (var i = 0; i < fish.home.length; i++) {
        fish.home[i].hx += dx;
        fish.pts[i].x += dx;
      }
      var it = auto.item;
      if (it && it.kind === "wave") {
        it.q0 += dx * it.ux;
        it.q1 += dx * it.uy;
      }
    }
    // 每帧向目标中心做指数趋近(≈0.3~0.5s 平滑滑过去,而非瞬移)
    function updateCenter(dt) {
      var diff = centerTarget - contentCX;
      if (Math.abs(diff) < 0.5) {
        if (diff !== 0) shiftWhaleCenter(diff);
        return;
      }
      shiftWhaleCenter(diff * (1 - Math.exp(-9 * dt)));
    }

    /* ---------- 设置持久化 / 参数面板 / 手动·自动模式 ---------- */
    var React = null;
    try { React = require("react"); } catch (e) { React = null; }
    var ui = { mode: null, status: null };
    var panelEl = null;

    function persistCfg() { try { localStorage.setItem("dsh-whale:cfg", JSON.stringify(CFG)); } catch (e) {} }
    function patchCfg(k, v) {
      CFG[k] = v;
      persistCfg();
      var rebuild = ["density", "whaleScale", "baseY", "outlineOnly",
        "photoAlpha", "photoInvert", "subject"];
      if (rebuild.indexOf(k) >= 0) {
        if (k === "subject" && CFG.subject === "photo") ensurePhotoLoad();
        buildPath();
        resampleWhale();
      }
    }
    function resetDefaults() {
      for (var i = 0; i < CFG_KEYS.length; i++) {
        CFG[CFG_KEYS[i]] = CFG_DEFAULT[CFG_KEYS[i]];
      }
      persistCfg();
      resampleWhale();
      closeSettings();
      openSettings();      // 重建面板,让滑杆/勾选回到默认值显示
    }
    function setMode(m) {
      auto.manual = m !== "auto";
      auto.item = null;
      auto.idleAt = 0;
      try { localStorage.setItem("dsh-whale:auto", auto.manual ? "0" : "1"); } catch (e) {}
      updateChip();
    }
    function updateChip() {
      if (ui.mode) ui.mode.textContent = auto.manual ? "🖱 手动" : "🌀 自动";
      if (ui.status) ui.status.textContent = auto.manual
        ? "移动鼠标扰动鲸鱼"
        : "自动:360°波 / 全屏呼吸";
    }
    function closeSettings() {
      if (panelEl && panelEl.parentNode) panelEl.parentNode.removeChild(panelEl);
      panelEl = null;
    }
    function openSettings() {
      if (panelEl && panelEl.parentNode) { closeSettings(); return; }
      closeSettings();
      var el = document.createElement("div");
      el.id = "dsh-whale-panel";
      var h = document.createElement("h3");
      h.textContent = "🐋 鲸鱼背景参数";
      el.appendChild(h);
      var hint = document.createElement("div");
      hint.className = "hint3";
      hint.textContent = "改动即时生效并自动保存";
      el.appendChild(hint);

      function addRange(k, label, min, max, step) {
        var lab = document.createElement("label");
        var s = document.createElement("span"); s.textContent = label;
        var inp = document.createElement("input");
        inp.type = "range"; inp.min = String(min); inp.max = String(max);
        inp.step = String(step); inp.value = String(CFG[k]);
        var v = document.createElement("b"); v.className = "val"; v.textContent = inp.value;
        var upd = function () {
          var n = parseFloat(inp.value);
          CFG[k] = n; v.textContent = String(n); persistCfg();
          if (k === "density" || k === "whaleScale" || k === "baseY" || k === "outlineOnly") resampleWhale();
          if (k === "density" && actualEl) actualEl.textContent = "当前点: " + fish.home.length;
        };
        inp.addEventListener("input", upd);
        lab.appendChild(s); lab.appendChild(inp); lab.appendChild(v);
        el.appendChild(lab);
      }
      var actualEl = null;

      addRange("repelR", "扰动半径", 60, 300, 5);
      addRange("repelA", "径向推斥", 0, 60000, 500);
      addRange("agiA", "扰动强度", 0, 60000, 1000);
      addRange("springS", "回位刚度", 30, 400, 5);
      addRange("damping", "阻尼", 2, 30, 0.5);
      addRange("density", "点密度", 400, 9000, 100);
      actualEl = document.createElement("div");
      actualEl.className = "hint3";
      actualEl.textContent = "当前点: " + fish.home.length;
      el.appendChild(actualEl);
      addRange("whaleScale", "鲸鱼大小", 0.3, 0.9, 0.01);
      addRange("baseY", "垂直位置", 0.2, 0.8, 0.01);
      addRange("waveSpeed", "波速(自动)", 80, 1400, 10);
      addRange("waveHalf", "波带宽(自动)", 30, 300, 5);
      addRange("waveDiag", "斜向减速系数", 0.3, 1, 0.05);
      addRange("autoGap", "自动间隔(秒)", 0, 12, 0.5);

      function addCheck(k, label) {
        var lab = document.createElement("label");
        var s = document.createElement("span"); s.textContent = label;
        var inp = document.createElement("input");
        inp.type = "checkbox";
        inp.checked = !!CFG[k];
        inp.addEventListener("change", function () { patchCfg(k, inp.checked); });
        lab.appendChild(s); lab.appendChild(inp);
        el.appendChild(lab);
      }
      addCheck("gridOn", "背景点阵网格");
      addCheck("outlineOnly", "只描鲸鱼轮廓");
      addCheck("dirRandom", "波向随机(360°)");

      var shapeLab = document.createElement("label");
      var shapeS = document.createElement("span"); shapeS.textContent = "方块颗粒";
      var shapeInp = document.createElement("input");
      shapeInp.type = "checkbox";
      shapeInp.checked = CFG.shape === "square";
      shapeInp.addEventListener("change", function () { patchCfg("shape", shapeInp.checked ? "square" : "dot"); });
      shapeLab.appendChild(shapeS); shapeLab.appendChild(shapeInp);
      el.appendChild(shapeLab);

      /* ---- 主体来源:鲸鱼 / 照片(透明 PNG,alpha 蒙版) ---- */
      var subH = document.createElement("h3");
      subH.textContent = "主体来源";
      el.appendChild(subH);

      var subRow = document.createElement("div");
      subRow.className = "row";
      var bWhaleS = document.createElement("button");
      bWhaleS.textContent = "🐋 鲸鱼";
      var bPhotoS = document.createElement("button");
      bPhotoS.textContent = "🖼 照片";
      var phArea = document.createElement("div");
      var fileBtn = document.createElement("button");
      fileBtn.textContent = "📁 选择透明 PNG";
      fileBtn.style.flex = "none";
      fileBtn.style.marginRight = "8px";
      var fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.style.display = "none";
      var subStatus = document.createElement("div");
      subStatus.className = "hint3";

      function syncSubjectUI() {
        bWhaleS.className = CFG.subject === "whale" ? "on" : "";
        bPhotoS.className = CFG.subject === "photo" ? "on" : "";
        phArea.style.display = CFG.subject === "photo" ? "" : "none";
        if (CFG.subject === "photo") {
          var base = "引擎按 alpha 取主体,内部压成小蒙版,仅存本地。";
          subStatus.textContent = photoA ? base + " 已导入蒙版"
            : (photoLoading ? base + " 读取中…"
            : (photoErr ? base + " " + photoErr : base + " 未导入:点上方按钮选图"));
        }
      }
      fileInput.addEventListener("change", function () {
        if (fileInput.files && fileInput.files[0]) importPhoto(fileInput.files[0]);
        fileInput.value = "";
      });
      fileBtn.addEventListener("click", function () { fileInput.click(); });
      bWhaleS.addEventListener("click", function () { patchCfg("subject", "whale"); syncSubjectUI(); });
      bPhotoS.addEventListener("click", function () {
        patchCfg("subject", "photo");
        ensurePhotoLoad();
        if (!photoA && !photoLoading) fileInput.click();
        syncSubjectUI();
      });
      phArea.appendChild(fileBtn);
      phArea.appendChild(fileInput);
      phArea.appendChild(subStatus);
      subRow.appendChild(bWhaleS);
      subRow.appendChild(bPhotoS);
      el.appendChild(subRow);
      el.appendChild(phArea);

      addRange("photoAlpha", "alpha 阈值", 0, 255, 4);
      addCheck("photoInvert", "反相(选透明区域)");
      syncSubjectUI();

      // 模式 + 关闭
      var row = document.createElement("div");
      row.className = "row";
      var bMan = document.createElement("button");
      bMan.textContent = "🖱 手动";
      bMan.className = auto.manual ? "on" : "";
      var bAuto = document.createElement("button");
      bAuto.textContent = "🌀 自动";
      bAuto.className = auto.manual ? "" : "on";
      bMan.addEventListener("click", function () { setMode("manual"); bMan.className = "on"; bAuto.className = ""; });
      bAuto.addEventListener("click", function () { setMode("auto"); bAuto.className = "on"; bMan.className = ""; });
      row.appendChild(bMan); row.appendChild(bAuto);
      el.appendChild(row);

      var row2 = document.createElement("div");
      row2.className = "row";
      var bReset = document.createElement("button");
      bReset.textContent = "↺ 恢复默认";
      bReset.title = "把上面所有参数恢复成出厂值并即时生效";
      bReset.addEventListener("click", resetDefaults);
      var bClose = document.createElement("button");
      bClose.textContent = "关闭";
      bClose.addEventListener("click", closeSettings);
      row2.appendChild(bReset);
      row2.appendChild(bClose);
      el.appendChild(row2);

      document.body.appendChild(el);
      panelEl = el;
    }
    function registerSettingsRow(ctx) {
      try {
        if (!ctx || !ctx.slots || !React) return;
        var Row = function () {
          var btnS = { marginRight: "8px", cursor: "pointer", padding: "4px 10px", borderRadius: "8px", border: "1px solid rgba(128,128,128,.4)", background: "transparent", color: "inherit", font: "inherit" };
          return React.createElement("div", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" } },
            React.createElement("span", null, "🐋 鲸鱼点阵背景"),
            React.createElement("button", { onClick: function () { openSettings(); }, style: btnS }, "参数设置"),
            React.createElement("button", { onClick: function () { setMode(auto.manual ? "auto" : "manual"); }, style: btnS }, auto.manual ? "切到自动(屏保)" : "切到手动"));
        };
        ctx.slots.inject("settings.general.item", function () {
          return ctx.slots.register({ name: "settings.general.item", id: "whale-particles", order: 30 }, Row);
        });
      } catch (e) {}
    }

    /* ---------------------------- 自动驱动器 ---------------------------- */
    function setStatus(text) {
      var el = document.getElementById("dsh-whale-chip-status");
      if (el) el.textContent = text;
    }
    function breathEnv(p) {
      if (p < 0.3) return smoothstep(0, 1, p / 0.3);
      if (p < 0.5) return 1;
      return 1 - smoothstep(0, 1, (p - 0.5) / 0.5);
    }
    function spawnAuto(t) {
      var kind = Math.random() < 0.72 ? "wave" : "breath";
      if (kind === "breath" && auto.lastKind === "breath") kind = "wave";
      if (kind === "wave") {
        var ux, uy, deg = 0;
        if (CFG.dirRandom) {
          var pick = null;
          for (var tries = 0; tries < 12 && pick === null; tries++) {
            var a = Math.random() * Math.PI * 2;
            if (auto.lastAngle !== null) {
              var d = Math.abs(a - auto.lastAngle) % (Math.PI * 2);
              if (d > Math.PI) d = Math.PI * 2 - d;
              if (d < 0.6) continue;
            }
            pick = { ux: Math.cos(a), uy: Math.sin(a) };
          }
          if (!pick) { var a2 = Math.random() * Math.PI * 2; pick = { ux: Math.cos(a2), uy: Math.sin(a2) }; }
          ux = pick.ux; uy = pick.uy;
          auto.lastAngle = Math.atan2(uy, ux);
          deg = Math.round(((Math.atan2(uy, ux) * 180 / Math.PI) % 360 + 360) % 360);
        } else {
          ux = 1; uy = 0;
        }
        auto.lastKind = "wave";
        var am = Math.max(Math.abs(ux), Math.abs(uy));
        var diag01 = (1 - am) / (1 - Math.SQRT1_2);
        var scale = Math.max(0.2, 1 - diag01 * (1 - CFG.waveDiag));

        var q0 = Infinity, q1 = -Infinity;
        for (var i = 0; i < fish.home.length; i++) {
          var q = fish.home[i].hx * ux + fish.home[i].hy * uy;
          if (q < q0) q0 = q;
          if (q > q1) q1 = q;
        }
        if (!isFinite(q0)) {
          var corners = [[0, 0], [W, 0], [0, H], [W, H]];
          for (var c = 0; c < corners.length; c++) {
            var qc = corners[c][0] * ux + corners[c][1] * uy;
            if (qc < q0) q0 = qc;
            if (qc > q1) q1 = qc;
          }
        }
        var pad = CFG.waveHalf + 70;
        q0 -= pad; q1 += pad;
        var dur = Math.min(24, Math.max(1.0, (q1 - q0) / (CFG.waveSpeed * scale)));
        auto.item = { kind: "wave", start: t, dur: dur, amp: 1.0, ux: ux, uy: uy, q0: q0, q1: q1, half: CFG.waveHalf };
        var slow = scale < 0.98 ? "(斜向已减速) " : "";
        setStatus("自动 · 波≈" + deg + "° " + slow);
      } else {
        auto.lastKind = "breath";
        var durB = 4.5 + Math.random() * 3.5;
        auto.item = { kind: "breath", start: t, dur: durB, amp: 0.95 };
        setStatus("自动 · 全屏躁动…");
      }
    }
    function updateAuto(t) {
      if (auto.manual) return;
      var it = auto.item;
      if (it && t >= it.start && t < it.start + it.dur) return;
      if (it && t >= it.start + it.dur) {
        auto.item = null;
        auto.idleAt = t + CFG.autoGap * (0.75 + Math.random() * 0.5);
        setStatus("自动 · 归于平静…");
        return;
      }
      if (!it && t >= auto.idleAt) spawnAuto(t);
    }
    function fieldGain(x, y, t) {
      if (auto.manual) {
        if (!mouse.active) return 0;
        var dx = x - mouse.x, dy = y - mouse.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d >= CFG.repelR || d < 0.001) return 0;
        return 1 - d / CFG.repelR;
      }
      var it = auto.item;
      if (!it || t < it.start || t > it.start + it.dur) return 0;
      var lt = (t - it.start) / it.dur;
      if (it.kind === "wave") {
        var q = x * it.ux + y * it.uy;
        var front = it.q0 + (it.q1 - it.q0) * easeInOut(lt);
        var dd = Math.abs(q - front);
        if (dd > it.half) return 0;
        return 1 - dd / it.half;
      }
      return breathEnv(lt);
    }

    /* ------------------------------ 物理 ------------------------------ */
    function stepAll(dt, t) {
      var r = CFG.repelR, R2 = r * r;
      var amp = auto.manual ? 1 : (auto.item ? auto.item.amp : 0);
      var bounce = function (p) { if (p.x < 0 || p.x > W) p.vx *= -0.5; if (p.y < 0 || p.y > H) p.vy *= -0.5; };

      for (var i = 0; i < fish.pts.length; i++) {
        var p = fish.pts[i], h = fish.home[i];
        var ax = CFG.springS * (h.hx - p.x) - CFG.damping * p.vx;
        var ay = CFG.springS * (h.hy - p.y) - CFG.damping * p.vy;
        if (auto.manual && mouse.active) {
          var dxm = p.x - mouse.x, dym = p.y - mouse.y, d2m = dxm * dxm + dym * dym;
          if (d2m < R2 && d2m > 0.01) {
            var dm = Math.sqrt(d2m);
            var fm = CFG.repelA * Math.pow(1 - dm / r, 2);
            ax += (dxm / dm) * fm; ay += (dym / dm) * fm;
          }
        }
        var gain = fieldGain(p.x, p.y, t) * amp;
        if (gain > 0.002) {
          var A = CFG.agiA * gain * gain;
          var cx = (Math.sin(p.w1 * t + p.f1) + 0.4 * Math.sin(p.w1 * 2.3 * t + p.f2)) / 1.4;
          var cy = (Math.sin(p.w2 * t + p.f3) + 0.4 * Math.sin(p.w2 * 2.3 * t + p.f4)) / 1.4;
          ax += cx * A; ay += cy * A;
        }
        p.vx += ax * dt; p.vy += ay * dt;
        var sp2 = p.vx * p.vx + p.vy * p.vy;
        if (sp2 > 5000 * 5000) { var s = 5000 / Math.sqrt(sp2); p.vx *= s; p.vy *= s; }
        p.x += p.vx * dt; p.y += p.vy * dt;
        bounce(p);
      }

      if (CFG.gridOn) {
        var gi = 0;
        for (var g = 0; g < gridPts.length; g++) {
          var gp = gridPts[g];
          var gax = 60 * (gp.hx - gp.x) - 10 * gp.vx;
          var gay = 60 * (gp.hy - gp.y) - 10 * gp.vy;
          if (auto.manual && mouse.active) {
            var dxg = gp.x - mouse.x, dyg = gp.y - mouse.y, d2g = dxg * dxg + dyg * dyg;
            if (d2g < R2 && d2g > 0.01) {
              var dg = Math.sqrt(d2g);
              var fg = CFG.repelA * 0.3 * Math.pow(1 - dg / r, 2);
              gax += (dxg / dg) * fg; gay += (dyg / dg) * fg;
            }
          }
          if (!auto.manual) {
            var gainG = fieldGain(gp.x, gp.y, t) * amp;
            if (gainG > 0.002) {
              var AG = CFG.agiA * 0.10 * gainG * gainG;
              gax += Math.sin(1.1 * t + frac(Math.sin(gi * 127.1) * 43758.5453) * 6.2832) * AG;
              gay += Math.cos(0.9 * t + frac(Math.cos(gi * 311.7) * 104729.0) * 6.2832) * AG;
            }
          }
          gp.vx += gax * dt; gp.vy += gay * dt;
          gp.x += gp.vx * dt; gp.y += gp.vy * dt;
          gi++;
        }
      }
    }

    /* ------------------------------ 渲染 ------------------------------ */
    function render(ctx) {
      ctx.clearRect(0, 0, W, H);
      if (CFG.gridOn) {
        ctx.fillStyle = theme.grid + theme.gridA + ")";
        for (var g = 0; g < gridPts.length; g++) {
          ctx.fillRect(gridPts[g].x - 0.7, gridPts[g].y - 0.7, 1.4, 1.4);
        }
      }
      var baseA = theme.dotA;
      var square = CFG.shape === "square";
      for (var i = 0; i < fish.pts.length; i++) {
        var p = fish.pts[i], h = fish.home[i];
        var off = Math.min(1, Math.hypot(p.x - h.hx, p.y - h.hy) / 260);
        var a = Math.min(1, baseA * (0.82 + 0.22 * off + 0.06 * (i % 3)));
        ctx.fillStyle = "rgba(" + theme.dot[0] + "," + theme.dot[1] + "," + theme.dot[2] + "," + a.toFixed(3) + ")";
        if (square) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          var s2 = p.s / 2;
          ctx.fillRect(-s2, -s2, p.s, p.s);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.s * 0.55, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    /* --------------------------- 挂载/卸载 --------------------------- */
    function mount() {
      var style = document.createElement("style");
      style.id = "dsh-whale-particles-style";
      style.textContent = STYLE;
      document.head.appendChild(style);

      var layer = document.createElement("div");
      layer.id = "dsh-whale-particles-layer";
      var canvas = document.createElement("canvas");
      layer.appendChild(canvas);
      document.body.appendChild(layer);
      var ctx = canvas.getContext("2d");

      // 迷你控制条:点“手动/自动”文字切换模式;点 ⚙ 打开参数面板
      var chip = document.createElement("div");
      chip.id = "dsh-whale-chip";
      chip.title = "dsh-whale-particles";
      var modeSpan = document.createElement("span");
      modeSpan.className = "whale-mode";
      modeSpan.title = "切换 手动 / 自动(屏保)";
      var gear = document.createElement("span");
      gear.className = "whale-gear";
      gear.textContent = " ⚙";
      gear.title = "打开鲸鱼参数面板";
      var statusSpan = document.createElement("span");
      statusSpan.className = "whale-status";
      statusSpan.id = "dsh-whale-chip-status";
      chip.appendChild(modeSpan);
      chip.appendChild(gear);
      chip.appendChild(statusSpan);
      document.body.appendChild(chip);
      ui.mode = modeSpan;
      ui.status = statusSpan;
      modeSpan.addEventListener("click", function () { setMode(auto.manual ? "auto" : "manual"); });
      gear.addEventListener("click", openSettings);
      try { auto.manual = localStorage.getItem("dsh-whale:auto") !== "1"; } catch (e) {}
      updateChip();

      document.body.setAttribute("data-dsh-whale", "");
      function teardown() {
        running = false;
        cancelAnimationFrame(raf);
        if (style.parentNode) style.parentNode.removeChild(style);
        if (chip.parentNode) chip.parentNode.removeChild(chip);
        if (layer.parentNode) layer.parentNode.removeChild(layer);
        document.body.removeAttribute("data-dsh-whale");
        for (var i = 0; i < disposed.length; i++) { try { disposed[i](); } catch (e) {} }
        disposed = [];
      }
      var onPointer = function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
      var onLeave = function () { mouse.active = false; };
      var onVis = function () {
        running = !document.hidden;
        if (running) { last = 0; raf = requestAnimationFrame(frame); }
        else cancelAnimationFrame(raf);
      };
      var onResize = function () {
        dpr = Math.min(2, window.devicePixelRatio || 1);
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        contentCX = measureContentCenter();     // 侧栏变化时重定位鲸鱼中心
        centerTarget = contentCX;
        ensurePhotoLoad();                      // 照片模式:确保蒙版已解码
        buildPath(); resampleWhale(); buildGrid();
      };
      var themeObs = new MutationObserver(function () {
        var dark = document.body.hasAttribute("data-ds-dark-theme");
        theme = dark ? DARK : LIGHT;
      });
      themeObs.observe(document.body, { attributes: true, attributeFilter: ["data-ds-dark-theme"] });

      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("pointerdown", onPointer, { passive: true });
      window.addEventListener("mouseleave", onLeave);
      document.addEventListener("visibilitychange", onVis);
      window.addEventListener("resize", onResize);
      disposed.push(function () {
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("pointerdown", onPointer);
        window.removeEventListener("mouseleave", onLeave);
        document.removeEventListener("visibilitychange", onVis);
        window.removeEventListener("resize", onResize);
        themeObs.disconnect();
      });

      function frame(now) {
        if (!running) return;
        var t = now / 1000;
        var dt = Math.min(0.033, Math.max(0.001, t - (last || t)));
        last = t;
        updateCenter(dt);   // 侧栏宽度变化时的平滑平移
        updateAuto(t);
        stepAll(dt, t);
        render(ctx);
        raf = requestAnimationFrame(frame);
      }

      onResize();
      centerTarget = contentCX = measureContentCenter();
      // 侧栏展开/收起、布局变化:只更新“目标中心”,由帧循环平滑补间过去
      var watchIv = setInterval(function () {
        centerTarget = measureContentCenter();
      }, 400);
      disposed.push(function () { clearInterval(watchIv); });
      var prefersReduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        for (var k = 0; k < fish.pts.length; k++) { fish.pts[k].x = fish.home[k].hx; fish.pts[k].y = fish.home[k].hy; }
        render(ctx);
      } else {
        running = true;
        raf = requestAnimationFrame(frame);
      }
      return teardown;
    }

    module.exports = {
      inject: ["slots"],
      apply: function (ctx) {
        registerSettingsRow(ctx);
        if (ctx && typeof ctx.effect === "function") {
          ctx.effect(function () { return mount(); }, "dsh-whale-particles: background layer");
        } else {
          mount();
        }
      },
    };
    return module.exports;
  },
});
