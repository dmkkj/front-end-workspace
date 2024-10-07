import { useState, useEffect, useRef } from "react";

// State 3, Effect 1
const Converter = () => {
  //const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const changeMinutesRef = useRef(false);
  const changeHoursRef = useRef(true);

  // const [text, setText] = useState("");
  const textRef = useRef();

  // Minutes에 숫자 입력 시 Hours에 (Minutes / 60)으로 시간 변환(Hours - disabled 처리)
  // Minutes 입력 State: false / Hours 입력 State: true
  // [Hours => Minutes] 버튼 클릭 시 Hours에 숫자 입력되게 변환
  // Houres에 숫자 입력 시 (Hours * 60)으로 시간 변환(Minutes - disabled)
  // Reset 클릭 시 "" 빈 값으로 처리
  const Minutes = (e) => {
    setText(e.target.value);
    changeHoursRef.current.value = Math.round(Minutes / 60);
  };

  const Hours = (e) => {
    setText(e.target.value);
    Math.round(Minutes / 60);
  };

  /*
    const write = (e) => {
            setText(e.target.value);
        if(setText == MinutesWrite) {
            
        } else {

        }
    }
    */

  // useEffect(() => {
  //     if(!timeChangeRef.current) {
  //         timeChangeRef.current = true;
  //         return;
  //     } else {
  //         console.log("Time changed!");
  //     }
  // }, [count]);

  const complete = () => {};

  const reset = () => {
    //setCount(0);
    setText("");
    textRef.current.value = "";
    textRef.current.focus();
  };
  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          ref={changeMinutesRef}
          onChange={Minutes}
          value={text}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          ref={changeHoursRef}
          onChange={Hours}
          value={Math.round(text / 60)}
          placeholder="Hours"
        />
      </p>
      <button onClick={reset}>Reset</button>
      <button onClick={complete}>Hours => Minutes</button>
    </>
  );
};

export default Converter;
