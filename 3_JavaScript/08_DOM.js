function btn1() {
  console.log(document.head); // <head> 태그 가져오기
  console.log(document.body); // <body> 태그 가져오기

  // 동일한 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div); // [div#testId.testClass, div#testId2.testClass, testId: div#testId.testClass, testName: div#testId.testClass, testId2: div#testId2.testClass]
  console.log(div[0]); // <div>Hello, World!</div>
  console.log(div[1]); // <div>Hello, JavaScript!</div>
}

function btn2() {
  const div = document.getElementById("testId");
  console.log(div);
}

function btn3() {
  // 동일한 class 속성 값을 갖는 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByClassName("testClass");
  console.log(div); // [div#testId.testClass, div#testId2.testClass, testId: div#testId.testClass, testName: div#testId.testClass, testId2: div#testId2.testClass]
}

function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByName("testName");
  console.log(div); // [div#testId.testClass, div#testId2.testClass]
}

function btn5() {
  let div = document.querySelector("#testId2"); // querySelector 하나만 가지고 올 때 사용
  console.log(div); // <div id="testId2" class="testClass" name="testName">Hello, JavaScript!</div>
  div = document.querySelectorAll("div"); // querySelectorAll 배열로 가지고 오기
  console.log(div); // [div#testId.testClass, div#testId2.testClass]
  console.log(div[0]); // <div id="testId" class="testClass" name="testName">Hello, World!</div>
}

function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요</span>";
  div[1].innerHTML = "<span>안녕하세요</span>";
  console.log(div[1].innerHTML);
}

function btn7() {
  const div = document.querySelector("#testId");
  div.setAttribute("data-test", "테스트");
  div.setAttribute("data-test", "테스트2");
  console.log(div.getAttribute("data-test")); // 속성값만 가지고 오기
}

function btn8() {
  const div = document.querySelector("#testId");
  div.style.color = "orange";
  div.style.backgroundColor = "blue";
}

const div = document.querySelector("#testId2");

function btn9() {
  div.classList.add("black"); // class명으로 조작할 때 쓰임 ..?
}
function btn10() {
  div.classList.remove("black");
}
function btn11() {
  // console.log(div.classList.contains("black")); // console : "black" 있으면 true. 없으면 false.
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  div.classList.toggle("black");
}

/* 자바스크립트로 태그 만들기 */
function btn13() {
  const div = document.querySelector("#testId3");

  // <p>Lorem Ipsum</p>
  const p = document.createElement("p"); // p 태그 추가하기
  p.innerHTML = "Lorem Ipsum";

  // div에 만든 p태그 추가
  div.appendChild(p);
}

function btn14() {
  const div = document.querySelector("#testId3"); // === p.parentNode
  const p = document.querySelector("p");
  // div.removeChild(p);
  // console.log(p.parentNode);
  p.parentNode.removeChild(p);
}
