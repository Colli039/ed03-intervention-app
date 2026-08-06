import '../css/Home.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()

  const handleStart = async e => {
    setLoading(true)
    //TODO load the cards from the questions context
  }

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/story-time');
  }

  return (
    <div className='home'>
      <h1 className='header'>Learning From A Screen</h1>
      <h3 className='subtitle'>An ED03 Intervention App</h3>
      <button type="submit" onClick={handleClick} className='start-btn'>
        Start!
      </button>
    </div>
  )
}

export default Home
