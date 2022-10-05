
const board = document.getElementsByTagName('table')[0]

function makeRow(){
    const row = document.createElement('tr')
    for (let i = 0; i < 3; i++){
        const td = document.createElement('td')
        row.appendChild(td)
    }
    board.appendChild(row)
}
makeRow()
makeRow()
makeRow()

const player1 = 'X'
const player2 = 'O'

const a1 = document.getElementsByTagName("td")[0]
a1.setAttribute("id", "a1")

const a2 = document.getElementsByTagName("td")[1]
a2.setAttribute("id","a2")

const a3 = document.getElementsByTagName("td")[2]
a3.setAttribute ("id", "a3")

const b1= document.getElementsByTagName("td")[3]
b1.setAttribute ("id", "b1")

const b2 = document.getElementsByTagName("td")[4]
b2.setAttribute ("id", "b2")

const b3 = document.getElementsByTagName("td")[5]
b3.setAttribute("id", "b3")

const c1 = document.getElementsByTagName("td")[6]
c1.setAttribute("id", "c1")

const c2 = document.getElementsByTagName("td")[7]
c2.setAttribute("id", "c2")

const c3 = document.getElementsByTagName("td")[8]
c3.setAttribute("id","c3")

//test 2
// test
// //state
// let state;

// function buildInitialState(){

// }

// //render
// function renderState() {

// }

//helper functions for interface

// //listeners
// function onBoardClick(){
//     //update state with more helper functions


//     renderState()//new state for user
// }
