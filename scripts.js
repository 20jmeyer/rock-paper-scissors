
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playerPlay(guess) {
    switch (guess) {
        case "rock":
        case "paper":
        case "scissors":
            return guess;
        default:
            return "Invalid guess";

    }
}
//Returns
function playRound(guess) {
    let computerGuess = computerPlay();
    let playerGuess = playerPlay(guess);
    console.log(guess);
    console.log(computerGuess);
    if (playerGuess != "Invalid guess") {
        return winningHand(playerGuess, computerGuess);
    }
}

//Returns 1 if the player wins, 0 otherwise
function winningHand(player, computer) {
    const gameResult = document.createElement('div');
    const newScore = document.querySelector('.score');
    if (player === computer) {
        gameResult.textContent="It's a tie!";
        results.appendChild(gameResult);
        return 2;
    }
    switch (player) {
        case "rock":
            if (computer === "scissors") {
                gameResult.textContent="You win! Rock beats scissors";
                results.appendChild(gameResult);
                console.log("You win! Rock beats scissors");
                wins++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            else {
                gameResult.textContent="You lose!";
                results.appendChild(gameResult);
                console.log("You lose!")
                losses++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            break;
        case "paper":
            if (computer === "rock") {
                gameResult.textContent="You win! Paper beats rock";
                results.appendChild(gameResult);
                console.log("You win! Paper beats rock");
                wins++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            else {
                gameResult.textContent="You lose!";
                results.appendChild(gameResult);
                console.log("You lose!");
                losses++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            break;
        case "scissors":
            if (computer === "paper") {
                gameResult.textContent="You win! Scissors beats paper";
                results.appendChild(gameResult);
                console.log("You win! Scissors beats paper");
                wins++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            else {
                gameResult.textContent="You lose!";
                results.appendChild(gameResult);
                console.log("You lose!");
                losses++;
                newScore.textContent=`${wins} wins, ${losses} losses`;
            }
            break;
        default:
            return;
    }

}

let wins = 0;
let losses = 0;
let gameEnded = 0;

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const score = document.createElement("div");
score.className="score";
let runningScore = `${wins} wins, ${losses} losses`;
score.textContent=runningScore;
results.appendChild(score);

buttons.forEach(button => button.addEventListener("click", e => {
    if (wins < 5 &&losses<5) {
        playRound(e.target.value);
        if (wins==5){
            const win = document.createElement('div')
            win.textContent="You won the match";
            results.appendChild(win);
        }
        else if (losses==5){
            const loss = document.createElement('div');
            loss.textContent="You lost the match";
            results.appendChild(loss);
        }
    }
   
}));




