import PropTypes from "prop-types";

export function Buttons({ setFormula, setDisplay, formula }) {
  //TODO: Look for any missed edge cases
  const handleNumberInput = (e) => {
    setFormula(formula + e.target.value);
  };

  //TODO: Account for multiple decimals in one number
  const handleDecimal = (e) => {
    if (formula[formula.length - 1] != ".") {
      setFormula(formula + e.target.value);
    }
  };
  const handleClear = () => {
    setFormula("");
    setDisplay("");
  };
  //TODO: Find a way to convert the formula string into an operation
  const handleEquals = () => {};
  //TODO: Find a way to handle double operator entries, always use the last operator provided unless it is a minus in which case it will make the next number a negative
  const handleOperator = (e) => {};

  return (
    <div id="buttons">
      <button value="AC" id="clear" onClick={handleClear}>
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
};
