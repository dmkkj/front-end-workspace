import { useState, useRef } from "react";

const InputText = () => {
    const [text, setText] = useState("");
    const textRef = useRef();

    const write = (e) => {
        setText(e.target.value); // text = e.target.value 사용 안 됨
    };
    const complete = () => {
        alert(textRef.current.value);
        //setText("");
        textRef.current.value = "";
        textRef.current.focus();
    };
    return (
      <>
        <input ref={textRef} onChange={write} value={text} />
        <button onClick={complete}>작성 완료</button>
      </>
    );
};
export default InputText;