let playerPoint = 0
let computerPoint = 0


const getComputerChoice = () => {
    const num = () => {return Math.floor(Math.random() * 3)}
    if (num() === 0) { return "rock"}
    else if (num() === 1) { return "paper"}
    else  { return "scissor"}
}

const getPlayerChoice = () => {
    let value = prompt("rock,paper or scissor").toLowerCase() 
    return value;}

const singleRound = () => {
    let player=getPlayerChoice();
    let computer=getComputerChoice();
    console.log(`computer = ${computer}, player = ${player}`);
    if (player == computer) {return "tie"}

    else if ((player == "rock" && computer == "scissor" ) || 
    (player == "scissor" && computer == "paper" ) ||
    (player == "paper" && computer == "rock") ){
        playerPoint ++
        return "player won"
    }

    else if ( (player == "rock") && (computer == "paper") ||
    (player == "paper" && computer == "scissor") ||
    (player == "scissor" && computer == "rock")) {
        computerPoint ++
        return "computer won"
    }
    
}
const game = () => {
singleRound()
singleRound()
singleRound()
singleRound()
console.log(playerPoint)
console.log(computerPoint)
}



