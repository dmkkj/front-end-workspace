import { useState } from 'react';

/*
let count = 0;
const setCount = () => {
  count ++;
  console.log(count);
}
*/

/*
const setCount = () => {  // setCount 해당하는 값의 변화하는 것을 사용
  setCounter(count + 10); // setCounter 내가 변화시키고자 하는 것만 명시해주면 됨
};
*/

const App = () => {
  const [count, setCount] = useState(0); // useState를 0으로 시작하겠다.  

  const plus = () => {
    setCount(count + 10);
  };

  const minus = () => {
    setCount(count - 10); // == (count = count - 10)
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={plus}>+10</button>
      <button onClick={minus}>-10</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
