
const readline = require('readline-sync');

function prompt(message){console.log(`=> ${message}`);}
prompt('Welcome to calculator!');

function inValidNumber(number){return 'number'.trimStart() === ''||
	Number.isNaN(Number(number));}
while(true){
// Ask the user for the first number.
prompt('what is your first number?'); 

let number1 = readline.question();
number1 = number1.replaceAll(',','')
while(inValidNumber(Number(number1.includes(',')))){ 
	prompt("Hmmm... that does't look like a valid number!");
number1 = readline.question();}

// Ask the user for the second number.
prompt('what is your second number?');
let number2 = readline.question();
number2 = number2.replaceAll(',','')
while(inValidNumber(Number(number2.includes(',')))){
	prompt("Hmm... that doesn't look like a valid number ");
number2 = readline.question(',');}
// Ask the user for an operation to perform.

prompt('what operation would you like to perfom?\n1)Add 2)Multiply 3)Subtraction 4)Divide');

let operation = readline.question();
while(!['1' , '2' , '3', '4'].includes(operation)){
	prompt('Must choose 1, 2, 3, or 4');
	operation = readline.question();
}
// Perform the operation on the two numbers.
let output;
switch(operation){
case '1': output = Number(number1) +Number(number2); break;
case '2': output = Number(number1) *Number(number2);break;
case '3': output = Number(number1) - Number(number2);break;
case '4': output = Number(number1) / Number(number2);break;}

// Print the result to the terminal.
prompt(`The result is: ${output}`);


prompt('do you want to perform another calculation ? (y/n)');
let answer = readline.question();
if(answer[0].toLowerCase() ==='y'){continue;}

else if(answer[0].toLowerCase() !== 'y')break;
answer = readline.question();

}



