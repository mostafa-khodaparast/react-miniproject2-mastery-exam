const ReadyToStart = ({ questionNUm, dispatch }) => {
    return (
        <div className="start">
            <h2>Wellcome to React quiz</h2>
            <h3>{questionNUm} questions to test your React mastery</h3>
            <button className="btn btn-ui" onClick={() => dispatch({ type: "startQuiz" })}> Let's Go</button>
        </div>
    )
}

export default ReadyToStart