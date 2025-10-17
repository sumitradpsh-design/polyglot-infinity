import { Unit } from '@/types/language';

export const spanishLessons: Unit[] = [
  // A1 Level - Beginner
  {
    id: 'spanish-a1-1',
    title: 'A1.1 - Greetings & Basics',
    description: 'Basic greetings and introductions',
    requiredXp: 0,
    lessons: [
      {
        id: 'spanish-a1-1-l1',
        title: 'Greetings',
        description: 'Hello, goodbye, and basic phrases',
        unitId: 'spanish-a1-1',
        xpReward: 10,
        isCompleted: false,
        isLocked: false,
        exercises: [
          {
            id: 'ex-sp-a1-1-1',
            type: 'multiple-choice',
            question: 'How do you say "Hello" in Spanish?',
            options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
            correctAnswer: 'Hola',
            translation: 'Hello',
          },
          {
            id: 'ex-sp-a1-1-2',
            type: 'translation',
            question: 'Translate to Spanish: Good morning',
            correctAnswer: 'Buenos días',
            translation: 'Good morning',
          },
          {
            id: 'ex-sp-a1-1-3',
            type: 'multiple-choice',
            question: 'What does "¿Cómo estás?" mean?',
            options: ['How are you?', 'What is your name?', 'Goodbye', 'Thank you'],
            correctAnswer: 'How are you?',
            translation: '¿Cómo estás?',
          },
        ],
      },
      // ... 9 more lessons for A1.1
      {
        id: 'spanish-a1-1-l2',
        title: 'Numbers 1-10',
        description: 'Count from one to ten',
        unitId: 'spanish-a1-1',
        xpReward: 10,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-a1-1-4',
            type: 'multiple-choice',
            question: 'What is "five" in Spanish?',
            options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
            correctAnswer: 'Cinco',
          },
        ],
      },
    ],
  },
  // A2 Level - Elementary
  {
    id: 'spanish-a2-1',
    title: 'A2.1 - Daily Activities',
    description: 'Talking about daily routines',
    requiredXp: 100,
    lessons: [
      {
        id: 'spanish-a2-1-l1',
        title: 'Daily Routine',
        description: 'Describe your day',
        unitId: 'spanish-a2-1',
        xpReward: 15,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-a2-1-1',
            type: 'translation',
            question: 'Translate: I wake up at 7am',
            correctAnswer: 'Me despierto a las siete',
          },
        ],
      },
    ],
  },
  // B1 Level - Intermediate
  {
    id: 'spanish-b1-1',
    title: 'B1.1 - Past Tenses',
    description: 'Master the preterite and imperfect',
    requiredXp: 200,
    lessons: [
      {
        id: 'spanish-b1-1-l1',
        title: 'Preterite Tense',
        description: 'Actions completed in the past',
        unitId: 'spanish-b1-1',
        xpReward: 20,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-b1-1-1',
            type: 'translation',
            question: 'Translate: I went to the store yesterday',
            correctAnswer: 'Fui a la tienda ayer',
          },
        ],
      },
    ],
  },
  // B2 Level - Upper Intermediate
  {
    id: 'spanish-b2-1',
    title: 'B2.1 - Subjunctive Mood',
    description: 'Express wishes, doubts, and possibilities',
    requiredXp: 400,
    lessons: [
      {
        id: 'spanish-b2-1-l1',
        title: 'Present Subjunctive',
        description: 'Formation and basic uses',
        unitId: 'spanish-b2-1',
        xpReward: 25,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-b2-1-1',
            type: 'multiple-choice',
            question: 'Complete: Espero que tú _____ bien (estar)',
            options: ['estás', 'estés', 'estarás', 'estarías'],
            correctAnswer: 'estés',
            translation: 'I hope you are well',
          },
        ],
      },
    ],
  },
  // C1 Level - Advanced
  {
    id: 'spanish-c1-1',
    title: 'C1.1 - Advanced Grammar',
    description: 'Complex sentence structures',
    requiredXp: 600,
    lessons: [
      {
        id: 'spanish-c1-1-l1',
        title: 'Conditional Perfect',
        description: 'Hypothetical past situations',
        unitId: 'spanish-c1-1',
        xpReward: 30,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-c1-1-1',
            type: 'translation',
            question: 'Translate: I would have called you if I had known',
            correctAnswer: 'Te habría llamado si lo hubiera sabido',
          },
        ],
      },
    ],
  },
  // C2 Level - Mastery
  {
    id: 'spanish-c2-1',
    title: 'C2.1 - Native Fluency',
    description: 'Idiomatic expressions and literature',
    requiredXp: 800,
    lessons: [
      {
        id: 'spanish-c2-1-l1',
        title: 'Literary Spanish',
        description: 'Reading and analyzing literature',
        unitId: 'spanish-c2-1',
        xpReward: 35,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-sp-c2-1-1',
            type: 'multiple-choice',
            question: 'What does "dar en el clavo" mean idiomatically?',
            options: ['To hit the nail', 'To be exactly right', 'To give a nail', 'To make a mistake'],
            correctAnswer: 'To be exactly right',
            translation: 'Idiomatic expression',
          },
        ],
      },
    ],
  },
];
