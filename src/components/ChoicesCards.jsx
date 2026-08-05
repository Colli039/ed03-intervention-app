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
  const [wrongChoice, setWrongChoice] = useState(null)

  function handleClick (choice) {
    //TODO: Add timeout that changes the button color if it's correct/wrong
    setSelectedChoice(choice)
    console.log(answer, choice, answer!==null)
    if (answer!==null) {
      if (choice == answer) {
        //Add timeout here before disabling choices
        setDisableChoices(true)
      } else {
        //Checks if we still have second chance left
        if (secondChance > 0) {
          //Add timeout here before setting wrong choice
          setWrongChoice(choice)
          wrongAnswer()
        } else {
          //Add timeout here before setting wrong choice
          setWrongChoice(choice)
          setSelectedChoice(answer), setDisableChoices(true)
        }
      }
    }
  }

  return (
    <>
      <div className='choices-body'>
        {choices.map((choice, key) => {
          return (
            //button
            <button
              key={key}
              type='submit'
              onClick={() => handleClick(choice)}
              className={`
                choice-btn
                ${choice === selectedChoice ? 'clicked' : ''
                }
                ${
                  choice === selectedChoice && choice !== answer && answer !== null
                    ? 'wrong'
                    : disableChoices && choice === answer
                    ? 'correct'
                    : disableChoices
                    ? 'disabled'
                    : ''
                }
              `}
              disabled={disableChoices}
            >
              {choice}
            </button>
          )
        })}
      </div>
      <div className={`display-card ${selectedChoice ? 'active' : ''}`}>
        {/* Video display if mini quiz */}
        {selectedChoice && type == 'mini-quiz' && (
          <MiniVideoCard videoName='video-sample.png' choice={selectedChoice} />
        )}
        {/* Definintion display if tricky words */}
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
