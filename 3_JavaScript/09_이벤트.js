/* JavaScript 최상위 객체인 window 사용하지 않을 경우
<script></script> 태그의 위치가 <body> 태그 내 제일 밑에 위치해야 에러 안 남.
위쪽에 위치하게 되면 코드 읽는 순서에 따라 script가 먼저 실행되기 때문. null값 출력 */

/*
// DOMContentLoaded : DOM 구조가 로드되고 코드 실행!
// window.addEventListener(이벤트명, function () {});
window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1"); // h1 가지고 오기
  console.log(h1);

  // h1.onclick = function () { >> h1을 클릭했을 때. h1에 클릭 이벤트 부여
  // .onmouseenter 마우스 올렸을 때
  h1.onmouseenter = function () {
    h1.style.backgroundColor = "purple";
  };
  // .onmouseenter 마우스 떠났을 때
  h1.onmouseleave = function () {
    h1.style.backgroundColor = "pink";
  };
  // addEventListener만 기억하셔도 괜찮아요! (어떤 이벤트를 주고싶다 할 때 이것만 기억!)
  // .addEventListener(이벤트명, 이벤트가 발생했을 때 일어날 함수(이벤트 객체));
  h1.addEventListener("click", function () {
    h1.style.backgroundColor = "skyblue";
  });
});
*/

// DOMContentLoaded : DOM 구조가 로드되고 코드 실행!
// window.addEventListener(이벤트명, function () {});
const h1 = document.querySelector("h1");
//console.log(h1);
// h1.onclick = function () { >> h1을 클릭했을 때. h1에 클릭 이벤트 부여
// .onmouseenter 마우스 올렸을 때
h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
// .onmouseenter 마우스 떠났을 때
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};
// addEventListener만 기억하셔도 괜찮아요!
// .addEventListener(이벤트명, 이벤트가 발생했을 때 일어날 함수(이벤트 객체));
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
});

/*
h1.addEventListener("click", function () {});
const div = document.querySelector("#testId3"); // === p.parentNode
const p = document.querySelector("p");
// div.removeChild(p);
// console.log(p.parentNode);
p.parentNode.removeChild(p);
*/

const img = document.querySelectorAll(".container img");
console.log(img);

/* 이미지마다 이벤트 걸려면 반복문 필요! */
for (const item of img) {
  item.addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}

/*
for (const i in img) {
  img[i].addEventListener("click", function (e) {
    console.log(e.currentTarget);
    img[i].style.display = "none";
  });
}
*/

/* 바로 위 코드 줄이기
for (const i in img) {
  img[i].addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}
*/

/*
for (const i in img) {
  img[i].addEventListener("click", function (event) {
    console.log(event);
    img[i].style.display = "none";
  });
}
*/

/* 내가 짠 코드
img[0].addEventListener("click", function (event) {
  for (let i = 0; i < 5; i++) {
    img[i].style.display = "none";
  }
});
*/

const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);

/*
container.addEventListener("click", function (e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
  // console.log(e.target);
  // console.log(e.currentTarget);
});
*/
