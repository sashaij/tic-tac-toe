
//two players

//board 1|2|3
//      4|5|6
//      7|8|9

//win sequences

// 1-2-3, 4-5-6, 7-8-9 row
// 9-8-7, 6-5-4, 3-2-1 row rev
// 1-4-7, 2-5-8, 3-6-9 col 
// 7-4-1, 8-5-2, 9-6-3 col rev
// 3-5-7, 7-5-3, 1-5-9, 9-5-1 diag

//9 moves total

//algorythm

//player makes a move
  //function that takes number 
  //and pushes it into an array
//his move asigned to a certain 
//cell number
  //number pushed to an array of cell nums

  //sequence of numbers in array checked
  //for corresponding win sequence
  //if sequence is not achieved game continues
  //otherwise there is a win

//cell becomes inactive for interaction

//controls turn to the second player
//

//game ends when total moves count
//reaches 9 (while i<=9)

const Gameboard = {
  gameboard: [1, 2, 3, 
              4, 5, 6, 
              7, 8, 9],
}

function player (name) {
  const playerName = name;
  const moves = [];
  const getMoves = () => moves;
  const makeMove = (move) => moves.push(move);

  return {playerName, getMoves, makeMove};
}

const player1 = player('player1');
const player2 = player('player2');






