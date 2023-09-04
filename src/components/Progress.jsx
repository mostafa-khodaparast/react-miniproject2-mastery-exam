const Progress = ({ currentQuestion, totalQuestions, points, maxPoints }) => {
    return (
        <header className="progress">
            <p>Question: {currentQuestion} / {totalQuestions}</p>
            <p>points: {points} / {maxPoints} </p>
        </header>
    )
}

export default Progress