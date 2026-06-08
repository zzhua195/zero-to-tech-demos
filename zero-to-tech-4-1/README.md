# zero-to-tech-4-1（模块 4.1 配套代码）

本节配套代码——**模块化改造之前**的起点项目。
学员在课堂里会亲手把它一步步改造成模块化的版本(改完之后,代码就长成 4.2 那个 demo 的样子)。

## 它的当前状态

- 两个页面:`index.html`(个人主页)、`text-lab.html`(文字实验室)
- 顶部 hero 区(品牌 + 导航 + 大标题)、卡片、分数动画——和模块 1.2 展示过的最终成品 UI 一脉相承
- 8 个 css 文件、3 个 js 文件,沿用模块 3.2 教过的"用 `<link>` 和 `<script src>` 引文件"写法
- anime.js 通过**传统 `<script>` 标签**(IIFE 版本)从 CDN 拉过来,挂到 `window.anime` 全局
- 四个 `<script>` 必须按 **anime.js → cards.js → score.js → nav.js** 的顺序加载,错了就崩

> 这套写法刚开始还能用,但项目一长大就会撞上**两件结构痛**:**顺序坑** + **全局污染**。
> 课堂里我们会带学员亲眼撞上它们,然后一起把项目改造成 ES 模块化的版本。

## 怎么打开

直接在浏览器里双击 `index.html` 即可,无需任何工具。

## 配套实验:把 script 顺序调一下(课堂演示痛一)

把 `index.html` 底部前两行 `<script>` 调换:

```html
<script src="js/cards.js"></script>  <!-- cards 跑的时候 anime 还没加载 -->
<script src="https://cdn.jsdelivr.net/npm/animejs@4/lib/anime.iife.min.js"></script>
<script src="js/score.js"></script>
<script src="js/nav.js"></script>
```

刷新页面、F12 看控制台——一行红字:
`Uncaught ReferenceError: anime is not defined`。

卡片动画当场报废。这就是"靠 `<script>` 顺序维持依赖"的脆弱。

## 这一节学员要带走的一句话

> 项目长大了,"全堆在一起 + 手排 `<script>` 顺序 + 全靠 window 全局"的旧组织方式撑不住了。
> **模块化**把每个文件的依赖写进代码里、给每个文件一份独立作用域——
> 这就是工程化迈出的第一步。
