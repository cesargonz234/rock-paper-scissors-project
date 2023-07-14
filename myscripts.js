function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3) + 1 ;
    if (randomNumber === 1) {
        let computerChoice = "rock"
        return computerChoice
    }
    else if (randomNumber === 2){
        let computerChoice = "paper"
        return computerChoice
    }
    else {
        let computerChoice = "scissor"
        return computerChoice
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerChoice){
        console.log("It's a tie.")
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
         console.log("You lose. Paper beats rock")
         
    }
    else if (playerSelection === "rock" && computerChoice ==="scissor") {
        console.log("You win. Rock beats scissor.")
    }
}
let playerSelection = "rock";
const computerChoice = "paper";
console.log(playRound(playerSelection, computerChoice))