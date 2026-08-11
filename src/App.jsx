import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import StoryTime from './pages/StoryTime'
import TrickyWords from './pages/TrickyWords'
import MiniQuiz from './pages/MiniQuiz'
import NavBar from './components/NavBar'
import { QuestionsProvider } from './context/QuestionsContext'
import { VideoInfoProvider } from './context/VideoContext'

function App () {
  return (
    <QuestionsProvider>
      <NavBar />
      <main className='main-content'>
        <VideoInfoProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tricky-words' element={<TrickyWords />} />
            <Route path='/story-time' element={<StoryTime />} />
            <Route path='/mini-quiz' element={<MiniQuiz />} />
          </Routes>
        </VideoInfoProvider>
      </main>
    </QuestionsProvider>
  )
}

export default App
