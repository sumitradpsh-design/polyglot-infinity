export type Language = 'spanish' | 'french' | 'japanese' | 'german' | 'hindi' | 'english';

export interface LanguageInfo {
  id: Language;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
  gradient: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  unitId: string;
  exercises: Exercise[];
  xpReward: number;
  isCompleted: boolean;
  isLocked: boolean;
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  requiredXp: number;
}

export type ExerciseType = 'multiple-choice' | 'translation' | 'fill-blank' | 'match-pairs' | 'listen';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: string;
  translation?: string;
  audioUrl?: string;
  pairs?: { left: string; right: string }[];
}

export interface UserProgress {
  language: Language;
  xp: number;
  level: number;
  streak: number;
  lastActive: string;
  completedLessons: string[];
  achievements: string[];
}
