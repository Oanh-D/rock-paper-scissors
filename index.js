let questionEl = document.getElementById("question-el");
let questionSection = document.querySelector(".question");
let playerImg = document.getElementById("player-choice");
let computerImg = document.getElementById("computer-choice");
let winnerEl = document.getElementById("winner-el");



function yes () {
    questionSection.textContent = " ";
    let playerInput = prompt("rock, paper, or scissor?");

    if (playerInput || playerInput === ""){
        let playerChoice = playerInput.toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
            if (playerChoice === "rock"){
                playerImg.src = "images/rock.png";
            } 
            else if (playerChoice === "paper"){
                playerImg.src = "images/paper.png";
            }
            else if (playerChoice === "scissors"){
                playerImg.src = "images/scissors.png";
            }
        }
        else {
            questionSection.textContent = "Ooops! You did not enter rock, paper, or scissors.";
            return;
        }

        let rpsList = ["rock", "paper", "scissors"];
        let randomNum = Math.floor(Math.random()*3);
        let computerChoice = rpsList[randomNum];
        if (computerChoice === "rock"){
            computerImg.src = "images/rock.png";
        }
        else if (computerChoice === "paper"){
            computerImg.src = "images/paper.png";
        }
        else if (computerChoice === "scissors"){
            computerImg.src = "images/scissors.png";
        }

        if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")){
            winnerEl.textContent = "🚩 You win!";
        }
        else if (playerChoice === computerChoice){
            winnerEl.textContent = "Tie Game";
        }
        else {
            winnerEl.textContent = "Computer wins! 🚩";
        }
       
    }
    else {
        questionSection.textContent = "Ok! May be next time.";
    }
    
}

function no () {
    questionSection.textContent = "Ok! May be next time.";

}

function again (){
    yes();
}