const SECENDS_PER_QUESTION = 30

export const initState = {
    questions: [],
    status: 'ready',          //ready, error, loading, active, finished
    currentQuestionIndex: 0,
    answer: null,
    points: 0,
    numOfCorrectAnswers: 0,
    timerRemainedSecond: null
}


export const quizReducer = (state, action) => {
    switch (action.type) {
        case "dataRecieved":
            return {
                ...state,
                questions: action.payload,
                status: "ready"
            }
        case "dataFailed":
            return {
                ...state,
                status: "error"
            }
        case "startQuiz":
            return {
                ...state,
                status: "active",
                timerRemainedSecond: state.questions.length * SECENDS_PER_QUESTION
            }
        case "nextQuestion":
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1,
                answer: null,
            }
        case "newAnswer":
            const currentQuestion = state.questions[state.currentQuestionIndex]
            return {
                ...state,
                answer: action.payload,
                points: action.payload === currentQuestion.correctOption ? state.points + currentQuestion.points : state.points,
                numOfCorrectAnswers: action.payload === currentQuestion.correctOption ? state.numOfCorrectAnswers + 1 : state.numOfCorrectAnswers
            }
        case "quizFinish":
            return {
                ...state,
                status: "finished"
            }
        case "restart":
            return {
                ...initState,
                questions: state.questions,
                status: 'ready'
            }
        case "timer":
            return {
                ...state,
                timerRemainedSecond: state.timerRemainedSecond - 1,
                status: state.timerRemainedSecond === 0 ? "finished" : state.status
            }
        default:
            throw new Error("unknown action recieved")
    }
}
