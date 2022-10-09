const board = document.getElementsByTagName("table")[0];

const player1 = "X";
const player2 = "O";
// const compPlayer = [];
let playerTurn = player1;
let vsComputer ;
// let vsComputer = false
const onePlayerGame = document.getElementById("onePlayer")
onePlayerGame.addEventListener ("click", onePlayerToggle)
function onePlayerToggle () {
  vsComputer = true
  let comp = "COMPUTER"
  player2Name.innerText = comp;

 
}

const twoPlayerGame = document.getElementById("twoPlayers")
twoPlayerGame.addEventListener("click", twoPlayerToggle)

function twoPlayerToggle() {
  vsComputer = false
  player2Name.innerText = "PLAYER 2"
}





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

const winMessage = document.getElementById("results")
//********cell id's**********
const tableCells = document.getElementsByTagName("td")

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

let boardCells = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2","c3"]
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

//needs to be in each function for 1vCOMP and 2v2
// const startingPlayer = Math.random() > 0.5 ? player1 : player2
// console.log(player1)//still only showing x or o not Player1
// const firstPlayer = document.getElementById("firstPlayer")
// firstPlayer.innerText = startingPlayer




//*****clicking on 1 player */
//activates comp for O

// const singlePlayerGame = document.getElementById("onePlayer");
// singlePlayerGame.addEventListener("click", oneVComp);

// 
  //comp needs to find empty space, random. 
  // need it's own function and then call function in oneVComp mode?
  //if random spot is taken, loop again? if statement? if random cell = '', then place

  




// two player mode******
board.addEventListener("click", playerMoves);



function playerMoves(event) {
    
  if (event.target.innerText === "") {
    event.target.innerText = playerTurn;
    if (vsComputer === true){
      //run computer move function
      computerMoves()
      ///comment out if VSComputer and else to get O's to work
      
    } else {
          
 if (playerTurn === "X") {
        playerTurn = "O";
  
      } else {
        playerTurn = "X";
      }
    }
  }

  checkForWin ()
  
}
 
function computerMoves (){

// let randomCells = []
// do {
 
//   randomCells = boardCells[Math.floor(Math.random() * (9-1) +1)]
//   tableCells[randomCells].innerText = "O"

// }
// while (tableCells[randomCells].innerText !== '')

  // let randomCells = []
   let randomCells = boardCells[Math.floor(Math.random() * (9-1) +1)]
  //  if (tableCells[randomCells] === ''){
    if (playerTurn === "X") {
      tableCells[randomCells].innerText = "O";

    } else {
      playerTurn = "X";
    }
  // tableCells[randomCells].innerText = "O"
  console.log(randomCells)
} 

// if (tableCells[randomCells].innerText === ""){
// tableCells[randomCells].innerText = "O"
// console.log(randomCells)
// }
// } else {
  
// }
// if (randomCells.innerText !== ""){
//   boardCells.splice(boardCells.indexOf(randomCells),1)
// }
// for (let i = 0; i < tableCells.length; i++)
//  console.log(randomCells)
// if (tableCells[randomCells].innerText!== ""){ ***********
  
// } else {

//   tableCells[randomCells].innerText = "O"
//  console.log(randomCells)
// }******

// 

// }





  
  // computerMoves()

  




function checkForWin() {

  
  
    if (a1.innerText === "X" && b2.innerText === "X" && c3.innerText === "X" ||
        c1.innerText === "X" && b2.innerText === "X" && a3.innerText=== "X" ||
        a1.innerText === "X" && a2.innerText === "X" && a3.innerText === "X" ||
        b1.innerText === "X" && b2.innerText === "X" && b3.innerText === "X" ||
        c1.innerText === "X" && c2.innerText === "X" && c3.innerText === "X" ||
        a1.innerText === "X" && b1.innerText === "X" && c1.innerText === "X" ||
        a2.innerText === "X" && b2.innerText === "X" && c2.innerText === "X" ||
        a3.innerText === "X" && b3.innerText === "X" && c3.innerText === "X" ){
         
           let xWin = player1Name.innerText +  " wins!"
           winMessage.innerText = xWin
          
           
        

        } else if (a1.innerText === "O" && b2.innerText === "O" && c3.innerText === "O" ||
        c1.innerText === "O" && b2.innerText === "O" && a3.innerText === "O" ||
        a1.innerText === "O" && a2.innerText === "O" && a3.innerText === "O" ||
        b1.innerText === "O" && b2.innerText === "O" && b3.innerText === "O" ||
        c1.innerText === "O" && c2.innerText === "O" && c3.innerText === "O" ||
        a1.innerText === "O" && b1.innerText === "O" && c1.innerText === "O" ||
        a2.innerText === "O" && b2.innerText === "O" && c2.innerText === "O" ||
        a3.innerText === "O" && b3.innerText === "O" && c3.innerText === "O" ){
        
           
            let oWin = player2Name.innerText +  " wins!"
           winMessage.innerText = oWin
          

        } 
         else if (a1.innerText !== '' && a2.innerText!== '' && a3.innerText!== '' && 
            b1.innerText!== '' && b2.innerText!== '' && b3.innerText!== '' && 
            c1.innerText!== '' && c2.innerText!== '' && c3.innerText!== '' ){
              winMessage.innerText = "DRAW"
            }

       
          
    
}

//       player1.indexOf(winCombos[i][0].innerText) === "X" &&
//       player1.indexOf(winCombos[i][1].innerText) === "X" &&
//       player1.indexOf(winCombos[i][2].innerText) === "X"
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
//****** clicking new game button ******

const newGameButton = document.getElementById("newGame")
newGameButton.addEventListener("click", gameReset)
 
function gameReset(){
a1.innerText = '', a2.innerText = '', a3.innerText = ''
b1.innerText = '', b2.innerText = '', b3.innerText = ''
c1.innerText = '', c2.innerText = '', c3.innerText = ''
playerTurn ="X"

winMessage.innerText = ''


}


   
   
    
    








// computer moves
// function randomComp (){
//     //**needs to pick random empty cell for 'O' */
//     let randomCell =

// }
