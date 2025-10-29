import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Check, X, Trophy, Target } from 'lucide-react';
import { getCurrentLanguage, getStoredProgress } from '@/lib/storage';
import { getLessonsForLanguage } from '@/data/lessons';
import { getDailyTestQuestions, recordAttempt, recordDailyTest } from '@/lib/tracker';
import { Exercise, ExerciseType, Language } from '@/types/language';
import { dailyTestQuestions } from '@/data/dailyTestQuestions';
import { toast } from 'sonner';

const DailyTest = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [testQuestions, setTestQuestions] = useState<Exercise[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime] = useState(Date.now());

  const currentLanguage = getCurrentLanguage();
  const progress = getStoredProgress()[currentLanguage];

  useEffect(() => {
    generateTestQuestions();
  }, []);

  const generateTestQuestions = () => {
    if (progress.completedLessons.length === 0) {
      toast.error('Complete some lessons first!');
      navigate('/learn');
      return;
    }

    // Use the separate daily test question pool instead of lesson exercises
    const questionPool = dailyTestQuestions[currentLanguage as Language] || [];
    
    if (questionPool.length === 0) {
      toast.error('No daily test questions available yet!');
      navigate('/learn');
      return;
    }
    
    // Shuffle and select 8 random questions from the pool
    const shuffled = [...questionPool].sort(() => Math.random() - 0.5);
    setTestQuestions(shuffled.slice(0, Math.min(8, shuffled.length)));
  };

  const handleAnswer = () => {
    const currentQuestion = testQuestions[currentQuestionIndex];
    const correct = selectedAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase().trim();
    setIsCorrect(correct);

    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    recordAttempt(currentLanguage, {
      exerciseId: currentQuestion.id,
      lessonId: 'daily-test',
      unitId: 'daily-test',
      correct,
      timestamp: new Date().toISOString(),
      timeTaken,
      exerciseType: currentQuestion.type,
    });

    if (correct) {
      setScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < testQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswer('');
        setIsCorrect(null);
      } else {
        completeTest();
      }
    }, 1500);
  };

  const completeTest = () => {
    const finalScore = score + (isCorrect ? 1 : 0);
    const percentage = (finalScore / testQuestions.length) * 100;

    recordDailyTest(currentLanguage, {
      date: new Date().toISOString(),
      score: finalScore,
      totalQuestions: testQuestions.length,
      completedAt: new Date().toISOString(),
      weakAreasAddressed: [],
    });

    setIsComplete(true);

    if (percentage >= 80) {
      toast.success('Excellent work! Streak maintained! 🔥');
    } else if (percentage >= 60) {
      toast.success('Good effort! Streak maintained!');
    } else {
      toast('Daily test complete, but review your weak areas!');
    }
  };

  if (testQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  if (isComplete) {
    const percentage = (score / testQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full p-8 text-center animate-scale-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Daily Test Complete!</h1>
            <p className="text-muted-foreground">You scored {score} out of {testQuestions.length}</p>
          </div>

          <div className="mb-8">
            <div className="text-6xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              {percentage.toFixed(0)}%
            </div>
            <Progress value={percentage} className="h-3" />
          </div>

          <div className="space-y-3">
            <Button onClick={() => navigate('/learn')} className="w-full" size="lg">
              Continue Learning
            </Button>
            <Button onClick={() => navigate('/')} variant="outline" className="w-full">
              Back to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const currentQuestion = testQuestions[currentQuestionIndex];
  const progressValue = ((currentQuestionIndex + 1) / testQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      {/* Header */}
      <header className="bg-card border-b p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="font-bold text-lg">Daily Test</h2>
            <span className="ml-auto text-sm font-semibold">
              {currentQuestionIndex + 1}/{testQuestions.length}
            </span>
          </div>
          <Progress value={progressValue} className="h-3" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-3xl p-8 animate-scale-in">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">{currentQuestion.question}</h2>
              {currentQuestion.translation && (
                <p className="text-muted-foreground">({currentQuestion.translation})</p>
              )}
            </div>

            {currentQuestion.type === 'multiple-choice' && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
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
            )}

            {(currentQuestion.type === 'translation' || currentQuestion.type === 'fill-blank') && (
              <input
                type="text"
                value={selectedAnswer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                placeholder="Type your answer..."
                className="w-full p-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                disabled={isCorrect !== null}
              />
            )}

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
                      <span className="font-bold text-primary">Correct!</span>
                    </>
                  ) : (
                    <>
                      <X className="w-6 h-6 text-destructive" />
                      <span className="font-bold text-destructive">
                        Correct answer: {currentQuestion.correctAnswer}
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

export default DailyTest;
