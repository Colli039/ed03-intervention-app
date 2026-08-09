import { createContext, useState, useContext, useEffect } from 'react'

const QuestionsContext = createContext()

export const useQuestionsContext = () => useContext(QuestionsContext)

export const QuestionsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  //Main Flow States
  const [secondChance, setSecondChance] = useState(1)
  const [testType, setTestType] = useState('')
  const [questionNumber, setQuestionNumber] = useState(0)
  const [quizQuestionNumber, setQuizQuestionNumber] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState('')
  const [questionSet, setQuestionSet] = useState([])
  const [quizSet, setQuizSet] = useState(0)
  const [score, setScore] = useState(0)
  const [disableChoices, setDisableChoices] = useState(false)

  const getScore = () => {
    return score;
  }

  const addScore = () => {
    // const newScore = score + 1
    setScore(score => score + 1)
  }

  const nextQuestion = () => {
    resetChoices()
    setQuestionNumber(questionNumber => questionNumber + 1)
  }

  const nextSet = () => {
    resetChoices()
    setQuestionNumber(0)
    setQuizQuestionNumber(quizQuestionNumber => quizQuestionNumber+1)
    setQuizSet(quizSet => quizSet+1)
  }

  const resetChoices = () => {
    console.log('reset choices');
    
    setSecondChance(1)
    setSelectedChoice('')
    setDisableChoices(false)
  }

  const prevQuestion = () => {
    setQuestionNumber(questionNumber => questionNumber - 1)
  }

  const wrongAnswer = choiceIndex => {
    setSelectedChoice(choiceIndex)

    if (secondChance > 0) {
      setSecondChance(0)
    } else {
      return false
    }
    return true
  }


  const value = {
    questionNumber,
    questionSet,
    setQuestionSet,
    nextQuestion,
    prevQuestion,setQuestionNumber,
    wrongAnswer,
    loading,setLoading,
    secondChance,
    setQuestionNumber,
    addScore,
    score,
    setScore,
    quizSet,
    setQuizSet,disableChoices,
    setDisableChoices,
    selectedChoice, setSelectedChoice,
    nextSet,
    resetChoices,
    quizQuestionNumber
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}
