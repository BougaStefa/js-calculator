import PropTypes from "prop-types";
import "./Display.css";

export function Display({ formula, display }) {
  return (
    <>
      <div id="formula">{formula}</div>
      <div id="display">{display}</div>
    </>
  );
}

Display.propTypes = {
  formula: PropTypes.string,
  display: PropTypes.string,
};
