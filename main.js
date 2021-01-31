const choice = document.querySelectorAll('#choices img')
const instructions = document.querySelector('.instructions')
const score = document.querySelector('.score')
const roundResult = document.querySelector('.round_result')



var playerScore = 0;
var computerScore = 0;
var roundsPlayed = 1;



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

computerSelection = computerPlay()
playerSelection = playerMove



if (roundsPlayed < 4) {
    if (computerSelection === playerSelection) {
        instructions.innerHTML = "This round is a tie!<br>"; 
        roundResult.innerHTML = "ROUND " + roundsPlayed + ": " + computerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " equals " + playerSelection + "."; 
        roundsPlayed++;
        playerScore++;
        computerScore++;
      
       

    } else {
        if((computerSelection == "scissors" && playerSelection == "rock")    || (computerSelection == "paper" && playerSelection == "scissors") || 
            (computerSelection == "rock" && playerSelection == "paper")){
            instructions.innerHTML = "You won this round!<br>";
            roundResult.innerHTML = "ROUND " + roundsPlayed + ": " + playerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " beats " + computerSelection + ".";
            roundsPlayed++;
            playerScore = playerScore + 2;
           
   

        } else {
            instructions.innerHTML = "You lost this round!<br>" 
            roundResult.innerHTML = "ROUND " + roundsPlayed + ": " + computerSelection.replace(/^[a-z]/, u => u.toUpperCase()) + " beats " + playerSelection + ".";
            roundsPlayed++;
            computerScore = computerScore + 2;
           
            
        
        }  
    }

score.innerHTML = "Player: " + playerScore + "<br>Computer: " + computerScore;


if (roundsPlayed < 4) {


}else {
    if (playerScore !== computerScore) {
        if (playerScore > computerScore){
            instructions.innerHTML = "GAME OVER - You just won the game!";
            score.innerHTML = "Player final score: " + playerScore + "<br>Computer final score: " + computerScore;
        }else {
            instructions.innerHTML = "GAME OVER - You just lost the game! ";
            score.innerHTML = "Player final score: " + playerScore + "<br>Computer final score: " + computerScore;
        }
    } else {       
        instructions.innerHTML = "GAME OVER - It's a tie!";
        score.innerHTML = "Player final score: " + playerScore + "<br>Computer final score: " + computerScore;
    }
}
}
}