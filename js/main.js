let playerChoice;
let playerWin = 0;

let computerNum;
let computerChoice;
let computerWin = 0;

let gameRounds = 0;
let roundWin = 0;

//      Rock = 0
//     Paper = 1
// Scissor's = 2

function computerSelection(){
    computerNum = Math.floor(Math.random(3) * 3);

    if(computerNum === 0){
        computerChoice = "Rock";

        console.log("The computer selected " + computerChoice);
    }else if(computerNum === 1){
        computerChoice = "Paper";

        console.log("The computer selected " + computerChoice);
    }else if(computerNum === 2){
        computerChoice = "Scissors";

        console.log("The computer selected " + computerChoice);
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
    }else if(playerChoice === "Scissor's"){
        playerChoice = "Scissors";
        console.log("You selected " + playerChoice)
    }else{
        console.log("Your selection is invalid, please select Rock, Paper, or Scissors")
        playerSelection();
    }
}
function capitalize(string){
    let first = string.charAt(0).toUpperCase();
    let last = string.slice(1) // + string.charAt(1).toLowerCase();
    let lastLower = last.toLowerCase();
    
    //console.log(first + lastLower);
    return(first + lastLower);
}

function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        console.log("This round is a tie!");

    }else if(playerChoice === "Rock" && computerChoice === "Scissors"){
        console.log("Rock SMASH'S Scissors.\nYou WIN this round!");
        playerWin = ++playerWin;

    }else if(playerChoice === "Paper" && computerChoice === "Scissors"){
        console.log("Paper is SHREDDED by Scissors.\nYou LOSE this round!");
        computerWin = ++computerWin;

    }else if(playerChoice === "Rock" && computerChoice === "Paper"){
        console.log("Rock is SMOTHERED by Paper.\nYou LOSE this round!");
        computerWin = ++computerWin;

    }else if(playerChoice === "Scissors" && computerChoice === "Paper"){
        console.log("Scissors SHREDS Paper.\nYou WIN this round!");
        playerWin = ++playerWin;

    }else if(playerChoice === "Scissors" && computerChoice === "Rock"){
        console.log("Rock SMASH'S Scissors.\nYou LOSE this round!");
        computerWin = ++computerWin;

    }else if(playerChoice === "Paper" && computerChoice === "Rock"){
        console.log("Rock is SMOTHERED by Paper.\nYou WIN this round!");
        playerWin = ++playerWin;
    }
    console.log("************Scores**************")
    console.log("***Player:" + playerWin + "  **** Computer:" + computerWin + " ***")
    console.log("********************************")
    console.log("***First to " + gameRounds + " wins the game! ***\n\n")
}

function Game(){
    gameInput = prompt("How many rounds would you like to play?");
    gameRounds = Number(gameInput);

    if(isNaN (gameRounds)){
        console.log(gameInput + " IS NOT A NUMBER!");
        Game();
    }

    for (i = 0; i >= roundWin;){
        playerSelection();
        computerSelection();
        playRound(playerChoice, computerChoice);
        
        if(gameRounds === playerWin/* || (gameRounds > computerWin)*/){
            roundWin = 1;
        }else if (gameRounds === computerWin){
            roundWin = 1;
        }else{
            roundWin = 0;
        }
    }

    if(playerWin > computerWin){
        console.log("Congratulations! You're smarter than a 5th grader!");
    }else if(playerWin === computerWin){
        console.log("oh no! It's a tie! Better luck next time sucker!")
    }else{
        console.log("oh no! YOU LOST! Guess the computer is smarter than you!")
    }
}

Game();
