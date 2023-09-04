import { useEffect, useReducer } from "react"
import { quizReducer, initState } from "./reducers/quizReducer"

import Header from "./components/Header"
import Main from "./components/Main"
import Loader from "./components/Loader"
import Error from "./components/Error"
import ReadyToStart from "./components/ReadyToStart"
import Question from "./components/Question"
import Progress from "./components/Progress"
import NextButton from "./components/NextButton"
import Result from "./components/Result"
import Timer from "./components/Timer"


const App = () => {

  const [state, dispatch] = useReducer(quizReducer, initState)

  useEffect(() => {
    fetch("http://localhost:9001/questions")
      .then(res => res.json())
      .then(data => dispatch({ type: "dataRecieved", payload: data }))
      .catch(err => dispatch({ type: "dataFailed" }))
  }, [])


  const maxPoints = state.questions.reduce((prev, curr) => prev + curr.points, 0)


  return <div className="app">
    <Header />
    <Main>
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "ready" && <ReadyToStart questionNUm={state.questions.length} dispatch={dispatch} />}
      {state.status === "active" &&
        <>
          <Progress
            totalQuestions={state.questions.length}
            currentQuestion={state.currentQuestionIndex + 1}
            points={state.points}
            maxPoints={maxPoints}
          />
          <Question
            question={state.questions[state.currentQuestionIndex]}
            answer={state.answer}
            dispatch={dispatch}
          />
          <NextButton
            dispatch={dispatch}
            totalQuestions={state.questions.length}
            currentQuestion={state.currentQuestionIndex + 1}
          />
          <Timer timerRemainedSecond={state.timerRemainedSecond} dispatch={dispatch} />
        </>}
      {state.status === "finished" &&
        <Result
          points={state.points}
          maxPoints={maxPoints}
          numOfCorrectAnswers={state.numOfCorrectAnswers}
          totalQuestions={state.questions.length}
          dispatch={dispatch}
        />}

    </Main>
  </div>
}

export default App