
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
        console.log("It's a tie!");
        return 2;
    }
    switch (player){
        case "rock":
            if (computer==="scissors"){
                console.log("You win! Rock beats scissors");
                return 1;
            }
            else {
                console.log("You lose!")
                return 0;
            }
        case "paper":
            if (computer==="rock"){
                console.log("You win! Paper beats rock");
                return 1;
            }
            else {
                console.log("You lose!");
                return 0;
            }
        case "scissors":
            if (computer==="paper"){
                console.log("You win! Scissors beats paper");
                return 1;
            }  
            else {
                console.log("You lose!");
                return 0;
            }
        default:
            return;
    }
}

function game(){
    let score = 0;
    for (let i=0;i<5;i++){
        let result=playRound();
        if (result==1){
            score+=1;
        }
    }
    if (score>=3){
        console.log("Congratulations, you win!");
    }
    else {
        console.log("Sorry, you lose.")
    }

}

game();