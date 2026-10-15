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
     * 版本号:优先读运行时加载的 package.json(每次发版自动跟上),
     * 读不到时回退到下面的常量 —— 发版时请与 package.json 一起改。
     * ------------------------------------------------------------------ */
    var VERSION_FALLBACK = "0.6.0";
    function resolveVersion() {
      try {
        var pkg = require("dsh-whale-particles/package.json");
        if (pkg && pkg.version) return String(pkg.version);
      } catch (e) { /* 宿主模块解析未开放该子路径 */ }
      return VERSION_FALLBACK;
    }
    var VERSION = resolveVersion();

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
      /* ---- 调色(0.5.0):默认仍是主题色,"自定义"后才用下面这几个值 ---- */
      colorMode: "theme",     // "theme" 跟随深浅主题 | "custom" 自定义调色
      dotColor: "#94beff",    // 粒子主色(深色主题出厂色)
      dotColor2: "#63e6d2",   // 粒子副色(双色渐变时的另一端)
      dotGrad: false,         // 主色 → 副色,沿主体从左到右过渡
      dotAlpha: 1,            // 粒子不透明度倍率(1 = 主题原样)
      gridFollow: true,       // 网格点阵跟随粒子主色
      gridColor: "#96b4eb",   // 网格颜色(不跟随时使用)
      /* ---- 发光(0.5.0)---- */
      glowOn: true,           // 粒子发光(离屏降采样 + 放大叠回 = bloom)
      glowStrength: 0.55,     // 光晕强度 0..1
      glowSize: 14,           // 光晕扩散半径 px(越大越糊、离屏越小、越省)
      glowFollow: true,       // 光晕跟随粒子颜色(含双色渐变)
      glowColor: "#8ec5ff",   // 光晕颜色(关掉跟随时使用)
      /* ---- 性能(0.6.0)---- */
      fpsCap: 0,              // 帧率上限:**0 = 跟随显示器(出厂默认)**;否则 30/45/60/90/120
      renderScale: 0,         // 渲染精度:0 = 自动(按像素预算),否则 1 / 1.5 / 2
    };

    // 出厂参数快照(“恢复默认值”用;须在读取 localStorage 之前生成)
    var CFG_DEFAULT = JSON.parse(JSON.stringify(CFG));

    // 载入用户保存的参数(localStorage),缺失项用上面的默认值
    var CFG_KEYS = ["repelR", "repelA", "agiA", "springS", "damping", "density",
      "whaleScale", "baseY", "waveSpeed", "waveHalf", "waveDiag", "autoGap",
      "dirRandom", "gridOn", "outlineOnly", "shape",
      "subject", "photoAlpha", "photoInvert",
      "colorMode", "dotColor", "dotColor2", "dotGrad", "dotAlpha", "gridFollow", "gridColor",
      "glowOn", "glowStrength", "glowSize", "glowFollow", "glowColor",
      "fpsCap", "renderScale"];
    try {
      var savedCfg = JSON.parse(localStorage.getItem("dsh-whale:cfg") || "{}");
      if (savedCfg && typeof savedCfg === "object") {
        for (var kk in savedCfg) {
          if (CFG_KEYS.indexOf(kk) >= 0 && typeof savedCfg[kk] === typeof CFG[kk]) CFG[kk] = savedCfg[kk];
        }
      }
    } catch (e) {}

    /* ------------------------------------------------------------------
     * 界面类名运行时自发现(关键:DSH 每次升级 CSS Module 哈希前缀都会变)
     *
     * Web UI 的「框架/侧栏/会话根容器/输入栏座」用的是 CSS Module 哈希类名
     * (如 qNbT7G_frame、_0cyzDW_composerSeat)。哈希前缀每次重新构建都会变,
     * 旧版本把前缀写死 → 一升级「界面透明化」和「hero 输入栏下移」就整套失效。
     *
     * 做法:UI 各包把自己的 CSS 以 <style data-plugin-css="<包名>/<模块>.module.css">
     * 注入文档;同一模块里类名的**后缀**是稳定的(_frame/_sidebarCol/_root/
     * _composerSeat),只有前缀是哈希。所以挂载时扫一遍样式表,按模块文件定位、
     * 按后缀取前缀,把真实类名拼出来;扫不到(样式表还没注入/被跨域挡住)时退回
     * 下面的已知值,并在控制台留一条告警 —— 下次升级一眼就能看见。
     * ------------------------------------------------------------------ */
    var UI_SOURCES = {
      // 键 = 用途,值 = [所属包, CSS 模块文件, 类名后缀, 失败时回退的完整类名]
      frame:       ["@deepseek-ai/dsh-client-ui-layout", "AppFrame.module.css", "frame", "qNbT7G_frame"],
      sidebar:     ["@deepseek-ai/dsh-client-ui-layout", "AppFrame.module.css", "sidebarCol", "qNbT7G_sidebarCol"],
      // centerCol = 中列(会话所在的那一格)。0.2.0-rc.2 起 Windows 桌面版会给
      // <html> 打 data-windows-titlebar,配套规则
      // `[data-windows-titlebar] .*_centerCol{background:var(--dsw-alias-bg-base)}`
      // 让中列自己铺一层不透明底色;它是 ConversationRoot 的**父节点**,所以
      // 只把 frame/root 透明化已经不够,鲸鱼会被这一层整片盖住。必须一并处理。
      centerCol:   ["@deepseek-ai/dsh-client-ui-layout", "AppFrame.module.css", "centerCol", "qNbT7G_centerCol"],
      root:        ["@deepseek-ai/dsh-client-ui-conversation", "ConversationRoot.module.css", "root", "_0cyzDW_root"],
      composerSeat: ["@deepseek-ai/dsh-client-ui-conversation", "ConversationRoot.module.css", "composerSeat", "_0cyzDW_composerSeat"],
    };
    // 各版本的已知前缀(仅作兜底;命中与否都会记录在 __dshWhale.selectors().sources 里)
    var FALLBACK_BY_VERSION = {
      "0.1.1-rc.2": { frame: "pI_x6G_frame", sidebar: "pI_x6G_sidebarCol", centerCol: "pI_x6G_centerCol", root: "wSkVaW_root", composerSeat: "wSkVaW_composerSeat" },
      "0.1.2-rc.1": { frame: "_1qAH1q_frame", sidebar: "_1qAH1q_sidebarCol", centerCol: "_1qAH1q_centerCol", root: "uPhUma_root", composerSeat: "uPhUma_composerSeat" },
      "0.1.5-rc.1": { frame: "_1qAH1q_frame", sidebar: "_1qAH1q_sidebarCol", centerCol: "_1qAH1q_centerCol", root: "uPhUma_root", composerSeat: "uPhUma_composerSeat" },
      "0.1.5-rc.2": { frame: "qNbT7G_frame", sidebar: "qNbT7G_sidebarCol", centerCol: "qNbT7G_centerCol", root: "_0cyzDW_root", composerSeat: "_0cyzDW_composerSeat" },
      "0.2.0-rc.2": { frame: "BynINW_frame", sidebar: "BynINW_sidebarCol", centerCol: "BynINW_centerCol", root: "Dc7zOa_root", composerSeat: "Dc7zOa_composerSeat" },
    };

    var SEL = {};                 // 用途 -> 完整类名
    var SEL_SOURCE = {};          // 用途 -> "discovered" | "fallback"
    var unreadableSheets = [];    // 读不到 cssRules 的样式表(跨域/受保护)

    function classSuffix(sel) {
      // ".qNbT7G_frame" / ".qNbT7G_frame:hover" / ".a .qNbT7G_frame" 都取出最后一段类名
      var m = /\.([A-Za-z0-9_-]+)\s*$/.exec(String(sel).trim());
      return m ? m[1] : null;
    }
    function walkRules(rules, visit) {
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (r.selectorText && visit(r.selectorText)) return true;
        if (r.cssRules && walkRules(r.cssRules, visit)) return true;   // @media 等分组规则
      }
      return false;
    }
    // 在一个 CSS 模块样式表里按“后缀”找类名:后缀匹配 "(^|_)后缀$"
    function classInSheet(sheet, suffix) {
      var want = new RegExp("(?:^|_)" + suffix + "$");
      var found = null;
      try {
        walkRules(sheet.cssRules, function (sel) {
          var parts = sel.split(",");
          for (var p = 0; p < parts.length; p++) {
            var name = classSuffix(parts[p]);
            if (name && want.test(name)) { found = name; return true; }
          }
          return false;
        });
      } catch (e) { return undefined; }        // 样式表不可读(跨域)→ 交给调用方处理
      return found;
    }
    function uiStyleTags() {
      // 只认 data-plugin-css 的样式表;残缺 DOM 环境下退回空表(靠兜底表)
      if (typeof document.querySelectorAll === "function") {
        return document.querySelectorAll("style[data-plugin-css]");
      }
      if (typeof document.getElementsByTagName === "function") {
        var all = document.getElementsByTagName("style"), out = [];
        for (var i = 0; i < all.length; i++) {
          if (all[i].dataset && all[i].dataset.pluginCss) out.push(all[i]);
        }
        return out;
      }
      return [];
    }
    function sheetForModule(moduleTag) {
      var tags = uiStyleTags();
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].dataset && tags[i].dataset.pluginCss === moduleTag) return tags[i].sheet || null;
      }
      return null;
    }
    // 兜底:不认模块归属,扫所有 UI 样式表,找「前缀_后缀」形状的类名(如 qNbT7G_frame)
    function classInDocument(suffix) {
      var rx = new RegExp("^[A-Za-z0-9_-]{5,10}_" + suffix + "$");
      var tags = uiStyleTags();
      for (var i = 0; i < tags.length; i++) {
        var sheet = tags[i].sheet;
        if (!sheet) continue;
        var hit = null;
        try {
          walkRules(sheet.cssRules, function (sel) {
            var parts = sel.split(",");
            for (var p = 0; p < parts.length; p++) {
              var name = classSuffix(parts[p]);
              if (name && rx.test(name)) { hit = name; return true; }
            }
            return false;
          });
        } catch (e) {
          if (unreadableSheets.indexOf(tags[i]) < 0) unreadableSheets.push(tags[i]);
          continue;
        }
        if (hit) return hit;
      }
      return null;
    }
    /** 定位界面类名。返回 true 表示这次扫描有新发现(调用方据此重建样式)。 */
    function detectSelectors() {
      var uiVersion = null;
      try {
        // 宿主版本号只用于挑兜底表那一行,拿不到也无所谓
        var pkgVersion = require("@deepseek-ai/dsh-web-frontend/package.json");
        if (pkgVersion && pkgVersion.version) uiVersion = String(pkgVersion.version);
      } catch (e) {}
      var fallbackRow = FALLBACK_BY_VERSION[uiVersion] || null;
      var changed = false, missed = [];
      for (var key in UI_SOURCES) {
        var spec = UI_SOURCES[key];
        var sheet = sheetForModule(spec[0] + "/" + spec[1]);
        var name = sheet ? classInSheet(sheet, spec[2]) : undefined;
        if (name === undefined) name = classInDocument(spec[2]);       // 样式表不可读
        if (name) {
          if (SEL[key] !== name) { SEL[key] = name; SEL_SOURCE[key] = "discovered"; changed = true; }
          continue;
        }
        if (SEL[key] === undefined) {
          SEL[key] = (fallbackRow && fallbackRow[key]) || spec[3];
          SEL_SOURCE[key] = "fallback";
          changed = true;
        }
        missed.push(key);
      }
      if (missed.length) {
        try {
          console.warn("[dsh-whale-particles] 界面类名未能在样式表里定位(" + missed.join(",") +
            "),已回退到内置值 " + missed.map(function (k) { return SEL[k]; }).join(",") +
            "。若界面透明化 / 输入栏下移失效,请运行 maintain/extract-ui-css.mjs 取新类名并反馈。");
        } catch (e) {}
      } else {
        try { console.info("[dsh-whale-particles] 界面类名已自发现: " + JSON.stringify(SEL)); } catch (e) {}
      }
      return changed;
    }

    /* ==================================================================
     * 结构自发现(0.4.0):不再枚举「层的名字」,而是问浏览器
     * 「此刻有哪些不透明的**祖先**盖在我前面」。
     *
     * 上面那套后缀自发现只能解析「名单上那几层的真名」。UI 一旦**新增**一个
     * 铺底容器(0.2.0-rc.2 的 centerCol 就是),名单就少一层,而且不会产生任何
     * 告警 —— selectors() 全绿、引擎满帧、控制台安静,只是鲸鱼被盖住了。
     *
     * 这里改成开放式枚举:从会话内容往上走到 body,凡是计算样式**不透明**的
     * 祖先,就地打内联 !important 中和。内联 + !important 压过任何样式表规则,
     * 所以以后既不用跟着升级改名单,也不用再算特异度。
     *
     * 为什么是「祖先」就够:所有小面(缩略图/卡片/代码块)都是会话的**后代**,
     * 交互弹出的菜单/悬浮卡是**兄弟**;它们都不会挡住画布,所以不必也不能动。
     * 槽锚点(div[data-slot])是 display:contents,不生成盒子,永远不会铺底色。
     * ================================================================== */
    var ANCHOR_SELECTORS = [
      '[data-slot="conversation.content"]',   // 会话内容锚点(在 ConversationRoot 内部)
      "[data-phase]",                         // 会话根 ConversationRoot
      '[data-slot="main"]',                   // 中列主槽锚点(会话未挂载时的退路)
      "#root > *",                            // 最后兜底
    ];
    var SCAN_MIN_GAP = 1000;    // 两次结构扫描的最小间隔(聊天流式输出会疯狂改动 DOM)
    var SCAN_RETRIES = 12;      // 启动初期会话可能还没挂载
    var ALPHA_MIN = 0.02;

    var fixedLayers = [];       // [{el, props:[{name,value,priority}]}] 用来原样还原
    var lastReport = null, lastReportKey = "";
    var scanTimer = 0, scanAt = 0, scanRetries = 0, warnedNoAnchor = false;

    /** 结构层的告警(不要复用下面那个 warn —— 它的文案是给设置页注册失败用的)。 */
    function structWarn(msg) {
      try { console.warn("[dsh-whale-particles] " + msg); } catch (e) {}
    }

    /** 颜色透明度;拿不到 alpha(具名色/未知写法)按不透明处理,宁可多中和一层。 */
    function alphaOf(color) {
      var s = String(color == null ? "" : color).trim();
      if (!s || s === "transparent") return 0;
      var m = /^rgba?\(([^)]+)\)/.exec(s);
      if (!m) return 1;
      var p = m[1].split(",");
      if (p.length < 4) return 1;
      var a = parseFloat(p[3]);
      return isNaN(a) ? 1 : a;
    }
    function paintsBackground(cs) {
      if (!cs) return false;
      if (alphaOf(cs.backgroundColor) > ALPHA_MIN) return true;
      var img = cs.backgroundImage;
      return !!img && img !== "none";
    }
    function describeEl(el) {
      if (!el || !el.tagName) return "?";
      var out = el.tagName.toLowerCase(), cls = "";
      try { cls = String(el.className || ""); } catch (e) {}
      cls = cls.split(/\s+/).filter(function (c) { return c; })[0];
      if (cls) out += "." + cls;
      var attrs = el.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].name === "data-slot" || attrs[i].name === "data-phase") {
          out += "[" + attrs[i].name + "=" + attrs[i].value + "]";
        }
      }
      return out;
    }
    function findAnchor() {
      for (var i = 0; i < ANCHOR_SELECTORS.length; i++) {
        var el = null;
        try { el = document.querySelector(ANCHOR_SELECTORS[i]); } catch (e) {}
        if (el) return { el: el, sel: ANCHOR_SELECTORS[i] };
      }
      return null;
    }
    /** 记住某元素某个内联属性的原值(含 !important),只记第一次。 */
    function rememberProp(el, name) {
      var rec = null;
      for (var i = 0; i < fixedLayers.length; i++) {
        if (fixedLayers[i].el === el) { rec = fixedLayers[i]; break; }
      }
      if (!rec) { rec = { el: el, props: [] }; fixedLayers.push(rec); }
      for (var j = 0; j < rec.props.length; j++) if (rec.props[j].name === name) return;
      var value = "", priority = "";
      try {
        value = el.style.getPropertyValue(name) || "";
        priority = el.style.getPropertyPriority(name) || "";
      } catch (e) {}
      rec.props.push({ name: name, value: value, priority: priority });
    }
    function neutralize(el) {
      var cs = null;
      try { cs = getComputedStyle(el); } catch (e) { return; }
      if (!cs) return;
      if (alphaOf(cs.backgroundColor) > ALPHA_MIN) {
        rememberProp(el, "background-color");
        try { el.style.setProperty("background-color", "transparent", "important"); } catch (e) {}
      }
      if (cs.backgroundImage && cs.backgroundImage !== "none") {
        rememberProp(el, "background-image");
        try { el.style.setProperty("background-image", "none", "important"); } catch (e) {}
      }
    }
    /** 原样还原(含优先级);本插件只还原自己改过的属性。 */
    function restoreAll() {
      for (var i = fixedLayers.length - 1; i >= 0; i--) {
        var rec = fixedLayers[i];
        for (var j = 0; j < rec.props.length; j++) {
          var p = rec.props[j];
          try {
            if (p.value) rec.el.style.setProperty(p.name, p.value, p.priority);
            else rec.el.style.removeProperty(p.name);
          } catch (e) {}
        }
      }
      fixedLayers = [];
    }
    /** 走一遍祖先链。返回 null 表示找不到锚点(UI 还没挂载)。 */
    function scanChain() {
      var anchor = findAnchor();
      if (!anchor) return null;
      var chain = [anchor.el], el = anchor.el;
      while (el && el !== document.body && el.parentElement) {
        el = el.parentElement;
        chain.push(el);
      }
      var hit = [], residue = [], pseudos = [];
      for (var i = 0; i < chain.length; i++) {
        var node = chain[i], cs = null;
        try { cs = getComputedStyle(node); } catch (e) { continue; }
        if (paintsBackground(cs)) {
          neutralize(node);
          var after = null;
          try { after = getComputedStyle(node); } catch (e) {}
          if (after && paintsBackground(after)) residue.push(describeEl(node) + " (" + after.backgroundColor + ")");
          else hit.push(describeEl(node));
        }
        /* 伪元素是内联样式唯一管不到的地方:只点名,不自动改。
           (frame 的 ::before 是 40px 标题栏,有意保留实色。) */
        var WHICH = ["::before", "::after"];
        for (var q = 0; q < 2; q++) {
          var pcs = null;
          try { pcs = getComputedStyle(node, WHICH[q]); } catch (e) { continue; }
          if (!pcs || pcs.content === "none" || !paintsBackground(pcs)) continue;
          pseudos.push(describeEl(node) + WHICH[q] + " -> " + pcs.backgroundColor);
        }
      }
      return { anchor: anchor.sel, chain: chain.map(describeEl), hit: hit, residue: residue, pseudos: pseudos };
    }
    function obstructions() {
      return lastReport || { anchor: null, chain: [], hit: [], residue: [], pseudos: [], note: "尚未扫描" };
    }
    function runScan() {
      var rep = null;
      try { rep = scanChain(); } catch (e) { structWarn("结构自检异常:" + (e && e.message ? e.message : e)); }
      if (!rep) {
        if (++scanRetries <= SCAN_RETRIES) { scheduleScan(150 * scanRetries); return; }
        if (!warnedNoAnchor) {
          warnedNoAnchor = true;
          structWarn("结构自检找不到内容锚点(试过 " + ANCHOR_SELECTORS.join(" / ") +
            "),透明化只能靠类名自发现兜着。");
        }
        return;
      }
      scanRetries = 0;
      lastReport = rep;
      var key = rep.hit.join("|") + "#" + rep.residue.join("|");
      if (key === lastReportKey) return;
      lastReportKey = key;
      if (rep.hit.length) {
        try {
          console.info("[dsh-whale-particles] 结构自检:已中和 " + rep.hit.length + " 层不透明祖先 → " +
            rep.hit.join(", ") + "(锚点 " + rep.anchor + ")");
        } catch (e) {}
      }
      if (rep.residue.length) {
        structWarn("结构自检:仍有不透明祖先没能中和(内联样式被覆盖?)→ " + rep.residue.join(", ") +
          "。可在 DevTools 里跑 __dshWhale.obstructions() 看完整清单。");
      }
    }
    function scheduleScan(delay) {
      if (scanTimer) return;
      scanTimer = setTimeout(function () {
        scanTimer = 0;
        scanAt = Date.now();
        runScan();
      }, delay || 0);
    }
    /** 限流请求:DOM 变更可能一次来几千条,结构扫描本身很便宜但没必要跟着跑。 */
    function requestScan() {
      var wait = scanAt + SCAN_MIN_GAP - Date.now();
      scheduleScan(wait > 0 ? wait : 0);
    }

    /* ---------- 注入样式(门控于 body 属性;类名来自上面的自发现) ---------- */
    function buildStyle() {
      return "body[data-dsh-whale]{background:transparent}" +
      "html:has(body[data-dsh-whale][data-ds-dark-theme]){background-color:#06090f}" +
      "html:has(body[data-dsh-whale]:not([data-ds-dark-theme])){background-color:#f7f6f3}" +
      "body[data-dsh-whale] ." + SEL.frame + "{background:transparent;isolation:isolate}" +
      /* 中列:0.2.0-rc.2 + Windows 桌面版(data-windows-titlebar)会给它铺不透明底色,
         盖住整只鲸鱼。本规则的特异度 (0,2,1) 高于那两条 (0,2,0),无需 !important。 */
      "body[data-dsh-whale] ." + SEL.centerCol + "{background:transparent}" +
      "body[data-dsh-whale] ." + SEL.root + "{background:transparent}" +
      "body[data-dsh-whale][data-ds-dark-theme] ." + SEL.sidebar + "{background:rgba(9,19,32,.55)}" +
      "body[data-dsh-whale]:not([data-ds-dark-theme]) ." + SEL.sidebar + "{background:rgba(255,255,255,.5)}" +
      /* 空会话(hero):输入栏整体下移,别挡住鲸鱼;有对话(active)时自然失效 */
      "body[data-dsh-whale] ." + SEL.root + "[data-phase=hero] ." + SEL.composerSeat + "{margin-top:clamp(380px,56vh,860px)}" +
      "#dsh-whale-particles-layer{position:fixed;inset:0;z-index:-1;pointer-events:none}" +
      "#dsh-whale-particles-layer canvas{width:100%;height:100%;display:block}" +
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
    }

    var DARK = {
      grid: [150, 180, 235], gridA: 0.10,
      dot: [148, 190, 255], dotA: 0.95,
    };
    var LIGHT = {
      grid: [70, 95, 150], gridA: 0.16,
      dot: [40, 68, 130], dotA: 0.9,
    };

    /* ==================================================================
     * 调色(0.5.0)
     *
     * 主题色(DARK/LIGHT)现在只是**出厂值**:用户可以在设置里选"自定义",
     * 给粒子一个任意颜色,还可以让主色渐变到副色、让网格跟着粒子走。
     *
     * COL = 渲染时真正使用的颜色,由 computeColors() 从 CFG + 当前主题算出来。
     * 不在 render() 里现算:那里每帧要跑几千次,而十六进制解析没必要重复。
     * 触发重算的时机只有三个 —— 挂载、主题切换、用户改颜色(见 afterCfgChange)。
     * ================================================================== */
    var COLOR_KEYS = ["colorMode", "dotColor", "dotColor2", "dotGrad", "dotAlpha", "gridFollow", "gridColor"];
    var GLOW_KEYS = ["glowOn", "glowStrength", "glowSize", "glowFollow", "glowColor"];
    var COL = {
      dot: [148, 190, 255], dot2: [148, 190, 255], dotA: 0.95,
      grid: [150, 180, 235], gridA: 0.10,
      glow: [148, 190, 255], glowMode: "lighter",
      mono: "148,190,255", grad: null,
    };

    function hexToRgb(hex) {
      var m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(String(hex == null ? "" : hex).trim());
      if (!m) return null;
      var s = m[1];
      if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
      var n = parseInt(s, 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function rgbCsv(c) { return c[0] + "," + c[1] + "," + c[2]; }
    function mixRgb(a, b, t) {
      return [
        Math.round(a[0] + (b[0] - a[0]) * t),
        Math.round(a[1] + (b[1] - a[1]) * t),
        Math.round(a[2] + (b[2] - a[2]) * t),
      ];
    }
    function computeColors() {
      var base = theme || DARK;
      var custom = CFG.colorMode === "custom";
      var c1 = (custom && hexToRgb(CFG.dotColor)) || base.dot;
      var c2 = (custom && CFG.dotGrad && hexToRgb(CFG.dotColor2)) || c1;
      var mul = Number(CFG.dotAlpha);
      if (!isFinite(mul)) mul = 1;
      COL.dot = c1;
      COL.dot2 = c2;
      COL.dotA = base.dotA * Math.max(0, Math.min(1, mul));
      COL.grid = CFG.gridFollow ? c1 : (hexToRgb(CFG.gridColor) || base.grid);
      COL.gridA = base.gridA;
      COL.glow = CFG.glowFollow ? c1 : (hexToRgb(CFG.glowColor) || c1);
      /* 加法混合(lighter)在深色底上才是"发光";浅色底加下去直接饱和成白,
         反而看不见 —— 浅色主题改用 multiply,同一份光晕变成柔和的暗晕。 */
      COL.glowMode = (base === DARK) ? "lighter" : "multiply";
      COL.mono = rgbCsv(c1);
      // 两端同色就不要走渐变分支(否则每粒都白算一次混色)
      COL.grad = (c2[0] === c1[0] && c2[1] === c1[1] && c2[2] === c1[2]) ? null : { cache: [] };
    }
    /** 渐变取色:按位置量化成 17 档缓存,避免每帧每粒都拼一次颜色字符串。 */
    function dotColorCsv(t) {
      if (!COL.grad) return COL.mono;
      if (!(t >= 0)) t = 0.5;            // 没带横向位置的老粒子取中间色
      var q = t >= 1 ? 16 : Math.round(t * 16);
      var c = COL.grad.cache[q];
      if (!c) { c = rgbCsv(mixRgb(COL.dot, COL.dot2, q / 16)); COL.grad.cache[q] = c; }
      return c;
    }

    /* ---------------------------- 状态/工具 ---------------------------- */
    var W = 0, H = 0, dpr = 1;
    var layerEl = null, canvasEl = null;   // mount() 里赋值;__dshWhale.geometry() 要读
    var mainCtx = null;                    // 主画布 2D 上下文(诊断/调试重绘用)
    /* 性能状态(0.6.0):帧率上限、实测帧率、渲染精度。放在模块作用域,
       因为设置页里的「实测帧率」读它、而帧循环在 mount() 里。 */
    var perf = { fps: 0, frames: 0, since: 0 };
    var nextFrameAt = 0;                   // 帧率上限的下一帧时刻(ms)
    var fpsEl = null;                      // 设置页里的「实测帧率」文本节点
    var onViewportChange = null;           // mount() 里赋值:重算视口/画布(渲染精度改了要立刻生效)
    var PIXEL_BUDGET = 8000000;            // 后备缓冲像素预算 ≈ 3840×2160:超过就自动降采样
    /* 视口是否已与记录不符。必须放在工厂作用域:mount() 的看门狗和 __dshWhale.geometry() 都要用。 */
    function viewportStale() {
      return window.innerWidth !== W
        || window.innerHeight !== H
        || effectiveDpr() !== dpr;
    }
    /* 渲染精度(0.6.0):后备缓冲的像素密度。
       "自动"= 不高于设备像素比,且总像素不超过 PIXEL_BUDGET ——
       4K@2x 是 3300 万像素(每帧光栅化 132MB 的缓冲),那是比任何绘制调用都贵的开销;
       而点阵本来就是 1~5px 的小方块,降到 1x 肉眼几乎无差别。 */
    function effectiveDpr() {
      var raw = Math.min(2, window.devicePixelRatio || 1);
      var want = Number(CFG.renderScale);
      if (want > 0) return Math.max(0.5, Math.min(2, want));
      var w = window.innerWidth || 1, h = window.innerHeight || 1;
      var fit = Math.sqrt(PIXEL_BUDGET / Math.max(1, w * h));
      return Math.max(0.7, Math.min(raw, fit));
    }
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
              /* g = 该点在主体包围盒里的横向位置 0..1(0.5.0):双色渐变按它取色,
                 与主题/颜色无关,所以在采样时一次算好,平移(hx)时也不用改。 */
              g: bw > 0 ? Math.max(0, Math.min(1, (x - x0) / bw)) : 0.5,
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
        var rot = Math.random() * Math.PI;
        return {
          x: p.hx + (Math.random() - 0.5) * 2 * r0,
          y: p.hy + (Math.random() - 0.5) * 2 * r0,
          vx: 0, vy: 0, s: p.s, rot: rot,
          /* 0.6.0:旋转角**一次生成后就不再变**,cos/sin 在这里存好 ——
             原来每帧靠 ctx.rotate() 现算三角函数,4000 粒 ×2 遍就是白烧 8000 次。 */
          cos: Math.cos(rot), sin: Math.sin(rot),
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
      var cands = ["." + SEL.sidebar, '[data-slot="sidebar"]', '[data-slot="sidebar-rail"]'];
      for (var i = 0; i < cands.length; i++) {
        if (!cands[i] || cands[i] === ".") continue;
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
    var panelEl = null;          // 浮动面板(兼容:section 内的按钮会调用 openSettings)
    var panelHost = null;        // 设置页 section 里的控件容器
    var modeListeners = [];      // section 内手动/自动按钮的刷新回调
    var syncers = [];            // "把 CFG 刷回控件"的回调(颜色/渐变等程序化改动后调用)

    function persistCfg() { try { localStorage.setItem("dsh-whale:cfg", JSON.stringify(CFG)); } catch (e) {} }
    /* 参数变化后的统一收尾:颜色/发光这类"不用重建几何、但要重算一次"的键在这里处理。
       重建类(density/whaleScale/…)仍由 patchCfg 自己负责,行为与 0.4.1 完全一致。 */
    function afterCfgChange(k) {
      /* 光晕默认跟随粒子色,所以改颜色也要重算光晕颜色 —— 两类键一起处理。 */
      if (COLOR_KEYS.indexOf(k) >= 0 || GLOW_KEYS.indexOf(k) >= 0) computeColors();
      if (k === "glowOn" || k === "glowSize") resizeGlowSurface();
      /* 渲染精度改了要立刻按新密度重建画布(不然要等下次 resize) */
      if (k === "renderScale" && typeof onViewportChange === "function") onViewportChange();
      /* 帧率上限改了:让下一帧立刻生效,统计也重新开始 */
      if (k === "fpsCap") { nextFrameAt = 0; perf.frames = 0; perf.since = 0; updateFpsReadout(); }
    }
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
      afterCfgChange(k);
    }
    function setMode(m) {
      auto.manual = m !== "auto";
      auto.item = null;
      auto.idleAt = 0;
      try { localStorage.setItem("dsh-whale:auto", auto.manual ? "0" : "1"); } catch (e) {}
      for (var i = 0; i < modeListeners.length; i++) { try { modeListeners[i](); } catch (e) {} }
    }
    function rebuildAllControls() {
      // 参数改动后把两个界面里的滑杆/勾选都刷新一遍
      modeListeners = [];
      syncers = [];                       // 控件被重建,旧的"刷新闭包"一并作废
      if (panelHost) { panelHost.innerHTML = ""; buildControls(panelHost, false); }
      if (panelEl) { panelEl.innerHTML = ""; buildPanelBody(panelEl, true); }
    }
    /* 把 CFG 的当前值刷回所有已建好的控件(快捷配色、恢复默认、程序化改参数时用)。 */
    function syncControls() {
      for (var i = 0; i < syncers.length; i++) { try { syncers[i](); } catch (e) {} }
      for (var j = 0; j < modeListeners.length; j++) { try { modeListeners[j](); } catch (e) {} }
    }
    /* 设置页里的「实测帧率」文本:帧循环每 0.5s 调一次;控件不在(没打开设置页)时直接返回。 */
    function updateFpsReadout() {
      if (!fpsEl) return;
      var cap = Number(CFG.fpsCap) || 0;
      fpsEl.textContent = perf.fps + " fps · " + dpr.toFixed(2) + "× · " + (cap ? "上限 " + cap : "跟随显示器");
    }
    function closeSettings() {
      if (panelEl && panelEl.parentNode) panelEl.parentNode.removeChild(panelEl);
      panelEl = null;
    }
    function openSettings() {
      if (panelEl && panelEl.parentNode) { closeSettings(); return; }
      var el = document.createElement("div");
      el.id = "dsh-whale-panel";
      document.body.appendChild(el);
      panelEl = el;
      buildPanelBody(el, true);
    }
    // 面板/设置页共用的控件区:host 是容器,isPanel 决定标题与“关闭”按钮
    function buildPanelBody(host, withClose) {
      var el = host;
      var h = document.createElement("h3");
      h.textContent = "🐋 鲸鱼背景参数";
      el.appendChild(h);
      var hint = document.createElement("div");
      hint.className = "hint3";
      hint.textContent = "改动即时生效并自动保存";
      el.appendChild(hint);
      buildControls(el, true);
    }
    // 设置页里的排版:行/分组/控件都照官方设置页的 token 与尺寸来做
    var ROW_L = { display: "flex", alignItems: "center", gap: "12px", padding: "10px 0", borderBottom: "0.5px solid var(--dsw-alias-border-l2)" };
    var ROW_LAST = { display: "flex", alignItems: "center", gap: "12px", padding: "10px 0" };
    var ROW_TEXT = { display: "flex", flexDirection: "column", flex: 1, gap: "2px", minWidth: 0 };
    var TEXT_TITLE = { color: "var(--dsw-alias-label-primary)", fontSize: "14px", lineHeight: "22px" };
    var TEXT_HINT = { color: "var(--dsw-alias-label-tertiary)", fontSize: "12px", lineHeight: "18px" };
    var GROUP = { marginTop: "18px" };
    var GROUP_TITLE = { color: "var(--dsw-alias-label-primary)", fontSize: "14px", fontWeight: 600, margin: "0 0 2px" };
    var RANGE = { flex: "1 1 120px", minWidth: "100px", maxWidth: "260px", accentColor: "var(--dsw-alias-brand-primary)", height: "20px" };
    var VAL = { color: "var(--dsw-alias-label-secondary)", fontSize: "12px", width: "52px", textAlign: "right", fontVariantNumeric: "tabular-nums", flex: "none" };
    /* 「实测帧率」那种一行文字(比 VAL 宽,不需要定宽) */
    var VAL_TEXT = { color: "var(--dsw-alias-label-secondary)", fontSize: "12px", fontVariantNumeric: "tabular-nums", flex: "none" };
    var CHECKBOX = { width: "16px", height: "16px", flex: "none", accentColor: "var(--dsw-alias-brand-primary)" };
    var COLOR_INPUT = { width: "46px", height: "28px", padding: "0", flex: "none", cursor: "pointer", background: "transparent", border: "0.5px solid var(--dsw-alias-border-l4)", borderRadius: "8px" };
    var SEG = { display: "inline-flex", gap: "4px", padding: "3px", borderRadius: "999px", background: "var(--dsw-alias-bg-module-platform)", flex: "none" };
    var SEG_BTN = { appearance: "none", font: "inherit", fontSize: "13px", lineHeight: "20px", cursor: "pointer", border: 0, borderRadius: "999px", padding: "4px 14px", background: "transparent", color: "var(--dsw-alias-label-secondary)" };
    var SEG_ON = { appearance: "none", font: "inherit", fontSize: "13px", lineHeight: "20px", fontWeight: 600, cursor: "pointer", border: 0, borderRadius: "999px", padding: "4px 14px", background: "var(--dsw-alias-interactive-bg-hover)", color: "var(--dsw-alias-label-primary)" };
    var BTN = { appearance: "none", font: "inherit", fontSize: "13px", lineHeight: "20px", cursor: "pointer", border: "0.5px solid var(--dsw-alias-border-l4)", borderRadius: "10px", padding: "6px 14px", background: "transparent", color: "var(--dsw-alias-label-primary)", flex: "none" };

    function buildControls(el, withClose) {
      var target = el;                    // 当前写入容器:分组切换后指向该分组
      function row(title, hint, control, last) {
        var r = document.createElement("div");
        Object.assign(r.style, last ? ROW_LAST : ROW_L);
        var text = document.createElement("div");
        Object.assign(text.style, ROW_TEXT);
        var tn = document.createElement("span"); tn.textContent = title; Object.assign(tn.style, TEXT_TITLE);
        text.appendChild(tn);
        if (hint) {
          var hn = document.createElement("span"); hn.textContent = hint; Object.assign(hn.style, TEXT_HINT);
          text.appendChild(hn);
        }
        r.appendChild(text);
        if (control) r.appendChild(control);
        target.appendChild(r);
        return { row: r, text: text, hint: hint ? text.lastChild : null };
      }
      function group(title) {
        var g = document.createElement("div");
        Object.assign(g.style, GROUP);
        var h = document.createElement("div"); h.textContent = title; Object.assign(h.style, GROUP_TITLE);
        g.appendChild(h);
        el.appendChild(g);
        target = g;
        return g;
      }
      /* 数值显示(0.5.0 修复):0.4.1 把显示元素当参数传进 rangeControl,但 13 个调用点
         全都写 null —— 因为那个 <span> 是在下面的 withValue() 里才创建的,于是
         `if (valEl)` 两条永不执行:拖动滑条时效果会变、数字不动,只有关掉设置再打开
         (控件按 CFG 重建一遍)才显示当前值。现在改成"谁建 span 谁绑监听"。 */
      function fmtCfg(k) {
        var n = typeof CFG[k] === "number" ? CFG[k] : parseFloat(CFG[k]);
        if (!isFinite(n)) return String(CFG[k]);
        return String(Math.round(n * 1000) / 1000);   // 去掉 0.30000000000000004 这类浮点噪声
      }
      function rangeControl(k, min, max, step) {
        var inp = document.createElement("input");
        inp.type = "range"; inp.min = String(min); inp.max = String(max);
        inp.step = String(step); inp.value = String(CFG[k]);
        Object.assign(inp.style, RANGE);
        inp.addEventListener("input", function () {
          var n = parseFloat(inp.value);
          CFG[k] = n; persistCfg();
          if (k === "density" || k === "whaleScale" || k === "baseY" || k === "outlineOnly") resampleWhale();
          afterCfgChange(k);
        });
        return inp;
      }
      function withValue(inp, k) {
        var v = document.createElement("span");
        v.textContent = fmtCfg(k);
        Object.assign(v.style, VAL);
        var wrap = document.createElement("div");
        Object.assign(wrap.style, { display: "flex", alignItems: "center", gap: "8px", flex: "1 1 150px", justifyContent: "flex-end" });
        wrap.appendChild(inp); wrap.appendChild(v);
        var obj = { el: wrap, val: v, hint: null };
        /* 这个监听器注册在 rangeControl 的之后 → resampleWhale() 已经跑完,
           "当前 N 点"读到的是新点数。 */
        inp.addEventListener("input", function () {
          v.textContent = fmtCfg(k);
          if (k === "density" && obj.hint) obj.hint.textContent = "当前 " + fish.home.length + " 点";
        });
        return obj;
      }
      function checkControl(k, onChange) {
        var inp = document.createElement("input");
        inp.type = "checkbox"; inp.checked = !!CFG[k];
        Object.assign(inp.style, CHECKBOX);
        inp.addEventListener("change", function () { patchCfg(k, inp.checked); if (onChange) onChange(); });
        return inp;
      }
      /* 取色器(0.5.0):原生 <input type=color>,disabledWhen() 为真时置灰不可点。
         刷新闭包进 syncers —— 快捷配色/恢复默认改了 CFG 之后,只用 syncControls()
         就能把界面同步过来,不必整块重建(重建会丢焦点、也会闪一下)。 */
      function colorControl(k, disabledWhen) {
        var inp = document.createElement("input");
        inp.type = "color";
        inp.value = CFG[k];
        Object.assign(inp.style, COLOR_INPUT);
        inp.addEventListener("input", function () { patchCfg(k, inp.value); });
        var obj = {
          el: inp,
          refresh: function () {
            var off = !!(disabledWhen && disabledWhen());
            inp.value = CFG[k];
            inp.disabled = off;
            inp.style.opacity = off ? "0.4" : "1";
            inp.style.cursor = off ? "default" : "pointer";
          },
        };
        obj.refresh();
        syncers.push(obj.refresh);
        return obj;
      }
      /* 快捷配色:一格一色,点一下就切到"自定义"并换主色。 */
      function swatchRow(colors) {
        var box = document.createElement("div");
        Object.assign(box.style, { display: "flex", gap: "6px", flex: "none" });
        colors.forEach(function (hex) {
          var b = document.createElement("button");
          b.type = "button";
          b.title = hex;
          Object.assign(b.style, {
            width: "20px", height: "20px", padding: "0", flex: "none", appearance: "none",
            borderRadius: "50%", cursor: "pointer", background: hex,
            border: "0.5px solid var(--dsw-alias-border-l4)",
          });
          b.addEventListener("click", function () {
            CFG.colorMode = "custom";
            CFG.dotColor = hex;
            persistCfg();
            computeColors();
            syncControls();
          });
          box.appendChild(b);
        });
        return box;
      }
      // shape 是二选一枚举(不是布尔),单独给一个勾选框
      function shapeControl() {
        var inp = document.createElement("input");
        inp.type = "checkbox"; inp.checked = CFG.shape === "square";
        Object.assign(inp.style, CHECKBOX);
        inp.addEventListener("change", function () { patchCfg("shape", inp.checked ? "square" : "dot"); });
        return inp;
      }
      function segment(items, onPick, isOn) {
        var box = document.createElement("div");
        Object.assign(box.style, SEG);
        var btns = items.map(function (it) {
          var b = document.createElement("button");
          b.type = "button";
          b.textContent = it.label;
          Object.assign(b.style, isOn(it.key) ? SEG_ON : SEG_BTN);
          b.addEventListener("click", function () {
            onPick(it.key);
            btns.forEach(function (bb, idx) { Object.assign(bb.style, isOn(items[idx].key) ? SEG_ON : SEG_BTN); });
          });
          box.appendChild(b);
          return b;
        });
        return { el: box, btns: btns, refresh: function () { btns.forEach(function (bb, idx) { Object.assign(bb.style, isOn(items[idx].key) ? SEG_ON : SEG_BTN); }); } };
      }

      /* ---- 运动:手动扰动 ---- */
      group("鼠标扰动");
      var vRepelR = withValue(rangeControl("repelR", 60, 300, 5), "repelR");
      row("扰动半径", "光标影响范围(px)", vRepelR.el);
      var vRepelA = withValue(rangeControl("repelA", 0, 60000, 500), "repelA");
      row("径向推斥", "把点推开的力度", vRepelA.el);
      var vAgi = withValue(rangeControl("agiA", 0, 60000, 1000), "agiA");
      row("扰动强度", "每颗粒子自有外力的幅度", vAgi.el);
      var vSpring = withValue(rangeControl("springS", 30, 400, 5), "springS");
      row("回位刚度", "离开后弹回原位的快慢", vSpring.el);
      var vDamp = withValue(rangeControl("damping", 2, 30, 0.5), "damping");
      row("阻尼", "越大越稳、越小越弹", vDamp.el, true);

      /* ---- 自动(屏保) ---- */
      group("自动模式(屏保)");
      var vSpeed = withValue(rangeControl("waveSpeed", 80, 1400, 10), "waveSpeed");
      row("波速", "波前扫过的速度(px/s)", vSpeed.el);
      var vHalf = withValue(rangeControl("waveHalf", 30, 300, 5), "waveHalf");
      row("波带宽", "扰动带半宽(px)", vHalf.el);
      var vDiag = withValue(rangeControl("waveDiag", 0.3, 1, 0.05), "waveDiag");
      row("斜向减速", "45° 方向的速度系数", vDiag.el);
      var vGap = withValue(rangeControl("autoGap", 0, 12, 0.5), "autoGap");
      row("自动间隔", "两段效果之间的安静时长(秒)", vGap.el);
      row("波向随机", "关闭则固定为左→右", checkControl("dirRandom"), true);

      /* ---- 外观 ---- */
      group("外观");
      var vDensity = withValue(rangeControl("density", 400, 9000, 100), "density");
      var densityRow = row("点密度", "当前 " + fish.home.length + " 点", vDensity.el);
      vDensity.hint = densityRow.hint;
      var vScale = withValue(rangeControl("whaleScale", 0.3, 0.9, 0.01), "whaleScale");
      row("主体大小", "占视口宽度的比例", vScale.el);
      var vBaseY = withValue(rangeControl("baseY", 0.2, 0.8, 0.01), "baseY");
      row("垂直位置", "0 = 顶部,1 = 底部", vBaseY.el);
      row("方块颗粒", "关闭则用圆点", shapeControl(), true);
      row("点阵网格", "在主体之外铺一层背景点阵", checkControl("gridOn"), true);

      /* ---- 颜色(0.5.0) ---- */
      group("颜色");
      var colorSeg = segment(
        [{ key: "theme", label: "🎨 跟随主题" }, { key: "custom", label: "🎯 自定义" }],
        function (key) { patchCfg("colorMode", key); syncControls(); },
        function (key) { return CFG.colorMode === key; }
      );
      syncers.push(colorSeg.refresh);
      row("调色方式", "跟随深浅主题,或自己调一套", colorSeg.el);

      var vDotColor = colorControl("dotColor", function () { return CFG.colorMode !== "custom"; });
      row("粒子颜色", "自定义模式下生效", vDotColor.el);
      row("快捷配色", "点一下直接换主色(并切到自定义)", swatchRow(
        ["#94beff", "#6be3d6", "#b39dff", "#ff8ad0", "#ffcf6b", "#8effa6", "#ff9a76", "#eaf2ff"]
      ));

      var vDotGrad = checkControl("dotGrad", syncControls);
      row("双色渐变", "主色沿主体从左到右渐到副色", vDotGrad);
      var vDotColor2 = colorControl("dotColor2", function () { return CFG.colorMode !== "custom" || !CFG.dotGrad; });
      row("渐变副色", "勾选双色渐变后生效", vDotColor2.el);

      var vDotAlpha = withValue(rangeControl("dotAlpha", 0.2, 1, 0.05), "dotAlpha");
      row("粒子浓度", "1 = 主题原样,越小越淡", vDotAlpha.el);

      var vGridFollow = checkControl("gridFollow", syncControls);
      row("网格跟随", "网格点阵用粒子主色", vGridFollow);
      var vGridColor = colorControl("gridColor", function () { return !!CFG.gridFollow; });
      row("网格颜色", "关掉「网格跟随」后生效", vGridColor.el, true);

      /* ---- 发光(0.5.0) ---- */
      group("发光");
      var vGlowOn = checkControl("glowOn", syncControls);
      row("粒子发光", "每颗粒子外面加一层光晕", vGlowOn);
      var vGlowStrength = withValue(rangeControl("glowStrength", 0, 1, 0.05), "glowStrength");
      row("光晕强度", "0 = 关,1 = 最亮", vGlowStrength.el);
      var vGlowSize = withValue(rangeControl("glowSize", 4, 40, 1), "glowSize");
      row("光晕范围", "扩散半径(px),越大越柔", vGlowSize.el);
      var vGlowFollow = checkControl("glowFollow", syncControls);
      row("光晕跟随", "光晕用粒子颜色(含双色渐变)", vGlowFollow);
      var vGlowColor = colorControl("glowColor", function () { return !!CFG.glowFollow; });
      row("光晕颜色", "关掉「光晕跟随」后生效", vGlowColor.el, true);

      /* ---- 性能(0.6.0) ---- */
      group("性能");
      var fpsSeg = segment(
        [{ key: "0", label: "跟随显示器" }, { key: "120", label: "120" }, { key: "90", label: "90" },
         { key: "60", label: "60" }, { key: "45", label: "45" }, { key: "30", label: "30" }],
        function (key) { patchCfg("fpsCap", Number(key)); syncControls(); },
        function (key) { return String(Number(CFG.fpsCap) || 0) === key; }
      );
      syncers.push(fpsSeg.refresh);
      row("帧率上限", "每秒最多画多少帧(越低越省电)", fpsSeg.el);

      var scaleSeg = segment(
        [{ key: "0", label: "自动" }, { key: "1", label: "1×" },
         { key: "1.5", label: "1.5×" }, { key: "2", label: "2×" }],
        function (key) { patchCfg("renderScale", Number(key)); syncControls(); },
        function (key) { return String(Number(CFG.renderScale) || 0) === key; }
      );
      syncers.push(scaleSeg.refresh);
      row("渲染精度", "画布像素密度;自动 = 不超屏幕、也不超像素预算", scaleSeg.el);

      fpsEl = document.createElement("span");
      Object.assign(fpsEl.style, VAL_TEXT);
      row("实测帧率", "每 0.5s 刷新;卡的话先调低帧率上限或渲染精度", fpsEl, true);

      /* ---- 主体来源 ---- */
      group("主体来源");
      var subjSeg = segment(
        [{ key: "whale", label: "🐋 鲸鱼" }, { key: "photo", label: "🖼 照片" }],
        function (key) {
          patchCfg("subject", key);
          if (key === "photo") {
            ensurePhotoLoad();
            if (!photoA && !photoLoading) fileInput.click();
          }
          syncPhoto();
        },
        function (key) { return CFG.subject === key; }
      );
      row("主体", "鲸鱼剪影,或导入透明 PNG 照片", subjSeg.el);

      var fileInput = document.createElement("input");
      fileInput.type = "file"; fileInput.accept = "image/*"; fileInput.style.display = "none";
      var photoStatus = document.createElement("span");
      Object.assign(photoStatus.style, TEXT_HINT);
      var fileBtn = document.createElement("button");
      fileBtn.type = "button"; fileBtn.textContent = "选择 PNG";
      Object.assign(fileBtn.style, BTN);
      var photoCtl = document.createElement("div");
      Object.assign(photoCtl.style, { display: "flex", alignItems: "center", gap: "10px", flex: "1 1 200px", justifyContent: "flex-end" });
      photoCtl.appendChild(photoStatus); photoCtl.appendChild(fileBtn); photoCtl.appendChild(fileInput);
      row("照片蒙版", "按 alpha 取主体,仅存本地", photoCtl);

      var vAlpha = withValue(rangeControl("photoAlpha", 0, 255, 4), "photoAlpha");
      var alphaRow = row("alpha 阈值", "低于该值视为透明", vAlpha.el);
      var invertRow = row("反相", "改选透明区域作为主体", checkControl("photoInvert"), true);

      fileInput.addEventListener("change", function () {
        if (fileInput.files && fileInput.files[0]) importPhoto(fileInput.files[0]);
        fileInput.value = "";
      });
      fileBtn.addEventListener("click", function () { fileInput.click(); });
      function syncPhoto() {
        var on = CFG.subject === "photo";
        photoStatus.textContent = on
          ? (photoA ? "已导入蒙版" : (photoLoading ? "读取中…" : (photoErr ? photoErr : "未导入")))
          : "切换到照片后可导入";
        fileBtn.disabled = !on;
        fileBtn.style.opacity = on ? "1" : "0.45";
        alphaRow.row.style.display = on ? "" : "none";
        invertRow.row.style.display = on ? "" : "none";
      }

      /* ---- 轮廓 ---- */
      group("轮廓");
      row("只保留轮廓", "只画主体边缘的点", checkControl("outlineOnly"), true);

      /* ---- 模式 ---- */
      group("模式");
      var modeSeg = segment(
        [{ key: "manual", label: "🖱 手动" }, { key: "auto", label: "🌀 自动" }],
        function (key) { setMode(key); },
        function (key) { return (key === "auto") === !auto.manual; }
      );
      row("驱动方式", "手动跟随鼠标,自动当屏保", modeSeg.el);
      statusEl = document.createElement("div");
      Object.assign(statusEl.style, Object.assign({ padding: "8px 0 2px" }, TEXT_HINT));
      el.appendChild(statusEl);
      modeListeners.push(function () {
        modeSeg.refresh();
        statusEl.textContent = auto.manual
          ? "手动:鼠标靠近处点阵被扰动,移开自动归位"
          : "自动:360° 波扫过 + 全屏呼吸,可当屏保";
      });

      var actions = document.createElement("div");
      Object.assign(actions.style, { display: "flex", gap: "8px", marginTop: "16px" });
      var bReset = document.createElement("button");
      bReset.type = "button"; bReset.textContent = "↺ 恢复默认";
      bReset.title = "把所有参数恢复成出厂值并即时生效";
      Object.assign(bReset.style, BTN);
      bReset.addEventListener("click", resetDefaults);
      actions.appendChild(bReset);
      if (withClose) {
        var bClose = document.createElement("button");
        bClose.type = "button"; bClose.textContent = "关闭";
        Object.assign(bClose.style, BTN);
        bClose.addEventListener("click", closeSettings);
        actions.appendChild(bClose);
      }
      el.appendChild(actions);
      syncPhoto();
      modeListeners[modeListeners.length - 1]();
    }
    function resetDefaults() {
      for (var i = 0; i < CFG_KEYS.length; i++) {
        CFG[CFG_KEYS[i]] = CFG_DEFAULT[CFG_KEYS[i]];
      }
      persistCfg();
      resampleWhale();
      rebuildAllControls();
    }
    /* ---------- 设置页:挂在 设置 → 插件 里的一个 tab ----------
     * 为什么不用 settings.section(独立侧栏板块):实测在这台 Desktop 上注册成功
     * 但界面里不出现(内置 section 与 dshmarket 都走同一条路,原因待查)。
     * 为什么不做成「插件配置」里的一张卡片:`settings.plugin.item` 是 keyed 槽,
     * 只渲染宿主 settingsScope.describe() 里出现的命名空间;实测第三方插件在宿主
     * 侧没有注册设置命名空间的 api(已装插件里只有 ctx.provide/tools/skills 之类),
     * 所以卡片进不去那个列表。
     * 折中:在「插件」板块里加一个同级 tab,参数直接铺开(不再折叠);行的排版
     * (16px 行距、0.5px border-l2 分隔线、label-primary/tertiary 两级文字、胶囊分段控件)
     * 全部照官方设置页与卡片的 token 与尺寸,观感与「插件配置」一致。
     */
    var NS = "dsh-whale-particles";
    var LOCALE = {
      zh: {
        "nav": "鲸鱼点阵背景",
        "title": "鲸鱼点阵背景",
        "intro": "点阵主视觉的全部参数,改动即时生效并自动保存。",
        "manual": "手动:鼠标靠近处点阵被扰动,移开自动归位",
        "auto": "自动:360° 波扫过 + 全屏呼吸,可当屏保"
      },
      en: {
        "nav": "Whale particles",
        "title": "Whale particle background",
        "intro": "Every knob for the dot-matrix backdrop; changes apply instantly and save themselves.",
        "manual": "Manual: the cursor disturbs nearby dots, they settle back when it leaves",
        "auto": "Auto: 360-degree waves + full-screen breathing, usable as a screensaver"
      }
    };
    // 版面:标题 + 一行说明 + 直接铺开的参数区(不再折叠)
    var S_SECTION = { maxWidth: "760px", color: "var(--dsw-alias-label-primary)" };
    var S_HEADING = { margin: "0 0 4px", fontSize: "18px", fontWeight: 600, color: "var(--dsw-alias-label-primary)" };
    var S_INTRO = { color: "var(--dsw-alias-label-tertiary)", margin: "0 0 4px", fontSize: "13px" };
    var S_FOOT = { marginTop: "18px", paddingTop: "12px", borderTop: "0.5px solid var(--dsw-alias-border-l2)", color: "var(--dsw-alias-label-tertiary)", fontSize: "12px" };

    // 控件容器:挂载时把共享的滑杆/按钮建进去
    function ControlsHost(props) {
      var hostRef = React.useRef(null);
      React.useEffect(function () {
        var host = hostRef.current;
        if (!host) return;
        panelHost = host;
        buildControls(host, false);
      }, []);
      return React.createElement("div", { ref: hostRef, style: props && props.style });
    }
    function WhaleTab(props) {
      var t = (props && props.t) || function (k) { return LOCALE.zh[k] || k; };
      return React.createElement("div", { style: S_SECTION },
        React.createElement("h2", { style: S_HEADING }, "🐋 " + t("title")),
        React.createElement("p", { style: S_INTRO }, t("intro")),
        React.createElement(ControlsHost, { style: { marginTop: "10px" } }),
        React.createElement("div", { style: S_FOOT }, "dsh-whale-particles v" + VERSION)
      );
    }

    function warn(what, err) {
      try { console.warn("[dsh-whale-particles] " + what + " 注册失败:", err); } catch (e) {}
    }
    function registerSettingsUI(ctx) {
      var t = (ctx && ctx.locale && typeof ctx.locale.bind === "function")
        ? ctx.locale.bind(NS)
        : function (k) { return LOCALE.zh[k] || k; };
      if (ctx && ctx.locale && typeof ctx.locale.register === "function" && typeof ctx.effect === "function") {
        try { ctx.effect(function () { return ctx.locale.register(NS, LOCALE); }, NS + ": dictionaries"); }
        catch (e) { warn("locale", e); }
      }
      if (!ctx || !ctx.slots || !React) { warn("slots/react 不可用,跳过设置界面", null); return; }
      try {
        ctx.slots.inject("settings.plugins.tab", function () {
          return ctx.slots.register({
            name: "settings.plugins.tab",
            id: "whale-particles",
            order: 10,                       // 排在「插件配置」(order 0)后面
            label: function () { return t("nav"); },
            locale: NS
          }, WhaleTab);
        });
      } catch (e) { warn("settings.plugins.tab", e); }
      try {
        ctx.slots.inject("settings.plugin.item", function () {
          return ctx.slots.register({
            name: "settings.plugin.item",
            key: NS,                         // 宿主按命名空间分派卡片
            locale: NS
          }, WhaleTab);
        });
      } catch (e) { warn("settings.plugin.item", e); }
    }

    /* ---------------------------- 自动驱动器 ---------------------------- */
    // 主界面控制条已移除:自动模式的状态只写到设置页里的状态行(未打开设置时忽略)
    var statusEl = null;                    // 由 buildControls 赋值
    function setStatus(text) {
      if (statusEl && statusEl.isConnected) statusEl.textContent = text;
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

    /* ------------------------------ 渲染 ------------------------------
     * 0.6.0 的三处"省下来的是每帧最贵的那部分"的改动(逐粒调用数 5 → 3):
     *   ① 方块不再 save/translate/rotate/fillRect/restore,改成 setTransform(预存 cos/sin)
     *      + fillRect —— save/restore 要压/弹**整个**绘图状态(变换、裁剪、样式、字体…),
     *      是这里最贵的一对调用;
     *   ② 颜色走 COL 的字符串缓存放进 fillStyle,透明度用 globalAlpha(数字),
     *      不再每粒拼一次 "rgba(…)" 字符串、也不再调 toFixed;
     *   ③ Math.hypot → Math.sqrt(dx*dx+dy*dy)(hypot 为了防溢出做了额外分支,慢得多)。
     */
    function paintDots(ctx) {
      var baseA = COL.dotA;
      var square = CFG.shape === "square";
      var n = fish.pts.length;
      if (!n) return;
      if (square) {
        /* 旋转矩阵每粒恒定,只有平移在变 —— dpr 乘进去直接给 setTransform 用 */
        var sd = dpr;
        for (var i = 0; i < n; i++) {
          var p = fish.pts[i], h = fish.home[i];
          var dx = p.x - h.hx, dy = p.y - h.hy;
          var off = Math.sqrt(dx * dx + dy * dy) / 260;
          if (off > 1) off = 1;
          ctx.globalAlpha = Math.min(1, baseA * (0.82 + 0.22 * off + 0.06 * (i % 3)));
          ctx.fillStyle = "rgba(" + dotColorCsv(h.g) + ",1)";
          ctx.setTransform(p.cos * sd, p.sin * sd, -p.sin * sd, p.cos * sd, p.x * sd, p.y * sd);
          var s2 = p.s / 2;
          ctx.fillRect(-s2, -s2, p.s, p.s);
        }
        ctx.setTransform(sd, 0, 0, sd, 0, 0);   // 收尾还原基础变换(下一帧的 clearRect 依赖它)
      } else {
        for (var j = 0; j < n; j++) {
          var q = fish.pts[j], g = fish.home[j];
          var qx = q.x - g.hx, qy = q.y - g.hy;
          var o2 = Math.sqrt(qx * qx + qy * qy) / 260;
          if (o2 > 1) o2 = 1;
          ctx.globalAlpha = Math.min(1, baseA * (0.82 + 0.22 * o2 + 0.06 * (j % 3)));
          ctx.fillStyle = "rgba(" + dotColorCsv(g.g) + ",1)";
          ctx.beginPath();
          ctx.arc(q.x, q.y, q.s * 0.55, 0, 6.2832);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    function render(ctx) {
      ctx.clearRect(0, 0, W, H);
      if (CFG.gridOn) {
        ctx.fillStyle = "rgba(" + rgbCsv(COL.grid) + "," + COL.gridA + ")";
        for (var g = 0; g < gridPts.length; g++) {
          ctx.fillRect(gridPts[g].x - 0.7, gridPts[g].y - 0.7, 1.4, 1.4);
        }
      }
      renderGlow(ctx);                 // 先铺光晕
      paintDots(ctx);                  // 清晰的本体盖在上面 → 颜色不被加法冲淡
    }

    /* ==================================================================
     * 发光(0.5.0)—— 离屏降采样版的 bloom
     *
     * 为什么不用 ctx.shadowBlur:那是**逐次绘制**的模糊,4000 颗粒子 = 每帧 4000 次
     * 高斯,直接掉帧。这里改成一整幅的廉价做法:
     *   1) 把所有粒子按 1/div 的分辨率画到一块离屏 canvas 上(div 由"光晕范围"决定);
     *   2) 再把它放大回主画布,用加法混合叠上去 —— 放大时的双线性插值本身就是模糊,
     *      模糊量 ≈ div px,代价只有两次整屏 drawImage。
     * 半径越大 → div 越大 → 离屏越小 → 越省,正好和"越糊越便宜"同向。
     * ================================================================== */
    var glowCanvas = null, glowCtx = null, glowDiv = 0;

    /** 光晕范围(px)→ 降采样倍数:div px 的模糊 ≈ 一次 1/div 降采样再放大。 */
    function glowDivisor() {
      var s = Number(CFG.glowSize);
      if (!isFinite(s)) s = 14;
      return Math.max(2, Math.min(12, Math.round(s / 1.5)));
    }
    function resizeGlowSurface(div) {
      glowDiv = div || glowDivisor();
      if (!glowCanvas) {
        try {
          glowCanvas = document.createElement("canvas");
          glowCtx = glowCanvas.getContext("2d");
        } catch (e) { glowCanvas = null; glowCtx = null; }
      }
      if (!glowCtx) return;
      glowCanvas.width = Math.max(1, Math.round((W || 1) / glowDiv));
      glowCanvas.height = Math.max(1, Math.round((H || 1) / glowDiv));
    }

    /* 光晕那一遍不用跟本体一样精细(0.6.0):
       离屏只有 1/div 分辨率,旋转、逐粒透明度在里面都是看不见的,
       于是整遍只留一次 fillRect(或 arc),颜色/透明度在循环外设一次 —— 逐粒 5 次调用降到 1~3 次。 */
    function paintGlowDots(ctx) {
      var n = fish.pts.length;
      if (!n) return;
      var square = CFG.shape === "square";
      /* 光晕用独立颜色时不走渐变;跟随时若开了双色渐变,颜色仍逐粒查表(只有 17 档) */
      var flat = CFG.glowFollow ? null : COL.glow;
      var grad = !flat && COL.grad;
      var mono = flat ? "rgba(" + rgbCsv(flat) + ",1)" : (grad ? null : "rgba(" + COL.mono + ",1)");
      if (mono) ctx.fillStyle = mono;
      ctx.globalAlpha = COL.dotA;          // 与本体平均透明度一致,叠出来的亮度才和 0.5.0 相当
      for (var i = 0; i < n; i++) {
        var p = fish.pts[i];
        if (grad) ctx.fillStyle = "rgba(" + dotColorCsv(fish.home[i].g) + ",1)";
        if (square) {
          var s2 = p.s / 2;
          ctx.fillRect(p.x - s2, p.y - s2, p.s, p.s);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.s * 0.55, 0, 6.2832);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    function renderGlow(ctx) {
      var s = Number(CFG.glowStrength);
      if (!CFG.glowOn || !W || !H || !(s > 0.01)) return;
      var div = glowDivisor();
      var wantW = Math.max(1, Math.round(W / div));
      var wantH = Math.max(1, Math.round(H / div));
      /* 视口或半径对不上就地重建(和看门狗同一个思路:不指望"事件一定会来") */
      if (!glowCanvas || glowCanvas.width !== wantW || glowCanvas.height !== wantH) {
        resizeGlowSurface(div);
        if (!glowCtx) return;
      }
      var gw = glowCanvas.width, gh = glowCanvas.height;
      glowCtx.setTransform(gw / W, 0, 0, gh / H, 0, 0);
      glowCtx.globalCompositeOperation = "source-over";
      glowCtx.globalAlpha = 1;
      glowCtx.clearRect(0, 0, W, H);
      paintGlowDots(glowCtx);

      ctx.save();
      ctx.globalCompositeOperation = COL.glowMode;
      ctx.imageSmoothingEnabled = true;
      ctx.globalAlpha = Math.min(1, 0.62 * s);
      ctx.drawImage(glowCanvas, 0, 0, W, H);
      var k = Math.max(0, Number(CFG.glowSize) || 0) * 0.7;
      if (k > 0.5) {                       // 第二遍再放大一点,得到更宽更淡的外晕
        ctx.globalAlpha = Math.min(1, 0.34 * s);
        ctx.drawImage(glowCanvas, -k, -k, W + 2 * k, H + 2 * k);
      }
      ctx.restore();
    }

    /* --------------------------- 挂载/卸载 --------------------------- */
    function mount() {
      // 先按当前版本的样式表定位界面类名,再注入样式(见 UI_SOURCES 注释)
      detectSelectors();
      var style = document.createElement("style");
      style.id = "dsh-whale-particles-style";
      style.textContent = buildStyle();
      document.head.appendChild(style);

      // UI 样式表可能在本插件之后才注入(客户端 bundle 是懒加载的):盯住 head,
      // 一旦类名有新的发现就重建样式,避免"先回退、后永远用旧值"。
      // 样式表到来也会改变计算样式,所以顺带请求一次结构重扫。
      function refreshStyle() {
        requestScan();
        if (!detectSelectors()) return;
        style.textContent = buildStyle();
      }
      var cssWatch = new MutationObserver(function (records) {
        for (var i = 0; i < records.length; i++) {
          var nodes = records[i].addedNodes;
          for (var j = 0; j < nodes.length; j++) {
            var n = nodes[j];
            if (n && n.tagName === "STYLE" && n.dataset && n.dataset.pluginCss) { refreshStyle(); return; }
          }
        }
      });
      try { cssWatch.observe(document.head, { childList: true }); } catch (e) {}
      disposed.push(function () { cssWatch.disconnect(); });

      var layer = document.createElement("div");
      layer.id = "dsh-whale-particles-layer";
      var canvas = document.createElement("canvas");
      layerEl = layer; canvasEl = canvas;
      layer.appendChild(canvas);
      document.body.appendChild(layer);
      var ctx = canvas.getContext("2d");
      mainCtx = ctx;

      // 主界面不再放控制条:手动/自动与全部参数都搬到了 设置 → 鲸鱼点阵背景
      try { auto.manual = localStorage.getItem("dsh-whale:auto") !== "1"; } catch (e) {}

      document.body.setAttribute("data-dsh-whale", "");

      // 调色:渲染前先把"主题 + 用户自定义"算成实际颜色(见 computeColors)
      computeColors();

      /* 结构自发现:此刻起样式表规则已生效,再扫祖先链 —— 已经被类名规则弄透明的层
         不会被重复处理,漏掉的那层会在这一步被就地中和。会话可能还没挂载,内部会重试。 */
      runScan();
      var domWatch = new MutationObserver(function () { requestScan(); });
      try { domWatch.observe(document.body, { childList: true, subtree: true }); } catch (e) {}
      disposed.push(function () { try { domWatch.disconnect(); } catch (e) {} });
      disposed.push(function () { if (scanTimer) { clearTimeout(scanTimer); scanTimer = 0; } });

      function teardown() {
        running = false;
        cancelAnimationFrame(raf);
        if (style.parentNode) style.parentNode.removeChild(style);
        closeSettings();
        if (layer.parentNode) layer.parentNode.removeChild(layer);
        restoreAll();                       // 还原本插件改过的内联样式
        document.body.removeAttribute("data-dsh-whale");
        for (var i = 0; i < disposed.length; i++) { try { disposed[i](); } catch (e) {} }
        disposed = [];
      }
      var onPointer = function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; };
      var onLeave = function () { mouse.active = false; };
      var onVis = function () {
        running = !document.hidden;
        if (running) { last = 0; nextFrameAt = 0; raf = requestAnimationFrame(frame); }
        else cancelAnimationFrame(raf);
      };
      var onResize = function () {
        dpr = effectiveDpr();                   // 渲染精度:自动按像素预算,或用户指定
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        contentCX = measureContentCenter();     // 侧栏变化时重定位鲸鱼中心
        centerTarget = contentCX;
        ensurePhotoLoad();                      // 照片模式:确保蒙版已解码
        buildPath(); resampleWhale(); buildGrid();
        resizeGlowSurface();                    // 发光离屏画布跟着视口走
      };
      onViewportChange = onResize;              // 设置页改「渲染精度」要立刻重算

      /* 视口看门狗(0.4.1):整幅图案的尺寸与位置全部由 W/H 决定
       * (宽 = 0.4×W、垂直中心 = 0.44×H),而 W/H 只在 resize 事件里更新。
       * 只要那次事件没来 —— 挂载时窗口还没定型、客户端插件被热重载、系统缩放变化,
       * 图案就会按旧尺寸画到画面外,而且不会自己恢复
       * (这正是"装完 0.4 之后图案掉到界面下面"的成因)。
       * 这里每 500ms 对一次账,发现视口或 dpr 与记录不符就重算。 */
      var vpIv = setInterval(function () { if (viewportStale()) onResize(); }, 500);
      disposed.push(function () { clearInterval(vpIv); });

      /* 侧栏宽度 → 主体水平中心(0.6.0 换成 ResizeObserver)
       *
       * 0.5.0 之前是每 400ms 轮询一次 getBoundingClientRect。聊天流式输出时 DOM 一直是脏的,
       * 那次读取会**强制同步重排整个会话**(几十毫秒都可能),于是出现了"每隔一会儿卡一下"。
       * ResizeObserver 只在元素真的变尺寸时回调,而且回调里用缓存好的尺寸,不触发重排。
       * 每 2s 只做一件很轻的事:检查观察目标还在不在(React 换节点会让观察失效),不在就重新挂上。 */
      var roTarget = null, ro = null;
      function sidebarCandidates() {
        return ["." + SEL.sidebar, '[data-slot="sidebar"]', '[data-slot="sidebar-rail"]'];
      }
      function attachSidebarWatch() {
        var found = null;
        var cands = sidebarCandidates();
        for (var i = 0; i < cands.length && !found; i++) {
          if (!cands[i] || cands[i] === ".") continue;
          try { found = document.querySelector(cands[i]); } catch (e) {}
        }
        if (found === roTarget) return;
        if (roTarget && ro) { try { ro.unobserve(roTarget); } catch (e) {} }
        roTarget = found;
        if (found && ro) {
          try { ro.observe(found); } catch (e) {}
          centerTarget = measureContentCenter();
        }
      }
      if (typeof ResizeObserver === "function") {
        try {
          ro = new ResizeObserver(function () { centerTarget = measureContentCenter(); });
        } catch (e) { ro = null; }
      }
      var watchIv = setInterval(function () {
        if (ro) {
          if (!roTarget || (roTarget.isConnected === false)) attachSidebarWatch();
          return;
        }
        centerTarget = measureContentCenter();   // 没有 ResizeObserver 才退回轮询
      }, 2000);
      disposed.push(function () {
        clearInterval(watchIv);
        if (ro) { try { ro.disconnect(); } catch (e) {} }
        ro = null; roTarget = null;
      });
      var themeObs = new MutationObserver(function () {
        var dark = document.body.hasAttribute("data-ds-dark-theme");
        theme = dark ? DARK : LIGHT;
        computeColors();        // 换主题 = 换出厂色,自定义模式下也要跟着重算一次
        requestScan();          // 深浅切换会换成另一批规则,重扫一次更稳
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

      /* 帧循环(0.6.0 加了帧率上限与实测统计)
       *
       * 上限怎么实现:requestAnimationFrame 只能对齐显示器的垂直同步,所以"限帧"= 在
       * vsync 回调里**主动跳过**若干帧。关键是 nextFrameAt 用累加而不是"画完就重置":
       * 用 `now` 重置的话,60Hz 屏上设 45 会退化成 30(每次都要等两个 vsync),累加才拿得到
       * 平均 45 的节奏。跳过的那一帧不画也不推进物理,但仍排下一帧,循环不会停。 */
      function frame(now) {
        if (!running) return;
        raf = requestAnimationFrame(frame);       // 先排下一帧:这帧被跳过也不会断流
        var cap = Number(CFG.fpsCap) || 0;
        if (cap > 0) {
          if (now < nextFrameAt) return;
          var minStep = 1000 / cap;
          nextFrameAt += minStep;
          if (nextFrameAt < now) nextFrameAt = now + minStep;   // 落后太多就不追补,只对齐到下一格
        }
        var t = now / 1000;
        /* dt 上限 0.05s(原来是 0.033):限到 30fps 时实际帧间隔就是 0.033s,
           再卡一下就会被 0.033 截断而让物理"变慢"。弹簧-阻尼在 dt=0.05 下仍然稳定。 */
        var dt = Math.min(0.05, Math.max(0.001, t - (last || t)));
        last = t;
        updateCenter(dt);   // 侧栏宽度变化时的平滑平移
        updateAuto(t);
        stepAll(dt, t);
        render(ctx);
        /* 实测帧率:每 0.5s 结算一次,只写设置页里那个文本节点 */
        perf.frames++;
        if (!perf.since) perf.since = now;
        else if (now - perf.since >= 500) {
          perf.fps = Math.round(perf.frames * 1000 / (now - perf.since));
          perf.frames = 0;
          perf.since = now;
          updateFpsReadout();
        }
      }

      onResize();
      centerTarget = contentCX = measureContentCenter();
      attachSidebarWatch();
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

    /* ------------------------- 诊断接口(DevTools 用) -------------------------
     * 升级后如果界面透明化 / 输入栏下移没生效,在 DevTools 里执行
     *   __dshWhale.selectors()      —— 每个类名是"自发现"还是"回退内置值"
     *   __dshWhale.obstructions()   —— 祖先链、已中和的层、没中和掉的残留、伪元素
     *   __dshWhale.rescan()         —— 手动重扫类名并重建样式
     *   __dshWhale.rescanChain()    —— 手动重跑一次结构自发现
     * ------------------------------------------------------------------ */
    try {
      window.__dshWhale = {
        version: VERSION,
        selectors: function () {
          var out = { values: {}, sources: {}, ui: null };
          for (var k in UI_SOURCES) out.values[k] = SEL[k];
          for (var s in SEL_SOURCE) out.sources[s] = SEL_SOURCE[s];
          try { out.ui = require("@deepseek-ai/dsh-web-frontend/package.json").version; } catch (e) {}
          out.points = fish.home.length;
          return out;
        },
        obstructions: obstructions,
        /* 运行时几何:排查"图案跑到画面外/尺寸不对"时先看这里 ——
         * 期望 layer 恰好等于视口,且 W/H 与 innerWidth/innerHeight 一致。 */
        geometry: function () {
          var r = null;
          try { if (layerEl) r = layerEl.getBoundingClientRect(); } catch (e) {}
          return {
            W: W, H: H, dpr: dpr,
            innerWidth: window.innerWidth, innerHeight: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
            stale: viewportStale(),
            canvas: canvasEl ? [canvasEl.width, canvasEl.height] : null,
            layerRect: r ? [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] : null,
            contentCX: Math.round(contentCX), centerTarget: Math.round(centerTarget),
            subject: CFG.subject, photoMaskReady: !!photoA,
            whaleScale: CFG.whaleScale, baseY: CFG.baseY, density: CFG.density,
            points: fish.home.length,
          };
        },
        rescan: function () { return detectSelectors(); },
        rescanChain: function () { runScan(); return obstructions(); },
        /* 性能自检(0.6.0):帧率目标/实测、渲染精度与后备缓冲尺寸、点数、光晕离屏尺寸。
           调完「帧率上限」「渲染精度」用它可以确认真的生效了。 */
        stats: function () {
          return {
            fps: perf.fps,
            fpsCap: Number(CFG.fpsCap) || 0,
            renderScale: Number(CFG.renderScale) || 0,
            dpr: Math.round(dpr * 1000) / 1000,
            devicePixelRatio: window.devicePixelRatio,
            viewport: [W, H],
            backingStore: canvasEl ? [canvasEl.width, canvasEl.height] : null,
            megapixels: canvasEl ? Math.round(canvasEl.width * canvasEl.height / 1e4) / 100 : null,
            pixelBudget: PIXEL_BUDGET,
            points: fish.home.length,
            gridPoints: gridPts.length,
            glow: !!CFG.glowOn && Number(CFG.glowStrength) > 0.01,
            glowSurface: glowCanvas ? [glowCanvas.width, glowCanvas.height] : null,
            shape: CFG.shape,
          };
        },
        /* 立刻重画一帧(调试用:改完参数不必等下一帧;自动化测试也靠它数绘制次数)。
           跟预览无关的时候会返回 false —— 画布还没挂上或 2D 上下文不可用。 */
        frame: function () {
          if (!mainCtx) return false;
          try { render(mainCtx); return true; } catch (e) { return false; }
        },
        /* 调色/发光自检(0.5.0):配置值 + 实际算出来的颜色,一眼看出"设了但没生效" */
        appearance: function () {
          return {
            config: {
              colorMode: CFG.colorMode, dotColor: CFG.dotColor, dotColor2: CFG.dotColor2,
              dotGrad: CFG.dotGrad, dotAlpha: CFG.dotAlpha,
              gridFollow: CFG.gridFollow, gridColor: CFG.gridColor,
              glowOn: CFG.glowOn, glowStrength: CFG.glowStrength, glowSize: CFG.glowSize,
              glowFollow: CFG.glowFollow, glowColor: CFG.glowColor,
            },
            resolved: {
              dot: COL.dot, dot2: COL.dot2, gradient: !!COL.grad, dotAlpha: COL.dotA,
              grid: COL.grid, gridAlpha: COL.gridA,
              glow: COL.glow, glowBlend: COL.glowMode,
              theme: theme === DARK ? "dark" : "light",
            },
            glowSurface: glowCanvas
              ? { w: glowCanvas.width, h: glowCanvas.height, divisor: glowDiv || glowDivisor(), ctx: !!glowCtx }
              : null,
            points: fish.home.length,
          };
        },
        apply: function () {
          var el = document.getElementById("dsh-whale-particles-style");
          if (el) el.textContent = buildStyle();
          return SEL;
        },
      };
    } catch (e) {}

    module.exports = {
      inject: ["slots", "locale"],
      apply: function (ctx) {
        registerSettingsUI(ctx);
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
