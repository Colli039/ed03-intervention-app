import { useVideoContext } from '../context/VideoContext'
import '../css/video-card.css'

function VideoCard () {
  const { isVideoEnded, videoUrl, setIsVideoEnded } = useVideoContext()
  const storyUrl = new URL(`../assets/${videoUrl}`, import.meta.url).href

  const handleVideoEnd = () => {
    console.log('Video ended!')
    setIsVideoEnded(true)
  }
  if (!videoUrl) {
    return <div>No video selected</div>
  }

  return (
    <div className='card'>
      <video
        key={videoUrl}
        className='video-playback'
        width='900'
        height='500'
        controls
        onEnded={handleVideoEnd}
      >
        <source src={storyUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default VideoCard
