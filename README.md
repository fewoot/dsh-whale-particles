# dsh-whale-particles

[![npm version](https://img.shields.io/npm/v/dsh-whale-particles)](https://www.npmjs.com/package/dsh-whale-particles)
[![npm downloads](https://img.shields.io/npm/dm/dsh-whale-particles)](https://www.npmjs.com/package/dsh-whale-particles)
[![license](https://img.shields.io/npm/l/dsh-whale-particles)](LICENSE)

把“点阵鲸鱼/照片点阵”作为 DSH Web 界面背景的浏览器端插件。

![dsh-whale-particles 效果示例](assets/whale-preview.png)

> 上图为界面示例(点阵主体 + 界面透明化后的观感)。

- 每颗粒子都有自己**独立、低频、平滑**的“外力”(非统一流场、非逐帧白噪声),像官网鲸鱼一样:每颗各自动作柔和、彼此不齐;
- **手动模式**:光标靠近时圈内各点柔和躁动,移开即平滑归位;
- **自动模式(屏保)**:“波”沿 **360° 任意方向**扫过主体(自动避开与上一道过近的方向,斜向按系数减速)+ “全屏呼吸”(缓缓起、维持、缓缓落),间隔默认 0(波连着波);
- **主体可切换**:
  - 🐋 鲸鱼(默认剪影);
  - 🖼 照片:导入**透明 PNG**,引擎按 alpha 取主体、内部压成几 KB 小蒙版,仅存本地(localStorage),不上传;
- **调色**(0.5.0):粒子颜色可以跟着深浅主题走,也可以自己调 —— 取色器 + 八档快捷配色、主色→副色**双色渐变**、粒子浓度(不透明度)、网格点阵是否跟随粒子色(可单独指定网格颜色);
- **发光**(0.5.0):每颗粒子外面一层光晕,强度和扩散范围可调;光晕默认跟随粒子颜色(含渐变),也可以单独指定一个颜色。做法是"离屏降采样 + 放大叠回"的整幅 bloom,**不是**逐粒 `shadowBlur`(4000 颗粒子那样会直接掉帧);深色主题用加法混合(真发光),浅色主题自动改成乘法(柔和暗晕),两种主题下都看得见;
- **参数面板**(设置 → 插件 → 「鲸鱼点阵背景」标签页,直接铺开、无需展开):按「鼠标扰动 / 自动模式 / 外观 / 颜色 / 发光 / 主体来源 / 轮廓 / 模式」八组排列;手动·自动、鲸鱼·照片、跟随主题·自定义都是高亮分段控件(当前选中项一眼可见);滑杆旁的数值**随拖动实时变化**(0.5.0 修复,之前要关掉设置再打开才刷新);全部即时生效并自动保存,底部带「恢复默认」与版本号;
- **主界面不占位**:没有右下角悬浮条,参数与手动/自动切换都在设置页里;
- 附带调整:**空会话(hero)输入栏整体下移**,避免盖住主体;有对话后自动恢复贴底布局;鲸鱼中心自动跟随左侧栏宽窄(内容区居中,平滑补间)。

## 安装

**方式一:npm(推荐,之后可在插件市场里一键更新)**

```sh
dsh plugin --profile desktop add dsh-whale-particles
```

装好后 profile 会把它记成依赖,`npm` 上发了新版本时,DSH 插件市场
(设置 → 插件)就能检测到并一键更新。

**方式二:本地目录**

```sh
dsh plugin --profile desktop add ./dsh-whale-particles
```

**方式三:离线包(免命令行)**

见 [`release/`](release/) 目录:解压 `dsh-whale-particles-offline-*.zip` 后双击
`install-whale.bat`,脚本会自动备份 profile 的 `package.json`、拷入插件并注册 bundle。

**不借助 dsh CLI 手动安装**(与离线包内部做法相同):
1. 把 `dsh-whale-particles` 文件夹复制到
   `%USERPROFILE%\.dsh\profiles\<profile>\node_modules\dsh-whale-particles`;
2. 在 `…\profiles\<profile>\package.json` 的 `dsh.profile.bundles` 里追加
   `"dsh-whale-particles"`(改前先备份);
3. 重启 DSH Desktop。

> 注意:手动拷进去的副本不会出现在插件市场的"已安装"列表里,也就没有一键更新;
> 想走市场更新请用方式一。

profile 名默认 `desktop`(桌面版);若你的 profile 不叫这个,换成实际的即可。
安装/更新后**需要重启 DSH Desktop**(客户端 bundle 在启动时装载)。

## 版本适配(重要)

插件的“界面透明化”与“空会话输入栏下移”依赖 DSH Web 界面里 **CSS Module 哈希类名**
(如 `qNbT7G_frame`、`_0cyzDW_composerSeat`)。这些前缀每次重新构建都会变,**旧版本把前缀写死,
所以每次 DSH/Desktop 升级这两项都会失效**。

**0.3.1 起改为运行时自发现,不再需要跟着版本改代码**:UI 各包把自己的 CSS 以
`<style data-plugin-css="<包名>/<模块>.module.css">` 注入文档,同一模块里类名的**后缀**
(`_frame` / `_sidebarCol` / `_centerCol` / `_root` / `_composerSeat`)是稳定的,只有前缀是哈希。
插件在挂载时扫描这些样式表,按模块定位、按后缀取前缀;UI 样式表若在本插件之后注入,
`MutationObserver` 会补扫一次并重建样式。

**0.4.0 起再加一层「结构自发现」,这类失效基本不用再管**:后缀自发现只能解析*名单上*
那几层的真名,UI 一旦**新增**一个铺底容器就漏一层,而且毫无告警。所以每次挂载(≈每次启动
客户端 / 刷新页面)还会额外做一件事 —— 从会话内容**沿着祖先链走到 `<body>`**,凡是计算
样式不透明的祖先就地打内联 `background: transparent !important` 中和,并记住原值待卸载时还原:

```
div[data-slot="conversation.content"]          ← 锚点(语义选择器,无哈希)
  → div.Dc7zOa_root[data-phase=hero]           ← 会话根
  → div[data-slot="main"]                      ← 槽锚点(display:contents,不生成盒子)
  → div.BynINW_centerCol                       ← 中列 ← 0.2.0-rc.2 新增的那层,以前就是漏在这里
  → div.BynINW_frame
  → div[data-slot="root"]                      ← 槽锚点(display:contents)
  → #root
  → body
```

为什么只走**祖先**就够:所有小面(缩略图、卡片、代码块)都是会话的**后代**,交互弹出的
菜单 / 悬浮卡是**兄弟** —— 它们都挡不住那张 `z-index:-1` 的画布,所以既不需要也不应该动。
内联 + `!important` 压过任何样式表规则(包括对方也写了 `!important`),所以从 0.4.0 起
**既不用跟着升级改名单,也不用再算特异度**。DOM 增删 / 尺寸变化 / 深浅主题切换都会触发重扫
(有限流),节点被重建也能自动补上。

> **0.4.0 一并修复 —— DSH 官方客户端 0.2.0-rc.2:** 新版 Windows 桌面端会在 `<html>` 上打
> `data-windows-titlebar`,配套规则 `[data-windows-titlebar] .*_centerCol{background:var(--dsw-alias-bg-base)}`
> 给**中列**(会话所在的那一格)铺了一层不透明底色。中列是 `ConversationRoot` 的**父节点**,
> 所以只把 frame / root 透明化已经不够 —— 鲸鱼照常渲染、只是被这层整片盖住,看起来就像"插件失效"。
> 这一版同时保留了类名规则(`UI_SOURCES` 多了 `centerCol`,`body[data-dsh-whale] .*_centerCol{background:transparent}`,
> 特异度 (0,2,1) 高于那两条 (0,2,0))作为快路径,结构自发现负责兜住以后的新层。

- 点阵引擎本身不依赖任何界面类名,**任何版本都能渲染**;受影响的只有"让界面透明、露出背景"
  和 composer 下移这几条规则。
- **0.4.1 起再加一层「视口看门狗」**:图案的大小与位置**完全由视口宽高决定**
  (宽 = 0.4 × 视口宽、垂直中心 = 0.44 × 视口高),而这两个值原先只在 `resize` 事件里更新。
  客户端的**插件热重载**(安装/升级插件会触发)、窗口在**不同缩放比例的显示器之间移动**、
  外接屏插拔等情况**不一定会触发 `resize`** —— 那时图案就会按旧尺寸画到画面外
  (表现为"整体掉到界面下面、还被切掉"),而且不会自愈。现在每 500ms 对一次账,
  视口尺寸或像素比与记录不符就重算。诊断用 `__dshWhale.geometry()`。
- 升级后想确认状态,DevTools 里看这四样:
  - `__dshWhale.selectors()` —— 每个类名是 `discovered`(自发现)还是 `fallback`(回退内置值);
  - `__dshWhale.obstructions()` —— 锚点、完整祖先链、**已中和**的层、没中和掉的**残留**、以及伪元素;
  - `__dshWhale.geometry()` —— `W/H/dpr` 与真实视口的对照、`stale` 标志、canvas 与画布层尺寸、
    `contentCX`、当前主体与参数(排查"图案位置/大小不对"先看它);
  - `__dshWhale.rescanChain()` —— 手动重跑一次结构自发现。
- 控制台会主动说话,不再静默:中和了几层会打一条 `info`;真出问题会打 `warn` ——
  「结构自检:仍有不透明祖先没能中和」「结构自检找不到内容锚点」。
- 内联样式唯一管不到的是**伪元素**(`::before` / `::after`)。它们只被**报告**、不会被自动改
  —— frame 那条 40px 标题栏 `::before` 就是有意保留实色的。若哪天真的多出一条挡住的伪元素,
  `obstructions().pseudos` 会点名。
- 仍然失败时(理论上只剩伪元素/`<canvas>`/`<img>` 这类遮挡),用 `maintain/extract-ui-css.mjs`
  取本机真实类名,或按 `maintain/RELEASE.md` 第 6 节的流程排查。

各版本实测类名(下表只是兜底表的来源,正常路径是自发现):

| 作用 | 后缀 | 0.2.0-rc.2(官方客户端 Desktop 0.2.0-rc.2) | 0.1.5-rc.2(Desktop v2.0.13) | 0.1.2-rc.1 / 0.1.5-rc.1(v2.0.5~v2.0.9) | 0.1.1-rc.2(v2.0.3) |
| --- | --- | --- | --- | --- | --- |
| 主框架透明 | `_frame` | `BynINW_frame` | `qNbT7G_frame` | `_1qAH1q_frame` | `pI_x6G_frame` |
| 侧栏半透明 | `_sidebarCol` | `BynINW_sidebarCol` | `qNbT7G_sidebarCol` | `_1qAH1q_sidebarCol` | `pI_x6G_sidebarCol` |
| **中列透明(0.4.0 新增)** | `_centerCol` | `BynINW_centerCol` | `qNbT7G_centerCol` | `_1qAH1q_centerCol` | `pI_x6G_centerCol` |
| 会话/根容器透明 | `_root` | `Dc7zOa_root` | `_0cyzDW_root` | `uPhUma_root` | `wSkVaW_root` |
| 空会话输入栏下移 | `_composerSeat` | `Dc7zOa_composerSeat` | `_0cyzDW_composerSeat` | `uPhUma_composerSeat` | `wSkVaW_composerSeat` |

对照的模块:`@deepseek-ai/dsh-client-ui-layout/AppFrame.module.css`(框架/侧栏/中列)、
`@deepseek-ai/dsh-client-ui-conversation/ConversationRoot.module.css`(会话根/输入栏座)。
临时用 DevTools 取类名也可以:选中元素看 `_frame`、`_sidebarCol`、`_centerCol`、`_composerSeat`
对应项的新前缀。

## 卸载 / 临时隐藏

```sh
dsh plugin --profile desktop remove dsh-whale-particles
```

或 Settings → 插件里停用;临时隐藏可在 DevTools 执行:

```js
document.body.removeAttribute('data-dsh-whale');
document.getElementById('dsh-whale-particles-layer')?.remove();
```

排查界面透明化/输入栏下移为何没生效(升级后最常用):

```js
__dshWhale.selectors()   // 每个类名的值 + 来源(discovered / fallback)+ 当前点数
__dshWhale.rescan()      // 重新扫描样式表;有变化返回 true
__dshWhale.apply()       // 按当前 SEL 重建样式
```

调色 / 发光没生效时(0.5.0):

```js
__dshWhale.appearance()  // 配置值 + 实际解析出的颜色/光晕颜色/混合模式 + 离屏画布尺寸
__dshWhale.frame()       // 立刻重画一帧(改完参数不必等下一帧)
```

## 说明

- 默认鲸鱼轮廓路径内联自 dsh-homepage-skin(MIT,来源见该仓库 README),保留为默认主体;
  如需商用/换形,替换 `lib/client.js` 里的 `WHALE_PATH`(Path2D 数据)即可,照片模式不受影响。
- 纯浏览器插件:宿主半区 `lib/index.js` 为空实现;构建产物 `lib/client.js` 为
  `window.__ModuleLoader__.load` 格式,免二次构建。
- 参数与照片蒙版保存在**浏览器 localStorage**(键 `dsh-whale:cfg` / `dsh-whale:auto` /
  `dsh-whale:photo`),每台机器各自保存,不随插件文件迁移。

## 仓库结构

```text
package.json          dsh.bundle.patch(bundle 资格)+ dsh.client(Web 客户端半边)
cordis.patch.yml      把本插件 insert 进 profile 的层栈
lib/index.js          宿主半边(空实现,纯浏览器插件)
lib/client.js         全部实现:点阵引擎 + 界面类名自发现 + 界面透明化 CSS + 参数面板(免构建)
assets/               README 用示例图
release/              发行物:最新 tgz、离线安装 zip、一键安装/卸载脚本
```
