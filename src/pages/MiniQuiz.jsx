import { useNavigate } from "react-router-dom"

import QuestionCard from "../components/QuestionCard"
import ChoicesCards from "../components/ChoicesCards"
import { useState, useEffect } from 'react'

function MiniQuiz () {
  const navigate = useNavigate()

  const handleNext = e => {
    e.preventDefault()
    navigate('/story-time')
  }
  const handleHome = e => {
    e.preventDefault()
    navigate('/')
  }

  const choices = ["To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"]

  return (
    <div className='body'>
      <div>Mini Quiz</div>
      <QuestionCard question="question 1" />
      <ChoicesCards type="mini-quiz" choices={choices} />
      <button type='button' onClick={handleNext} className='next-btn'>
        Story Time
      </button>
    </div>
  )
}

export default MiniQuiz
