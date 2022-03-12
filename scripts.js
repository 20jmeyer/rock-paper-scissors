
function computerPlay(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playerPlay(){
    let turn = window.prompt("Rock, paper, or scissors?");
    turn=turn.trim().toLowerCase();
    switch(turn){
        case "rock":
        case "paper":
        case "scissors":
            return turn;
        default:
            return "Invalid guess";

    }
}
//Returns
function playRound(){
    let computerGuess = computerPlay();
    let playerGuess = playerPlay();
    if (playerGuess != "Invalid guess"){
        if (computerGuess==playerGuess){
            return "It's a tie!";
        }
        else return winningHand(playerGuess,computerGuess);
    }
}

//Returns 1 if the player wins, 0 otherwise
function winningHand(player,computer){
    switch (player){
        case "rock":
            if (computer=="paper"){
                return 1;
            }
            else {
                return 0;
            }
        case "paper":
        case "scissors":
        default:
            return;
    }
}
console.log(playerPlay());
console.log(computerPlay());