import { Link, useNavigate } from 'react-router-dom'
import '../css/nav-bar.css'
import { useQuestionsContext } from '../context/QuestionsContext'

function NavBar () {
  const { resetChoices,setScore, setQuizSet, setQuestionNumber } = useQuestionsContext()
  const navigate = useNavigate()
    const handleHome = e => {
    window.location.href = '/';
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
