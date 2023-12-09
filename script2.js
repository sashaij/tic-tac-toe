//two players

//board 1|2|3
//      4|5|6
//      7|8|9

//win sequences

// [1, 2, 3], [4, 5, 6], [7, 8, 9] row
// [9, 8, 7], [6, 5, 4], [3, 2, 1] row rev
// [1, 4, 7], [2, 5, 8], [3, 6, 9] col 
// [7, 4, 1], [8, 5, 2], [9, 6, 3] col rev
// [3, 5, 7], [7, 5, 3], [1, 5, 9], [9, 5, 1] diag

//9 moves total

//algorythm

//player makes a move
  //cell becomes inactive

  //his move asigned to a certain 
  //cell number

  //function that takes the number 
  //and pushes it into 
  //player moves array

  //function that takes palyer's
  //array

  //checks if it's length is less
  //than 3

    //return if it is

    //else if it is >= 3

     //than check if sequence in 
     //player's array is equal to
     //win sequence
     
     //return 'player# is a winner' 
     //string if it is

     //otherwise 
  



//cell becomes inactive for interaction

//controls turn to the second player
//

//game ends when total moves count
//reaches 9 (while i<=9)

/* 
Certainly! Building a Tic Tac Toe game using factory functions is a great way to practice JavaScript and improve your coding skills. Here's a step-by-step guide to help you through the process:

Board Representation:

Decide on a data structure to represent the Tic Tac Toe board. This could be a simple array, a 2D array, or an object. Each cell on the board should be identified by a unique index or coordinate.

Player Factory Function:

Create a factory function that generates player objects. Each player should have a name and a symbol (either "X" or "O").
Game Board Module:

Implement a module or factory function to manage the game board. This should include functions to:
Initialize the board.
Display the current state of the board.
Update the board with a player's move.
Check for a win or a draw.
Reset the board for a new game.
Game Flow:

Implement a function to manage the flow of the game.
Alternately take turns between two players.
Prompt the current player for a move.
Validate the move (e.g., ensure the chosen cell is empty).
Update the board with the move.
Check for a win or a draw after each move.
Display the result and end the game if a win or draw is detected.
Allow the players to start a new game.
User Input:

Implement a function to handle user input. This could be through the console, a simple webpage, or any other interface you prefer.
Refactoring and Optimization:

Review your code and see if there are opportunities for refactoring. Consider separating concerns into different functions for better readability and maintainability.
Testing:

Test your game thoroughly to ensure it works as expected. Test various scenarios, including wins, draws, and different player moves.
Documentation:

Add comments or documentation to your code to explain how each part works. This is especially important if you plan to share your code with others or review it in the future.
Remember, the key to learning is not just in writing code but also in understanding the logic behind it. Take your time at each step, and don't hesitate to ask questions if you get stuck. Good luck, and have fun building your Tic Tac Toe game!
*/


//gameboard
function Gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];


    for (let i = 0; i < rows; i++) {
      board [i] = [];
      for (let j = 0; j <columns; j++) {
        board[i].push(Cell());
      }
    }

    const getBoard = () => board;

    

    return {getBoard};
}

const playerArr = [0, 4, 8];

function testWin (arr) {
    const board = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],   
    ]
    let testArr = arr;
    let formArr = [];

    const compareArrays = (a, b) => 
    a.length === b.length &&
    a.every((element, index) => element === b[index]);
      
    const getBoard = () => board;

    return {getBoard, compareArrays};
}

const newTest = testWin();


function formSequences () {

  const gameBoard = newTest.getBoard();
  let seqArr = [];
  let subSeqArr = [];

  const pushAndEmpty = function () {
    seqArr.push(subSeqArr);
    subSeqArr = [];
  }

  for (i = 0; i < gameBoard.length; i++) {
    seqArr.push(gameBoard[i]);
  } //row

  for (i = 0; i < gameBoard.length; i++) {
    seqArr.push(gameBoard[i].reverse());
  } //row reverse


  for (let i = 0; i < gameBoard.length; i++) { 
    for (let j = 0; j < gameBoard[i].length; j++) {
        subSeqArr.push(gameBoard[j][i]); }
        pushAndEmpty();
}  //arr from col

 
  for (let i = 0; i < gameBoard.length; i++) { 
    for (let j = gameBoard[i].length - 1; j >=0 ; j--) {
        subSeqArr.push(gameBoard[j][i]); }
        pushAndEmpty();
} //arr from col reverse 
    
for (let i = 0; i < gameBoard.length; i++) {
    subSeqArr.push(gameBoard[i][i]) } //arr from diag

  pushAndEmpty(); 

  for (let i = gameBoard.length; i > 0; i--) {
    subSeqArr.push(gameBoard[i-1][i-1]);} //arr from diag reverse
  pushAndEmpty();
//itter diag right-left top-bottom

for (let i = 0; i < gameBoard.length; i++) {
    let incl = gameBoard.length - 1 - i;
    subSeqArr.push(gameBoard[i][incl]);
} //arr from diag

pushAndEmpty();
//itter diag right-left bottom-top

for (let j = 0; j < 1; j++){
    inter = 0;
    for (let i = gameBoard.length - 1; i >= 0; i--) {
    subSeqArr.push(gameBoard[i][inter]);
    inter++;
}
} //arr from diag reverse

pushAndEmpty();

const getSeq = () => seqArr;

return {getSeq};

}

const winSequences = formSequences();


//test for win
for (i = 0; i < winSequences.getSeq().length; i++) {
  const winBool = newTest.compareArrays(winSequences.getSeq()[i], playerArr);
  //console.log(winBool);
  if (winBool === true) {
    console.log('You win');
  }
}


console.log(winSequences.getSeq());


//itter through col
/* 
  for (let i = 0; i < gameBoard.length; i++) { 
      for (let j = 0; j < gameBoard[i].length; j++) {
          subSeqArr.push(gameBoard[j][i]); }
  }
*/
//itter through col reverse
/* 
  for (let i = gameBoard.length; i >0 ; i--) { 
    for (let j = 0; j < gameBoard[i-1].length; j++) {
        subSeqArr.push(gameBoard[j][i-1]); }
  }
*/
//itter diag left-right top-bottom
/* 
for (let i = 0; i < gameBoard.length; i++) {
    subSeqArr.push(gameBoard[i][i]) }
*/
//itter diag left-right bottom-top
/* 
  for (let i = gameBoard.length; i > 0; i--) {
    subSeqArr.push(gameBoard[i-1][i-1]);}
*/
//itter diag right-left top-bottom
/* 
for (let i = 0; i < gameBoard.length; i++) {
    let incl = gameBoard.length - 1 - i;
    subSeqArr.push(gameBoard[i][incl]);
}
*/
//itter diag right-left bottom-top
/* 
for (let j = 0; j < 1; j++){
    inter = 0;
    for (let i = gameBoard.length - 1; i >= 0; i--) {
    subSeqArr.push(gameBoard[i][inter]);
    inter++;
}
}
*/

//player

//game flow

//user input

