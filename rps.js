let x;
let computersChoice = 0;

function computerChooses() {                    // function randomly generates a number of 1,2 or 3
  x = Math.ceil(Math.random() * 3);           // x gets randomly generated number
  if (x === 1)
    computersChoice = "rock";
  if (x === 2)
    computersChoice = "paper";
  if (x === 3)
    computersChoice = "scissors";
}

function rock() {  
  let userChoice = "rock";         
  if(userChoice === computersChoice) {
    let result = "DRAW";                              
    alertString(result);
    }
  else if(computersChoice === "paper") {      
    let result = "You Lose"; 
    alertString(result);                 
    }
  else if(computersChoice === "scissors") {
    let result = "You win";
    alertString(result);
    }
}
 
function paper() {
  let userChoice = "paper";         

  if(userChoice === computersChoice) {                           
    alertString("Draw");
    }
  else if(computersChoice === "rock") {       
    alertString("You Win");                 
    }
  else if(computersChoice === "scissors") {
    alertString("You Lose");
    }
}
   
function scissors() {
  let userChoice = "scissors";         

  if(userChoice === computersChoice) {                          
    alertString("Draw");
    }
  else if(computersChoice === "rock") {       
    alertString("You Lose");                 
    }
  else if(computersChoice === "paper") {
    alertString("You Win");
    }
  }

function alertString(outcome) {
  alert("Computer chose " + computersChoice +" " + outcome);
  computerChooses();
  }