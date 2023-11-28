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
/*function getPlayerChoice() {
    let ask = prompt("play 5 rounds, see who wins", "rock, paper, scissor ?")
    while (ask == null) {
        ask = prompt("play 5 rounds, see who wins", "rock, paper, scissor ?")
    }
    ask = ask.toLowerCase()
    return ask;
}
*/


function playRound(playerSelection, computerChoice) {
    
    if (playerSelection === computerChoice){
        div.textContent = "It's a tie.";
    }
    else if (playerSelection === "rock" && computerChoice === "paper") {
        div.textContent = "You lose. Paper beats rock";
         
    }
    else if (playerSelection === "rock" && computerChoice ==="scissor") {
        div.textContent =  "You win. Rock beats scissor.";
    }
    else if (playerSelection === "paper" && computerChoice === "rock") {
        div.textContent =  "You win, paper beats rock";
    }
    else if (playerSelection === "paper" && computerChoice === "scissor"){
        div.textContent =  "You lose, scissor beats paper";
    }
    else if (playerSelection === "scissor" && computerChoice === "paper"){
        div.textContent =  "You win, scissor beats paper";
    }
    else if (playerSelection === "scissor" && computerChoice === "rock")
        div.textContent =  "You lose, rock beats scissor";
    else {
        div.textContent =  "please type correctly"
    }
}

let playerCount = 0;
let compCount = 0;
function winCounter(playerSelection, computerChoice){
    if (playerSelection === computerChoice){
       return playerCount && compCount + 0;
    }
    else if  ((playerSelection === "paper" && computerChoice === "rock" ) ||
        (playerSelection ==="scissor" && computerChoice ==="paper")||
        (playerSelection === "rock" && computerChoice ==="scissor")
)
    {
         return playerCount = playerCount + 1;
         
    }
    else {
        return compCount = compCount + 1;
    }
    
}
function restart(playerCount, compCount){
    if (playerCount || compCount === 5){
          compCount = 0;
    }

}
function game(playerCount, compCount){
    if (playerCount === 5) {
        win.textContent='You Win!'
    }
    else if (compCount === 5){
        win.textContent= "You Lose";
    }
}


//const button = document.querySelectorAll('button')
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound('rock', computerChoice)
    winCounter('rock', computerChoice)
})
paper.addEventListener('click', () => {
    computerChoice = getComputerChoice();
    playRound("paper", computerChoice)
    winCounter('paper', computerChoice)
})
scissor.addEventListener('click', () =>{
    computerChoice = getComputerChoice();
    playRound('scissor', computerChoice)
    winCounter('scissor', computerChoice)
})

const div = document.querySelector('.result');

const score = document.querySelector('.score');

const win = document.querySelector('.winner')

document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', () => {
        score.textContent = `Player wins: ${playerCount} Computer wins: ${compCount}`
        game(playerCount,compCount)
        console.log(restart(playerCount,compCount))
            })
})
