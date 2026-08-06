import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import ChoicesCards from '../components/ChoicesCards'
import { getQuizQuestions, getQuizSetSize } from '../services/api'
import { useState, useEffect } from 'react'
import { useQuestionsContext } from '../context/QuestionsContext'

function MiniQuiz () {
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    nextQuestion,
    questionNumber,
    questionSet,
    setQuestionSet,
    secondChance,
    setQuestionNumber,
    setScore,
    score
  } = useQuestionsContext()
  console.log(questionNumber)

  useEffect(() => {
    const loadQuestionSet = async () => {
      try {
        const data = await getQuizQuestions(questionNumber)
        length = getQuizSetSize()-1
        setQuestionSet(data)
      } catch (err) {
        console.log(err)
        // setError("Failed to load questions")
      } finally {
        setLoading(false)
        console.log(score)
        console.log("QUESTION SET NUMBER",questionSet?.id > length, length )
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
    setScore(0)
    setQuestionNumber(0)
    navigate('/')
  }

  return (
    <div className='body'>
      <div>Mini Quiz</div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='content'>
          <div className="scorecard">Score: {score}</div>
          <QuestionCard question={questionSet?.question} />
          <div className='second-chances'>Second chance left: {secondChance}</div>
          <ChoicesCards
            type='mini-quiz'
            answer={questionSet?.answer}
            choices={questionSet?.choices}
          />
        </div>
      )}
      {questionNumber < length ? (
        <button type='button' onClick={handleNext} className='next-btn'>
          Story Time
        </button>
      ) : (
        <button type='button' onClick={handleHome} className='next-btn'>
          Home
        </button>
      )}
    </div>
  )
}

export default MiniQuiz
