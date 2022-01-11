'use strict';

function generateRandom(){
const rand = Math.floor(Math.random()*20)+1 //generate a random number between 1 to 20 (included)
return rand;
}
let randomNumber=generateRandom();
//console.log(randomNumber)
//let scoreInput = window.prompt('Enter Max Score:')

const display = message => document.querySelector('.message').textContent=`${message}`

document.querySelector('.score').textContent=20
let score=20
//console.log(document.querySelector(".guess").value)
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value)
    if(score===0){
        //document.querySelector('.message').textContent='Game over!!!!!!!'
        document.body.style.backgroundColor='#ff0000';
        display('Game over!!!!!!!')
    }else{
    if(!guess){
        //document.querySelector('.message').textContent='Enter a number first!!!'
        display('Enter a number first!!!')
    }else if(guess>randomNumber){
        //document.querySelector('.message').textContent='Too high!'
        display('Too high!')
        --score;
        document.querySelector('.score').textContent=score
    }else if(guess<randomNumber){
        //document.querySelector('.message').textContent='Too low!'
        display('Too low!')
        --score;
        document.querySelector('.score').textContent=score
    }else if(guess===randomNumber){
        document.body.style.backgroundColor='#60b347'
        
        //document.querySelector('.message').textContent='Congratulations, You guessed right!'
        display('Congratulations, You guessed right!')

        document.querySelector('.number').textContent=randomNumber;
        let maxScore=Number(document.querySelector('.highscore').textContent)
        if(score>maxScore){
            document.querySelector('.highscore').textContent=score;
        }
    }
}
})

document.querySelector('.again').addEventListener('click',function(){
    display('Start guessing...');
    randomNumber=generateRandom();
    document.body.style.backgroundColor='#222'
    document.querySelector('.score').textContent=20;
    document.querySelector('.highscore').textContent=0;
    document.querySelector('.number').textContent='?';
})