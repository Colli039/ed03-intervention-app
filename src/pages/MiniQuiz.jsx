import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import ChoicesCards from '../components/ChoicesCards'
import { getQuizQuestions } from '../services/api'
import { useState, useEffect } from 'react'
import { useQuestionsContext } from '../context/QuestionsContext'

function MiniQuiz () {
  console.log('Component rendered')
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    nextQuestion,
    questionNumber,
    questionSet,
    setQuestionSet,
    getQuestionNumber,
    secondChance,
    getSecondChance
  } = useQuestionsContext()
  console.log(questionNumber)

  useEffect(() => {
    console.log('Use Effect')
    const loadQuestionSet = async () => {
      try {
        const data = await getQuizQuestions(questionNumber)
        setQuestionSet(data)
      } catch (err) {
        console.log(err)
        // setError("Failed to load questions")
      } finally {
        setLoading(false)
      }
    }
    loadQuestionSet()
  }, [])

  const handleNext = e => {
    e.preventDefault()
    nextQuestion()
    navigate('/story-time')
  }
  const handleHome = e => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='body'>
      <div>Mini Quiz</div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='content'>
          <QuestionCard question={questionSet?.question} />
          <ChoicesCards
            type='mini-quiz'
            answer={questionSet?.answer}
            choices={questionSet?.choices}
          />
          <div className='second-chances'>Second chance left: {secondChance}</div>
        </div>
      )}
      {questionSet?.id > 2 ? (
        <button type='button' onClick={handleHome} className='next-btn'>
          Home
        </button>
      ) : (
        <button type='button' onClick={handleNext} className='next-btn'>
          Story Time
        </button>
      )}
    </div>
  )
}

export default MiniQuiz
