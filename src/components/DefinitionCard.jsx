import '../css/definition-card.css'

function DefinitionCard({choice, definition}){

    return(
        <div className="definition-card">
            <div className="term">{choice}</div>
            <div className="definition">{definition}</div>
        </div>
    )
}

export default DefinitionCard