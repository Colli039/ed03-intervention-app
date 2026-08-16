import '../css/mini-video-card.css'
// import imageUrl from '../assets/gardening-too-long.gif'

function MiniVideoCard ({ choice }) {
  //TODO: Change to object URL soon
  const videoUrl = `https://ed03-intervention-resources.s3.us-east-2.amazonaws.com/${choice}.mp4`
  console.log(videoUrl)

  const handleVideoEnd = () => {
    console.log('Video ended!')
    // setIsVideoEnded(true)
  }

  return (
    <div className='mini-video-card'>
      {choice}
      <img className='answer-result' src={videoUrl}></img>
      <video
        key={videoUrl}
        className='answer-result'
        // width='900'
        // height='500'
        autoPlay
        muted
        loop
        onEnded={handleVideoEnd}
      >
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default MiniVideoCard
