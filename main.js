const player1 = {
    Name: function(){
        let p1 = document.getElementById("playerName1");
        return p1.value;
    },
    Icon: "X",
    Color: 
        function(){
        let colorPicker = document.getElementById("colorPicker1");
        let selectedColor = colorPicker.value;
        return selectedColor;
    }   
};

const player2 = {
    Name: function(){
        let p2 = document.getElementById("playerName2");
        return p2.value;
    },
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
    let jee = player1.Name();
    let joo = player2.Name();
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

    function draw(){
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
            draw();
        }
}

function AIturn(){

    //Should probably use the Array instead of the text content
    let tl = document.getElementById("a0b0");
    let tm = document.getElementById("a0b1");
    let tr = document.getElementById("a0b2");
    let ml = document.getElementById("a1b0");
    let cen = document.getElementById("a1b1");
    let mr = document.getElementById("a1b2");
    let bl = document.getElementById("a2b0");
    let bm = document.getElementById("a2b1");
    let br = document.getElementById("a2b2");
    setTimeout(function() {
//WIN!  main priority
        //win t3 taking BR after taking Cen and TL
        if (tl.textContent == player2.Icon && cen.textContent == player2.Icon && br.textContent == "") {
            game.setCell(2, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        } 
        //win at TL after CEN and BR
        if (cen.textContent == player2.Icon && br.textContent == player2.Icon && tl.textContent == "") {
            game.setCell(0, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 
        //win at TM after CEN and BM
        if (cen.textContent == player2.Icon && bm.textContent == player2.Icon && tm.textContent == "") {
            game.setCell(0, 1, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 
        //win at ML after CEN and MR
        if (cen.textContent == player2.Icon && mr.textContent == player2.Icon && ml.textContent == "") {
            game.setCell(1, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 
        //win at MR after CEN and ML
        if (cen.textContent == player2.Icon && ml.textContent == player2.Icon && mr.textContent == "") {
            game.setCell(1, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        }  
        //win at ML after TL and BL
        if (tl.textContent == player2.Icon && bl.textContent == player2.Icon && ml.textContent == "") {
            game.setCell(1, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        }     
        //win at TR after Cen and BL
        if (cen.textContent == player2.Icon && bl.textContent == player2.Icon && tr.textContent == "") {
            game.setCell(0, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        }    
        //win at BM after BL and BR
        if (bl.textContent == player2.Icon && br.textContent == player2.Icon && bm.textContent == "") {
            game.setCell(2, 1, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        }   
        //win at BM after TM and CEN
        if (cen.textContent == player2.Icon && tm.textContent == player2.Icon && bm.textContent == "") {
            game.setCell(2, 1, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 
        //win at MR after BR and TR
        if (br.textContent == player2.Icon && tr.textContent == player2.Icon && mr.textContent == "") {
            game.setCell(1, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 
        //win at TM afte TL and TR
        if (tl.textContent == player2.Icon && tr.textContent == player2.Icon && tm.textContent == "") {
            game.setCell(0, 1, player2.Icon)        
            pointer++;
            gameState(); 
            return 
        } 

// Block opponent main priortiy unable to win

        //top row block
        if (tl.textContent == player1.Icon && tm.textContent == player1.Icon && tr.textContent == "") {
            game.setCell(0, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (tm.textContent == player1.Icon && tr.textContent == player1.Icon && tl.textContent == "") {
            game.setCell(0, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (tr.textContent == player1.Icon && tl.textContent == player1.Icon && tm.textContent == "") {
            game.setCell(0, 1, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        //diag block TL to BR
        if (tl.textContent == player1.Icon && cen.textContent == player1.Icon && br.textContent == "") {
            game.setCell(2, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }

        if (br.textContent == player1.Icon && cen.textContent == player1.Icon && tl.textContent == "") {
            game.setCell(0, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        // L column block
        if (tl.textContent == player1.Icon && ml.textContent == player1.Icon && bl.textContent == "") {
            game.setCell(2, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (bl.textContent == player1.Icon && ml.textContent == player1.Icon && tl.textContent == "") {
            game.setCell(0, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (tl.textContent == player1.Icon && bl.textContent == player1.Icon && ml.textContent == "") {
            game.setCell(1, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        // mid row block
        if (ml.textContent == player1.Icon && cen.textContent == player1.Icon && mr.textContent == "") {
            game.setCell(1, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (mr.textContent == player1.Icon && cen.textContent == player1.Icon && ml.textContent == "") {
            game.setCell(1, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        // diag block bl to tr
        if (bl.textContent == player1.Icon && cen.textContent == player1.Icon && tr.textContent == "") {
            game.setCell(0, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (tr.textContent == player1.Icon && cen.textContent == player1.Icon && bl.textContent == "") {
            game.setCell(2, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }  
        // bottom row block
        if (bl.textContent == player1.Icon && bm.textContent == player1.Icon && br.textContent == "") {
            game.setCell(2, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (br.textContent == player1.Icon && bm.textContent == player1.Icon && bl.textContent == "") {
            game.setCell(2, 0, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (br.textContent == player1.Icon && bl.textContent == player1.Icon && bm.textContent == "") {
            game.setCell(2, 1, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        // r column block
        if (br.textContent == player1.Icon && mr.textContent == player1.Icon && tr.textContent == "") {
            game.setCell(0, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (tr.textContent == player1.Icon && mr.textContent == player1.Icon && br.textContent == "") {
            game.setCell(2, 2, player2.Icon);
            pointer++;
            gameState(); 
            return
        }    
        if (br.textContent == player1.Icon && tr.textContent == player1.Icon && mr.textContent == "") {
            game.setCell(1, 2, player2.Icon);
            pointer++;
            gameState();
            return
        }
        // Mid Column block
        if (tm.textContent == player1.Icon && cen.textContent == player1.Icon && bm.textContent == "") {
            game.setCell(2, 1, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        if (bm.textContent == player1.Icon && cen.textContent == player1.Icon && tm.textContent == "") {
            game.setCell(0, 1, player2.Icon);
            pointer++;
            gameState(); 
            return
        }
        
//take a  center or a corner if no need to block

        //Take Center if it is open possible 1st turn
        if (cen.textContent == "") {
        game.setCell(1, 1, player2.Icon)        
        pointer++;
        gameState(); 
        return        
        } 
        //if player1 took a corner take opposite corner
        if (tl.textContent == player1.Icon && br.textContent == ""){
            game.setCell(2, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }
        if (tr.textContent == player1.Icon && bl.textContent == ""){
            game.setCell(2, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }
        if (bl.textContent == player1.Icon && tr.textContent == ""){
            game.setCell(0, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }
        if (br.textContent == player1.Icon && tl.textContent == ""){
            game.setCell(0, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }
//if opponet controls two corners take an edge ml or tm
        if (tr.textContent == player1.Icon && bl.textContent == player1.Icon && ml.textContent == ""){
            game.setCell(1, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }

        if (br.textContent == player1.Icon && tl.textContent == player1.Icon && ml.textContent == ""){
            game.setCell(1, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return  
        }
        //take TL if possible
        if (tl.textContent == "") {
            game.setCell(0, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take BL if possible  
        if (bl.textContent == "") {
            game.setCell(2, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take BR if possible
        if (br.textContent == "") {
            game.setCell(2, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take TR if possible
        if (br.textContent == "") {
            game.setCell(0, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take ML
        if (ml.textContent == "") {
            game.setCell(1, 0, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take MR
        if (mr.textContent == "") {
            game.setCell(1, 2, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
        //take BM
        if (bm.textContent == "") {
            game.setCell(2, 1, player2.Icon)        
            pointer++;
            gameState(); 
            return     
        }
              
    }, 200);    
}  

function gameState() {
    let row;
    let col;
    let cellValue;
    let aiBox = document.getElementById("aiBox");
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
    if (whoseTurn() == "O" && aiBox.checked){        
        AIturn();
    }
}        



function newGame(button) { 
    pointer = 1;
    let aiBox = document.getElementById("aiBox");
    let p1Name = document.getElementById("playerName1");
    let p2Name = document.getElementById("playerName2");
    
    
  
    document.querySelectorAll('.card').forEach(card => {
        card.textContent = '';
        card.style.backgroundColor = "black";
        card.style.animation = "none";
        document.getElementById("status").style.display = "none";
      });
    game = gameArray();  
    whoseTurn();    
    if (aiBox.checked && p2Name.value == "") {
        p2Name.value = "T-1.000";
    }
    if (p2Name.value == ""){
        p2Name.value = "Karen";
    }
    if (p1Name.value == ""){
        p1Name.value = "Chad";
    }
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
        if (!this.disabled) {
            // Disable all cards to prevent multiple fast clicks
            document.querySelectorAll('.card').forEach(card => {
                card.disabled = true;
            });
            clicked(this.id);
            // Re-enable cards after delay
            setTimeout(function() {
                document.querySelectorAll('.card').forEach(card => {
                    card.disabled = false;
                });
            }, 500);
        }
    });
});

let foo = document.getElementById('status');
foo.addEventListener('click', function() {  
    newGame(this);    
  });



