import '../css/mini-video-card.css'
// import imageUrl from '../assets/gardening-too-long.gif'

function MiniVideoCard({choice}){
    //TODO: Change to object URL soon
    const imgUrl = new URL(`../assets/${choice}.gif`, import.meta.url).href
   
    return(
        <div className="mini-video-card">
            {choice}
            <img className="answer-result" src={imgUrl}></img>
        </div>
    )
}

export default MiniVideoCard