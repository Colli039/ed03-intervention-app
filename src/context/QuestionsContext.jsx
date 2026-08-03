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
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [questionSet, setQuestionSet] = useState([])

  const getQuestionNumber = () => {
    return questionNumber
  }

  const getSecondChance = () => {
    return secondChance
  }

  const nextQuestion = () => {
    setQuestionNumber(questionNumber => questionNumber + 1)
    setSecondChance(1)
    console.log("Second Chance: ",secondChance)
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
    prevQuestion,
    wrongAnswer,
    getQuestionNumber,
    loading,setLoading,
    secondChance, getSecondChance
  }

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}
