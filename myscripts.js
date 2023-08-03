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
function getPlayerChoice() {
    let ask = prompt("play 5 rounds, see who wins", "rock, paper, scissor ?")
    while (ask == null) {
        ask = prompt("play 5 rounds, see who wins", "rock, paper, scissor ?")
    }
    ask = ask.toLowerCase()
    return ask;
}


function playRound(playerSelection, computerChoice) {
    
    if (playerSelection === computerChoice){
        return "It's a tie.";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        return "You lose. Paper beats rock";
         
    }
    else if (playerSelection === "rock" && computerChoice ==="scissor") {
        return "You win. Rock beats scissor.";
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        return "You win, paper beats rock";
    }
    else if (playerSelection === "paper" && computerChoice === "scissor"){
        return "You lose, scissor beats paper";
    }
    else if (playerSelection === "scissor" && computerChoice === "paper"){
        return "You win, scissor beats paper";
    }
    else if (playerSelection === "scissor" && computerChoice === "rock")
        return "You lose, rock beats scissor";
    else {
        return "please type correctly"
    }
}
let playerCount = 0;
let compCount = 0;
function winCounter(playerSelection, computerChoice){
    if (playerSelection === computerChoice){
        return 0;
    }
    else if  ((playerSelection === "paper" && computerChoice === "rock" ) ||
        (playerSelection ==="scissor" && computerChoice ===" scissor")||
        (playerSelection === "rock" && computerChoice ==="paper")
)
    {
       return playerCount = playerCount + 1;
    }
    else {
        return compCount = compCount + 1;
    }
    
}
function winDecider(playerCount, compCount){
    if (playerCount === compCount){
        return "its a draw";
    }
    else if (playerCount > compCount){
        return "you Win!";
    }
    else {
        return "You lose, the robots have taken over!!";
    }
}

function game(){
    for(i = 0; i < 5; i++){
        playerSelection = getPlayerChoice()
        let computerChoice = getComputerChoice()
        console.log(playRound(playerSelection, computerChoice))
    }
    console.log(winDecider(playerCount, compCount))
}
game()
