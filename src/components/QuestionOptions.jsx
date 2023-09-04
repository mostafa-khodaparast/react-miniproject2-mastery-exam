

const QuestionOptions = ({ question, answer, dispatch }) => {
    const hasAnswered = answer !== null

    const distractors = question?.options.map((option, index) => {
        return <button
            className={`btn btn-option ${hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""}`}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            key={option}
        >
            {option}
        </button>
    })

    return (
        <div className="options">
            {distractors}
        </div>
    )
}

export default QuestionOptions