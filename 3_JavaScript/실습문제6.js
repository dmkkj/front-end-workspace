const last = new Date("2025-01-01 00:00:00"); // 날짜 시간, 문자열로도 지정 가능

function count() {
  // 지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();

  const second = Math.floor((last - now) / 1000); // 1초 = 밀리세컨드/1000
  const minute = Math.floor(second / 60); // 60초 = 1분
  const hour = Math.floor(minute / 60); // 60분 = 1시간
  const day = Math.floor(hour / 24); // 24시간 = 1일

  clock.innerHTML = `${day}일 ${hour % 24}시간 ${minute % 60}분
  ${String(second % 60).padStart(2, "0")}초`;

  /*
  clock.innerHTML = `${day}일 ${hour % 24}시간 ${minute % 60}분 ${
    second % 60
  }초`;
  */
}

count();

setInterval(count, 1000);

/* 코드 줄이기
setInterval(() => {
  count();
}, 1000);
*/

/*
setInterval(() => {
  // 지금 현재 날짜와 비교해야 할 날짜
  const now = new Date();

  const second = Math.floor((last - now) / 1000); // 1초 = 밀리세컨드/1000
  const minute = Math.floor(second / 60); // 60초 = 1분
  const hour = Math.floor(minute / 60); // 60분 = 1시간
  const day = Math.floor(hour / 24); // 24시간 = 1일

  clock.innerHTML = `${day}일 ${hour % 24}시간 ${minute % 60}분 ${
    second % 60
  }초`;
}, 1000); // 1초마다
*/

/* ↑ 코드 줄이기
  // console.log(last - now); // 밀리세컨드
  const second = Math.floor(((last - now) / 1000) % 60);
  const minute = Math.floor(((last - now) / 1000 / 60) % 60);
  console.log(second);

  clock.innerHTML = `${minute}분 ${second}초`;
  */

/* 내가 짠 코드
// 필요한 코드
setInterval(() => { 
  console.log(`${++second}초`);
}, 1000);

const day = (last - now) / 1000 / 60 / 60 / 24;
console.log(Math.floor(day));

function time() {
  const now = new Date();
  const ty = new Date(2024, 1, 1);

  // 날짜 - 날짜 = 밀리세컨드 (1초 = 밀리세컨드/1000)
  // 60초 = 1분, 60분 = 1시간, 24시간 = 1일
  console.log("년 : ", now.getFullYear() - ty.getFullYear());
  console.log("월 : ", now.getMonth() + 1 - ty.getMonth() + 1);
  console.log("일 : ", now.getDate() - ty.getDate());
  console.log("시 : ", now.getHours() - ty.getHours());
  console.log("분 : ", now.getMinutes() - ty.getMinutes());
  console.log("초 : ", now.getSeconds() - ty.getSeconds());
}
*/
