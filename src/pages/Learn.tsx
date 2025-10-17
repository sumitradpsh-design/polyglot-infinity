import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LessonCard } from '@/components/LessonCard';
import { languages } from '@/data/languages';
import { getLessonsForLanguage } from '@/data/lessons';
import { getCurrentLanguage, getStoredProgress } from '@/lib/storage';
import { needsDailyTest } from '@/lib/tracker';
import { ArrowLeft, Trophy, Flame, Target, Sparkles, Book } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Learn = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState(getCurrentLanguage());
  const [units, setUnits] = useState(getLessonsForLanguage(currentLanguage));
  const progress = getStoredProgress()[currentLanguage];
  const requiresDailyTest = needsDailyTest(currentLanguage);
  
  const languageInfo = languages.find(l => l.id === currentLanguage);
  const dailyGoalProgress = (progress.xp % 20) * 5;

  useEffect(() => {
    setCurrentLanguage(getCurrentLanguage());
    setUnits(getLessonsForLanguage(getCurrentLanguage()));
  }, []);

  const handleLessonClick = (lessonId: string) => {
    navigate(`/lesson/${lessonId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{languageInfo?.flag}</span>
              <span className="font-bold text-xl">{languageInfo?.name}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-bold text-orange-500">{progress.streak}</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-bold text-primary">{progress.xp} XP</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {units.map((unit, unitIndex) => (
              <div key={unit.id} className="animate-slide-up" style={{ animationDelay: `${unitIndex * 0.1}s` }}>
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">{unit.title}</h2>
                  <p className="text-muted-foreground">{unit.description}</p>
                </div>
                
                <div className="space-y-4">
                  {unit.lessons.map((lesson) => (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      onClick={() => handleLessonClick(lesson.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Test Alert */}
            {requiresDailyTest && (
              <Card className="p-6 border-2 border-orange-500 bg-orange-500/10 animate-pulse">
                <div className="flex items-start gap-3 mb-3">
                  <Target className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Daily Test Required!</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete today's test to maintain your {progress.streak} day streak 🔥
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() => navigate('/daily-test')}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                >
                  Start Test Now
                </Button>
              </Card>
            )}

            {/* Quick Actions */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/ai-mentor')}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Language Mentor
                </Button>
                <Button
                  onClick={() => navigate('/study-guide')}
                  variant="outline"
                  className="w-full"
                >
                  <Book className="w-4 h-4 mr-2" />
                  Study Guide
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Practice with Gemini AI or browse resources
              </p>
            </Card>

            {/* Daily Goal */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-lg">Daily Goal</h3>
              </div>
              <Progress value={dailyGoalProgress} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground">
                {Math.round(dailyGoalProgress)}% complete
              </p>
            </Card>

            {/* Stats */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Your Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current Level</span>
                  <span className="font-bold text-primary">{progress.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total XP</span>
                  <span className="font-bold">{progress.xp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Day Streak</span>
                  <span className="font-bold flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    {progress.streak}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lessons</span>
                  <span className="font-bold">{progress.completedLessons.length}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
