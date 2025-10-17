import { Language, ExerciseType } from './language';

export interface ExerciseAttempt {
  exerciseId: string;
  lessonId: string;
  unitId: string;
  correct: boolean;
  timestamp: string;
  timeTaken: number; // seconds
  exerciseType: ExerciseType;
}

export interface WeakArea {
  topic: string;
  exerciseType: ExerciseType;
  failureRate: number; // 0-1
  lastAttempt: string;
  needsReview: boolean;
}

export interface DailyTestResult {
  date: string;
  score: number;
  totalQuestions: number;
  completedAt: string;
  weakAreasAddressed: string[];
}

export interface TrackerData {
  language: Language;
  exerciseAttempts: ExerciseAttempt[];
  weakAreas: WeakArea[];
  dailyTests: DailyTestResult[];
  lastDailyTest: string | null;
  streakMaintained: boolean;
  nextReviewDate: string;
}

export interface SpacedRepetitionItem {
  exerciseId: string;
  interval: number; // days
  easeFactor: number;
  nextReview: string;
  reviewCount: number;
}
