const gameStatus = document.getElementById("message-display");
const cells = document.getElementsByClassName("cell");
const restart = document.getElementById("restart-button");
console.log(cells[1]);
let board = ["", "", "", "", "", "", "", "", ""];
let turn = "X";
let targ = "";
let win = false;
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
gameStatus.textContent = `Player ${turn}'s turn!`;

for (let i = 0; i < 9; i++) {
  const cell = cells[i];
  console.log(cell);
  cell.addEventListener("click", (e) => {
    if (win === false) {
      if (e.target.textContent == "") {
        e.target.textContent = turn;
        targ = parseInt(e.target.id);
        board[targ] = turn;
        win = checkWin(board);
        if (turn == "X") {
          turn = "O";
        } else {
          turn = "X";
        }
        if (win == false) {
          gameStatus.textContent = `Player ${turn}'s turn!`;
        }
      }
    }
  });
}

function checkWin(board) {
  for (i in winningCondition) {
    arr = winningCondition[i];
    if (
      board[arr[0]] == board[arr[1]] &&
      board[arr[1]] == board[arr[2]] &&
      board[arr[0]] != ""
    ) {
      win = true;
      gameStatus.textContent = `Player ${turn} won!`;
    }
  }
  return win;
}

restart.addEventListener("click", () => {
  for (let i = 0; i < 9; i++) {
    cells[i].textContent = "";
  }
  win = false;
  gameStatus.textContent = `Player ${turn}'s turn!`;
  board = ["", "", "", "", "", "", "", "", ""];
});
