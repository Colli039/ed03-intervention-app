import { useNavigate } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import '../css/story-time.css'
import logo from '../assets/story-time-logo.svg'
import { getSetTitle } from '../services/api'
import { useQuestionsContext } from '../context/QuestionsContext'
import { useState, useEffect } from 'react'

function StoryTime () {
  const navigate = useNavigate()

  const { title, setTitle, quizQuestionNumber, setQuestionSet } = useQuestionsContext()

  useEffect(() => {
    const loadResources = async () => {
      try {
        const title = await getSetTitle(quizQuestionNumber)
        setTitle(title)
      } catch (err) {
        console.log(err)
        // setError("Failed to load questions")
      } finally {
        // setLoading(false)
      }
    }
    loadResources()
  }, [title])

  const handleNext = e => {
    e.preventDefault()
    navigate('/tricky-words')
  }

  return (
    <div className='story-content'>
      <img className='logo' src={logo} alt='' />
      {/* <div className='story-header'> */}
        <h1 className='story-header-text'>Story Time:</h1>
        <h3 className="story-title">{title}</h3>
      {/* </div> */}
      
      <VideoCard video='video!!' />
      <button type='button' onClick={handleNext} className='next-btn'>
        Tricky Words
      </button>
    </div>
  )
}

export default StoryTime
