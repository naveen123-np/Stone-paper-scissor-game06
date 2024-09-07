let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let message = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const compMOve= document.querySelector("#comp-move");
const userMOve = document.querySelector("#user-move");
let displayClass= document.querySelector(".display-move");
// function that return random options
let a = 0;
let b = 0;
const genCompChoice = () => {
  let options = ["stone", "paper", "scissor"];
  let genNum = Math.floor(Math.random() * 3);
  if (genNum == 0) {
    return options[0];
  } else if (genNum == 1) {
    return options[1];
  } else {
    return options[2];
  }
};
const playerMove = () => {
  let options = ["stone", "paper", "scissor"];
  let genNum = Math.floor(Math.random() * 3);
  if (genNum == 0) {
    return options[0];
  } else if (genNum == 1) {
    return options[1];
  } else {
    return options[2];
  }
};
//autoplay
let intervalId;
let isautoplay=false;
function autoplay() {
  console.log("autoplay is calling");
 if(!isautoplay){ 
  intervalId = setInterval(function () {
    const userChoice = playerMove();
    playGame(userChoice);
    }, 1000);
    isautoplay=true;
  } else{
    clearInterval(intervalId);
    isautoplay=false;
  }
}
//Get user input
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log(compChoice);
  console.log(userChoice);

  // draw condition
  if (userChoice === compChoice) {
    msg.innerText = " Game Draw , try again";
    displayClass.innerText = "";
    userMOve.innerText="YOU";
    compMOve.innerText="COMP";
    userScore.innerText="0";
    compScore.innerText="0";
    a=0;
    b=0;
  } else {
    // battle condition
    let userWin = true;
    if (userChoice === "stone") {
      userMOve.innerText="YOU - Stone✊"
      userWin = (compChoice === "scissor") ? true : false ;       
      if(compChoice==="paper"){
        compMOve.innerText="COMP -  Paper✋";
      }
      else if(compChoice==="scissor"){
        compMOve.innerText="COMP -  Scissor🤞"
      }
      displayClass.innerText=` ${userMOve.innerText} and ${compMOve.innerText}`;
    } else if (userChoice === "scissor") {
      userMOve.innerText="YOU - Scissor🤞"
      userWin = ( compChoice === "paper" )? true : false ;
      if(compChoice=="stone"){
        compMOve.innerText="COMP -  Stone ✊";
      }
      else if(compChoice=="paper"){
        compMOve.innerText="COMP -  Paper✋";
      }
      displayClass.innerText=` ${userMOve.innerText} and  ${compMOve.innerText}`;
    } else if (userChoice === "paper") {
      userMOve.innerText="YOU - Paper✋"
      userWin = (compChoice === "scissor" )? false : true ;
      if(compChoice=="stone"){
        compMOve.innerText="COMP -  Stone ✊";
      }
      else if(compChoice=="scissor"){
        compMOve.innerText="COMP -  Scissor✋";
      }
      displayClass.innerText=` ${userMOve.innerText} and  ${compMOve.innerText}`;
    }
    result(userWin);
  }
};
// result announcement
const result = (userWin) => {
  console.log(userWin);
  if (userWin ===true) {
    a++;
    console.log("you win !");
    userScore.innerText = a ;
    
    msg.innerText = " you win ! ";
  } else if (userWin ===false) {
    b++;
    console.log("you loose !");
    compScore.innerText = b;
   
    msg.innerText = " you loose ! ";
  }
};
function displayClear(){
  userScore.innerText="0";
  compScore.innerText="0";
  userMOve.innerText="YOU";
  compMOve.innerText="COMP";
  message.innerText="Play your move !";
  displayClass.innerText="";
  userScore.innerText="0";
  compScore.innerText="0";
  a=0;
  b=0;
}