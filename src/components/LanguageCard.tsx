import { LanguageInfo } from '@/types/language';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Trophy } from 'lucide-react';

interface LanguageCardProps {
  language: LanguageInfo;
  xp: number;
  level: number;
  onClick: () => void;
  isActive?: boolean;
}

export const LanguageCard = ({
  language,
  xp,
  level,
  onClick,
  isActive,
}: LanguageCardProps) => {
  const progress = (xp % 100);

  return (
    <Card
      className={`p-6 cursor-pointer transition-smooth hover:shadow-hover group ${
        isActive ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{language.flag}</span>
          <div>
            <h3 className="font-bold text-xl">{language.name}</h3>
            <p className="text-sm text-muted-foreground">{language.nativeName}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-primary">{level}</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Progress to Level {level + 1}</span>
          <span className="font-semibold">{xp} XP</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </Card>
  );
};
