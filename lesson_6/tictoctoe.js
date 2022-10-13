const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER ='X';
const COMPUTER_MAKER = 'O'

function prompt(msg){
    console.log(`=>${msg}`);
}

function displayBoard(board){
    console.clear();

console.log(`You aren ${HUMAN_MARKER}.computer is ${COMPUTER_MAKER}`)

console.log(' ');
console.log('     |     |');
console.log(` ${board['1']}   |${board['2']}    |${board['3']}`)
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log(`${board['4']}    |${board['5']}    |${board['6']}`)
console.log('     |     |');
console.log('-----+-----+-----');
console.log('     |     |');
console.log(`${board['7']}    |${board['8']}    |${board['9']}`)
console.log('     |     |');
console.log(' ');
};
/*let board ={ 1: 'X',
2: ' ',// top left
3: ' ',//top center
4: ' ',//top right
5: 'O',// middle left
6: ' ',//center
7: ' ', // bottom left
8: ' ',// bottom center
9: 'X'//bottom right
};*/

function initializedBoard(){
    let board ={};

    for(let square = 1; square <= 9; square++){
        board[String(square)]= INITIAL_MARKER;
    }

    return board;
}

function emptySquares(board){
return Object.keys(board).filter(key => board[key]=== INITIAL_MARKER);
}

function playerChooseSquare(board){
    let square;

    
while(true){
    prompt(`Choose a square :${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if(emptySquares(board).includes(square)) break; 

    prompt("Sorry, that's not a valid choice.");
    }

    board[square]= HUMAN_MARKER;
}
function computerChoosesSquare(board){

let square;
// offense first
for(index = 0; index < winningLines.length; index++){
    let line = winningLines[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if(square)break;
}
//offense
if(!square){ 
    for(let index = 0; index < winningLines.length; index++){
        let line =winningLines[index];
        square = findAtRiskSquare(line, board, COMPUTER_MAKER);
        if(square)break;
    }
}
  if(!square) {
 // just pick random   
let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
 square = emptySquares(board)[randomIndex];
} 
    board[square]= COMPUTER_MAKER;
}


function boardFull(board){
    return emptySquares(board).length ===0;
} 

function someoneWon (board){
    return !!detectWinner(board);
}

let winningLines =[
    [1, 2, 3,],[4, 5, 6,],[7, 8, 9], //rows
    [1, 4,7,],[2, 5, 8],[3, 6, 9], // columns
    [1, 5, 9],[3, 5, 7]// diagnal
    ]; 
function detectWinner(board){
    for(let line =0; line < winningLines.length; line++){
        let [sq1, sq2, sq3] = winningLines[line];

            if(
board[sq1]===HUMAN_MARKER &&
board[sq2]=== HUMAN_MARKER &&
board[sq3] === HUMAN_MARKER 
            ){

            return 'Player';
            }else if(
                board[sq1] === COMPUTER_MAKER  &&
                board[sq2] === COMPUTER_MAKER &&
                board[sq3] ===COMPUTER_MAKER
            ){ 
            return 'Computer';

      }
    }
}
function findAtRiskSquare(line, board, marker){
        let markersInLine = line.map(square => board[square]);

        if (markersInLine.filter(val => val === marker).length ===2){
            
let unusedSquare  = line.find( square =>board[square]=== INITIAL_MARKER);
        if(unusedSquare !== undefined){
            return unusedSquare
        }
    }
return null
    }
    



function joinOr( arr, delimiter = ',', word = 'or'){
    switch(arr.length){
   case 0: 
       return '';
    case 1: 
       return `${arr[0]}`
   case 2: 
       return arr.join(`${word}`);
   default:
           return arr.slice(0, arr.length -1).join(delimiter)+ 
           `${delimiter}${word} ${arr[arr.length -1]}`;  
    }
}

while(true){
let board = initializedBoard()
displayBoard(board);

while(true){
 displayBoard(board);

playerChooseSquare(board,)
if(someoneWon(board)|| boardFull(board))break;

computerChoosesSquare(board);
if(someoneWon(board)|| boardFull(board))break;
}   

displayBoard(board)

if(someoneWon(board)){
    prompt(`${detectWinner(board)} won!`);
}
else{
    prompt("It's a tie");
}

prompt('Play again ? (y or n)')
let answer = readline.question().toLowerCase()[0]
if (answer !== 'y')break;
}

prompt('Thank you for playing Tic Tac Toe!')