import "./App.css";
import logoFCC from "./images/freecodecamp-logo.png";
import Button from "./components/button";
import Screen from "./components/screen";
import ClearButton from "./components/clearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState(0);
  const [isResult, setIsResult] = useState(false);

  const addInput = (value) => {
    if (isResult) {
      setInput(value);
      setIsResult(false);
      return;
    }
    if (input == 0) {
      setInput(value);
      return;
    }
    setInput(input + value);
  };

  const result = () => {
    setInput(evaluate(input));
    setIsResult(true);
  };

  return (
    <div className="App">
      <div className="logoContainer">
        <img src={logoFCC} className="logo" alt="Logo" />
      </div>
      <div className="calculatorContainer">
        <Screen input={input} />
        <div className="row">
          <Button clickHandler={addInput}>1</Button>
          <Button clickHandler={addInput}>2</Button>
          <Button clickHandler={addInput}>3</Button>
          <Button clickHandler={addInput}>+</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>4</Button>
          <Button clickHandler={addInput}>5</Button>
          <Button clickHandler={addInput}>6</Button>
          <Button clickHandler={addInput}>-</Button>
        </div>
        <div className="row">
          <Button clickHandler={addInput}>7</Button>
          <Button clickHandler={addInput}>8</Button>
          <Button clickHandler={addInput}>9</Button>
          <Button clickHandler={addInput}>*</Button>
        </div>
        <div className="row">
          <Button clickHandler={result}>=</Button>
          <Button clickHandler={addInput}>0</Button>
          <Button clickHandler={addInput}>.</Button>
          <Button clickHandler={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton clear={() => setInput(0)}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
