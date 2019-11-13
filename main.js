const choice = document.querySelectorAll('#choices img')
const instructions = document.querySelector('.instructions')
const score = document.querySelector('.score')

var playerScore = 0;
var computerScore = 0;
var roundsPlayed = 0;

choice.forEach((img) => {
    img.addEventListener('click', (e) => {
        playerMove = img.id
        game()
    })
})

function computerPlay() {
    const selection = ["rock", "paper", "scissors"]
    return selection[Math.floor(Math.random() * 3)]
};

function game() {  
  
    if(roundsPlayed <= 4){
        playRound();
        score.innerHTML = "Player: " + playerScore + "<br>Computer: " + computerScore;
        
    } else if((roundsPlayed == 6) && (playerScore > computerScore)){
        instructions.innerHTML = "GAME OVER - You just won the game!";
        score.innerHTML = "Player final score: " + playerScore + "<br>Computer final score: " + computerScore;
       
    } else {
       instructions.innerHTML = "GAME OVER - You just lost the game! ";
       score.innerHTML = "Player final score: " + playerScore + "<br>Computer final score: " + computerScore;
       
    }
};

function playRound() {
    computerSelection = computerPlay()
    playerSelection = playerMove


    if (computerSelection === playerSelection) {
        instructions.innerHTML = "It's a Tie!<br>" + computerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " covers " + playerSelection + "."; 

    } else if((computerSelection == "scissors" && playerSelection == "rock")    || (computerSelection == "paper" && playerSelection == "scissors") || 
        (computerSelection == "rock" && playerSelection == "paper")) {
        instructions.innerHTML = "ROUND " + roundsPlayed + ": you win!<br>" + playerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " beats " + computerSelection + ".";

        playerScore++;
        roundsPlayed++;

    } else {
        instructions.innerHTML = "ROUND " + roundsPlayed + ": you lose!<br>" + computerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " beats " + playerSelection + ".";
        
        computerScore++;
        roundsPlayed++;
        
    }   
};





