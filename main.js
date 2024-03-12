const player1 = {
    Name: document.getElementById("playerName1").textContent,
    Icon: "X",
    Color: 
        function(){
        let colorPicker = document.getElementById("colorPicker1");
        let selectedColor = colorPicker.value;
        return selectedColor;
    }

   
};

const player2 = {
    Name: document.getElementById("playerName1").textContent,  //get names from a form
    Icon: "O",
    Color: 
        function(){
        let colorPicker = document.getElementById("colorPicker2");
        let selectedColor = colorPicker.value;
        return selectedColor;
    }
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
    let turn = pointer % 2 === 1 ? player1.Icon : player2.Icon;
    return turn;
}

function isWinner() {
    let bap = game.getBoard();
    let winner1;
    let winner2;
    let winner3;
    let jee = document.getElementById("playerName1").value;
    let joo = document.getElementById("playerName2").value;
    let results;

    function win(){     
    winner1.style.backgroundColor = winningColor;  
    winner2.style.backgroundColor = winningColor;
    winner3.style.backgroundColor = winningColor;
    winner1.style.animation = "spin 3s linear infinite, flash .5s ease-in-out infinite";
    winner2.style.animation = "spin 3s linear infinite, flash .5s ease-in-out infinite";
    winner3.style.animation = "spin 3s linear infinite, flash .5s ease-in-out infinite";
    document.getElementById("header").style.color = "lime";
    document.getElementById("header").textContent = results;
    document.getElementById("status").style.display = "grid";
    document.getElementById("status").textContent = "PLAY AGAIN?";    
    }
   
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[0][1] &&  bap[0][0] ==  bap[0][2]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a0b1");
        winner3 = document.getElementById("a0b2");  
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        }
        win(); 
        
    }
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[1][0] &&  bap[0][0] ==  bap[2][0]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a1b0");
        winner3 = document.getElementById("a2b0"); 
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        }  
        win(); 
          
    }
    if (bap[0][0] !== 0 && bap[0][0] ==  bap[1][1] &&  bap[0][0] ==  bap[2][2]) {
        winner1 = document.getElementById("a0b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a2b2"); 
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        } 
        win(); 
        
    }
    if (bap[2][0] !== 0 && bap[2][0] ==  bap[2][1] &&  bap[2][0] ==  bap[2][2]) {
        winner1 = document.getElementById("a2b0"); 
        winner2 = document.getElementById("a2b1");
        winner3 = document.getElementById("a2b2");  
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        }  
        win(); 
         
    }
    if (bap[2][0] !== 0 && bap[2][0] ==  bap[1][1] &&  bap[2][0] ==  bap[0][2]) {
        winner1 = document.getElementById("a2b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a0b2"); 
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        } 
        win();  
                  
    }
    if (bap[0][2] !== 0 && bap[0][2] ==  bap[1][2] &&  bap[0][2] ==  bap[2][2]) {
        winner1 = document.getElementById("a0b2"); 
        winner2 = document.getElementById("a1b2");
        winner3 = document.getElementById("a2b2"); 
        
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        } 
        win(); 
        
    }
    if (bap[0][1] !== 0 && bap[0][1] ==  bap[1][1] &&  bap[0][1] ==  bap[2][1]) {
        winner1 = document.getElementById("a0b1"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a2b1"); 
           
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        }
        win();  
        
    }
    if (bap[1][0] !== 0 && bap[1][0] ==  bap[1][1] &&  bap[1][0] ==  bap[1][2]) {
        winner1 = document.getElementById("a1b0"); 
        winner2 = document.getElementById("a1b1");
        winner3 = document.getElementById("a1b2");
        if (winner1.textContent == player1.Icon) {
            results = "Winner " + jee; 
        }
        if (winner1.textContent == player2.Icon) {
            results = "Winner " + joo;
        }
        win(); 
        
         
        
    }
    if (pointer > 9) {
            results = "DRAW";
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
                    if(card.textContent == player1.Icon) {
                        card.style.color = player1.Color();
                    }
                    if(card.textContent == player2.Icon) {
                        card.style.color = player2.Color();
                    }                    
                }
            }   
        }        
    });
    isWinner();
}        

function AIturn(){
    console.log("AI TURN");
}

function newGame(button) { 
    pointer = 1;
    document.querySelectorAll('.card').forEach(card => {
        card.textContent = '';
        card.style.backgroundColor = "black";
        card.style.animation = "none";
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
    document.querySelector(".playerBox").style.display = "none";
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



