import '../css/choices-cards.css'
import { useState, useEffect } from 'react'
import MiniVideoCard from '../components/MiniVideoCard'
import DefinitionCard from '../components/DefinitionCard'
import { useQuestionsContext } from '../context/QuestionsContext'

//TODO!!
//MINI QUIZ - Add condition if answer is correct after the playback

function ChoicesCards ({ type, choices, answer = null }) {
  const { wrongAnswer, secondChance, getSecondChance } = useQuestionsContext()
  const [selectedChoice, setSelectedChoice] = useState('')
  const [disableChoices, setDisableChoices] = useState(false)

  function handleClick (choice) {
    setSelectedChoice(choice)
    if (answer) {
      if (choice == answer) {
        alert('Correct!')
      } else {
        alert('Incorrect!')
        secondChance > 0
          ? wrongAnswer()
          : (setSelectedChoice(answer), setDisableChoices(true))
      }
    }
  }

  return (
    <>
      <div className='choices-body'>
        {choices.map((choice, key) => {
          return (
            <button
              key={key}
              type='submit'
              onClick={() => handleClick(choice)}
              className='choice-btn'
            >
              {choice}
            </button>
          )
        })}
      </div>
      <div
        className={`display-card ${selectedChoice ? 'active' : ''} ${
          selectedChoice == answer ? 'correct' : 'wrong'
        }`}
      >
        {selectedChoice && type == 'mini-quiz' && (
          <MiniVideoCard videoName='video-sample.png' choice={selectedChoice} />
        )}
        {selectedChoice && type == 'tricky-words' && (
          <DefinitionCard
            videoName='video-sample.png'
            choice={selectedChoice}
          />
        )}
      </div>
    </>
  )
}

export default ChoicesCards
