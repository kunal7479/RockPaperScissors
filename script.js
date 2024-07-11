let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let userScoreId = document.querySelector("#user-score");
let compScoreId = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3);

    return options[index];
}

const gameDraw = () => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {
        console.log("User Win");
        msg.innerText = `User Win. ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreId.innerText = userScore;
    }
    else {
        console.log("user Loose");
        msg.innerText = `User Loose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreId.innerText = compScore;
    }
}

const playGame = (userChoice) => {

    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp -paper scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //comp - rock scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log(choice);
        playGame(userChoice);
    })
})
