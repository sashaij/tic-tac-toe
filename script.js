
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

function counter () {
  const moveCounter = [];

  const addMove = () => {
    moveCounter.push(1);
  }
  const getCounter = () => moveCounter;

  return {getCounter, addMove};
}

function player (name) {
  const playerName = name;
  const moves = [];
  const getMoves = () => moves;
  const makeMove = (move) => moves.push(move);

  if (moves.length > 3) {
    moves.shift();
  }

  function ifWin (arr) {
    if (arr.length < 3) {
      return;
    } else if (arr.length === 3) {
      defineWin(arr);
    }
  }

  return {playerName, getMoves, makeMove};
}

function defineWin (allMoves) {
  let playerMoves = allMoves;
  const winSeq = [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [0, 3, 6],
                  [1, 4, 7],
                  [2, 5, 8],
                  [0, 4, 8],
                  [2, 4, 6]
                ];

/*   for (let i = 0; i < winSeq.length; i++){
    let winSeqValue = winSeq[i];
    for (let i = 0; i < playerMoves.length; i++) {
      let sum = playerMoves[i] + playerMoves[i + 1] + playerMoves [i + 2];
      if (winSeqValue !== sum) {
        return;
      } else { 
        'there is a winner';
      }
    }
  } */
}
  const player1 = player('player1');
  const player2 = player('player2');

  /*
  6, 15, 24, 12, 18, 
   */

  /* 
  (i + (i+1) + (i+2))
  sum = moves[i] + moves[i+1] + 
  moves[i+2];
  */

/*   for (let i = 0; i < winSeq.length; i++) {
    givenArray = winSeq[i];
    let sum = 0;
    for (let i = 0; i < winSeq[i].length; i++) {
      sum += givenArray[i];
    }
    console.log(sum);
    sum = 0;
  } */ //loop that sums array values
    //in an array of arrays



//defineWin();







