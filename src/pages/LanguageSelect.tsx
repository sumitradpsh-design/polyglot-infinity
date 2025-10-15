import { languages } from '@/data/languages';
import { LanguageCard } from '@/components/LanguageCard';
import { getStoredProgress, setCurrentLanguage } from '@/lib/storage';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const LanguageSelect = () => {
  const navigate = useNavigate();
  const progress = getStoredProgress();

  const handleLanguageSelect = (languageId: string) => {
    setCurrentLanguage(languageId as any);
    navigate('/learn');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Language
          </h1>
          <p className="text-xl text-muted-foreground">
            Select a language to continue your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {languages.map((language) => (
            <LanguageCard
              key={language.id}
              language={language}
              xp={progress[language.id].xp}
              level={progress[language.id].level}
              onClick={() => handleLanguageSelect(language.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
