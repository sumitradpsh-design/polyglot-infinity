import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Globe, Headphones, MessageSquare, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getCurrentLanguage } from '@/lib/storage';
import { languages } from '@/data/languages';
import type { Language } from '@/types/language';

export default function StudyGuide() {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('spanish');

  useEffect(() => {
    const language = getCurrentLanguage();
    if (language) {
      setCurrentLanguage(language);
    } else {
      navigate('/select-language');
    }
  }, [navigate]);

  const languageInfo = languages.find(l => l.id === currentLanguage);

  const studyResources = {
    grammar: [
      { title: 'Sentence Structure', description: 'Learn how to form basic and complex sentences' },
      { title: 'Verb Conjugations', description: 'Master verb forms across all tenses' },
      { title: 'Pronouns & Articles', description: 'Understanding personal pronouns and articles' },
      { title: 'Adjectives & Adverbs', description: 'Describing and modifying words effectively' },
    ],
    vocabulary: [
      { title: 'Common Phrases', description: 'Essential phrases for daily conversations' },
      { title: 'Business Terms', description: 'Professional vocabulary for workplace' },
      { title: 'Travel Essentials', description: 'Words and phrases for traveling abroad' },
      { title: 'Food & Dining', description: 'Restaurant and food-related vocabulary' },
    ],
    practice: [
      { title: 'Listening Exercises', description: 'Improve comprehension with audio content' },
      { title: 'Speaking Practice', description: 'Tips for pronunciation and fluency' },
      { title: 'Reading Texts', description: 'Stories and articles at various levels' },
      { title: 'Writing Tips', description: 'Guidelines for clear written communication' },
    ],
    tips: [
      { title: 'Study Routine', description: 'Build consistent daily learning habits' },
      { title: 'Memory Techniques', description: 'Spaced repetition and mnemonics' },
      { title: 'Immersion Ideas', description: 'Ways to practice outside formal lessons' },
      { title: 'Goal Setting', description: 'Track progress and set achievable milestones' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/learn')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-1">Study Guide</h1>
            <p className="text-muted-foreground">
              Resources for learning {languageInfo?.name} {languageInfo?.flag}
            </p>
          </div>
        </div>

        <Tabs defaultValue="grammar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="grammar" className="gap-2">
              <Book className="w-4 h-4" />
              Grammar
            </TabsTrigger>
            <TabsTrigger value="vocabulary" className="gap-2">
              <FileText className="w-4 h-4" />
              Vocabulary
            </TabsTrigger>
            <TabsTrigger value="practice" className="gap-2">
              <Headphones className="w-4 h-4" />
              Practice
            </TabsTrigger>
            <TabsTrigger value="tips" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="grammar" className="space-y-4">
            <div className="grid gap-4">
              {studyResources.grammar.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Book className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vocabulary" className="space-y-4">
            <div className="grid gap-4">
              {studyResources.vocabulary.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-4">
            <div className="grid gap-4">
              {studyResources.practice.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <div className="grid gap-4">
              {studyResources.tips.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth cursor-pointer group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Need More Help?</h3>
              <p className="text-muted-foreground mb-4">
                Try our AI Language Mentor for personalized guidance and practice conversations.
              </p>
              <Button onClick={() => navigate('/ai-mentor')} variant="default">
                Chat with AI Mentor
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
