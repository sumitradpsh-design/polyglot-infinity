import { UserProgress, Language } from '@/types/language';

const STORAGE_KEY = 'linguamaster-progress';

export const getStoredProgress = (): Record<Language, UserProgress> => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    const defaultProgress: Record<Language, UserProgress> = {
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
    };
    return defaultProgress;
  }
  return JSON.parse(stored);
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
