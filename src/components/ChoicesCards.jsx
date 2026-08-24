import '../css/choices-cards.css'
import { useState, useEffect } from 'react'
import MiniVideoCard from '../components/MiniVideoCard'
import DefinitionCard from '../components/DefinitionCard'
import { useQuestionsContext } from '../context/QuestionsContext'

function ChoicesCards ({ type, choices, answer = null, definitions = null }) {
  const {
    wrongAnswer,
    secondChance,
    getSecondChance,
    addScore,
    setQuestionNumber,
    disableChoices,
    setDisableChoices,
    selectedChoice,
    setSelectedChoice
  } = useQuestionsContext()

  const [wrongChoice, setWrongChoice] = useState(null)
  const [selectedDefinition, setSelectedDefinition] = useState(null)
  const [videoChoice, setVideoChoice] = useState('')
  const [videoEnded, setVideoEnded] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)

  const [audio] = useState(() => new Audio())

  function playChoiceAudio (choice) {
    audio.pause()
    audio.currentTime = 0

    audio.src = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/tricky-words/${choice}.m4a`

    audio.play()
  }


  function toKebabCase (text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  }

  function handleClick (choice, key) {
    type=="tricky-words" ? playChoiceAudio(choice) : ''
    
    setVideoEnded(false)
    setVideoPlaying(true)
    setSelectedChoice(choice)
    setVideoChoice(choice)

    if (answer !== null) {
      if (choice == answer) {
        addScore()
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
    } else {
      setSelectedDefinition(definitions[key])
    }
  }

  return (
    <>
      <div className='choices-body'>
        <div className={`choices-content ${videoChoice ? 'show-side' : ''}`}>
          {choices.map((choice, key) => {
            return (
              //button
              <button
                key={key}
                type='submit'
                onClick={() => handleClick(choice, key)}
                className={`
                choice-btn
                ${videoPlaying && type == 'mini-quiz' ? 'video-playing' : ''}
                ${choice !== '' ? 'choice-selected' : ''}
                ${choice === videoChoice ? 'clicked' : ''}
                ${
                  videoEnded &&
                  choice === videoChoice &&
                  choice !== answer &&
                  answer !== null
                    ? 'wrong'
                    : videoEnded && choice === answer && disableChoices
                    ? 'correct'
                    : videoEnded && disableChoices
                    ? 'disabled'
                    : ''
                }
              `}
                disabled={
                  disableChoices || (videoPlaying && type == 'mini-quiz')
                }
              >
                {choice}
              </button>
            )
          })}
        </div>
        <div className={`display-card ${videoChoice ? 'active' : ''}`}>
          {/* Video display if mini quiz */}
          {selectedChoice != '' && type == 'mini-quiz' && (
            <MiniVideoCard
              key={videoChoice}
              choice={toKebabCase(videoChoice)}
              onVideoEnd={() => {
                setVideoEnded(true)
                setVideoPlaying(false)
              }}
            />
          )}
          {/* Definintion display if tricky words */}
          {selectedChoice != '' && type == 'tricky-words' && (
            <DefinitionCard
              choice={selectedChoice}
              definition={selectedDefinition}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ChoicesCards
