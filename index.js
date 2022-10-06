const board = document.getElementsByTagName("table")[0];
const player1 = "X";
const player2 = "O";
// const compPlayer
let playerTurn = player1;

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 3; i++) {
    const td = document.createElement("td");
    td.classList.add("cell");
    row.appendChild(td);
  }
  board.appendChild(row);
}
makeRow();
makeRow();
makeRow();

//player name input boxes******//

//player 1
const player1Name = document.getElementById("player1");
player1Name.addEventListener("click", playerName1);

function playerName1() {
  let name1 = window.prompt("Please enter Player 1's name.");
  player1Name.innerText = name1;
}
//player 2
const player2Name = document.getElementById("player2");
player2Name.addEventListener("click", playerName2);

function playerName2() {
  let name2 = window.prompt("Please enter Player 2's name. ");
  player2Name.innerText = name2;
}

const a1 = document.getElementsByTagName("td")[0];
a1.setAttribute("id", "a1");

const a2 = document.getElementsByTagName("td")[1];
a2.setAttribute("id", "a2");

const a3 = document.getElementsByTagName("td")[2];
a3.setAttribute("id", "a3");

const b1 = document.getElementsByTagName("td")[3];
b1.setAttribute("id", "b1");

const b2 = document.getElementsByTagName("td")[4];
b2.setAttribute("id", "b2");

const b3 = document.getElementsByTagName("td")[5];
b3.setAttribute("id", "b3");

const c1 = document.getElementsByTagName("td")[6];
c1.setAttribute("id", "c1");

const c2 = document.getElementsByTagName("td")[7];
c2.setAttribute("id", "c2");

const c3 = document.getElementsByTagName("td")[8];
c3.setAttribute("id", "c3");

//winning combos
const winCombos = [
  [a1, b2, c3],
  [c1, b2, a3],
  [a1, a2, a3],
  [b1, b2, b3],
  [c1, c2, c3],
  [a1, b1, c1],
  [a2, b2, c2],
  [a3, b3, c3],
];

//***resetting page to new game***/
// const newGame = document.getElementById("newGame")
// newGame.addEventListener("click",initial)

// function initial(){
//     board = [s
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]
//     ]
//     //reset the player names if necessary?

// }
// start()

//*****clicking on 1 player */
// event listener needed to set player 2's name to COMPUTER

const singlePlayerGame = document.getElementById("onePlayer");
singlePlayerGame.addEventListener("click", oneVComp);

function oneVComp() {
  let comp = "COMPUTER";
  player2Name.innerText = comp;
}

//clicking on 2 player//
//pop up to input player names?
// reset player names?

// const board = document.getElementsByTagName("td")

board.addEventListener("click", oneVOne);

// const twoPlayerGame = document.getElementById("twoPlayers")
// twoPlayerGame.addEventListener("click", oneVOne)

function oneVOne(event) {
    
  if (event.target.innerText === "") {
    event.target.innerText = playerTurn;
    if (playerTurn === "X") {
      playerTurn = "O";
    } else {
      playerTurn = "X";
    }
  }
  checkForWin ()
}
 
function checkForWin() {
  //check winCombos
  // if ( //player's marks == winCombos.some?)
  // checking to see if the o's or x's  winCombos[i]
//   for (let i = 0; i < winCombos.length; i++) {
    if (a1.innerText === "X" && b2.innerText === "X" && c3.innerText === "X" ||
        c1.innerText === "X" && b2.innerText === "X" && a3.innerText=== "X" ||
        a1.innerText === "X" && a2.innerText === "X" && a3.innerText === "X" ||
        b1.innerText === "X" && b2.innerText === "X" && b3.innerText === "X" ||
        c1.innerText === "X" && c2.innerText === "X" && c3.innerText === "X" ||
        a1.innerText === "X" && b1.innerText === "X" && c1.innerText === "X" ||
        a2.innerText === "X" && b2.innerText === "X" && c2.innerText === "X" ||
        a3.innerText === "X" && b3.innerText === "X" && c3.innerText === "X" ){
            //x's win
           alert("X's win!")
        console.log("x's win")

        } else if (a1.innerText === "O" && b2.innerText === "O" && c3.innerText === "O" ||
        c1.innerText === "O" && b2.innerText === "O" && a3.innerText === "O" ||
        a1.innerText === "O" && a2.innerText === "O" && a3.innerText === "O" ||
        b1.innerText === "O" && b2.innerText === "O" && b3.innerText === "O" ||
        c1.innerText === "O" && c2.innerText === "O" && c3.innerText === "O" ||
        a1.innerText === "O" && b1.innerText === "O" && c1.innerText === "O" ||
        a2.innerText === "O" && b2.innerText === "O" && c2.innerText === "O" ||
        a3.innerText === "O" && b3.innerText === "O" && c3.innerText === "O" ){
        
            //o's win
            alert("O's win!")
            console.log("o's win")
        }
  
    }

//       player1.indexOf(winCombos[0]) > -1 &&
//       player1.indexOf(winCombos[1]) > -1 &&
//       player1.indexOf(winCombos[2]) > -1
//     ) {
//       //x's win..alert
//       break;
//     } else if (
//       player2.indexOf(winCombos[0]) > -1 &&
//       player2.indexOf(winCombos[1]) > -1 &&
//       player2.indexOf(winCombos[2]) > -1
//     ) {
//       //o's win
//       break;
//     }
//   }
// }

// computer moves
// function randomComp (){
//     //**needs to pick random empty cell for 'O' */
//     let randomCell =

// }
