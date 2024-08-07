let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
const mgs = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genRandom = () => {
  const arr = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return arr[randomIndex];
};

const drawGame = () => {
  mgs.innerText = "Game was Draw. Play Again";
  mgs.style.background = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;

    mgs.innerText = `You win. your ${userChoice} beat ${compChoice} !`;
    mgs.style.background = "green";
  } else {
    compScorePara.innerText = compScore;
    compScore++;
    mgs.innerText = `you lose ${compChoice} beat your ${userChoice}`;
    mgs.style.background = "red";
  }
};

const gamePlay = (userChoice) => {
  const compChoice = genRandom();
  console.log("user choice =>", userChoice);

  console.log("comp choice =>", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});
