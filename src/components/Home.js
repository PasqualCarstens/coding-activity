import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [score, setScore] = useState();

  //Get Score on page load.
  useEffect(() => {
    fetchScoreData();
  }, []);

  async function fetchScoreData() {
    let localScore = localStorage.getItem("score");
    if (!localScore) {
      let response = await fetch(
        "https://cs6080.web.cse.unsw.edu.au/raw/data/info.json"
      );
      let data = await response.json();
      console.log(data);
      localStorage.setItem("score", data.score);
      setScore(data.score);
      return;
    }
    setScore(localScore);
  }

  const reset = () => {
    localStorage.removeItem("score");
    fetchScoreData();
  };

  return (
    <div className="Home">
      <div className="Text">Please choose an option from the Navbar.</div>{" "}
      <br />
      <div>Games Won: {score}</div>
      <br />
      <button className="btn btn-outline-dark w-50" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
