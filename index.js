let userScore = 0;
let computerScore = 0;
const mgs = document.querySelector("#msg");
const genRandom = () => {
  const arr = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  console.log("random number =>", arr[randomIndex]);
  return arr[randomIndex];
};

const drawGame = () => {
  mgs.innerText = "Game was Draw. Play Again";
  mgs.style.background = "#081b31";
};
const showWin = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    // console.log("you win");
    mgs.innerText = console.log(
      `you win your ${userChoice} beat ${computerChoice} !`
    );
    mgs.style.background = "green";
  } else {
    // console.log("you lose");
    mgs.innerText = console.log(
      `you lose ${computerChoice} beat your ${userChoice}`
    );
    mgs.style.background = "red";
  }
};

const gamePlay = (userChoice) => {
  console.log("user choice =>", userChoice);
  const computerChoice = genRandom();
  //   console.log("comp choice", computerChoice);
  if (userChoice === computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper, scissor
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors rock
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWin();
  }
};

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  console.log("check on the your choice", choices);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gamePlay(userChoice);
  });
});
