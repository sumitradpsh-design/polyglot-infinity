import { UserProgress, Language } from '@/types/language';

const STORAGE_KEY = 'linguamaster-progress';

const getDefaultProgress = (): Record<Language, UserProgress> => {
  return {
    spanish: {
      language: 'spanish',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
    french: {
      language: 'french',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
    japanese: {
      language: 'japanese',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
    german: {
      language: 'german',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
    hindi: {
      language: 'hindi',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
    english: {
      language: 'english',
      xp: 0,
      level: 1,
      streak: 0,
      lastActive: new Date().toISOString(),
      completedLessons: [],
      achievements: [],
    },
  };
};

export const getStoredProgress = (): Record<Language, UserProgress> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const defaultProgress = getDefaultProgress();
  
  if (!stored) {
    return defaultProgress;
  }
  
  // Merge stored progress with defaults to handle new languages
  const parsedProgress = JSON.parse(stored);
  const mergedProgress: Record<Language, UserProgress> = { ...defaultProgress };
  
  // Override defaults with stored values
  Object.keys(parsedProgress).forEach((lang) => {
    if (lang in mergedProgress) {
      mergedProgress[lang as Language] = parsedProgress[lang];
    }
  });
  
  // Save the merged progress back to handle migrations
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedProgress));
  
  return mergedProgress;
};

export const saveProgress = (progress: Record<Language, UserProgress>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
};

export const updateProgress = (
  language: Language,
  updates: Partial<UserProgress>
) => {
  const allProgress = getStoredProgress();
  allProgress[language] = { ...allProgress[language], ...updates };
  saveProgress(allProgress);
  return allProgress[language];
};

export const getCurrentLanguage = (): Language => {
  const stored = localStorage.getItem('current-language');
  return (stored as Language) || 'spanish';
};

export const setCurrentLanguage = (language: Language) => {
  localStorage.setItem('current-language', language);
};
