import { Link, useNavigate } from 'react-router-dom'
import '../css/nav-bar.css'
import { useQuestionsContext } from '../context/QuestionsContext'

function NavBar () {
  const { setScore } = useQuestionsContext()
  const navigate = useNavigate()
  const handleHome = e => {
    e.preventDefault()
    setScore(0)
    navigate('/')
  }
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <button type='button' onClick={handleHome} className='next-btn'>
          Home
        </button>
      </div>
    </nav>
  )
}

export default NavBar
