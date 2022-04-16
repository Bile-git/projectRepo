const readline = require('readline-sync');


function prompt(message) {
    console.log(`=>${message}`);
}

function inValidNumber(number) {
    return Number(number) < 0 ||
          Number.isNaN(Number(number));
}

prompt('Welcome to your loan calculator!')

while (true) {


    prompt('what is your loan amount?');
    let amount =readline.question()
    amount= amount.replaceAll('$','').replaceAll(',','');
   
    while (inValidNumber(Number(amount.includes('$'&&',')))) {
     amount = readline.question('$');
        prompt('must enter a positive number');

    }
    prompt('what is your interest rate?');
    let interestRate = readline.question();
    interestRate = interestRate.replaceAll('%','')
    while (inValidNumber(Number(interestRate.includes('%')))) {
        prompt(' write interest as 5% as 5, 2.5 as 2.5% ');
        interestRate = readline.question('%');
    }
    prompt('what is your loan duration (in years) ');
    let years = readline.question();
    while(inValidNumber(years)){
      prompt('the duration should be in year');
      years = readline.question();

    }
    const annualPaymentRate = Number(interestRate)/100 ;
    const monthlyInterestRate = annualPaymentRate / 12;
   const  months = Number(years) * 12;

   const monthlyPayment = Number(amount) * (monthlyInterestRate /
                                            (1- Math.pow((1+ monthlyInterestRate),(-Number(months)))));
    
  
prompt(` your monthyly payment is: $${monthlyPayment.toFixed(2)}`);


prompt('do you want to continue!');
let answer = readline.question();

if(answer[0] !=="y")
prompt('please enter either y/n')
  
  answer = readline.question().toLowerCase();

break;

}