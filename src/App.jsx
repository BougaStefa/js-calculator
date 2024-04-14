import { Display } from "./Display";
import { Buttons } from "./Buttons";
import { useState } from "react";
import "./App.css";

function App() {
  const [formula, setFormula] = useState("");
  const [display, setDisplay] = useState("");

  return (
    <div id="calculator">
      <Display formula={formula} display={display} />
      <Buttons
        formula={formula}
        setFormula={setFormula}
        setDisplay={setDisplay}
      />
    </div>
  );
}

export default App;
