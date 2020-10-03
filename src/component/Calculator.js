import React, { useState } from "react";
import "./style/Calculator.css";
import Screen from "./Screen";
import Keyboard from "./Keyboard";

const Calculator = () => {
  const [input, setInput] = useState({
    display: "",
    lastInput: "",
    equalsInput: true,
  });

  const addInput = (char) => {
    if (char >= 0 && char <= 9) {
      if (input.equalsInput === true) {
        console.log("true");
        setInput({
          ...input,
          display: char,
          equalsInput: false,
          lastInput: char,
        });
      } else if (input.display === "" && char === "0") {
        return;
      } else {
        console.log("false");
        setInput({
          ...input,
          display: (input.display += char),
          lastInput: (input.lastInput += char),
        });
      }
    } else if (char === "=") {
      const lastChar = input.display.substr(
        input.display.length - 1,
        input.display.length
      );
      if (input.display === "") {
        return;
      } else if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        const erase = input.display.substr(0, input.display.length - 1);
        setInput({
          ...input,
          // eslint-disable-next-line
          display: String(eval(erase)),
          equalsInput: true,
          lastInput: "",
        });
      } else {
        // eslint-disable-next-line
        setInput({ display: String(eval(input.display)), equalsInput: true });
      }
    } else if (char === "+" || char === "-" || char === "*" || char === "/") {
      const lastChar = input.display.substr(
        input.display.length - 1,
        input.display.length
      );
      if (lastChar === char) {
        return;
      } else if (lastChar >= 0 && lastChar <= 9 && input.display !== "") {
        setInput({ display: (input.display += char) });
      } else if (lastChar !== char && input.display) {
        let newcalculate = lastChar.replace(lastChar, char);
        let newData = input.display.substr(0, input.display.length - 1);
        setInput({ ...input, display: (newData += newcalculate) });
      }
    } else if (char === "AC") {
      setInput({ display: "", lastInput: "" });
    } else if (char === "C") {
      setInput({ display: input.display.substr(0, input.display.length - 1) });
    } else if (char === ".") {
      if (input.lastInput.indexOf(".") === -1) {
        setInput({
          ...input,
          display: (input.display += char),
          lastInput: (input.lastInput += char),
        });
      }
    }
  };
  console.log(input.lastInput);

  return (
    <div className="calculator">
      <Screen input={input.display} />
      <Keyboard addInput={addInput} />
    </div>
  );
};

export default Calculator;
