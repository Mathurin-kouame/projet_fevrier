import { useState, useEffect } from 'react'
import viteLogo from './assets/react.svg'
import './App.css'
import Chrono from './Components/Chrono'
import QuestionCard from './Components/QuestionCard'

let Quiz = {
  questions :[
    {question:"qu'est ce que JavaScript?",response:{"un langage":false, "un framework":false, "un langage de programmation": true}},
    {question:"qu'est ce que React?",response:{"un langage":false, "un framework":true, "une ligne de code": false}},
    {question:"qu'est ce que NodeJS?",response:{"un langage":false, "un environnement de developpement":true, "une chaine de caractère": false}},
    {question:"qu'est ce que React Native?",response:{"un langage":false, "un sdk":true, "un tableau": false}},
    {question:"qu'est ce que Three.JS?",response:{"un langage":false, "un framework":false, "une librairie": true}},
],
Points:5,
time : 5

}

function App() {
  const [count, setCount] = useState(0)
  const [Answers, setAnswers] = useState({})
  const [GameOver, setGameOver]= useState(false)

  useEffect(()=>{},[Answers])
  function UpdateAnswer(question,reponse){

    Answers[question]= reponse
    setAnswers({...Answers})
  }

  function submitQuizz() {
    setGameOver(true)
    gestResults()
  }
 function getReset(){
  for (let question  in Answers) {
   let maValeur = Answers[question]
   let recup= Quiz.questions.find((f)=>f.question == question)
   let abc = Object.entries(recup.response).filter(p=>p[1]).map((e) =>e[0])

  }
 }
  return GameOver?<div>
    <p>nombre de question = 5</p>
    <p>nombre de réponse = 5</p>
    <p>Total des points = 5</p>
  </div>
    :<>
      <Chrono time={Quizz.time} finQuizz={submitQuizz} questionLength={quiz.question.length} answerLength={Object.values(Answers).filter((e)=>e.lengthb > 0).length}/>
      <div className='cardQuestion'>
        {
          Quizz.questions.map((a)=> <QuestionCard question={a.question} responses={a.response} update={UpdateAnswer} userResponse={Answers[a.question]}/>)
        }
      </div>
        

    </>

  
}



export default App
