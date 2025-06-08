import HeaderTitleComponent from "./Game/HeaderTitleComponent";
import HeaderSubTitleComponent from "./Game/HeaderSubTitleComponent";
import ScoreComponent from "./Game/ScoreComponent";
import ResetButton from "./Game/ResetButton";
import GameCount from "./Game/GameCount";
import ReusableButton from "./Game/Buttons";
import {changeGameStatusForRock} from "./Game/changeGameStatusForRock";
import {changeGameStatusForPaper}  from "./Game/changeGameStatusForRock";
import {changeGameStatusForScissor} from "./Game/changeGameStatusForRock";
import { useState } from "react";
import GameStatus from "./Game/GameStatus";
import { resetGame } from "./Game/changeGameStatusForRock";


function Game(){

  const[gameCount,setGameCount] = useState(0)  // State 
  const[gameStatus, setGameStatus] = useState("Start Game")
  const[aiWinCount, setAiWinCount] = useState(0)
  const[humanWinCount, setHumanWinCount] = useState(0)

    return(
     <div>
      {/* Header Title  */}
      <HeaderTitleComponent/>

      {/* Header Subtitle */}
      <HeaderSubTitleComponent/>

      {/* Score Component */}
      <ScoreComponent aiWinCount={aiWinCount} humanWinCount={humanWinCount}/>

      {/*Game-Score component */}
      <GameStatus gameStatus = {gameStatus}/>

      {/*Buttons */}
      <ReusableButton callbackFunction={() => {changeGameStatusForRock(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount)}} buttonTitle={"Rock"}/>

      {/*Buttons */}
      <ReusableButton callbackFunction={() => {changeGameStatusForPaper(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount)}} buttonTitle={"Paper"}/>

      {/*Buttons */}
      <ReusableButton callbackFunction={() => {changeGameStatusForScissor(setGameStatus, setGameCount, setAiWinCount,setHumanWinCount)}} buttonTitle={"Scissors"}/>

      <br/>
      <br/>
      {/*Reset-Game  */}
      <ResetButton callbackFunction = {() => {resetGame(setGameCount, setGameStatus, setAiWinCount, setHumanWinCount)}}/>

      {/*Game-Count */}
      <GameCount gameCount = {gameCount}/>
  </div>
);

}
export default Game;