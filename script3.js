const game = GameFlow();

//gameboard
   
function Gameboard () {
    let board = [];

    //win combinations
    const sequences = [  
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],  
      ]

    //test if active player
    //has win combination
    //returns true if match is reached 
    const winnerTest = (firstArr, secondArr) => {
        for (let i = 0; i < secondArr.length; i++) {
            firstArr.sort();
            secondArr[i].sort();
            if (firstArr + "" == secondArr[i] + "") return true;
        }
    }


    const ifDraw = () => {
        if (board.length >= 9) {
            console.log('It\'s a draw. Game over');
            return true;
        }
    }


    const fillBoard = (num) => {
        //stop execution if board is 
        //the entire board is filled
        if (board.length >= 9) return;
        board.push(num);
    } 

    

    //method to get win combinations;
    const getSequences = () => sequences;
    //method of getting the board;
    const getBoard = () => board;
    //method of emptying board;
    const emptyBoard = () => board = [];

    return {getBoard, getSequences, fillBoard, emptyBoard, winnerTest, ifDraw};
}


//game controller
function GameFlow (
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
  ) {
    
    

    const players = [
      {
        name: playerOneName,
        moves: [],
      },
      {
        name: playerTwoName,
        moves: [],
      },
    ];

    const board = Gameboard();
    const uInterface = UserInterface();
  
    let activePlayer = players[0];
  
    const switchPlayer = () => {
      activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
  
    const getActivePlayer = () => activePlayer;
    
    //add moves to the moves array 
    //and switch player
    
    const resetAll = () => { //reset all to default
      activePlayer = players[0];
      players[0].moves = 
      players[1].moves = [];
      newGameBoard.emptyBoard();
    }
    
    const printTurn = () => console.log(`It's ${activePlayer.name}'s move now. Make a move`);
    const getPlayerName = () => activePlayer.name;
    const getPlayerMoves = () => activePlayer.moves;
    
    const makeMove = (move) => {
        //add cell index to 
        //active pl array
      activePlayer.moves.push(Number(move));
      console.log(`${getPlayerName()}' s moves: ` + getPlayerMoves());
      //add cell index to board array
      board.fillBoard(Number(move));
      console.log('overall moves: ' + board.getBoard());
      //if length of moves exceeds 3
      //delete first item in the array
      if (activePlayer.moves.length > 3) {   
        activePlayer.moves.shift();   
      }  
      //check if all cells are filled
      if(board.ifDraw()) {
        return;
      }
      //check if there is a winner
      if (board.winnerTest(getPlayerMoves(), board.getSequences())) {
        console.log(`${getPlayerName()} is a winner.`);
        return;
        const boardDisplay = uInterface.getDisplay();
        boardDisplay.innerHTML = `${getPlayerName} is a winner. Game over.`
      }
      //switch active player
      switchPlayer();
      //show who's turn it is now
      printTurn();
    } 
    
  
    return {getPlayerName, getActivePlayer, makeMove, getPlayerMoves, printTurn, resetAll}
  }

//UI
function UserInterface () {
    const display = document.querySelector('.display');
    const gridButton = document.querySelectorAll('.grid-button');

    const getDisplay = () => display;

    return {getDisplay};
}
