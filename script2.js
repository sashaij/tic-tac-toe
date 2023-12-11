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
const game = GameFlow();


function Gameboard () {
    const rows = 3;
    const columns = 3;
    const board = [];


    /* for (let i = 0; i < rows; i++) {
      board [i] = [];
      for (let j = 0; j <columns; j++) {
        board[i].push(Cell());
      }
    } */

    const fillBoard = (num) => board.push(num);

    //function that defines if 
    //rounds quantity is exceeded and 
    //round is over

    const ifEnd = () => {
      if (board.length >= 9) {
        console.log('Game over');
      }
    }

    const getBoard = () => board;
    const emptyBoard = () => board = [];

    //function that counts overall turns

    return {getBoard, fillBoard, emptyBoard, ifEnd};
}

const playerArr = [0, 4, 8];

function testWin (arr) {
    const sequences = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],   
    ];

    let testArr = arr;

    for(let i = 0; i < sequences.length; i++){
      for(let j = 0; i < sequences[j].length; i++) {
        for (let x = 0; x < testArr.length; i++){
          if (sequences[i][j] === testArr[x]) {
            countArr.push(countArr[x]);
          }
        }
      }
    }

    let countArr = [];

    const testForWin = () => {
      if (countArr.length === 3) {
        console.log(`${game.getActivePlayer} is a winner.`);
      }
    }
/*     const compareArrays = (a, b) => 
    a.length === b.length &&
    a.every((element, index) => element === b[index]);
      
    const getBoard = () => board;
 */
    return {testForWin};
}

const newTest = testWin(game.getPlayerMoves);


/* function formSequences () {

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

} */

//const winSequences = formSequences();


/* //test for win
for (i = 0; i < winSequences.getSeq().length; i++) {
  const winBool = newTest.compareArrays(winSequences.getSeq()[i], game.getPlayerMoves());
  //console.log(winBool);
  if (winBool === true) {
    console.log(`${game.getPlayerName()} is a winner.`);
  }
} */



//player

function GameFlow (
  playerOneName = 'Player One',
  playerTwoName = 'Player Two'
) {
  //const board = Gameboard();

  const players = [
    {
      name: playerOneName,
      mark: 'x',
      moves: [],
    },
    {
      name: playerTwoName,
      mark: 'o',
      moves: [],
    },
  ];

  let activePlayer = players[0];

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getActivePlayer = () => activePlayer;
  const newGameBoard = Gameboard();
  //add moves to the moves array 
  //and switch player
  
  const resetAll = () => { //reset all to default
    activePlayer = players[0];
    players[0].moves = 
    players[1].moves = [];
    newGameBoard.emptyBoard();
  }

  //
  const receivePlayersMoves = (i) => players[i].moves;
  //
  
  const printTurn = () => console.log(`It's ${activePlayer.name}'s move now. Make a move`);
  const getPlayerName = () => activePlayer.name;
  const getPlayerMoves = () => activePlayer.moves;
  
  const makeMove = (move) => {
    activePlayer.moves.push(move);
    newGameBoard.fillBoard(move);
    console.log('overall moves: ' + newGameBoard.getBoard());
    
    if (activePlayer.moves.length > 3) {   //delete first item in
      activePlayer.moves.shift();   //in moves array if it exceeds
    }                              //three 
    newGameBoard.ifEnd();
    console.log('playerdef moves: ' + getPlayerMoves());
    newTest.testForWin();
    switchPlayer();
    printTurn();
  } 
  

  return {getPlayerName, getActivePlayer, makeMove, getPlayerMoves, printTurn,receivePlayersMoves}
}

game.printTurn();
const plMoves = game;

const putMark = (num) => {
  game.makeMove(num);
  
  console.log('pl moves: ' + plMoves.getPlayerMoves());
};


/* game.makeMove(0);
game.makeMove(1);
game.makeMove(4);
game.makeMove(2);
game.makeMove(8);
game.makeMove(5);
game.makeMove(7);
game.makeMove(9);
game.makeMove(6); */

console.log('player moves: ' + game.getPlayerMoves());

//game flow

//user input

