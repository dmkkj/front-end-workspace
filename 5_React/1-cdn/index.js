// calculator.js에서 해당하는 a값 가지고 오고 싶어. 가지고 올 땐 import!
/*
import {a, b, plus, minus} from "./calculator.js";

console.log(a, b, plus(), minus()); // 함수는 호출. plus X !  plus() O !
// console.log("Hello, Node!");
*/


// import *as calculator from "./calculator.js";
import calculator from "./calculator.js";
import lodash from "lodash";

// 위에 import에 별칭을 부여해서(*as) 이렇게도(calculator.) 가지고 올 수 있음!
console.log(calculator.a, calculator.b, calculator.plus(), calculator.minus());

const arr = [1, 1, 1, 1, 4, 4, 3, 3, 6, 7, 1, 3];
const unique = lodash.uniqBy(arr);

console.log(unique); // 중복된 숫자 제외하고 출력될 거임
