import '../css/definition-card.css'
import book from '../assets/open-book.svg'

function DefinitionCard ({ choice, definition }) {
  return (
    <div className='definiton-card'>
      <div className='term'>{choice}</div>
        <div className='definition'>{definition}
            <img className='background-img' src={book} alt='' />
        </div>
      
    </div>
  )
}

export default DefinitionCard
