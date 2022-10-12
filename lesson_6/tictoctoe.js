const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER ='X';
const COMPUTER_MAKER = 'O'
function prompt(msg){console.log(`=>${msg}`);
}
function displayBoard(board){
    console.clear();

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
    prompt(`choose a square (${emptySquares(board).join(', ')}):`);
    square = readline.question().trim();
    if(emptySquares(board).includes(square)) break; 

    prompt("Sorry, that's not a valid choice");
    }

    board[square]= HUMAN_MARKER;
}
function computerChoosesSquare(board){
    
 let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    
 let square = emptySquares(board)[randomIndex];
    board[square]= COMPUTER_MAKER;
}


function boardFull(board){
    return emptySquares(board).length ===0;
} function someoneWon (board){
    return !!detectWinner(board);
}

function detectWinner(board){
    let winningLines =[
        [1, 2, 3,],[4, 5, 6,],[7, 8, 9], //rows
    [1, 4,7,],[2, 5, 8],[3, 6, 9], // columns
    [1, 5, 9],[3, 5, 7]// diagnal
    ]; 
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
            ){ return 'Computer';

            }
    }
     return null;
}
let board = initializedBoard()
displayBoard(board);

while(true){
playerChooseSquare(board);
if(someoneWon(board)|| boardFull(board))break;

computerChoosesSquare(board);
if(someoneWon(board)|| boardFull(board))break;

}
if(someoneWon(board)){
    prompt(`${detectWinner(board)} won!`);

}
else{
    prompt("It's a tie");
}
