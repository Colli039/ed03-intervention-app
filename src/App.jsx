import { useState } from 'react'
import { Routes, useLocation, Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import StoryTime from './pages/StoryTime'
import TrickyWords from './pages/TrickyWords'
import MiniQuiz from './pages/MiniQuiz'
import Score from './pages/Score'

import NavBar from './components/NavBar'
import { QuestionsProvider } from './context/QuestionsContext'
import { VideoInfoProvider } from './context/VideoContext'

function App () {
  const location = useLocation()
  return (
    <QuestionsProvider>
      {!(location.pathname==='/')&&!(location.pathname==='/score') ? <NavBar /> : ''}
      <main className='main-content'>
        <VideoInfoProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tricky-words' element={<TrickyWords />} />
            <Route path='/story-time' element={<StoryTime />} />
            <Route path='/mini-quiz' element={<MiniQuiz />} />
            <Route path='/score' element={<Score />} />
          </Routes>
        </VideoInfoProvider>
      </main>
    </QuestionsProvider>
  )
}

export default App
