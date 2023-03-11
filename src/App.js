import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [result, setResult] = useState(0);
  const resultRef = useRef(null);
  const inputRef = useRef(null);

  function plus(e) {
    // e.preventDefault();
    setResult((prevResult) => prevResult + Number(inputRef.current.value));
  }
  function subtract(e) {
    setResult((prevResult) => prevResult - Number(inputRef.current.value));
  }
  function multiply(e) {
    setResult((prevResult) => prevResult * Number(inputRef.current.value));
  }
  function division(e) {
    setResult((prevResult) => prevResult / Number(inputRef.current.value));
  }

  function resetInput(e) {
    inputRef.current.value = 0;
  }
  function resetResult(e) {
    setResult((prevResult) => 0);
  }
  function focusInput(e) {
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>Simple calculator</h1>
      <div className="Btn-class">
        <div>
          <p ref={resultRef} className="resultDisplay">{result}</p>
        </div>
        <div>
          <input type="number" ref={inputRef} className="inputDisplay" />
        </div>
        <button onClick={plus} className="Btn">
          Add
        </button>
        <button onClick={subtract} className="Btn">
          Subtract
        </button>
        <button onClick={multiply} className="Btn">
          Multiply
        </button>
        <button onClick={division} className="Btn">
          Division
        </button>
        <button onClick={resetResult} className="Btn">
          Reset Result
        </button>
        <button onClick={resetInput} className="Btn">
          Reset Input
        </button>
        <button onClick={focusInput} className="Btn">
          Focus
        </button>
      </div>
    </div>
  );
}

export default App;
