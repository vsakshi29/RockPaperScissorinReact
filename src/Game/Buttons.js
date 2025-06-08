// function Buttons(){
//     return(
// <div>
//    <button onclick="changeGameStatusForRock()" type = "button" class="primary-button"><span>Rock</span></button>
//    <button onclick="gameStatusChangeForPaper()" type = "button" class = "primary-button"><span>Paper</span></button>
//    <button onclick="changeStatusGameScissor()" type = "button" class="primary-button"><span>Scissors</span></button>
//   <br/>
//   <br/>
// </div>
//     );
// }

// export default Buttons;



function ReusableButton({callbackFunction, buttonTitle}){
    return(
       <button onClick={callbackFunction} type = "button" class="primary-button"><span>{buttonTitle}</span></button>
    );
}


export default ReusableButton;