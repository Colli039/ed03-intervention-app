import { useVideoContext } from '../context/VideoContext'
import '../css/video-card.css'

function VideoCard ({storyTitle}) {
  function toKebabCase(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
  const { isVideoEnded, videoUrl, setIsVideoEnded } = useVideoContext()
  const storyUrl = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/stories/${toKebabCase(storyTitle)}.mp4`

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
