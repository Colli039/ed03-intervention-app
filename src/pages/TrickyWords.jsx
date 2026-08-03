// import "../css/tricky-words.css"
import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import ChoicesCards from '../components/ChoicesCards'
import { getQuestions, getTrickyWords } from '../services/api'
import { useState, useEffect } from 'react'
import { useQuestionsContext } from '../context/QuestionsContext'

function TrickyWords () {
  console.log('Component rendered')
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    nextQuestion,
    questionNumber,
    questionSet,
    setQuestionSet,
    getQuestionNumber
  } = useQuestionsContext()
  console.log(questionNumber)

  useEffect(() => {
    console.log('Use Effect')
    const loadQuestionSet = async () => {
      try {
        const data = await getTrickyWords(questionNumber)
        setQuestionSet(data)
        // setQuestion(questionSet)
        // console.log(questionSet.question)
        // question = questionSet.question
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
    navigate('/mini-quiz')
  }

  return (
    <div className='body'>
      <div>Tricky Words</div>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='content'>
          <QuestionCard question={questionSet?.question} />
          <ChoicesCards type='tricky-words' choices={questionSet?.choices} />
        </div>
      )}

      <button type='button' onClick={handleNext} className='next-btn'>
        Mini Quiz
      </button>
    </div>
  )
}

export default TrickyWords
