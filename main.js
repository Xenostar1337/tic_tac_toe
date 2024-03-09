const player1 = {
    Name: "Player 1",
    Icon: "X"
};
 
const player2 = {
    Name: "Player 2",  //get names from a form
    Icon: "O"
};

let pointer = 0;

  
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
      // Add other methods as needed
    };
  
    function isValidIndex(row, col) {
      return row >= 0 && row < 3 && col >= 0 && col < 3;
    }
}

function boardState() {
//fill in cards based on array
//show winnerthat
}

function whoseTurn() {   
    let turn = pointer % 2 === 1 ? "X" : "O";
    return turn;
}

function gameState() {
    let row;
    let col;
    let cellValue;
    
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
    if (pointer > 8) {
    document.getElementById("header").style.color = "red";
    document.getElementById("header").textContent = "Finished";
    document.getElementById("status").style.display = "grid";
    document.getElementById("status").textContent = "PLAY AGAIN?";
    } 
}        
    
   
    //conclude winner
    //restart


function newGame(button) { 
    pointer = 0;
    document.querySelectorAll('.card').forEach(card => {
        card.textContent = '';});
    game = gameArray();  
    whoseTurn();    
    buttonSelector = "." + button
    let foo = document.getElementById(button.id);
    foo.style.display = "none";
    document.getElementById('header').textContent = 'TIC TAC TOE';
    document.querySelector(".board").style.display = "grid"; 
    document.getElementById('header').style.color = 'aqua';
    console.log(game.getBoard());
    gameState();
}  

function clicked (button) {
    const location = button.replace(/^a/, '').replace(/b/g, ', ');
    
    let player = whoseTurn();   
    let check = game.getBoard()[button[1]][button[3]];
    if (check == 0) {  
        pointer++;      
        game.setCell(button[1], button[3], player);
    }    
    gameState();    
}


//add listener to each card that runs the click function.
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
      clicked(this.id);
    });
});

let foo = document.getElementById('status');
foo.addEventListener('click', function() {
    newGame(this);
  });



