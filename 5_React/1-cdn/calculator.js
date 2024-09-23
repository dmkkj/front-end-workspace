// 내보내고 싶으면 export 키워드 앞에 붙이기
// export를 붙여야 내보낼 수 있다는 게 확인되어야 함
/*
export const a = 5;
export const b = 10;

export const plus = () => {
    return a + b;
};
export const minus = () => {
    return a - b;
};
*/

// 일일이 export 언제 붙이냐
const a = 5;
const b = 10;

const plus = () => {
    return a + b;
};
const minus = () => {
    return a - b;
};

// 이렇게 마지막에 export로 한번에 처리해줘도 됨
export default { a, b, plus, minus };
// export 시에 default 처리해주면 index.js에서 불러올 때 import calculator from "./calculator.js"; 별칭 생략 가능!