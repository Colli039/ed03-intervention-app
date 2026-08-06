const questions = [
    {id:0,
        question: "Where were Jose and Carlos taking a walk at the beginning of the story?",
        choices: ["At the market", "In the park", "Near the school", "On the street"],
        answer: "In the park"},
    {id:1,
        question: "Whom did Carlos help right after helping the lost little boy?",
    choices: ["Jose", "An old lady", "A park guard", "His teacher"],
    answer: "An old lady"},
    {id:2,
        question: "Why did Jose ask Carlos to stop helping people during their walk?",
        choices: ["Jose wanted them to relax and enjoy the park.", "Jose was getting tired of walking.", "Jose was afraid of strangers.", "Jose wanted to go home early."],
        answer: "Jose wanted them to relax and enjoy the park."},
    {id:3,
        question: "What kind of friend is Carlos based on his actions in the story?",
        choices: ["A) Helpful and caring", "B) Forgetful and quiet", "C) Lazy and selfish", "D) Rude and impatient"],
        answer: "A) Helpful and caring"},
    {id:4,
        question: "5. What important lesson did Jose learn from Carlos by the end of the story?",
        choices: ["A) We should only help others when it is convenient for us.", "B) We should help people right away whenever we have the chance.", "C) It is better to stay focused on having fun than helping others.", "D) Walking with a friend is the best way to spend the day."],
        answer: "B) We should help people right away whenever we have the chance."}
]

const trickyWords =[
    {id:0,
        question: "1 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {id:1,
        question: "2 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {id:2,question: "3 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {id:3,question: "3 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {id:4,question: "3 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    }
]

// const allQuestions = [
//     {question: "1 Which words do you find difficult to understand??",
//         choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
//         definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
//     },{question: "1 Why did Jack and Jill go up the hill?",
//         choices: ["To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
//         answerIndex: 0},
//         {question: "2 Which words do you find difficult to understand??",
//         choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
//         definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
//     },
//     {question: "Why did Jack and Jill go up the hill?",
//     choices: ["2 To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
//     answerIndex: 0},
//     {question: "3 Which words do you find difficult to understand??",
//         choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
//         definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
//     },
//     {question: "3 Why did Jack and Jill go up the hill?",
//         choices: ["To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
//         answerIndex: 0}
// ]

export const getQuizSetSize = () => {
    console.log(questions.length)
    return questions.length;
}

export const getTrickySetSize = () => {
    return trickyWords.length();
}

export const getQuizQuestions = (questionId)=>{
    return shuffledQuestions[questionId];
}

export const getTrickyWords = (questionId)=>{
    console.log("API: ",trickyWords[questionId])
    return trickyWords[questionId];
}

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const shuffledQuestions = shuffleArray(
  questions.map(question => ({
    ...question,
    choices: shuffleArray(question.choices)
  }))
);