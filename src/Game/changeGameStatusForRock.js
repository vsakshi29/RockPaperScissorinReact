var choices = ["Rock", "Paper", "Scissor"]
var aiChoice = "Rock"
var humanChoice = "Rock"

export function changeGameStatusForRock(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount) {
    setGameCount(prevCount => prevCount + 1)
    console.log("Status Change for Rock.")
    humanChoice = "Rock"
    checkForWinner(setGameStatus, setAiWinCount,setHumanWinCount)
}

export function changeGameStatusForPaper(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount) {
     setGameCount(prevCount => prevCount + 1)
    console.log("Status change for Paper.")
    humanChoice = "Paper"
    checkForWinner(setGameStatus, setAiWinCount,setHumanWinCount)
}

export function changeGameStatusForScissor(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount) {
     setGameCount(prevCount => prevCount + 1)
    console.log("Status change for Scissor.")
    humanChoice = "Scissor"
    checkForWinner(setGameStatus, setAiWinCount,setHumanWinCount)
}

function checkForWinner(setGameStatus, setAiWinCount,setHumanWinCount) {
    randomChoiceForAI()
    console.log(`AI chose: ${aiChoice}`)
    console.log(`Human chose: ${humanChoice}`)

    if (aiChoice === humanChoice) {
        setGameStatus("Draw")
    } else if (
        (aiChoice === "Rock" && humanChoice === "Scissor") ||
        (aiChoice === "Scissor" && humanChoice === "Paper") ||
        (aiChoice === "Paper" && humanChoice === "Rock")
    ) {
        setGameStatus("AI Wins")
        setAiWinCount(prevCount => prevCount + 1)
    } else {
        setGameStatus("Human Wins")
        setHumanWinCount(prevCount => prevCount + 1)
    }
}

function randomChoiceForAI() {
    let index = Math.floor(Math.random() * choices.length)
    aiChoice = choices[index]
}


export function resetGame(setGameCount, setGameStatus, setAiWinCount, setHumanWinCount){
    setAiWinCount(0)
    setHumanWinCount(0)
    setGameStatus("Game Start")
    setGameCount(0)
}