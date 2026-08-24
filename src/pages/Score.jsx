import '../css/score.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuestionsContext } from '../context/QuestionsContext'
import { getSetTitle } from '../services/api'

function Score () {
  const navigate = useNavigate()

  const {
      loading,
      setLoading,
      setQuestionNumber,
      setScore,
      score,
      setQuizSet,
      setDisableChoices,
      resetChoices,
      resetGame,
      setTitle
    } = useQuestionsContext()


  const handleHome = e => {
    window.location.href = '/';
  }

  useEffect(() => {
      const loadResources = async () => {
        try {
          const title = await getSetTitle(0)
          setTitle(title)
        } catch (err) {
          console.log(err)
        }
      }
      loadResources()
    }, [])
  

  return (
    <div className='score-container'>
      <h1 className='score-header'>Your Final Score:</h1>
      <h3 className='score-number'>{score}</h3>
      <button className='start-btn' type="submit" onClick={handleHome} className='start-btn'>
        Home
      </button>
    </div>
  )
}

export default Score
