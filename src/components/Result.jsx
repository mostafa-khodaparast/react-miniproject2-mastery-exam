const Result = ({ points, maxPoints, numOfCorrectAnswers, totalQuestions, dispatch }) => {
    const pointPercentage = Math.ceil((points / maxPoints) * 100)
    const numPercentage = Math.ceil((numOfCorrectAnswers / totalQuestions) * 100)
    return (
        <>
            <p className="result">
                Points: <em>{points}</em> out of: {maxPoints} ({pointPercentage}%)<br />
                correct answers: <em>{numOfCorrectAnswers}</em> out of: {totalQuestions} ({numPercentage}%)
            </p>
            <button className="btn" onClick={() => dispatch({ type: "restart" })}>Restart</button>
        </>
    )
}

export default Result