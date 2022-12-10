function getComputerChoice() {
    choice = ['ROCK','PAPER','SCISSORS'];
    return choice[Math.floor(Math.random()*3)];
}

function singleRound(player,pc){
    let result;
    if (player === pc) {
        result = 'DRAW'
    }
    else if (player === 'ROCK' && pc === 'SCISSORS') {
        result = 'PLAYER WIN'
    }
    else if (player === 'PAPER' && pc === 'ROCK') {
        result = 'PLAYER WIN'
    }
    else if (player === 'SCISSORS' && pc === 'PAPER') {
        result = 'PLAYER WIN'
    }
    else {
        result = 'PC WIN'
    }
    return result
}

function game(rounds) {
    totalGamesPlayed = 0;
    playerTotal = 0;
    pcTotal = 0;
    draw = 0;
    for (let i = 1; i <=rounds; i++) {
        let playerSelection = prompt('ROCK PAPER SCISSORS').toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(`game ${i}: player: ${playerSelection} pc: ${computerSelection} winner is : ${singleRound(playerSelection,computerSelection)}`)
        if (singleRound(playerSelection,computerSelection) === 'PLAYER WIN') {
            playerTotal +=1;
        } else if (singleRound(playerSelection,computerSelection) === 'PC WIN') {
            pcTotal +=1;
        } else {
            playerTotal +=1;
            pcTotal +=1;
            draw +=1;
        }
        totalGamesPlayed +=1;
    }
    if (playerTotal > pcTotal) {
        return ` GAMES PLAYED: ${totalGamesPlayed} \n PLAYER SCORE: ${playerTotal} \n PC SCORE: ${pcTotal} \n DRAW:${draw} \n WINNER: PLAYER`
    } else if (playerTotal < pcTotal) {
        return ` GAMES PLAYED: ${totalGamesPlayed} \n PLAYER SCORE: ${playerTotal} \n PC SCORE: ${pcTotal} \n DRAW:${draw} \n WINNER: PC`
    } else {
        return ` GAMES PLAYED: ${totalGamesPlayed} \n PLAYER SCORE: ${playerTotal} \n PC SCORE: ${pcTotal} \n DRAW:${draw} \n WINNER: DRAW`
    }
    
    
}
let askRound = prompt('how many rounds do you want?')

console.log(game(askRound));





