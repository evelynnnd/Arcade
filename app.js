// variables and the start of the game
let playAgain = document.getElementById('play-again');
let cell = Array.from(document.getElementsByClassName('cells'));
let playerText = document.getElementById('title');

const PLAYER_O = "O";
const PLAYER_X = "X";
let currentPlayer = PLAYER_O;
let board = Array(9).fill(null);

let winningComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
    

//creating the start of game. making sure to include players and event listener for the cells to be selected.
const startGame = () => {
  cell.forEach(cells => cells.addEventListener('click', cellsClicked));
}

//creating the functionality within the cells. 
function cellsClicked(event) {
  const id = event.target.id;
  // using an if statement with a boolean to stop players from clicking cells that have already been selected.
  if (!board[id]); {
    board[id] = currentPlayer
  event.target.innerText = currentPlayer;
  };
  //switching between the two players. if 'o' went then switch to 'x' otherwise stay 'o'
  currentPlayer = currentPlayer === PLAYER_O ? PLAYER_X : PLAYER_O;
}

//checking for a winning combonation. checking to see a line equals all X's or O's.
const winner = () => {
  if (currentPlayer == board[0] && board[0] == board[1] && board[0] == board[2])
  return true;
}

playAgain.addEventListener('click', again)

//reseting the board. making sure cells, players and title are all reset. 
function again() {
  board.fill(null);

  cell.forEach(cells => {
      cells.innerText = ''
  });

  playerText = 'TIC TAC TOE';

  currentPlayer = PLAYER_O;
}


startGame()





