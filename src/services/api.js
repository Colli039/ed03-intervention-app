const questions = [
  {
    id: 0,

    question:
      'Where were Jose and Carlos taking a walk at the beginning of the story?',
    choices: [
      'At the market',
      'In the park',
      'Near the school',
      'On the street'
    ],
    answer: 'In the park'
  },
  {
    id: 1,

    question: 'Whom did Carlos help right after helping the lost little boy?',
    choices: ['Jose', 'An old lady', 'A park guard', 'His teacher'],
    answer: 'An old lady'
  },
  {
    id: 2,

    question:
      'Why did Jose ask Carlos to stop helping people during their walk?',
    choices: [
      'Jose wanted them to relax and enjoy the park.',
      'Jose was getting tired of walking.',
      'Jose was afraid of strangers.',
      'Jose wanted to go home early.'
    ],
    answer: 'Jose wanted them to relax and enjoy the park.'
  },
  {
    id: 3,
    question:
      'What kind of friend is Carlos based on his actions in the story?',
    choices: [
      'A) Helpful and caring',
      'B) Forgetful and quiet',
      'C) Lazy and selfish',
      'D) Rude and impatient'
    ],
    answer: 'A) Helpful and caring'
  },
  {
    id: 4,
    question:
      '5. What important lesson did Jose learn from Carlos by the end of the story?',
    choices: [
      'A) We should only help others when it is convenient for us.',
      'B) We should help people right away whenever we have the chance.',
      'C) It is better to stay focused on having fun than helping others.',
      'D) Walking with a friend is the best way to spend the day.'
    ],
    answer: 'B) We should help people right away whenever we have the chance.'
  }
]

const trickyWords = [
  {
    id: 0,
    question: 'Which words do you find difficult to understand?',
    choices: ['Understand', 'Coalesce', 'Revere', 'Melancholy'],
    definitions: [
      'Interpret or view (something) in a particular way.',
      'Come together to form one mass or whole.',
      'Feel deep respect or admiration for (something).',
      'A feeling of pensive sadness, typically with no obvious cause.'
    ]
  },
  {
    id: 1,
    question: 'Which words do you find difficult to understand?',
    choices: ['U2nderstand', 'Coalesce', 'Revere', 'Melancholy'],
    definitions: [
      'Interpret or view (something) in a particular way.',
      'Come together to form one mass or whole.',
      'Feel deep respect or admiration for (something).',
      'A feeling of pensive sadness, typically with no obvious cause.'
    ]
  },
  {
    id: 2,
    question: 'Which words do you find difficult to understand??',
    choices: ['U3nderstand', 'Coalesce', 'Revere', 'Melancholy'],
    definitions: [
      'Interpret or view (something) in a particular way.',
      'Come together to form one mass or whole.',
      'Feel deep respect or admiration for (something).',
      'A feeling of pensive sadness, typically with no obvious cause.'
    ]
  },
  {
    id: 3,
    question: 'Which words do you find difficult to understand?',
    choices: ['Underst4and', 'Coalesce', 'Revere', 'Melancholy'],
    definitions: [
      'Interpret or view (something) in a particular way.',
      'Come together to form one mass or whole.',
      'Feel deep respect or admiration for (something).',
      'A feeling of pensive sadness, typically with no obvious cause.'
    ]
  },
  {
    id: 4,
    question: '5 Which words do you find difficult to understand??',
    choices: ['Understand', 'Coalesce', 'Revere', 'Melancholy'],
    definitions: [
      'Interpret or view (something) in a particular way.',
      'Come together to form one mass or whole.',
      'Feel deep respect or admiration for (something).',
      'A feeling of pensive sadness, typically with no obvious cause.'
    ]
  }
]
const setTitles = ['Two Friends', 'Plants Need Water', 'The Lost Fisherman']
const storyUrl = ['video-sample.mp4','video-sample-2.mp4','video-sample-3.mp4']
const quizQuestions = {
  0: [
    //Question Set 1
    {
      id: 0,
      question:
        'Where were Jose and Carlos taking a walk at the beginning of the story?',
      choices: [
        'A) At the market',
        'B) In the park',
        'C) Near the school',
        'D) On the street'
      ],
      answer: 'B) In the park'
    },
    {
      id: 1,
      question: 'Whom did Carlos help right after helping the lost little boy?',
      choices: [
        'A) Jose',
        'B) An old lady',
        'C) A park guard',
        'D) His teacher'
      ],
      answer: 'B) An old lady'
    },
    {
      id: 2,
      question:
        'Why did Jose ask Carlos to stop helping people during their walk?',
      choices: [
        'A) Jose wanted them to relax and enjoy the park.',
        'B) Jose was getting tired of walking.',
        'C) Jose was afraid of strangers.',
        'D) Jose wanted to go home early.'
      ],
      answer: 'A) Jose wanted them to relax and enjoy the park.'
    },
    {
      id: 3,
      question:
        'What kind of friend is Carlos based on his actions in the story?',
      choices: [
        'A) Helpful and caring',
        'B) Forgetful and quiet',
        'C) Lazy and selfish',
        'D) Rude and impatient'
      ],
      answer: 'A) Helpful and caring'
    },
    {
      id: 4,
      question:
        '5. What important lesson did Jose learn from Carlos by the end of the story?',
      choices: [
        'A) We should only help others when it is convenient for us.',
        'B) We should help people right away whenever we have the chance.',
        'C) It is better to stay focused on having fun than helping others.',
        'D) Walking with a friend is the best way to spend the day.'
      ],
      answer: 'B) We should help people right away whenever we have the chance.'
    }
  ],
  1: [
    //Question Set 2
    {
      id: 0,
      question: 'Where does Jose’s father work when he is not in the garden?',
      choices: [
        'A) In a farm',
        'B) In a school',
        'C) In a factory in town',
        'D) In a market'
      ],
      answer: 'C) In a factory in town'
    },
    {
      id: 1,
      question:
        'Why were the leaves of the plants wilting when Jose arrived home from school?',
      choices: [
        'A) They were eaten by insects.',
        'B) The soil was dry because of the hot sun.',
        'C) Jose forgot to give them fertilizer.',
        'D) Heavy rain damaged the leaves.'
      ],
      answer: 'B) The soil was dry because of the hot sun.'
    },
    {
      id: 2,
      question:
        'How did Jose feel about helping his father take care of the garden?',
      choices: [
        'A) Proud and happy to do the right thing',
        'B) Tired and upset that he had to work',
        'C) Worried that his father would scold him',
        'D) Bored because gardening takes too long'
      ],
      answer: 'A) Proud and happy to do the right thing'
    },
    {
      id: 3,
      question: 'What kind of son is Jose based on his actions in the story?',
      choices: [
        'A) Forgetful and careless',
        'B) Responsible and helpful',
        'C) Lazy and inactive',
        'D) Playful and noisy'
      ],
      answer: 'B) Responsible and helpful'
    },
    {
      id: 4,
      question:
        'Father said plants are like people because they also need to drink when it is hot. What would most likely happen if Jose decided to play instead of watering the plants?',
      choices: [
        'A) The plants would grow faster on their own.',
        'B) The plants would stay healthy until the next day.',
        'C) The rain would immediately start falling to save them.',
        'D) The plants would dry up and die from lack of water.'
      ],
      answer: 'D) The plants would dry up and die from lack of water.'
    }
  ],
  2: [
    //Question Set 3
    {
      id: 0,
      question:
        'How many fishermen went fishing at the beginning of the story?',
      choices: ['A) Ten', 'B) Eleven', 'C) Twelve', 'D) Thirteen'],
      answer: 'C) Twelve'
    },
    {
      id: 1,
      question:
        'Why did the fishermen always count only eleven people instead of twelve?',
      choices: [
        'A) One of the fishermen went home early.',
        'B) One fisherman got lost in the river.',
        'C) Each fisherman forgot to count himself.',
        'D) The stranger hid one of the fishermen.'
      ],
      answer: 'C) Each fisherman forgot to count himself.'
    },
    {
      id: 2,
      question:
        'How did the fishermen feel when they thought one of their friends had drowned?',
      choices: [
        'A) Angry and noisy',
        'B) Worried and upset',
        'C) Calm and silent',
        'D) Excited and happy'
      ],
      answer: 'B) Worried and upset'
    },
    {
      id: 3,
      question:
        'How was the stranger able to help the fishermen find the correct number?',
      choices: [
        'A) He asked everyone to say their names aloud.',
        'B) He tapped each person on the shoulder while counting them from the outside.',
        'C) He searched the river to find the missing person.',
        'D) He taught them how to write numbers on paper.'
      ],
      answer:
        'B) He tapped each person on the shoulder while counting them from the outside.'
    },
    {
      id: 4,
      question:
        'What important lesson did the fishermen learn at the end of the story?',
      choices: [
        'A) Swimming in the river is dangerous for everyone.',
        'B) It is better to travel with strangers than with friends.',
        'C) We should think carefully before jumping to conclusions.',
        'D) Fishermen should never go to the river without a cane.'
      ],
      answer: 'C) We should think carefully before jumping to conclusions.'
    }
  ]
}

export const getQuizSetSize = () => {
  return questions.length
}

export const getSetSize = () => {
  return Object.keys(quizQuestions).length
}

export const getTrickySetSize = () => {
  return trickyWords.length()
}

export const getTrickyWords = questionId => {
  console.log('API: ', trickyWords[questionId])
  return trickyWords[questionId]
}

export const getQuestionSet = (index, questionId) => {
  return quizQuestions[index][questionId]
}

export const getSetTitle = questionId => {
  return setTitles[questionId]
}

export const getStoryUrl = questionId => {
  return storyUrl[questionId]
}
