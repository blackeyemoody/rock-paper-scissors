const buttons = document.querySelectorAll('button');
const weaponPc = document.querySelector('#weapon-pc');
const weaponPlayer = document.querySelector('#weapon-player');
const resultText = document.querySelector('#result');
const scorePlayer = document.querySelector('#player-score');
const scorePc = document.querySelector('#pc-score');
let scoresPc =0;
let scoresPlayer = 0;


buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        singleRound(button.value, getComputerChoice())
        
    });
});


function getComputerChoice() {
    choice = ['ROCK','PAPER','SCISSORS'];
    return choice[Math.floor(Math.random()*3)];
}

function singleRound(player,pc){
    setWeaponImage(player,pc)
    if (player === pc) {
        result = 'DRAW';
        resultText.textContent =('DRAW');
        
    }
    else if (player === 'ROCK' && pc === 'SCISSORS') {
        result = 'PLAYER WIN'
        resultText.textContent =('YOU WIN')
    }
    else if (player === 'PAPER' && pc === 'ROCK') {
        result = 'PLAYER WIN'
        resultText.textContent =('YOU WIN')
        
    }
    else if (player === 'SCISSORS' && pc === 'PAPER') {
        result = 'PLAYER WIN'
        resultText.textContent =('YOU WIN')
        
    }
    else {
        result = 'PC WIN'
        resultText.textContent =('YOU LOSE')
    }
    showScore(result)
    
}


function showScore(result) {
    switch(result) {
            
        case 'DRAW':
        scoresPc +=1;
        scoresPlayer +=1;
        break;
        
        case 'PLAYER WIN':
        scoresPlayer +=1;
        break;
        
        case 'PC WIN':
        scoresPc +=1;
        break;

    }
    if (scoresPc === 5) {
        alert('YOU LOSE');
        scoresPc =0;
        scoresPlayer =0;
    }
    else if (scoresPlayer === 5) {
        alert('YOU WIN');
        scoresPc =0;
        scoresPlayer =0;
    }
    else if (scoresPc === 5 && scoresPlayer === 5) {
        alert('DRAW');
        scoresPc =0;
        scoresPlayer =0;
    }
    
    scorePlayer.textContent = `Player: ${scoresPlayer}`;
    scorePc.textContent = `PC: ${scoresPc}`;

}



function setWeaponImage(imagePlayer,imagePc) {
    switch(imagePlayer) {
        case 'ROCK':
        weaponPlayer.src = "images/rock.svg";
        break;
        case 'PAPER':
        weaponPlayer.src = "images/paper.svg";
        break;
        case 'SCISSORS':
        weaponPlayer.src = "images/scissors.svg";
        break;
    }
    switch(imagePc) {
        case 'ROCK':
        weaponPc.src = "images/rock.svg";
        break;
        case 'PAPER':
        weaponPc.src = "images/paper.svg";
        break;
        case 'SCISSORS':
        weaponPc.src = "images/scissors.svg";
        break;
    } 
}