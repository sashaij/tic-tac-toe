//two players

//board 1|2|3
//      4|5|6
//      7|8|9

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

function setMark () {

  const gridButton = document.querySelectorAll('.grid-button');
  let buttonAttribute;

    const placeMark = (e) => {
        

        if(!e.target.classList.contains('grid-button')){
          return;
        } 
      
        let actPlayer = game.getPlayerName();
        //console.log('this works');
        //console.log(e.target.closest('div.cell-container'));
      
        const container = e.target.closest('div.cell-container');
      
        if (actPlayer === "Player One") {
            container.innerHTML = 
        `
          <svg fill="#9f43d0" width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" stroke="#9f43d0">
      
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      
      <g id="SVGRepo_iconCarrier"> <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"/> </g>
      
      </svg>
                            `
        } else {
          container.innerHTML = `
          <svg fill="#80e77e" width="100px" height="100px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#80e77e">
      
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          
          <g id="SVGRepo_iconCarrier"> <title>circle</title> <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"/> </g>
          
          </svg>
          `
        } 
        /* buttonAttribute = Number(gridButton[i].getAttribute('data-index')) */
          game.makeMove(buttonAttribute);
        //* here, but how to
        //  display number correctly?
      }

        const getMark = (e) => {
          let element = e.target;
          let index = element.getAttribute('data-index');
          buttonAttribute = index;
      }

      

      for (i = 0; i < gridButton.length; i++){
        gridButton[i].addEventListener('click',
        getMark
        )
        gridButton[i].addEventListener('click',   placeMark
      );
      
      /* gridButton[i].addEventListener('click', getMark(i)) */
        //where to put makemove (without ev list)
        //to display number right and not
        //and not trigger func immidetly
      
      }

  
  

  return {placeMark, getMark}
}





function whichMark (player) {
  const playerName = player.name;
  let targetImg = document.querySelector(`#${a}`);
  const selctMark = () => {
    if (playerName === 'Player One') {
      
    }
  }
}

function Gameboard () {
    const rows = 3;
    const columns = 3;
    let board = [];


    /* for (let i = 0; i < rows; i++) {
      board [i] = [];
      for (let j = 0; j <columns; j++) {
        board[i].push(Cell());
      }
    } */

    const fillBoard = (num) => board.push(num);

    //function that defines if 
    //moves quantity is exceeded and 
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


//function to check if there is a winner
const whoWin = function (arr) {
  const sequences = [  
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],  
  ]

  let testArr = arr;
  let arrBool;


      const arrComparison = (firstArr, secondArr) => {
  firstArr.sort();
  secondArr.sort();
  return firstArr + "" == secondArr + "";
  }

  const ifWinner = () => {
    if (testArr.length < 3) {
      return
  }
      for(let i = 0; i < sequences.length; i++){
        arrBool = arrComparison(sequences[i], testArr);
        if (arrBool === true) {
            console.log(`${game.getActivePlayer().name} is a winner.`);
      }
    }
  }

  return {ifWinner};
}



let newTest;
const newGame = () => {
  game.resetAll();
}


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
    newTest = whoWin(game.getPlayerMoves());
    newTest.ifWinner();
    switchPlayer();
    printTurn();
  } 
  

  return {getPlayerName, getActivePlayer, makeMove, getPlayerMoves, printTurn, receivePlayersMoves, resetAll}
}



game.printTurn();
const plMoves = game;

const putMark = (num) => {
  game.makeMove(num);
  
  console.log('pl moves: ' + plMoves.getPlayerMoves());
};


const gridMark = setMark();
console.log('player moves: ' + game.getPlayerMoves());

//game flow

//user input

