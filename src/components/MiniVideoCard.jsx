import '../css/mini-video-card.css'

function MiniVideoCard({videoName, choice}){
    const imageUrl = new URL(`../assets/${videoName}`, import.meta.url).href

    return(
        <div className="mini-video-card">
            {choice}
            <img src={imageUrl}></img>
        </div>
    )
}

export default MiniVideoCard