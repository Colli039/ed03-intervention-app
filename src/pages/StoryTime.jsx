import { useNavigate } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import '../css/story-time.css'
import logo from '../assets/story-time-logo.svg'
import { getSetTitle, getStoryUrl } from '../services/api'
import { useQuestionsContext } from '../context/QuestionsContext'
import { useVideoContext } from '../context/VideoContext'
import { useState, useEffect } from 'react'

function StoryTime () {
  const navigate = useNavigate()

  const { title, setTitle, quizQuestionNumber, setQuestionSet } = useQuestionsContext()
  const { isVideoEnded, videoUrl, setVideoUrl} = useVideoContext()

  useEffect(() => {
    const loadResources = async () => {
      try {
        const title = await getSetTitle(quizQuestionNumber)
        const url = await getStoryUrl(quizQuestionNumber) 
        setTitle(title)
        setVideoUrl(url)
      } catch (err) {
        console.log(err)
      } finally {
        // setLoading(false)
      }
    }
    loadResources()
  }, [quizQuestionNumber])

  const handleNext = e => {
    e.preventDefault()
    navigate('/tricky-words')
  }

  return (
    <div className='story-content'>
      <img className='story-logo' src={logo} alt='' />
      <div className='story-header'>
        <h1 className='story-header-text'>Story Time:</h1>
        <h3 className="story-title">{title}</h3>
      </div>
      
      <VideoCard storyTitle={title} />
      <button type='button' onClick={handleNext} className='next-btn'>
        Tricky Words
      </button>
    </div>
  )
}

export default StoryTime
