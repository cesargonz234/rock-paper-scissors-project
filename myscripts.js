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
    
}