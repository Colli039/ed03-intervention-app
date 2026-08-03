import '../css/choices-cards.css'
import { useState, useEffect } from 'react'
import MiniVideoCard from '../components/MiniVideoCard'
import DefinitionCard from '../components/DefinitionCard'

//TODO!!
//MINI QUIZ - Add condition if answer is correct after the playback

function ChoicesCards ({ type, choices }) {
  console.log(choices, type)
  const [selectedChoice, setSelectedChoice] = useState("")

  function handleClick(choice) {
    setSelectedChoice(choice)
  }

  return (
    <>
      <div className='choices-body'>
        {choices.map((choice, key) => {
          return (
            <button type='submit' onClick={() => handleClick(choice)} className='choice-btn'>
              {choice}
            </button>
          )
        })}
      </div>
      <div className={`display-card ${selectedChoice ? 'active' : ''}`}>
        {selectedChoice && type=='mini-quiz' && <MiniVideoCard videoName='video-sample.png' choice={selectedChoice} />}
        {selectedChoice && type=='tricky-words' && <DefinitionCard videoName='video-sample.png' choice={selectedChoice} />}
      </div>
    </>
  )
}

export default ChoicesCards