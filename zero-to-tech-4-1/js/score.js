// 情感分数"开始分析"动画——点一下，让数字从 0.00 滚到 0.86。
//
// 你可能会问：为什么不用 anime.js 那个更花哨的 scrambleText？
// 答案：因为我们这版 anime.js 是 <script> 标签加载的"IIFE 版本"，
// 它**根本没有 scrambleText**——这一颗"洗一遍乱码再定格"的功能
// 只活在 anime.js 的 ES 模块版本里。
// 所以这一版只能退回 setInterval 手写一格一格加，机械感扑面而来。
(function () {
  var btn = document.querySelector(".primary-button");
  var scoreEl = document.querySelector("[data-score]");
  if (!btn || !scoreEl) return; // 个人主页没这俩元素

  btn.addEventListener("click", function () {
    var target = 0.86;
    var frames = 20;
    var step = target / frames;
    var frame = 0;
    scoreEl.textContent = "0.00";
    var interval = setInterval(function () {
      frame++;
      var v = Math.min(target, frame * step);
      scoreEl.textContent = v.toFixed(2);
      if (frame >= frames) clearInterval(interval);
    }, 50);
  });
})();
