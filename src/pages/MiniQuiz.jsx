import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import ChoicesCards from '../components/ChoicesCards'
import { getQuizSetSize, getQuestionSet, getSetSize } from '../services/api'
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
    score,
    quizSet,
    setQuizSet,
    setDisableChoices,
    selectedChoice,
    setSelectedChoice,
    nextSet,
    resetChoices
  } = useQuestionsContext()

  const quizSetLength = getSetSize()

  useEffect(() => {
    const loadQuestionSet = async () => {
      try {
        resetChoices()
        const data = await getQuestionSet(quizSet, questionNumber)

        length = getQuizSetSize() //quiz length
        setQuestionSet(data)
      } catch (err) {
        console.log(err)
        // setError("Failed to load questions")
      } finally {
        setLoading(false)
        console.log('QUESTION SET NUMBER', questionSet?.id > length, length)
      }
    }
    loadQuestionSet()
  }, [quizSet, questionNumber])

  const handleNextSet = e => {
    e.preventDefault()
    nextSet()
    navigate('/story-time')
  }

  const handleNextQuestion = e => {
    // setQuestionNumber(0) //set loading to true
    nextQuestion()
    navigate('/mini-quiz')
  }
  const handleHome = e => {
    e.preventDefault()
    setScore(0)
    setQuestionNumber(0)
    resetChoices()
    navigate('/')
  }


  return (
    <div className='body'>
      <div>Mini Quiz</div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='content'>
          <div className='scorecard'>Score: {score}</div>
          <QuestionCard question={questionSet?.question} />
          <div className='second-chances'>
            Second chance left: {secondChance}
          </div>
          <ChoicesCards
            type='mini-quiz'
            answer={questionSet?.answer}
            choices={questionSet?.choices}
          />
        </div>
      )}
      {!(quizSet == quizSetLength) ? (
        questionNumber < length - 1 ? (
          <button
            type='button'
            onClick={handleNextQuestion}
            className='next-btn'
          >
            Next Question
          </button>
        ) : questionNumber < length && quizSet + 1 == quizSetLength ? (
          <button type='button' onClick={handleHome} className='next-btn'>
            Home
          </button>
        ) : (
          <button type='button' onClick={handleNextSet} className='next-btn'>
            Next Story
          </button>
        )
      ) : (
        <button type='button' onClick={handleHome} className='next-btn'>
          Home 2
        </button>
      )}
    </div>
  )
}

export default MiniQuiz
