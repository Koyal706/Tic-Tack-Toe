console.log("welcome to ti tack toe");
let turn = "X";
let isGameOver = false;
// function to change the turn----------------------------------
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check winnner------------------------------------
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2 , 5,5,0],
        [3, 4, 5,5,15,0],
        [6, 7, 8,5 , 25 , 0],
        [0, 3, 6 , -5 , 15, 90],
        [1, 4, 7, 5 , 15,90],
        [2, 5, 8 , 15,15,90],
        [0, 4, 8 , 5,15,45],
        [2, 4, 6, 5, 15,135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won";
            isGameOver = true;
            document.querySelector(".line").style.width="20vw";
            transform = `translate(${e[3]}vw , ${e[4]}vw)rotate(${e[5]}deg)`
        }
    })
}

// Game main logic----------------------------------------------
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
            }
        }

    })
})
// add on click listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
     turn = "X";
       isGameOver=false;
        document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
    
})