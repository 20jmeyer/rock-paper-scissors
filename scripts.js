
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
        return winningHand(playerGuess,computerGuess);
    }
}

//Returns 1 if the player wins, 0 otherwise
function winningHand(player,computer){
    if (player===computer){
        return "It's a tie!";
    }
    switch (player){
        case "rock":
            if (computer==="scissors"){
                return "You win!";
            }
            else {
                return "You lose!";
            }
        case "paper":
            if (computer==="rock"){
                return "You win!";
            }
            else {
                return "You lose!";
            }
        case "scissors":
            if (computer==="paper"){
                return "You win!";
            }
            else return "You lose!";
        default:
            return;
    }
}
console.log(winningHand("rock","scissors"));