// user make a choice
//computer make a choice
// display the result

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard','spock'];


const WINNING_COMBS  = {

rock:['scissors', 'lizard'],
paper:['rock','spock'],
scissors:['paper', 'lizard'],
lizard: ['paper', 'spock'],
spock: ['rock','scissors']}

function playerWins(choice, computerChoice){

return WINNING_COMBS[choice].includes(computerChoice);
}

       function displayWinner(choice, computerChoice){

           if(playerWins(choice, computerChoice)){
           prompt('you win !');
           
        } else if(choice === computerChoice){
            
            prompt("That's tie !");
           }
   
    else{ prompt('computer win!')}
    }
   

function prompt(message){
    console.log(`=>${message}`);

}


while(true){
prompt('Welcome to RoPaS Game');

 prompt(`choose one : ${VALID_CHOICES.join(', ')} `);
 let choice = readline.question();

while(!VALID_CHOICES.includes(choice)){
    prompt("That's not valid choice!");
    choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`Your choice: ${choice}, Computer choice: ${computerChoice}`)

displayWinner(choice, computerChoice);

prompt('do you want to play again (y/n) ?');
let answer = readline.question().toLowerCase();
while(answer[0]!=='n' && answer[0] !=='y'){

prompt('please enter "y" or "n".');
answer  = readline.question().toLowerCase();
}

if(answer !== 'y') break;
}