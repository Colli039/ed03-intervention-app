import { Link, useNavigate } from 'react-router-dom'
import '../css/nav-bar.css'
import { useQuestionsContext } from '../context/QuestionsContext'

function NavBar () {
  const { resetChoices } = useQuestionsContext()
  const navigate = useNavigate()
  const handleHome = e => {
    e.preventDefault()
    resetChoices()
    navigate('/')
  }
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <button type='button' onClick={handleHome} className='nav-link'>
          Home
        </button>
      </div>
    </nav>
  )
}

export default NavBar
