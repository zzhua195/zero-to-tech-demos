// 根据当前 URL 给导航高亮。
// 这个文件没用任何外部东西——但它和 cards.js / score.js 一起，
// 都挤在同一个"全局空间"里，谁要在顶层定义同名变量都会撞车。
(function () {
  var path = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-link");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) links[i].classList.add("active");
    else links[i].classList.remove("active");
  }
})();
