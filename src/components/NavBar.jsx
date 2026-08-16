import { Link, useNavigate } from 'react-router-dom'
import '../css/nav-bar.css'
import { useQuestionsContext } from '../context/QuestionsContext'

function NavBar () {
  const { resetChoices,setScore, setQuestionNumber } = useQuestionsContext()
  const navigate = useNavigate()
  const handleHome = e => {
    e.preventDefault()
    setScore(0)
    setQuestionNumber(0)
    resetChoices()
    navigate('/')
  }
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <button type='button' onClick={handleHome} className='nav-link'>
          <i class="fa-solid fa-house"></i>
        </button>
      </div>
    </nav>
  )
}

export default NavBar
