import { useEffect } from "react"

const Timer = ({ timerRemainedSecond, dispatch }) => {

    const mins = Math.floor(timerRemainedSecond / 60)
    const secs = Math.floor(timerRemainedSecond % 60)

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: "timer" })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [dispatch])

    return (
        <div className="timer">{mins< 10 ? `0${mins}` : mins}:{secs <10 ? `0${secs}` : secs}</div>
    )
}

export default Timer