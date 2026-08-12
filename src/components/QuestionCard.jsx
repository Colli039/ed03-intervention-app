import "../css/question-card.css"
import { useState, useEffect } from 'react'
import { useQuestionsContext } from '../context/QuestionsContext'


function QuestionCard({question}){
    const {
        selectedChoice, setSelectedChoice
      } = useQuestionsContext()

    return(
        <div className={`question-card ${selectedChoice !== '' ? 'selected':''}`}>
            {question}
        </div>
    )
}

export default QuestionCard