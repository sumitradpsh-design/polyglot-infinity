import { Lesson } from '@/types/language';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Lock, Play } from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  onClick: () => void;
}

export const LessonCard = ({ lesson, onClick }: LessonCardProps) => {
  return (
    <Card
      className={`p-6 transition-smooth ${
        lesson.isLocked
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:shadow-hover group'
      }`}
      onClick={lesson.isLocked ? undefined : onClick}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            lesson.isCompleted
              ? 'bg-primary/10'
              : lesson.isLocked
              ? 'bg-muted'
              : 'gradient-primary'
          }`}
        >
          {lesson.isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-primary" />
          ) : lesson.isLocked ? (
            <Lock className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">{lesson.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{lesson.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground">
              {lesson.exercises.length} exercises
            </span>
            <span className="font-semibold text-primary">+{lesson.xpReward} XP</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
