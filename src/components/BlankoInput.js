import React, { useState } from "react";
import "./BlankoInput.css";

export const BlankoInput = ({ sentValue, sentName }) => {
  const [state, setState] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
  });

  const handleChange = (e) => {
    if (sentValue === e.target.value.toUpperCase()) {
      setState({
        ...state,
        [sentName]: e.target.value,
      });
      console.log("Correct");
    } else {
      setState({
        ...state,
        [sentName]: e.target.value,
      });
      console.log("Incorrect");
    }
    console.log(state);
  };

  return (
    <input
      className="selected"
      type="text"
      maxLength="1"
      onChange={handleChange}
    />
  );
};
export default BlankoInput;
