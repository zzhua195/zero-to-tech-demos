# zero-to-tech-demos

零到全栈课程的配套 demo 代码。

> 每一节课件里都会有一句"打开 `zero-to-tech-X-Y/` 看一下"——指的就是这里。

## 当前可用

- [`zero-to-tech-4-1/`](./zero-to-tech-4-1) —— **模块 4.1：现代前端第一步——模块化**
  - 双页面网站（个人主页 + 文字实验室）的**起点版本**
  - 用的是传统 `<script>` 标签 + window 全局变量的写法
  - 跟着这一节的课件，你会把它一步步改造成 ES 模块化的版本

- [`zero-to-tech-4-3/`](./zero-to-tech-4-3) —— **模块 4.3：React 登场——组件的规则**
  - 同一个双页面网站的 **React 版终点**：两页都做成 React 组件，整个项目只剩一个空壳 `index.html`
  - 跟着这一节的课件，把 4.2 那个 vanilla 项目，一拍一拍改造成它
  - 这是个 React / Vite 工程，**不能双击打开**，要 `npm install` 后 `npm run dev`（详见它自己的 README）

## 怎么用

**在线浏览**：点上面的链接，在 GitHub web 界面里看代码。

**本地克隆**：

```bash
git clone https://github.com/joylibo/zero-to-tech-demos.git
cd zero-to-tech-demos/zero-to-tech-4-1
```

- **4-1 这种 vanilla 版**：双击 `index.html` 就能在浏览器里看到网站跑起来。
- **4-3 这种 React 版**：先 `npm install`，再 `npm run dev`，按提示打开 `localhost` 地址。

## 后续

模块 4.2 不需要单独的 demo；4.3 已加入；4.4 ~ 4.6 的 demo 会随着课件发布陆续补上。
