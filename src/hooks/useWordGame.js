import {useState, useEffect, useRef} from "react"

function useWordGame() {
    const [text, setText] = useState("")
    const [startingTime, setStartingTime] = useState('10')
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textBoxRef = useRef(null)
    
    function handleTextChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function handleTimeChange(e) {
        const {value} = e.target
        setStartingTime(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(startingTime)
        setText("")
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])
    
    return {textBoxRef, handleTextChange, text, isTimeRunning, timeRemaining, startGame, wordCount, startingTime, handleTimeChange}
}

export default useWordGame
