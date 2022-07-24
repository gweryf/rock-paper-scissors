const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const userpoints = document.getElementById('userpoints');
const cpupoints = document.getElementById('cpupoints');
const result = document.getElementById('result');

let p = 0;
let q = 0;

let loose = 'You Lost!';
let win = 'You Won!';

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



function game(n){
    let computerSelection = computerPlays();
    if(n==computerSelection){
        console.log('Tie!');
        result.textContent = `It's a tie! You both selected ${computerSelection}`;
    }
    else if(n =='rock' && computerSelection=='scissors'){
        console.log('Win!');
        p++;
        userpoints.textContent = p;
        result.textContent = win + ` ${n} beats ${computerSelection}`;
    }
    else if(n =='rock' && computerSelection=='paper'){
        console.log('Loose!');
        q++;
        cpupoints.textContent = q;
        result.textContent = loose+` ${computerSelection} beats ${n}`;
    }
    else if(n =='paper' && computerSelection=='rock'){
        console.log('Win!');
        p++;
        userpoints.textContent = p;
        result.textContent = win + ` ${n} beats ${computerSelection}`;
    }
    else if(n =='paper' && computerSelection=='scissors'){
        console.log('Loose!');
        q++;
        cpupoints.textContent = q;
        result.textContent = loose+` ${computerSelection} beats ${n}`;
    }
    else if(n =='scissors' && computerSelection=='rock'){
        console.log('Loose!');
        q++;
        cpupoints.textContent = q;
        result.textContent = loose+` ${computerSelection} beats ${n}`;
    }
    else if(n =='scissors' && computerSelection=='paper'){
        console.log('Win!');
        p++;
        userpoints.textContent = p;
        result.textContent = win + ` ${n} beats ${computerSelection}`;
    }
}



rock.addEventListener('click',function(){
    if(p<5 && q<5){
        game('rock');
    }
    else{
        alert('Game Over!\n Wanna play again?');
        p=0;
        q=0;
        userpoints.textContent = p;
        cpupoints.textContent = q;
    }
});
scissors.addEventListener('click',function(){
    if(p<5 && q<5){
        game('scissors');
    }
    else{
        alert('Game Over!\n Wanna play again?');
        p=0;
        q=0;
        userpoints.textContent = p;
        cpupoints.textContent = q;
    }
});
paper.addEventListener('click',function(){
    if(p<5 && q<5){
        game('paper');
    }
    else{
        alert('Game Over!\n Wanna play again?');
        p=0;
        q=0;
        userpoints.textContent = p;
        cpupoints.textContent = q;
    }
});