let playerChoice;


let computerNum;
let compSelection;

//      Rock = 0
//     Paper = 1
// Scissor's = 2

function computerPlay(){
    computerNum = Math.floor(Math.random(3) * 3);
    
    //console.log(computerNum);

    if(computerNum === 0){
        compSelection = "Rock";

        console.log(compSelection);
    }else if(computerNum === 1){
        compSelection = "Paper";

        console.log(compSelection);
    }else if(computerNum === 2){
        compSelection = "Scissors";

        console.log(compSelection);
    }else{
        console.log("Number error generated outside 0-2")
    }
}
function playerSelection(){
    playerChoice = prompt("  Choose your Weapon! \nRock, Paper , or Scissors!")
    playerChoice = capitalize(playerChoice);

    if(playerChoice === "Rock"){
        console.log("You selected " + playerChoice)
    }else if(playerChoice === "Paper"){
        console.log("You selected " + playerChoice)
    }else if(playerChoice === "Scissors"){
        console.log("You selected " + playerChoice)
    }else{
        console.log("Your selection is invalid, please select Rock, Paper, or Scissors")
        playerSelection();
    }

    //console.log(playerChoice + " is playerSelection output");
}
function capitalize(string){
    let first = string.charAt(0).toUpperCase();
    let last = string.slice(1) // + string.charAt(1).toLowerCase();
    let lastLower = last.toLowerCase();
    
    console.log(first + lastLower);
    return(first + lastLower);
}
function lastLetter(string){
    let letter = string.slice(-1);

    console.log(letter)
}

playerSelection();



/*for(i = 0; i <= 20; i++){
    computerPlay();
    console.log(computerNum);
}*/
