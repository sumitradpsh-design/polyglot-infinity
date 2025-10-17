import { Language } from '@/types/language';
import { TrackerData, ExerciseAttempt, WeakArea, DailyTestResult, SpacedRepetitionItem } from '@/types/tracker';

const TRACKER_KEY = 'linguamaster-tracker';

export const getTrackerData = (language: Language): TrackerData => {
  const stored = localStorage.getItem(`${TRACKER_KEY}-${language}`);
  if (!stored) {
    return {
      language,
      exerciseAttempts: [],
      weakAreas: [],
      dailyTests: [],
      lastDailyTest: null,
      streakMaintained: false,
      nextReviewDate: new Date().toISOString(),
    };
  }
  return JSON.parse(stored);
};

export const saveTrackerData = (language: Language, data: TrackerData) => {
  localStorage.setItem(`${TRACKER_KEY}-${language}`, JSON.stringify(data));
};

export const recordAttempt = (language: Language, attempt: ExerciseAttempt) => {
  const tracker = getTrackerData(language);
  tracker.exerciseAttempts.push(attempt);
  
  // Keep only last 500 attempts to avoid storage bloat
  if (tracker.exerciseAttempts.length > 500) {
    tracker.exerciseAttempts = tracker.exerciseAttempts.slice(-500);
  }
  
  updateWeakAreas(tracker);
  saveTrackerData(language, tracker);
};

const updateWeakAreas = (tracker: TrackerData) => {
  const lessonStats = new Map<string, { correct: number; total: number; lastAttempt: string }>();
  
  // Analyze last 100 attempts
  const recentAttempts = tracker.exerciseAttempts.slice(-100);
  
  recentAttempts.forEach(attempt => {
    const key = `${attempt.lessonId}-${attempt.exerciseType}`;
    const stats = lessonStats.get(key) || { correct: 0, total: 0, lastAttempt: attempt.timestamp };
    
    stats.total += 1;
    if (attempt.correct) stats.correct += 1;
    stats.lastAttempt = attempt.timestamp;
    
    lessonStats.set(key, stats);
  });
  
  // Identify weak areas (< 70% accuracy)
  tracker.weakAreas = [];
  lessonStats.forEach((stats, key) => {
    const failureRate = 1 - (stats.correct / stats.total);
    if (failureRate > 0.3) {
      const [lessonId, exerciseType] = key.split('-');
      tracker.weakAreas.push({
        topic: lessonId,
        exerciseType: exerciseType as any,
        failureRate,
        lastAttempt: stats.lastAttempt,
        needsReview: true,
      });
    }
  });
};

export const needsDailyTest = (language: Language): boolean => {
  const tracker = getTrackerData(language);
  if (!tracker.lastDailyTest) return true;
  
  const lastTest = new Date(tracker.lastDailyTest);
  const today = new Date();
  
  // Check if it's a new day
  return lastTest.toDateString() !== today.toDateString();
};

export const recordDailyTest = (language: Language, result: DailyTestResult) => {
  const tracker = getTrackerData(language);
  tracker.dailyTests.push(result);
  tracker.lastDailyTest = result.date;
  tracker.streakMaintained = true;
  
  // Keep only last 90 days of tests
  if (tracker.dailyTests.length > 90) {
    tracker.dailyTests = tracker.dailyTests.slice(-90);
  }
  
  saveTrackerData(language, tracker);
};

export const getSpacedRepetitionItems = (language: Language): SpacedRepetitionItem[] => {
  const tracker = getTrackerData(language);
  const items: SpacedRepetitionItem[] = [];
  
  // Get exercises that need review based on weak areas
  tracker.weakAreas.forEach(area => {
    const recentAttempts = tracker.exerciseAttempts
      .filter(a => a.lessonId === area.topic && a.exerciseType === area.exerciseType)
      .slice(-5);
    
    if (recentAttempts.length > 0) {
      const avgCorrect = recentAttempts.filter(a => a.correct).length / recentAttempts.length;
      const interval = calculateInterval(avgCorrect);
      
      items.push({
        exerciseId: recentAttempts[0].exerciseId,
        interval,
        easeFactor: avgCorrect,
        nextReview: new Date(Date.now() + interval * 24 * 60 * 60 * 1000).toISOString(),
        reviewCount: recentAttempts.length,
      });
    }
  });
  
  return items;
};

const calculateInterval = (successRate: number): number => {
  // SM-2 inspired algorithm
  if (successRate >= 0.9) return 7; // 1 week
  if (successRate >= 0.7) return 3; // 3 days
  if (successRate >= 0.5) return 1; // 1 day
  return 0; // Today
};

export const getDailyTestQuestions = (language: Language, count: number = 8) => {
  const tracker = getTrackerData(language);
  
  // Prioritize weak areas (60% of questions)
  const weakAreaCount = Math.floor(count * 0.6);
  const randomCount = count - weakAreaCount;
  
  return {
    weakAreaExercises: tracker.weakAreas.slice(0, weakAreaCount),
    needsRandomExercises: randomCount,
  };
};
