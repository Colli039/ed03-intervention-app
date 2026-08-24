import { useRef } from 'react'
import { useVideoContext } from '../context/VideoContext'
import '../css/video-card.css'

function VideoCard({ storyTitle }) {
  const videoRef = useRef(null)

  function toKebabCase(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  }

  const { videoUrl, setIsVideoEnded } = useVideoContext()

  const storyUrl = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/stories/${toKebabCase(storyTitle)}.mp4`

  const handleVideoEnd = () => {
    setIsVideoEnded(true)
  }

  if (!videoUrl) {
    return <div>No video selected</div>
  }

  return (
    <div className='card'>
      <video
        ref={videoRef}
        key={videoUrl}
        className='video-playback'
        width='900'
        height='500'
        controls
        onLoadedMetadata={() => {
          if (videoRef.current) {
            videoRef.current.volume = 0.5
          }
        }}
        onEnded={handleVideoEnd}
      >
        <source src={storyUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoCard