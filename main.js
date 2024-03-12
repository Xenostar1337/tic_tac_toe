const player1 = {
    Name: "Player 1",
    Icon: "X"
};
 
const player2 = {
    Name: "Player 2",  //get names from a form
    Icon: "O"
};

let winningColor = "indigo";
let pointer = 1;
let game;
  
function gameArray() {
    const board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];  
    return {
      getBoard: function () {
        return board;
      },
      setCell: function (row, col, value) {
        if (isValidIndex(row, col)) {
          board[row][col] = value;
        } else {
            console.log(row, col, value);
          console.error('Invalid board index');
        }
      }
    };  
    function isValidIndex(row, col) {
      return row >= 0 && row < 3 && col >= 0 && col < 3;
    }
}

function whoseTurn() {   
    let turn = pointer % 2 === 1 ? "X" : "O";
    return turn;
}

function isWinner() {
    let bap = game.getBoard();
    let winner1;
    let winner2;
    let winner3;
    function win(){ 
    winner1.style.backgroundColor = winningColor;
    winner2.style.backgroundColor = winningColor;
    winner3.style.backgroundColor = winningColor;
    }
   
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[0][1] &&  bap[0][0] ==  bap[0][2]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a0b1");
        winner3 = document.getElementById("a0b2");  
        win(); 
        return "Winner";
    }
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[1][0] &&  bap[0][0] ==  bap[2][0]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a1b0");
        winner3 = document.getElementById("a2b0"); 
        win(); 
        return "Winner";    
    }
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[1][1] &&  bap[0][0] ==  bap[2][2]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a2b2"); 
        win(); 
        return "Winner"; 
    }
    if (bap[2][0] !== 0 && bap[2][0] ==  bap[2][1] &&  bap[2][0] ==  bap[2][2]) {
        winner1 = document.getElementById("a2b0"); 
        winner2 = document.getElementById("a2b1");
        winner3 = document.getElementById("a2b2");  
        win(); 
        return "Winner";   
    }
    if (bap[2][0] !== 0 && bap[2][0] ==  bap[1][1] &&  bap[2][0] ==  bap[0][2]) {
        winner1 = document.getElementById("a2b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a0b2"); 
        win();  
        return "Winner";           
    }
    if (bap[0][2] !== 0 && bap[0][2] ==  bap[1][2] &&  bap[0][2] ==  bap[2][2]) {
        winner1 = document.getElementById("a0b2"); 
        winner2 = document.getElementById("a1b2");
        winner3 = document.getElementById("a2b2"); 
        win(); 
        return "Winner";   
    }
    if (bap[0][1] !== 0 && bap[0][1] ==  bap[1][1] &&  bap[0][1] ==  bap[2][1]) {
        winner1 = document.getElementById("a0b1"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a2b1"); 
        win();  
        return "Winner";   
    }
    if (bap[1][0] !== 0 && bap[1][0] ==  bap[1][1] &&  bap[1][0] ==  bap[1][2]) {
        winner1 = document.getElementById("a1b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a1b2");
        win(); 
        return "Winner";  
    }
    if (pointer > 9) {
            return "DRAW";
        }
}

function results() {
    let result = isWinner();
    if (result !== undefined) {
    document.getElementById("header").style.color = "lime";
    document.getElementById("header").textContent = result;
    document.getElementById("status").style.display = "grid";
    document.getElementById("status").textContent = "PLAY AGAIN?";
    }
}

function gameState() {
    let row;
    let col;
    let cellValue;
    //if (whoseTurn() == "O" && opponent == "ai") {AIturn();} 

    document.querySelectorAll('.card').forEach(card => {          
        for ( row = 0; row < game.getBoard().length; row++) {
            for ( col = 0; col < game.getBoard()[row].length; col++) {
                 cellValue = game.getBoard()[row][col];
                if (row == card.id[1] && col == card.id[3] && cellValue !== 0) {                    
                    card.textContent = cellValue;       
                    if(card.textContent == "O") {
                        card.style.color = "magenta";
                    }
                    if(card.textContent == "X") {
                        card.style.color = "orange";
                    }                    
                }
            }   
        }        
    });
    result = results();
   
}        

function AIturn(){
    console.log("AI TURN");
}

function newGame(button) { 
    pointer = 1;
    document.querySelectorAll('.card').forEach(card => {
        card.textContent = '';
        card.style.backgroundColor = "black";
        document.getElementById("status").style.display = "none";
      });
    game = gameArray();  
    whoseTurn();    
    buttonSelector = "." + button
    let foo = document.getElementById(button.id);
    foo.style.display = "none";
    document.getElementById('header').textContent = 'TIC TAC TOE';
    document.querySelector(".board").style.display = "grid"; 
    document.getElementById('header').style.color = 'aqua';    
    gameState();
}  

function clicked (button) {
    const location = button.replace(/^a/, '').replace(/b/g, ', ');    
    let player = whoseTurn();   
    let check = game.getBoard()[button[1]][button[3]];
    if (isWinner() == undefined){
        if (check == 0) {  
            pointer++;      
            game.setCell(button[1], button[3], player);
        }    
        gameState(); 
    }       
}

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
      clicked(this.id);
    });
});

let foo = document.getElementById('status');
foo.addEventListener('click', function() {
    newGame(this);
  });



