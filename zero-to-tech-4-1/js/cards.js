// 卡片"一张张飞入"动画——用 anime.js 来做。
//
// 注意：这里我们用的 anime.js，是通过 <script> 标签把它加载到了
// window 全局上（HTML 底部那行 anime.iife.min.js）。
// 所以这里直接用 anime.animate / anime.stagger，背后吃的是 window.anime。
//
// 这意味着：HTML 里那行 anime.js 的 <script> 必须排在 cards.js 之前，
// 否则下面这句 anime.animate(...) 会当场炸：anime is not defined。
(function () {
  anime.animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: anime.stagger(120),   // 每张卡错开 120ms
    duration: 700,
    ease: "outBack",             // 弹性落地
  });
})();
