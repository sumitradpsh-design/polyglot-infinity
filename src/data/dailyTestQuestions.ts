import { Exercise, Language } from '@/types/language';

// Separate pool of questions for daily tests - different from lesson exercises
export const dailyTestQuestions: Record<Language, Exercise[]> = {
  spanish: [
    // A1 Level Review
    {
      id: 'dt-sp-1',
      type: 'multiple-choice',
      question: 'What is the Spanish word for "please"?',
      options: ['Gracias', 'Por favor', 'Perdón', 'De nada'],
      correctAnswer: 'Por favor',
    },
    {
      id: 'dt-sp-2',
      type: 'translation',
      question: 'Translate: See you tomorrow',
      correctAnswer: 'Hasta mañana',
    },
    {
      id: 'dt-sp-3',
      type: 'fill-blank',
      question: 'Complete the number sequence: uno, dos, tres, _____',
      correctAnswer: 'cuatro',
    },
    // A2 Level Review
    {
      id: 'dt-sp-4',
      type: 'multiple-choice',
      question: 'How do you say "I sleep" in Spanish?',
      options: ['Duermo', 'Durmiendo', 'Dormí', 'Dormiré'],
      correctAnswer: 'Duermo',
    },
    {
      id: 'dt-sp-5',
      type: 'translation',
      question: 'Translate: I have breakfast at 8',
      correctAnswer: 'Desayuno a las ocho',
    },
    // B1 Level Review
    {
      id: 'dt-sp-6',
      type: 'fill-blank',
      question: 'Complete in preterite: Ayer yo _____ al cine (ir)',
      correctAnswer: 'fui',
    },
    {
      id: 'dt-sp-7',
      type: 'multiple-choice',
      question: 'What is the preterite of "ver" (nosotros)?',
      options: ['vemos', 'vimos', 'veíamos', 'veremos'],
      correctAnswer: 'vimos',
    },
    // B2 Level Review
    {
      id: 'dt-sp-8',
      type: 'translation',
      question: 'Translate: I hope it rains tomorrow',
      correctAnswer: 'Espero que llueva mañana',
    },
    {
      id: 'dt-sp-9',
      type: 'fill-blank',
      question: 'Complete in subjunctive: Dudo que él _____ (poder)',
      correctAnswer: 'pueda',
    },
    // C1 Level Review
    {
      id: 'dt-sp-10',
      type: 'multiple-choice',
      question: 'Complete: Yo _____ si me lo hubieras pedido (ayudar)',
      options: ['ayudaría', 'habría ayudado', 'ayudaba', 'ayudara'],
      correctAnswer: 'habría ayudado',
    },
    {
      id: 'dt-sp-11',
      type: 'translation',
      question: 'Translate: They would have come if they could',
      correctAnswer: 'Habrían venido si hubieran podido',
    },
    // C2 Level Review
    {
      id: 'dt-sp-12',
      type: 'multiple-choice',
      question: 'What does "hacer la vista gorda" mean?',
      options: ['To gain weight', 'To turn a blind eye', 'To be obvious', 'To look carefully'],
      correctAnswer: 'To turn a blind eye',
    },
    {
      id: 'dt-sp-13',
      type: 'fill-blank',
      question: 'Complete the idiom: "Estar como pez en el _____"',
      correctAnswer: 'agua',
    },
    // Additional mixed level questions
    {
      id: 'dt-sp-14',
      type: 'translation',
      question: 'Translate: What time is it?',
      correctAnswer: '¿Qué hora es?',
    },
    {
      id: 'dt-sp-15',
      type: 'multiple-choice',
      question: 'What does "acabar de" express?',
      options: ['Future action', 'Recent past', 'Obligation', 'Possibility'],
      correctAnswer: 'Recent past',
    },
    {
      id: 'dt-sp-16',
      type: 'fill-blank',
      question: 'Complete: Me gusta _____ deportes',
      correctAnswer: 'practicar',
    },
    {
      id: 'dt-sp-17',
      type: 'translation',
      question: 'Translate: I am learning Spanish',
      correctAnswer: 'Estoy aprendiendo español',
    },
    {
      id: 'dt-sp-18',
      type: 'multiple-choice',
      question: 'Which verb is irregular in the present tense?',
      options: ['hablar', 'comer', 'ser', 'estudiar'],
      correctAnswer: 'ser',
    },
    {
      id: 'dt-sp-19',
      type: 'fill-blank',
      question: 'Complete: ¿_____ años tienes?',
      correctAnswer: 'Cuántos',
    },
    {
      id: 'dt-sp-20',
      type: 'translation',
      question: 'Translate: My house is big',
      correctAnswer: 'Mi casa es grande',
    },
  ],
  english: [
    // A1 Level Review
    {
      id: 'dt-en-1',
      type: 'multiple-choice',
      question: 'Which word is a greeting?',
      options: ['Goodbye', 'Hello', 'Thanks', 'Sorry'],
      correctAnswer: 'Hello',
    },
    {
      id: 'dt-en-2',
      type: 'fill-blank',
      question: 'Complete: Good _____, how are you?',
      correctAnswer: 'morning',
    },
    {
      id: 'dt-en-3',
      type: 'translation',
      question: 'Write in words: 11',
      correctAnswer: 'eleven',
    },
    // A2 Level Review
    {
      id: 'dt-en-4',
      type: 'multiple-choice',
      question: 'Which is correct? "She _____ English"',
      options: ['speak', 'speaks', 'speaking', 'spoke'],
      correctAnswer: 'speaks',
    },
    {
      id: 'dt-en-5',
      type: 'fill-blank',
      question: 'Complete: I _____ like coffee (negative)',
      correctAnswer: "don't",
    },
    // B1 Level Review
    {
      id: 'dt-en-6',
      type: 'translation',
      question: 'Write in past tense: I see',
      correctAnswer: 'I saw',
    },
    {
      id: 'dt-en-7',
      type: 'multiple-choice',
      question: 'What is the past tense of "buy"?',
      options: ['buyed', 'bought', 'buying', 'buys'],
      correctAnswer: 'bought',
    },
    // B2 Level Review
    {
      id: 'dt-en-8',
      type: 'fill-blank',
      question: 'Complete: If I _____ rich, I would travel (be)',
      correctAnswer: 'were',
    },
    {
      id: 'dt-en-9',
      type: 'multiple-choice',
      question: 'Which is third conditional? "If I _____ you"',
      options: ['see', 'saw', 'had seen', 'will see'],
      correctAnswer: 'had seen',
    },
    // C1 Level Review
    {
      id: 'dt-en-10',
      type: 'translation',
      question: 'What does "meticulous" mean?',
      correctAnswer: 'careful',
    },
    {
      id: 'dt-en-11',
      type: 'multiple-choice',
      question: 'Which word means "to make worse"?',
      options: ['Ameliorate', 'Exacerbate', 'Improve', 'Enhance'],
      correctAnswer: 'Exacerbate',
    },
    // C2 Level Review
    {
      id: 'dt-en-12',
      type: 'fill-blank',
      question: 'Complete the idiom: "Bite off more than you can _____"',
      correctAnswer: 'chew',
    },
    {
      id: 'dt-en-13',
      type: 'multiple-choice',
      question: 'What does "burn the midnight oil" mean?',
      options: ['Stay up late', 'Waste energy', 'Be angry', 'Cook poorly'],
      correctAnswer: 'Stay up late',
    },
    // Additional mixed level questions
    {
      id: 'dt-en-14',
      type: 'translation',
      question: 'Write the opposite: big',
      correctAnswer: 'small',
    },
    {
      id: 'dt-en-15',
      type: 'fill-blank',
      question: 'Complete: I _____ been to Paris (present perfect)',
      correctAnswer: 'have',
    },
    {
      id: 'dt-en-16',
      type: 'multiple-choice',
      question: 'Which is a question word?',
      options: ['Because', 'Where', 'But', 'And'],
      correctAnswer: 'Where',
    },
    {
      id: 'dt-en-17',
      type: 'fill-blank',
      question: 'Complete: She is _____ than me (tall)',
      correctAnswer: 'taller',
    },
    {
      id: 'dt-en-18',
      type: 'translation',
      question: 'Write in plural: child',
      correctAnswer: 'children',
    },
    {
      id: 'dt-en-19',
      type: 'multiple-choice',
      question: 'What is a synonym for "happy"?',
      options: ['Sad', 'Joyful', 'Angry', 'Tired'],
      correctAnswer: 'Joyful',
    },
    {
      id: 'dt-en-20',
      type: 'fill-blank',
      question: 'Complete: I _____ go to the party tomorrow (future)',
      correctAnswer: 'will',
    },
  ],
  french: [],
  german: [],
  hindi: [],
  japanese: [],
};
