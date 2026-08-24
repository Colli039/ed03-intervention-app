import { createContext, useState, useContext, useEffect } from 'react'
import { getStoryUrl } from '../services/api'

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
  const [title, setTitle] = useState('')

  const resetGame = () => {
  setScore(0)
  setQuestionNumber(0)
  setQuizSet(0)
  // setSelectedChoice('')
  setDisableChoices(false)
  setSecondChance(1)
  setTitle(0)
  getStoryUrl(0)
}
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
    quizQuestionNumber,
    title, setTitle,
    resetGame
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}
