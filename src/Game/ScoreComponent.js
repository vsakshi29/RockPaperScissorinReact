function ScoreComponent({aiWinCount, humanWinCount}){
    return(
    <div class="score-section">
        <div class="player">
            <div class="score" id = "human-wins">{humanWinCount}</div>
            <div class="label">Human</div>
        </div>
        <div class="divider"></div>
        <div class = "vertical-line"></div>
        <div class="player">
            <div class="score" id = "ai-wins">{aiWinCount}</div>
            <div class="label">AI</div>
        </div>
    </div>
    )
}

export default ScoreComponent;