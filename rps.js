
let x;
let  num = 0;


function computerChoice() {                    // function randomly generates a number of 1,2 or 3
  x = Math.ceil(Math.random() * 3);            // x gets randomly generated number
}

function rock() {                              // When user chooses rock
  num = 1;                                     //  num gets assigned a value of 1
  if(num === x) {                              // if num === x user value and computer value are equal it's a draw
    alert("computer chose rock Draw !!");      // print draw
    computerChoice();                          // randomly geneate a new computer number
    return false;                              // exit function so user can play again
    }
  
  if(x === 2) {                                // if computer value is 2
    alert("computer chose paper YOU LOSE !!"); // paper beats rock so user loses
    computerChoice();                          // generate new random number 
    return false;                              // exit function so user can play again
    }
  
  if(x === 3) {
    alert("computer chose scissors YOU WIN !!");
    computerChoice();
    return false;
    }
}
   
function paper() {
  num = 2;
  if(num === x) {
    alert("computer chose paper DRAW !!");
    computerChoice();
    return false
    }
   
  if(x === 1) {
    alert("computer chose rock YOU WIN !!");
    computerChoice();
    return false;
    }
  
    if(x === 3) {
    alert("computer chose scissors YOU LOSE !!");
    computerChoice();
    return false;
    }
}
   
function scissors() {
  num = 3;
  if(num === x) {
    alert("computer chose scissors DRAW !!");
    computerChoice();
    return false;
    }
    
  if(x === 2) {
    alert("computer chose paper YOU WIN !!");
    computerChoice();
    return false;
    }
  if(x === 1) {
    alert("computer chose rock YOU LOSE !!");
    computerChoice();
    return false;
    }
}
   