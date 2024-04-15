import PropTypes from "prop-types";
import * as math from 'mathjs'
import "./Buttons.css" 
import { useState } from "react";

const ops = ['x','+','-','/']

export function Buttons({ setFormula, setDisplay, formula,display }) {

  const [reset,setReset] = useState(false);

  //TODO: Look for any missed edge cases
  const handleNumberInput = (e) => {
    if (reset) {
      setFormula(e.target.value);
      setDisplay(e.target.value);
      setReset(false);
    } else {
      setFormula(formula + e.target.value);
      if (ops.includes(display)) {
        setDisplay(e.target.value);
      } else {
        if (display === '0') {
          setDisplay(e.target.value);
        } else {
          setDisplay(display + e.target.value);
        }
      }
    }
  };

  const handleDecimal = (e) => {
    if (!display.includes('.')) {
      setFormula(formula + e.target.value);
      setDisplay(display + e.target.value);
    }
  };
  const handleClear = () => {
    setFormula("");
    setDisplay("0");
  };
  //TODO: Find a way to convert the formula string into an operation
  const handleEquals = () => {
    setDisplay(math.evaluate(formula.replace('x','*')).toString())
    setReset(true);
  };
  //TODO: Find a way to handle double operator entries, always use the last operator provided unless it is a minus in which case it will make the next number a negative
  const handleOperator = (e) => {
    if(reset){
      setFormula(display + e.target.value);
      setDisplay(e.target.value)
      setReset(false);
    } else {
      if (ops.includes(formula[formula.length - 2]) && ops.includes(formula[formula.length - 1])) {
        if (e.target.value === '-') {
          setFormula(formula.slice(0, -1) + e.target.value);
        } else {
          setFormula(formula.slice(0, -2) + e.target.value);
        }
      } else if (ops.includes(formula[formula.length - 1])) {
        if (e.target.value === '-') {
          setFormula(formula + e.target.value);
        } else {
          setFormula(formula.slice(0, -1) + e.target.value);
        }
      } else {
        setFormula(formula + e.target.value);
      }
      setDisplay(e.target.value);
    }
  };

  return (
    <div id="buttons">
      <button value="AC" id="clear" onClick={handleClear} >
        AC
      </button>
      <button value="/" id="divide" onClick={handleOperator}>
        /
      </button>
      <button value="x" id="multiply" onClick={handleOperator}>
        x
      </button>
      <button value="7" id="seven" onClick={handleNumberInput}>
        7
      </button>
      <button value="8" id="eight" onClick={handleNumberInput}>
        8
      </button>
      <button value="9" id="nine" onClick={handleNumberInput}>
        9
      </button>
      <button value="-" id="subtract" onClick={handleOperator}>
        -
      </button>
      <button value="4" id="four" onClick={handleNumberInput}>
        4
      </button>
      <button value="5" id="five" onClick={handleNumberInput}>
        5
      </button>
      <button value="6" id="six" onClick={handleNumberInput}>
        6
      </button>
      <button value="+" id="add" onClick={handleOperator}>
        +
      </button>
      <button value="1" id="one" onClick={handleNumberInput}>
        1
      </button>
      <button value="2" id="two" onClick={handleNumberInput}>
        2
      </button>
      <button value="3" id="three" onClick={handleNumberInput}>
        3
      </button>
      <button value="=" id="equals" onClick={handleEquals}>
        =
      </button>
      <button
        value="0"
        id="zero"
        onClick={(e) => {
          if (formula != "0") {
            handleNumberInput(e);
          }
        }}
      >
        0
      </button>
      <button value="." id="decimal" onClick={handleDecimal}>
        .
      </button>
    </div>
  );
}

Buttons.propTypes = {
  setFormula: PropTypes.func,
  setDisplay: PropTypes.func,
  formula: PropTypes.string,
  display:PropTypes.string
};
