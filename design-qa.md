# PX-Work 宣贯页设计 QA

## 比较对象与证据

- Source visual truth：`/Users/huangxi/.codex/generated_images/01a0002f-4acb-73f0-8cf2-569c86a472cd/exec-bbafbde8-8b6a-469f-bedf-40aaee8213c7.png`
- Implementation：`http://127.0.0.1:4173/`
- Browser-rendered implementation screenshot：`/Users/huangxi/Documents/人工智能规划/pxwork-宣贯页/qa-browser-capture.png`
- 参考画幅：源图 `1487 × 1058 px`；实现以 `1488 × 1058 CSS px` 校验。
- 浏览器渲染证据：首屏 hero grid 为 `526.25px 679.05px`；架构图资源已加载，渲染尺寸 `679.05 × 483.14px`；标题字体 `95.23px`、单行高 `88.56px`。
- 密度说明：浏览器截图接口输出 `2976 × 2116 px` 文件，等同参考画幅的 2× 物理像素记录；浏览器求值记录 CSS 画幅为 `1488 × 1058`。截图接口在当前环境的展示层会重复拼贴画面，故以同一浏览器的 DOM、尺寸和资源加载结果作为布局复核依据。
- 状态：桌面首屏；“企业必须不变”初始选中。

## 比较历史

### 第 1 次检查

**Findings**

- [P1] 标题在参考宽度下发生换行。
  - Location: `.hero h1`。
  - Evidence: 源图中 `PX-Work` 为单行；实现初始计算字体为 `119.04px`，标题高度为 `221.41px`，呈现为两行。
  - Impact: 首屏主标题的节奏和参考风格不一致。
  - Fix: 将标题收紧为 `clamp(72px, 6.4vw, 108px)`，改为 `white-space: nowrap`。

### 第 2 次检查

**Findings**

- 无 P0 / P1 / P2 遗留项。
- 标题修复后：在 `1488 × 1058 CSS px` 画幅下为单行，字号 `95.23px`、高度 `88.56px`；左右两列与选定版式一致。

## 五项保真面复核

- Fonts and typography：采用宋体/Georgia 的高对比标题与中文无衬线正文；主标题、章节标题、橙色眉题形成与源图一致的层级。
- Spacing and layout rhythm：首屏延续左文右图、浅底留白和细线分隔；以下内容以统一宽度、成组留白和规整网格展开。
- Colors and visual tokens：背景为暖白，控制平面使用深海军蓝，强调色为橙红；与源图的深蓝 / 橙色语义一致。
- Image quality and asset fidelity：选定参考图作为首屏架构视觉，使用原始 PNG，无代码仿制图标或替代插画。
- Copy and content：已覆盖控制平面、固定与可插拔边界、交互闭环、Local Guard 和统一接入要求。

## 交互与运行检查

- 顶部“交互流程”导航已在浏览器中验证，点击后 `#flow` 顶部定位至 `-0.03px`。
- “创新可以替换”切换已在浏览器中验证：显示客户端外壳、Agent 运行时、算力来源、Tools 实现四类可替换对象。
- 浏览器控制台无 error / warning。
- `npm run build` 通过；`npm run test:sites` 4/4 通过。

## Follow-up Polish

- [P3] 如后续有企业品牌色、字体或正式 PX-Work 标识，可直接替换对应视觉资产，而不改动页面信息架构。

final result: passed
