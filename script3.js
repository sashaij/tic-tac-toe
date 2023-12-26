const game = GameFlow();
const userInterface = UserInterface();
const board = Gameboard();

userInterface.fillDisplay();
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
      //display who's turn it is,
      //winner or draw
      userInterface.fillDisplay();
      //check if there is a winner
      if (board.winnerTest(getPlayerMoves(), board.getSequences())) {
        console.log(`${getPlayerName()} is a winner.`);
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
    //select all grid button elements
    const gridButton = document.querySelectorAll('.grid-button');
    let buttonAttribute;

    const getDisplay = () => display;
      //hide (disable) grid buttons
      const disGridButtons = () => {
        for (let i = 0; i < gridButton.length; i++) {
            gridButton[i].style.display = 'none';
        }
      }

    const fillDisplay = () => {

        let gBoard = board.getBoard();

            if (gBoard.length < 9 && board.winnerTest(game.getPlayerMoves(), board.getSequences())) {
            display.innerHTML = `${game.getPlayerName()} is a winner.`
            //disable all remaining buttons
            disGridButtons();
            return;
          } else if (gBoard.length < 9 && !board.winnerTest(game.getPlayerMoves(), board.getSequences())) {
            const currentPlayer = game.getActivePlayer().name;
            display.innerHTML = `It's ${currentPlayer}'s turn now. Make a turn.`
          } else if (gBoard.length >= 9) {
            display.innerHTML = `It's a draw. Game over.`
          }
      }



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
                <svg fill="#80e77e" width="90px" height="90px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#80e77e">
            
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                
                <g id="SVGRepo_iconCarrier"> <title>circle</title> <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048z"/> </g>
                
                </svg>
                `
              } 
                //trigger
                game.makeMove(buttonAttribute);
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
        }
      

    return {getDisplay, placeMark, fillDisplay};
}
