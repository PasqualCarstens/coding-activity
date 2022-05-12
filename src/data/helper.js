export const getword = () => {
  const words = [
    "the fat cats",
    "larger frogs",
    "banana cakes",
    "unsw vs usyd",
    "french toast",
    "hawaii pizza",
    "barack obama",
  ];
  let randomWord =
    words[Math.floor(Math.random() * words.length)].toUpperCase();

  return randomWord;
};

export const updateScore = () => {
  let score = localStorage.getItem("score");
  if (score === null) {
  } else {
    score++;
  }
  localStorage.setItem("score", score);
};
