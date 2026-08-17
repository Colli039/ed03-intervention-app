import '../css/mini-video-card.css'
import { useState, useRef, useEffect } from 'react'

function MiniVideoCard ({ choice, onVideoEnd }) {
  const [loading, setLoading] = useState(true)
  const [shouldLoop, setShouldLoop] = useState(false)

  const videoRef = useRef(null)

  const videoUrl = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/${choice}.mp4`

  useEffect(() => {
    setLoading(true)
    setShouldLoop(false)
  }, [choice])

  const handleEnded = () => {
    if (!shouldLoop) {
      onVideoEnd?.()

      setShouldLoop(true)

      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
      }
    }
  }

  return (
    <div className='mini-video-card'>
      {loading && (
        <div className='video-loader'>
          <i className='fa-solid fa-film loading-icon'></i>
          <div className='loading-text'>Video is loading...</div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`answer-result ${loading ? 'hidden-video' : ''}`}
        autoPlay
        muted
        loop={shouldLoop}
        onCanPlay={() => setLoading(false)}
        onEnded={handleEnded}
      >
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default MiniVideoCard
