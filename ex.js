

function computerPlays(){
    let ass = Math.floor(Math.random()*(4-1))+1;
    if(ass==1){
        return 'rock';
    }
    else if(ass==2){
        return 'scissors';
    }
    else if(ass==3){
        return 'paper';
    }
}


function playRound(playerSelection, computerSelection){
    

    let loose = `You Lose!`;
    let win = `You Win!`;
    let tie = 'No one wins lol';
    if(playerSelection=='rock' && computerSelection=='scissors'){
        return loose;
    }
    else if(playerSelection=='rock' && computerSelection=='paper'){
        return win;
    }
    else if(playerSelection=='rock' && computerSelection=='rock'){
        return tie;
    }
    else if(playerSelection=='scissors' && computerSelection=='rock'){
        return loose;
    }
    else if(playerSelection=='scissors' && computerSelection=='paper'){
        return win;
    }
    else if(playerSelection=='scissors' && computerSelection=='scissors'){
        return tie;
    }
    else if(playerSelection=='paper' && computerSelection=='rock'){
        return win;
    }
    else if(playerSelection=='paper' && computerSelection=='scissors'){
        return loose;
    }
    else if(playerSelection=='paper' && computerSelection=='paper'){
        return tie;
    }
}

let compscore = 0;
let playerscore = 0;

function game(){
    while(compscore<5 && playerscore<5){
        
        let playerSelection = prompt("Enter rock,paper or scissors: ");
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = computerPlays();

        let loose = `You Lose!`;
        let win = `You Win!`;
        let tie = 'No one wins lol';
        
        let n = playRound(playerSelection, computerSelection);
        if(n == win){
            playerscore++;
        }
        else if(n == loose){
            compscore++;
        }
        console.log(n);
        console.log(`The computer's score is ${compscore}!`);
        console.log(`The player's score is ${playerscore}!`);

    }
}

game();