import { Unit, Language } from '@/types/language';

export const getLessonsForLanguage = (language: Language): Unit[] => {
  const lessonsData: Record<Language, Unit[]> = {
    spanish: [
      {
        id: 'spanish-unit-1',
        title: 'Basics 1',
        description: 'Learn basic greetings and introductions',
        requiredXp: 0,
        lessons: [
          {
            id: 'spanish-lesson-1',
            title: 'Greetings',
            description: 'Learn how to say hello and goodbye',
            unitId: 'spanish-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: false,
            exercises: [
              {
                id: 'ex-1',
                type: 'multiple-choice',
                question: 'How do you say "Hello" in Spanish?',
                options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
                correctAnswer: 'Hola',
                translation: 'Hello',
              },
              {
                id: 'ex-2',
                type: 'translation',
                question: 'Translate to Spanish: Good morning',
                correctAnswer: 'Buenos días',
                translation: 'Good morning',
              },
              {
                id: 'ex-3',
                type: 'multiple-choice',
                question: 'What does "¿Cómo estás?" mean?',
                options: ['How are you?', 'What is your name?', 'Goodbye', 'Thank you'],
                correctAnswer: 'How are you?',
                translation: '¿Cómo estás?',
              },
              {
                id: 'ex-4',
                type: 'fill-blank',
                question: 'Fill in: Mucho ___ (Nice to meet you)',
                correctAnswer: 'gusto',
                translation: 'Nice to meet you',
              },
            ],
          },
          {
            id: 'spanish-lesson-2',
            title: 'Numbers 1-10',
            description: 'Count from one to ten',
            unitId: 'spanish-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: true,
            exercises: [
              {
                id: 'ex-5',
                type: 'multiple-choice',
                question: 'What is "five" in Spanish?',
                options: ['Tres', 'Cuatro', 'Cinco', 'Seis'],
                correctAnswer: 'Cinco',
              },
              {
                id: 'ex-6',
                type: 'match-pairs',
                question: 'Match the numbers',
                correctAnswer: 'match',
                pairs: [
                  { left: 'Uno', right: 'One' },
                  { left: 'Dos', right: 'Two' },
                  { left: 'Tres', right: 'Three' },
                  { left: 'Cuatro', right: 'Four' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'spanish-unit-2',
        title: 'Basics 2',
        description: 'Common phrases and questions',
        requiredXp: 20,
        lessons: [
          {
            id: 'spanish-lesson-3',
            title: 'Common Phrases',
            description: 'Essential everyday phrases',
            unitId: 'spanish-unit-2',
            xpReward: 15,
            isCompleted: false,
            isLocked: true,
            exercises: [
              {
                id: 'ex-7',
                type: 'translation',
                question: 'Translate: Please',
                correctAnswer: 'Por favor',
              },
              {
                id: 'ex-8',
                type: 'multiple-choice',
                question: 'How do you say "Thank you"?',
                options: ['De nada', 'Gracias', 'Perdón', 'Lo siento'],
                correctAnswer: 'Gracias',
              },
            ],
          },
        ],
      },
    ],
    french: [
      {
        id: 'french-unit-1',
        title: 'Les Bases',
        description: 'Learn basic French greetings',
        requiredXp: 0,
        lessons: [
          {
            id: 'french-lesson-1',
            title: 'Salutations',
            description: 'Greetings and introductions',
            unitId: 'french-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: false,
            exercises: [
              {
                id: 'ex-f1',
                type: 'multiple-choice',
                question: 'How do you say "Hello" in French?',
                options: ['Bonjour', 'Au revoir', 'Merci', 'Oui'],
                correctAnswer: 'Bonjour',
              },
              {
                id: 'ex-f2',
                type: 'translation',
                question: 'Translate: Good evening',
                correctAnswer: 'Bonsoir',
              },
            ],
          },
        ],
      },
    ],
    japanese: [
      {
        id: 'japanese-unit-1',
        title: 'Basics',
        description: 'Learn basic Japanese',
        requiredXp: 0,
        lessons: [
          {
            id: 'japanese-lesson-1',
            title: 'Greetings',
            description: 'Basic greetings in Japanese',
            unitId: 'japanese-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: false,
            exercises: [
              {
                id: 'ex-j1',
                type: 'multiple-choice',
                question: 'How do you say "Hello"?',
                options: ['こんにちは', 'さようなら', 'ありがとう', 'すみません'],
                correctAnswer: 'こんにちは',
                translation: 'Konnichiwa',
              },
              {
                id: 'ex-j2',
                type: 'translation',
                question: 'Translate: Thank you',
                correctAnswer: 'ありがとう',
                translation: 'Arigatou',
              },
            ],
          },
        ],
      },
    ],
    german: [
      {
        id: 'german-unit-1',
        title: 'Grundlagen',
        description: 'Learn basic German',
        requiredXp: 0,
        lessons: [
          {
            id: 'german-lesson-1',
            title: 'Begrüßungen',
            description: 'Greetings in German',
            unitId: 'german-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: false,
            exercises: [
              {
                id: 'ex-g1',
                type: 'multiple-choice',
                question: 'How do you say "Hello"?',
                options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'],
                correctAnswer: 'Hallo',
              },
              {
                id: 'ex-g2',
                type: 'translation',
                question: 'Translate: Good morning',
                correctAnswer: 'Guten Morgen',
              },
            ],
          },
        ],
      },
    ],
  };

  return lessonsData[language] || [];
};
