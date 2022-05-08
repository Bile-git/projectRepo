const readline = require('readline-sync');

function prompt(message) { console.log(`=>${message}`); }

function invalidNumber(number) {
  return 'number'.trimStart() === ''
  || Number(number) < 0
  || Number.isNaN(Number(number));
}
prompt('Welcome to your loan calculator!');

while (true) {
  prompt('what is your loan amount?');
  let amount = readline.question();

  amount = Number(amount.replaceAll(',', '' && '$', ''));

  while (invalidNumber(Number(amount))) {
    prompt('must enter a positive number');
    amount = readline.question();
  }

  prompt('what is your interest rate?');
  let interestRate = readline.question();
  interestRate = Number(interestRate.replaceAll('%', ''));

  while (invalidNumber(Number(interestRate))) {
    prompt(' write interest as 5% as 5, 2.5 as 2.5% ');
    interestRate = readline.question();
  }

  prompt('what is your loan duration (in years) ');
  let years = readline.question();

  while (invalidNumber(Number(years))) {
    prompt('the duration should be in year');

    years = readline.question();
  }

  const annualPaymentRate = Number(interestRate) / 100;
  const monthlyInterestRate = annualPaymentRate / 12;
  const months = Number(years) * 12;

  const monthlyPayment = Number(amount) * (monthlyInterestRate
                                            / (1 - (1 + monthlyInterestRate) ** -Number(months)));

  prompt(` your monthyly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt('do you want to continue? please enter (y/n)');

  const answer = readline.question();

  if (answer.toLowerCase() === 'y') { prompt('Welcome again!'); } else if (answer === 'yes') { prompt('Go a head'); } else { prompt('Goodbye!'); break; }

  console.clear();
}
