const bar = document.querySelector(".progress-bar");
window.addEventListener("scroll", function () {
  // 전체 스크롤 할 수 있는 범위 = 바디 전체 높이 - 윈도우 높이 (현재 창)
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;
  bar.style.width = parseInt((window.scrollY / maxScrollValue) * 100) + "%";

  // console.log(window.scrollY); // 스크롤 위치 찾아줌
  // console.log(window.innerHeight);
  // console.log(document.body.offsetHeight);
  // console.log(document.body.offsetHeight - window.innerHeight);
});
