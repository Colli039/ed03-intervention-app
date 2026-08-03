const questions = [
    {question: "1 Why did Jack and Jill go up the hill?",
        choices: ["To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
        answerIndex: 0},
    {question: "Why did Jack and Jill go up the hill?",
    choices: ["2 To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
    answerIndex: 0},
    {question: "3 Why did Jack and Jill go up the hill?",
        choices: ["To fetch a pail of water", "To go sightseeing", "To roll on the hill", "To talk to friends"],
        answerIndex: 0}
]

const trickyWords =[
    {question: "1 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {question: "2 Which words do you find difficult to understand??",
        choices: ["Understand", "Coalesce", "Revere", "Melancholy"],
        definitions: ["Interpret or view (something) in a particular way.","Come together to form one mass or whole.","Feel deep respect or admiration for (something).","A feeling of pensive sadness, typically with no obvious cause."]
    },
    {question: "3 Which words do you find difficult to understand??",
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

export const getQuestions = () => {
    return questions;
}

export const getQuizQuestions = (questionId)=>{
    return questions[questionId];
}

export const getTrickyWords = (questionId)=>{
    console.log("API: ",trickyWords[questionId])
    return trickyWords[questionId];
}