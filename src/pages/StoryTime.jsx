import { useNavigate } from 'react-router-dom'
import VideoCard from '../components/VideoCard'

function StoryTime () {
  const navigate = useNavigate()

  const handleNext = e => {
    e.preventDefault()
    navigate('/tricky-words')
  }

    return (
      <div className='body'>
        <div>Story Time</div>
        <VideoCard video="video!!" />
        <button type='button' onClick={handleNext} className='next-btn'>
          Tricky Words
        </button>
      </div>
    )
}

export default StoryTime
