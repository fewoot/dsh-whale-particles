# dsh-whale-particles

把“点阵鲸鱼/照片点阵”作为 DSH Web 界面背景的浏览器端插件。

- 每颗粒子都有自己**独立、低频、平滑**的“外力”(非统一流场、非逐帧白噪声),像官网鲸鱼一样:每颗各自动作柔和、彼此不齐;
- **手动模式**:光标靠近时圈内各点柔和躁动,移开即平滑归位;
- **自动模式(屏保)**:“波”沿 **360° 任意方向**扫过主体(自动避开与上一道过近的方向,斜向按系数减速)+ “全屏呼吸”(缓缓起、维持、缓缓落),间隔默认 0(波连着波);
- **主体可切换**:
  - 🐋 鲸鱼(默认剪影);
  - 🖼 照片:导入**透明 PNG**,引擎按 alpha 取主体、内部压成几 KB 小蒙版,仅存本地(localStorage),不上传;
- **参数面板**(右下角 ⚙,或 设置 → 常规 → “🐋 鲸鱼点阵背景”):密度、大小、位置、波速/带宽/斜向系数/间隔、网格/描边/方块、alpha 阈值/反相等,全部即时生效并自动保存,带「恢复默认」;
- 附带调整:**空会话(hero)输入栏整体下移**,避免盖住主体;有对话后自动恢复贴底布局;鲸鱼中心自动跟随左侧栏宽窄(内容区居中,平滑补间)。

## 安装(本地/离线)

```sh
dsh plugin --profile desktop add ./dsh-whale-particles
```

无 dsh CLI 时(与离线分发包相同做法):
1. 把 `dsh-whale-particles` 文件夹复制到
   `C:\Users\<用户名>\.dsh\profiles\desktop\node_modules\dsh-whale-particles`;
2. 在 `…\profiles\desktop\package.json` 的 `dsh.profile.bundles` 里追加
   `"dsh-whale-particles"`(改前先备份);
3. 重启 DSH Desktop。

若 profile 不叫 `desktop`,把上面路径中的名字换成实际的即可。

## 版本适配(重要)

插件的“界面透明化”与“空会话输入栏下移”依赖 DSH Web 界面里 **CSS Module 哈希类名**;
不同 DSH/Desktop 版本这些前缀会变。**点阵引擎本身不依赖界面类名,任何版本都能渲染**,
变了的只是“让界面透明、露出背景”那几条规则和 composer 下移规则。

需要调整时,编辑 `lib/client.js` 中 `STYLE` 常量开头几条与
`measureContentCenter()` 里的选择器,把哈希前缀换成本机实际类名:

| 作用 | 选择器(0.1.2-rc.1 / Desktop v2.0.5) |
| --- | --- |
| 主框架透明 | `._1qAH1q_frame` |
| 会话/根容器透明 | `.uPhUma_root` |
| 侧栏半透明 | `._1qAH1q_sidebarCol` |
| 内容区中心测量 | `._1qAH1q_sidebarCol`、`[data-slot="sidebar"]` |
| 空会话输入栏下移 | `.uPhUma_root[data-phase=hero] .uPhUma_composerSeat` |

实测:**DSH Desktop v2.0.5**(web 前端 0.1.2-rc.1)的哈希前缀是 `_1qAH1q`
(主框架/侧栏,来自 `@deepseek-ai/dsh-client-ui-layout`)与 `uPhUma`
(会话/根容器/输入栏,来自 `@deepseek-ai/dsh-client-ui-conversation`);旧的
v2.0.3(0.1.1-rc.2)使用 `pI_x6G`、`wSkVaW`、`ydkMvW`。换版本后按上述办法
重新取值(DevTools 选中元素,取 `_frame`、`_sidebarCol`、`_composerSeat`
对应项的新前缀;全局替换这两处前缀即可)。改动后重启生效。

## 卸载 / 临时隐藏

```sh
dsh plugin --profile desktop remove dsh-whale-particles
```

或 Settings → 插件里停用;临时隐藏可在 DevTools 执行:

```js
document.body.removeAttribute('data-dsh-whale');
document.getElementById('dsh-whale-particles-layer')?.remove();
```

## 说明

- 默认鲸鱼轮廓路径内联自 dsh-homepage-skin(MIT,来源见该仓库 README),保留为默认主体;
  如需商用/换形,替换 `lib/client.js` 里的 `WHALE_PATH`(Path2D 数据)即可,照片模式不受影响。
- 纯浏览器插件:宿主半区 `lib/index.js` 为空实现;构建产物 `lib/client.js` 为
  `window.__ModuleLoader__.load` 格式,免二次构建。
- 参数与照片蒙版保存在**浏览器 localStorage**(键 `dsh-whale:cfg` / `dsh-whale:auto` /
  `dsh-whale:photo`),每台机器各自保存,不随插件文件迁移。
