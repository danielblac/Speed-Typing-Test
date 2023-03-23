import useWordGame from "./hooks/useWordGame"

function App() {
    const {
        textBoxRef, 
        handleTextChange, 
        handleTimeChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        wordCount,
        startingTime
    } = useWordGame()
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleTextChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h3>Set Time</h3>
            <input 
                type="number"
                onChange={handleTimeChange}
                value={startingTime}
                disabled={isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
