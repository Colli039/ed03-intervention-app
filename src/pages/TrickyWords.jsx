import '../css/tricky-words.css'
import { useNavigate } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard'
import ChoicesCards from '../components/ChoicesCards'
import { getTrickyWords } from '../services/api'
import { useState, useEffect } from 'react'
import { useQuestionsContext } from '../context/QuestionsContext'
import logo from '../assets/tricky-words-logo.svg'

function TrickyWords () {
  const navigate = useNavigate()
  const {
    loading,
    setLoading,
    nextQuestion,
    quizQuestionNumber,
    questionSet,
    setQuestionSet,
    disableChoices
  } = useQuestionsContext()

  useEffect(() => {
    const loadQuestionSet = async () => {
      try {
        const data = await getTrickyWords(quizQuestionNumber)
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
    navigate('/mini-quiz')
  }

  return (
    <div className='tricky-words-body'>
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='content'>
          <img className='logo' src={logo} alt='' />
          <div className='heading'>
            <h1 className='heading-text'>Tricky Words</h1>
            {/* <h3 className='title'>{title}</h3> */}
          </div>
          <div className='question-components'>
            <QuestionCard question={questionSet?.question} />
            <ChoicesCards
              type='tricky-words'
              choices={questionSet?.choices}
              definitions={questionSet?.definitions}
            />
          </div>
        </div>
      )}

      <button type='button' onClick={handleNext} className='next-btn'>
        Mini Quiz
      </button>
    </div>
  )
}

export default TrickyWords
