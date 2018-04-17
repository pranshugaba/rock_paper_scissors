function computerPlay () {
    computerMove = Math.floor(Math.random() * 3);
    return computerMove
}


function playerPlay() {
    var playerMove = prompt("Play your turn");
    if (playerMove.toLowerCase() === 'rock') {
        return 0;
    }
    else if (playerMove.toLowerCase() === 'scissors') {
        return 1;
    }
    else if (playerMove.toLowerCase() === 'paper') {
        return 2;
    } else {
        return 3;
    }
}

function playRound (playerSelection, computerSelection) {
    while ( !(playerSelection in [1, 2, 3])) {
        console.log("Not valid. Please try again. Play 'rock', 'paper', or 'scissors'.");
        playerSelection = playerPlay();
    }
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        return 0;
    }
    else if (playerSelection === 0) {
        if (computerSelection === 1) {
            console.log("You win! Rock beats scissors.");
            return 1;
        }
        else {
            console.log("You lose. Rock is beaten by paper.");
            return -1;
        }
    }
    else if (playerSelection === 1) {
        if (computerSelection === 0) {
            console.log("You lose. Scissors is beaten by rock.");
            return -1;
        }
        else {
            console.log("You win! Scissors beats paper.");
            return 1;
        }
    }
    else {
        if (computerSelection === 0) {
            console.log("You win! Paper beats rock.");
            return 1;
        }
        else {
            console.log("You lose! Paper is beaten by scissors");
            return -1;
        }
    }
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        playerSelection = playerPlay();
        computerSelection = computerPlay();
        score = playRound(playerSelection, computerSelection)

        if (score === 1) {
            playerScore += 1;
        }
        else if (score === -1) {
            computerScore += 1;
        }
        console.log("You have %d points", playerScore);
        console.log("Computer has %d points", computerScore);
    }

    if (playerScore === 5) {
        return "Congrats! You reached 5 points first!";
    }
    else {
        return "Sorry, the computer reached 5 points first. Better luck next time.";
    }
}

console.log(game());
