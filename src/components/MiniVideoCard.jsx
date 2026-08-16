import { useState } from 'react'
import '../css/mini-video-card.css'

function MiniVideoCard ({ choice }) {
  const [loading, setLoading] = useState(true)

  const videoUrl = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/${choice}.mp4`

  return (
    <div className='mini-video-card'>

      {loading && (
        <div className='video-loader'>
          <i className='fa-solid fa-film loading-icon'></i>
          <div className='loading-text'>Video is loading...</div>
        </div>
      )}

      <video
        key={videoUrl}
        className={`answer-result ${loading ? "hidden-video" : ""}`}
        autoPlay
        muted
        loop
        onCanPlay={() => setLoading(false)}
      >
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default MiniVideoCard
