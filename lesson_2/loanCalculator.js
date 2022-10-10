// calculate loan amount
// find anual percentage rate
// loan duration

const MESSAGES = require('./carLoan_message.json');

const LANGUAGE= 'somali'

 const readline = require('readline-sync');
 
 function prompt(key){
     let message = messages(key, LANGUAGE)
     console.log(`=>${message}`);
 }

 function invalidNumber(number){
     return number.trim()==='' ||
     Number(number) < 0 ||
    Number.isNaN(Number(number));
 }
    function messages(message, lang='en'){
        return MESSAGES[lang][message];
    
}

prompt('welcome');
console.log('[@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@]');

while(true){

 prompt("loanAmount");

let amount = readline.question();
while(invalidNumber(amount)){
    prompt('validNumber');
    amount = readline.question();
}
prompt("interestRate");

prompt('rateSample')

let interestRate = readline.question();
while(invalidNumber(interestRate)){
    prompt('validNumber');
    interestRate = readline.question();
}


prompt('period');

let years= readline.question();

while(invalidNumber(years)){
    prompt('durationInYears');
years = readline.question();
}
let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment = Number(amount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  console.log(`Your monthly payment is : $${monthlyPayment.toFixed(2)}`);


prompt('chooseY/N');

let answer = readline.question().toLowerCase();

while(answer[0] !=='n'&& answer[0] !=='y'){
    prompt('welcomeBack');
answer = readline.question().toLowerCase();
}

if(answer[0] === 'n')break;

}