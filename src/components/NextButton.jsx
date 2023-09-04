const NextButton = ({ dispatch, totalQuestions, currentQuestion }) => {
    if (currentQuestion < totalQuestions) {
        return (
            <button className="btn" onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
        )
    }else{
        return (
            <button className="btn" onClick={() => dispatch({ type: "quizFinish" })}>Show Result</button>
        )
    }

}

export default NextButton