let choices = document.querySelectorAll(".box");
let msgBox = document.querySelector(".msg");
let userChoiceDisplay = document.querySelector("#user-count");
let compChoiceDisplay = document.querySelector("#comp-count");
let userCount = document.querySelector(".div-u");
let computerCount = document.querySelector(".div-c");

let uCount = 0;
let cCount = 0;

const gencompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randNum = Math.floor(Math.random() * 3);
  return option[randNum];
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    msgBox.innerText = "Game was Draw";
    msgBox.style.backgroundColor = "coral";
  } else if (
    (userChoice === "rock" && compChoice === "paper") ||
    (userChoice === "paper" && compChoice === "scissor") ||
    (userChoice === "scissor" && compChoice === "rock")
  ) {
    msgBox.innerText = "You lose ! Computer Win";
    msgBox.style.backgroundColor = "red";
    uCount = uCount + 1;
    computerCount.innerText = uCount;
  } else {
    msgBox.innerText = "You Win ! computer Lose";
    msgBox.style.backgroundColor = "green";

    cCount = cCount + 1;
    userCount.innerText = cCount;
  }

  userChoiceDisplay.innerText = userChoice;
  compChoiceDisplay.innerText = compChoice;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

if (cCount == 10) {
  console.log("game was over");
}
