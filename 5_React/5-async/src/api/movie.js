import axios from "axios"; // 외부 라이브러리이기 때문에 import 해주기

// fetch ~ then
// fetch : 요청을 Promise 기반으로 처리하는 API
// then : 요청이 끝나고 응답 받을 시 데이터 처리

// fetch(URL) <- 어디로 요청을 할 건데. 요청 사항에 해당하는 URL
export const getFetchThen = () => {
  return fetch("http://localhost:8080/api/movie").then((response) => {
    return response.json();
  });
};

// async ~ await
// Promise 기반의 비동기 작업을 동기적 코드처럼 작성할 수 있게 해주는 문법
export const getAwait = async () => {
  const response = await fetch("http://localhost:8080/api/movie");
  return response.json();
};

// axios (async ~ await)
// axios는 Promise 기반 HTTP 클라이언트로, fetch보다 간결하고 많은 기능 제공
// JSON 데이터 자동으로 파싱
export const getAxios = async () => {
  const response = await axios.get();
};
