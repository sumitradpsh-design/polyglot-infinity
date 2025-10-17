import { Unit, Language } from '@/types/language';
import { spanishLessons } from './lessons/spanish';
import { englishLessons } from './lessons/english';

export const getLessonsForLanguage = (language: Language): Unit[] => {
  const lessonsData: Record<Language, Unit[]> = {
    spanish: spanishLessons,
    english: englishLessons,
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
    hindi: [
      {
        id: 'hindi-unit-1',
        title: 'बुनियादी बातें',
        description: 'Learn basic Hindi',
        requiredXp: 0,
        lessons: [
          {
            id: 'hindi-lesson-1',
            title: 'अभिवादन',
            description: 'Greetings in Hindi',
            unitId: 'hindi-unit-1',
            xpReward: 10,
            isCompleted: false,
            isLocked: false,
            exercises: [
              {
                id: 'ex-h1',
                type: 'multiple-choice',
                question: 'How do you say "Hello"?',
                options: ['नमस्ते', 'धन्यवाद', 'अलविदा', 'कृपया'],
                correctAnswer: 'नमस्ते',
                translation: 'Namaste',
              },
              {
                id: 'ex-h2',
                type: 'translation',
                question: 'Translate: Thank you',
                correctAnswer: 'धन्यवाद',
                translation: 'Dhanyavaad',
              },
              {
                id: 'ex-h3',
                type: 'multiple-choice',
                question: 'What does "आप कैसे हैं?" mean?',
                options: ['How are you?', 'What is your name?', 'Goodbye', 'Thank you'],
                correctAnswer: 'How are you?',
                translation: 'Aap kaise hain?',
              },
            ],
          },
        ],
      },
    ],
  };

  return lessonsData[language] || [];
};
