import { Unit } from '@/types/language';

export const englishLessons: Unit[] = [
  // A1 Level - Beginner
  {
    id: 'english-a1-1',
    title: 'A1.1 - Basic English',
    description: 'Alphabet, greetings, and introductions',
    requiredXp: 0,
    lessons: [
      {
        id: 'english-a1-1-l1',
        title: 'The Alphabet',
        description: 'Learn English letters and sounds',
        unitId: 'english-a1-1',
        xpReward: 10,
        isCompleted: false,
        isLocked: false,
        exercises: [
          {
            id: 'ex-en-a1-1-1',
            type: 'multiple-choice',
            question: 'Which letter comes after "M"?',
            options: ['L', 'N', 'O', 'P'],
            correctAnswer: 'N',
          },
          {
            id: 'ex-en-a1-1-2',
            type: 'multiple-choice',
            question: 'How do you greet someone in the morning?',
            options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'],
            correctAnswer: 'Good morning',
          },
        ],
      },
      {
        id: 'english-a1-1-l2',
        title: 'Numbers 1-20',
        description: 'Count in English',
        unitId: 'english-a1-1',
        xpReward: 10,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-a1-1-3',
            type: 'fill-blank',
            question: 'Write the number: fifteen',
            correctAnswer: '15',
          },
        ],
      },
    ],
  },
  // A2 Level
  {
    id: 'english-a2-1',
    title: 'A2.1 - Present Simple',
    description: 'Basic verb tenses and daily activities',
    requiredXp: 100,
    lessons: [
      {
        id: 'english-a2-1-l1',
        title: 'Present Simple Tense',
        description: 'Habitual actions and facts',
        unitId: 'english-a2-1',
        xpReward: 15,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-a2-1-1',
            type: 'fill-blank',
            question: 'Complete: She _____ to school every day (go)',
            correctAnswer: 'goes',
          },
        ],
      },
    ],
  },
  // B1 Level
  {
    id: 'english-b1-1',
    title: 'B1.1 - Past Tenses',
    description: 'Simple past and present perfect',
    requiredXp: 200,
    lessons: [
      {
        id: 'english-b1-1-l1',
        title: 'Simple Past',
        description: 'Completed actions in the past',
        unitId: 'english-b1-1',
        xpReward: 20,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-b1-1-1',
            type: 'multiple-choice',
            question: 'Choose the correct form: Yesterday, I _____ to the park',
            options: ['go', 'went', 'gone', 'going'],
            correctAnswer: 'went',
          },
        ],
      },
    ],
  },
  // B2 Level
  {
    id: 'english-b2-1',
    title: 'B2.1 - Conditionals',
    description: 'Complex conditional sentences',
    requiredXp: 400,
    lessons: [
      {
        id: 'english-b2-1-l1',
        title: 'Third Conditional',
        description: 'Hypothetical past situations',
        unitId: 'english-b2-1',
        xpReward: 25,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-b2-1-1',
            type: 'fill-blank',
            question: 'Complete: If I _____ harder, I would have passed (study)',
            correctAnswer: 'had studied',
          },
        ],
      },
    ],
  },
  // C1 Level
  {
    id: 'english-c1-1',
    title: 'C1.1 - Advanced Vocabulary',
    description: 'Academic and professional English',
    requiredXp: 600,
    lessons: [
      {
        id: 'english-c1-1-l1',
        title: 'Academic Writing',
        description: 'Formal writing techniques',
        unitId: 'english-c1-1',
        xpReward: 30,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-c1-1-1',
            type: 'multiple-choice',
            question: 'Which word means "to make something easier to understand"?',
            options: ['Obfuscate', 'Clarify', 'Complicate', 'Perplex'],
            correctAnswer: 'Clarify',
          },
        ],
      },
    ],
  },
  // C2 Level
  {
    id: 'english-c2-1',
    title: 'C2.1 - Native Mastery',
    description: 'Idioms, nuances, and literary English',
    requiredXp: 800,
    lessons: [
      {
        id: 'english-c2-1-l1',
        title: 'Idiomatic English',
        description: 'Common idioms and phrases',
        unitId: 'english-c2-1',
        xpReward: 35,
        isCompleted: false,
        isLocked: true,
        exercises: [
          {
            id: 'ex-en-c2-1-1',
            type: 'multiple-choice',
            question: 'What does "break the ice" mean?',
            options: ['To damage frozen water', 'To start a conversation', 'To be very cold', 'To win a competition'],
            correctAnswer: 'To start a conversation',
          },
        ],
      },
    ],
  },
];
