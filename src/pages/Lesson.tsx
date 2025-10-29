import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { X, Check, Volume2 } from 'lucide-react';
import { getLessonsForLanguage } from '@/data/lessons';
import { getCurrentLanguage, updateProgress, getStoredProgress } from '@/lib/storage';
import { Exercise } from '@/types/language';
import { toast } from 'sonner';

const Lesson = () => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [earnedXP, setEarnedXP] = useState(0);

  const currentLanguage = getCurrentLanguage();
  const units = getLessonsForLanguage(currentLanguage);
  const lesson = units.flatMap(u => u.lessons).find(l => l.id === lessonId);

  if (!lesson) {
    navigate('/learn');
    return null;
  }

  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + 1) / lesson.exercises.length) * 100;

  const handleAnswer = () => {
    const correct = selectedAnswer.toLowerCase().trim() === currentExercise.correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);

    if (correct) {
      setEarnedXP(prev => prev + 5);
      setTimeout(() => {
        if (currentExerciseIndex < lesson.exercises.length - 1) {
          setCurrentExerciseIndex(prev => prev + 1);
          setSelectedAnswer('');
          setIsCorrect(null);
        } else {
          completeLesson();
        }
      }, 1500);
    } else {
      setTimeout(() => {
        setIsCorrect(null);
        setSelectedAnswer('');
      }, 1500);
    }
  };

  const completeLesson = () => {
    const currentProgress = getStoredProgress()[currentLanguage];
    const updatedCompletedLessons = [...currentProgress.completedLessons, lessonId!];
    
    // Check if this completes a unit
    const currentUnit = units.find(u => u.lessons.some(l => l.id === lessonId));
    const unitComplete = currentUnit && 
      currentUnit.lessons.every(l => updatedCompletedLessons.includes(l.id));
    
    // Calculate XP: lesson XP + unit bonus if unit is complete
    const unitBonus = unitComplete ? 50 : 0;
    const totalXP = lesson.xpReward + unitBonus;
    const newXP = currentProgress.xp + totalXP;
    const newLevel = Math.floor(newXP / 100) + 1;
    
    updateProgress(currentLanguage, {
      xp: newXP,
      level: newLevel,
      completedLessons: updatedCompletedLessons,
      lastActive: new Date().toISOString(),
    });

    if (unitComplete) {
      toast.success(`Unit Complete! +${totalXP} XP`, {
        description: `Lesson: ${lesson.xpReward} XP + Unit Bonus: ${unitBonus} XP!`,
      });
    } else {
      toast.success(`Lesson Complete! +${lesson.xpReward} XP`, {
        description: `You earned ${lesson.xpReward} XP!`,
      });
    }

    navigate('/learn');
  };

  const renderExercise = (exercise: Exercise) => {
    switch (exercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {exercise.options?.map((option) => (
              <Button
                key={option}
                variant={selectedAnswer === option ? 'default' : 'outline'}
                className="w-full text-lg py-6 justify-start"
                onClick={() => setSelectedAnswer(option)}
                disabled={isCorrect !== null}
              >
                {option}
              </Button>
            ))}
          </div>
        );

      case 'translation':
      case 'fill-blank':
        return (
          <div className="space-y-4">
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              placeholder="Type your answer..."
              className="w-full p-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isCorrect !== null}
            />
          </div>
        );

      default:
        return <p>Exercise type not implemented yet</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Header */}
      <header className="bg-card border-b p-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/learn')}
          >
            <X className="w-5 h-5" />
          </Button>
          <Progress value={progress} className="flex-1 h-3" />
          <span className="font-bold text-sm">
            {currentExerciseIndex + 1}/{lesson.exercises.length}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-3xl p-8 animate-scale-in">
          <div className="space-y-8">
            {/* Question */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{currentExercise.question}</h2>
              {currentExercise.translation && (
                <p className="text-muted-foreground">({currentExercise.translation})</p>
              )}
            </div>

            {/* Exercise Content */}
            {renderExercise(currentExercise)}

            {/* Feedback */}
            {isCorrect !== null && (
              <div
                className={`p-4 rounded-xl ${
                  isCorrect
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-destructive/10 border-2 border-destructive'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <Check className="w-6 h-6 text-primary" />
                      <span className="font-bold text-primary">Correct! +5 XP</span>
                    </>
                  ) : (
                    <>
                      <X className="w-6 h-6 text-destructive" />
                      <span className="font-bold text-destructive">
                        Correct answer: {currentExercise.correctAnswer}
                      </span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t p-6">
        <div className="max-w-3xl mx-auto">
          <Button
            onClick={handleAnswer}
            disabled={!selectedAnswer || isCorrect !== null}
            className="w-full py-6 text-lg font-bold"
            size="lg"
          >
            Check
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Lesson;
