let playerPoint = 0
let computerPoint = 0


const getComputerChoice = () => {
    const value = Math.floor(Math.random() * 3)
     return value
}

const singleRound = (e) => {

   const playerChoice = e.srcElement.className
   const computerChoice = getComputerChoice()
   
    if (playerChoice == computerChoice) ;
    else if ((playerChoice == 0 && computerChoice == 2) ||
             (playerChoice == 1 && computerChoice == 0) ||
             (playerChoice == 2 && computerChoice == 1)){
                playerPoint ++
            }
    else if ((playerChoice == 2 && computerChoice == 0) ||
            (playerChoice == 0 && computerChoice == 1) ||
            (playerChoice == 1 && computerChoice == 2)) {
                computerPoint ++
            }
            showResult()

        }
        
        
        
        
function showResult() {
    document.getElementsByClassName('resultP')[0].textContent = `your point = ${playerPoint}`
    document.getElementsByClassName('resultC')[0].textContent = `computer point = ${computerPoint}`
    if (playerPoint == 5) {
        document.getElementsByClassName('result')[0].textContent = 'Yay you won'
    }
    else if (computerPoint == 5) {
        document.getElementsByClassName('result')[0].textContent = 'you died'
    }
}

        

const button = document.querySelectorAll('div')
button.forEach(value => value.addEventListener('click', singleRound ))

