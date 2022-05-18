import React, { useEffect, useState } from "react";
import { getword, updateScore } from "../data/helper";
import { BlankoInput } from "./BlankoInput";
import "./Blanko.css";

export const Blanko = () => {
  const word = getword();
  const [wordArr] = useState(word.split(""));
  const [fieldPicks, setFieldPicks] = useState([]);

  //Get 3 random unique non-space indexs from the wordArr which we will use to set as input fields on the word.
  useEffect(() => {
    const selectedFieldArr = [];
    let i = 0;
    while (selectedFieldArr.length <= 2) {
      const randomNum = Math.floor(Math.random() * word.length);
      if (wordArr[randomNum] !== " ") {
        if (!selectedFieldArr.find((item) => item && item === randomNum)) {
          selectedFieldArr[i] = randomNum;
          i++;
        }
      }
    }
    setFieldPicks(selectedFieldArr);
  }, [word, wordArr]);

  return (
    <div className="body">
      <div className="container">
        {wordArr.map((char, index) =>
          (char === " " ? true : false) ? (
            <div className="space" key={index} name={index}>
              {char}
            </div>
          ) : fieldPicks.find((pickIndex) => pickIndex === index) ===
            undefined ? (
            <div className="block" key={index} name={index}>
              {char}
            </div>
          ) : (
            <BlankoInput
              key={index}
              sentName={index}
              sentValue={char}
            ></BlankoInput>
          )
        )}
      </div>
      <br />
      <button className="btn btn-outline-dark w-50" onClick={updateScore}>
        Submit
      </button>
    </div>
  );
};
export default Blanko;
