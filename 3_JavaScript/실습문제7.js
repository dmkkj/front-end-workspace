/*
const img = document.querySelectorAll(".game img");
console.log(img);

for (const i in img) {
  img[i].addEventListener("click", function (event) {
    console.log(event);
    img[i].style.display = "";
  });
}

const click = document.querySelector("#click");
click.addEventListener("click", function () {
  click.style.background = "skyblue";
});

function btn1() {
  console.log(Math.random());
}
btn1();

const check = Math.random(img[i]);
console.log(check);

for (const item of img) {
  item.addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}

//const img = document.querySelectorAll(".button button");
//console.log(img);

result.innerHTML = Math.random(img);
*/

const images = document.querySelectorAll(".images img");
const span = document.querySelector("#click span");

let count = 0;

function clickHandler() {
  // alert("click!"); 이벤트 동작 확인
  // 이미지들이 랜덤으로 계속 바뀌고 있음
  const random = [
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
    Math.floor(Math.random() * 3) + 1,
  ];

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("src", `../resources/family${random[i]}.jpg`);
  }

  // 내가 클릭한 만큼 숫자가 증가
  span.innerHTML = ++count;

  // 조건 : 이미지 3개가 모두 일치할 때
  // ==> 아래 결과 텍스트가 나오면서 버튼 클릭 안 되게 구현
  if (random[0] === random[1] && random[1] === random[2]) {
    result.innerHTML = "Congratulation!! Press restart to play again~!!";
    click.setAttribute("disabled", "disabled");
  }
}

function restartHandler() {
  // alert("restart!");
  // 이미지 처음에 셋팅했던 이미지로 변경
  console.log(images);

  for (let i = 0; i < images.length; i++) {
    images[i].removeAttribute("src", "../resources/family[i].jpg");
  }

  // 숫자 다시 0으로 셋팅하고 span 태그 값 비우기
  span.innerHTML = "";

  // 아래 텍스트도 값 비우기
  result.innerHTML = "";

  // 버튼의 disabled 삭제 -> 속성 삭제는 removeAttribute("disabled")
  click.removeAttribute("disabled");
}

click.addEventListener("click", clickHandler);
restart.addEventListener("click", restartHandler);
