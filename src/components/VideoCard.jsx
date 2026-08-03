import "../css/video-card.css"


function VideoCard({video}){
    return(
        <div className="card">
            <div className="video-playback">
                {video}
            </div>
        </div>
    )
}

export default VideoCard