const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

console.log(MESSAGES.en.welcome);

function inValidNumber(number) {
  return 'number'.trimStart() === ''
	|| Number.isNaN(Number(number));
}
while (true) {
// Ask the user for the first number.
  prompt('what is your first number?');

  let number1 = readline.question();
  number1 = Number(number1.replaceAll(',', ''));
  while (inValidNumber(Number(number1))) {
    prompt("Hmmm... that does't look like a valid number!");
    number1 = readline.question();
  }
  // Ask the user for the second number.
  prompt('what is your second number?');
  let number2 = readline.question();
  number2 = Number(number2.replaceAll(',', ''));

  while (inValidNumber(Number(number2))) {
    prompt("Hmm... that doesn't look like a valid number ");
    number2 = readline.question(',');
  }
  // Ask the user for an operation to perform.

  prompt('what operation would you like to perfom?\n 1)Add 2)Multiply 3)Subtraction 4)Divide');

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, or 4');

    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let result;

  switch (operation) {
    case '1':
      result = number1 + number2;
      break;
    case '2':
      result = number1 * number2;
      break;
    case '3':
      result = number1 - number2;
      break;
    case '4':
      result = number1 / number2;
      break;
  }

  // Print the result to the terminal.
  prompt(`The result is: ${result}`);

  prompt('do you want to perform another calculation ? (y/n)');
  const answer = readline.question();

  if (answer === 'y') {
    prompt('welcome again');
  } else if (answer === 'yes') {
    prompt('do again');
  } else { console.log('goodbye!'); break; }console.clear();
}
