function ResetButton ({callbackFunction}) {
 return(
    <input onClick= {callbackFunction} type="reset" name="reset-button" id="reset"/>
 );
}

export default ResetButton;