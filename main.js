let userScore =0;
let compScore =0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
  const choices = ["r","p","s"];
  const randomNum = Math.floor(Math.random()* 3);
  return choices[randomNum]
};

function convertToWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}; 

function win(usersChoice,compChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const usersChoice_div = document.getElementById(usersChoice);
  userScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(usersChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}  You win!!!`
  document.getElementById("usersChoice").classList.add("green-glow");
};

setTimeout(function(){document.getElementById(usersChoice).classList.remove("green-glow")});
function lose(usersChoice,compChoice){
  compScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML = compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(usersChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}  Comp win!!!`
};
function draw(usersChoice,compChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(usersChoice)}${smallUserWord} It's draw ${convertToWord(compChoice)}${smallCompWord} It's draw!!!`
};


function game(usersChoice){
  const compChoice = getCompChoice();
  switch(usersChoice + compChoice){
      case "rs":
      case "pr":
      case "sp":
        win(usersChoice,compChoice)
      break;
      case "rp":
      case "ps":
      case "sr":   
          lose(usersChoice,compChoice);    
      break;
      case "rr":
      case "pp":
      case "ss":   
          draw(usersChoice,compChoice);    
      break;

  }
}


function main (){
    rock_div.addEventListener('click',function(){
        game("r");
    });
    paper_div.addEventListener('click',function(){
        game("p");
    });
    scissors_div.addEventListener('click',function(){
        game("s");
    });
};


main();



