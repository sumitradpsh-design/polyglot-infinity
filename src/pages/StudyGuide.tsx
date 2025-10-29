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
    spanish: {
      grammar: [
        { 
          title: 'Gender & Articles', 
          description: 'All Spanish nouns are masculine (el) or feminine (la). Learn to identify patterns like -o endings (masculine) and -a endings (feminine).',
          content: 'el libro (the book), la casa (the house), el agua (the water - exception!)'
        },
        { 
          title: 'Ser vs Estar', 
          description: 'Two verbs for "to be" - ser for permanent states, estar for temporary ones.',
          content: 'Soy profesor (I am a teacher - permanent), Estoy cansado (I am tired - temporary)'
        },
        { 
          title: 'Present Tense Conjugations', 
          description: 'Regular verbs end in -ar, -er, -ir. Learn the patterns: yo hablo, tú hablas, él habla...',
          content: 'hablar: hablo, hablas, habla, hablamos, habláis, hablan'
        },
        { 
          title: 'Subjunctive Mood', 
          description: 'Used for wishes, doubts, emotions. Triggered by phrases like "espero que", "dudo que", "es importante que".',
          content: 'Espero que vengas (I hope you come), Dudo que llueva (I doubt it will rain)'
        },
      ],
      vocabulary: [
        { 
          title: 'Daily Greetings', 
          description: 'Master basic interactions',
          content: 'Buenos días (good morning), Buenas tardes (good afternoon), ¿Cómo estás? (how are you?), Mucho gusto (nice to meet you)'
        },
        { 
          title: 'Time & Numbers', 
          description: 'Essential for daily life',
          content: '¿Qué hora es? (what time is it?), Son las tres (it\'s 3 o\'clock), veinte (20), cien (100), mil (1000)'
        },
        { 
          title: 'Food & Restaurants', 
          description: 'Order meals confidently',
          content: 'Quisiera... (I would like...), La cuenta, por favor (the check, please), rico/delicioso (delicious)'
        },
        { 
          title: 'Travel Phrases', 
          description: 'Navigate Spanish-speaking countries',
          content: '¿Dónde está...? (where is...?), ¿Cuánto cuesta? (how much?), Un billete para... (a ticket to...)'
        },
      ],
      practice: [
        { 
          title: 'Pronunciation Guide', 
          description: 'Spanish has consistent pronunciation rules',
          content: 'J = "h" sound (joven), LL = "y" sound (llamar), Ñ = "ny" sound (mañana), R = rolled (perro)'
        },
        { 
          title: 'Common Mistakes', 
          description: 'Avoid these learner pitfalls',
          content: 'Don\'t say "Yo soy bueno" (I am good person) when you mean "Estoy bien" (I am well). Remember to use estar for feelings!'
        },
        { 
          title: 'Listening Resources', 
          description: 'Improve comprehension',
          content: 'Watch Spanish TV shows with subtitles, listen to Spanish music, try podcasts like "Coffee Break Spanish"'
        },
        { 
          title: 'Speaking Practice', 
          description: 'Build confidence',
          content: 'Practice with language exchange apps, speak out loud when doing exercises, record yourself speaking'
        },
      ],
      tips: [
        { 
          title: 'Daily Study Routine', 
          description: 'Consistency beats intensity',
          content: '15-30 minutes daily is better than 3 hours once a week. Start your day with 5 vocabulary words.'
        },
        { 
          title: 'Spaced Repetition', 
          description: 'Review at optimal intervals',
          content: 'Review new words after 1 day, then 3 days, then 1 week, then 1 month. The daily test helps with this!'
        },
        { 
          title: 'Immersion Techniques', 
          description: 'Surround yourself with Spanish',
          content: 'Change your phone language to Spanish, follow Spanish social media accounts, think in Spanish'
        },
        { 
          title: 'Track Your Progress', 
          description: 'Celebrate small wins',
          content: 'Keep a vocabulary journal, record yourself speaking monthly, set weekly goals like "learn 50 new words"'
        },
      ],
    },
    english: {
      grammar: [
        { 
          title: 'Articles: A, An, The', 
          description: 'Use "a" before consonants, "an" before vowels, "the" for specific things.',
          content: 'a book, an apple, the book (specific one we mentioned)'
        },
        { 
          title: 'Present Simple vs Continuous', 
          description: 'Simple for habits, continuous for happening now.',
          content: 'I work every day (habit), I am working now (right now)'
        },
        { 
          title: 'Past Tenses', 
          description: 'Regular verbs add -ed, many irregular verbs to memorize.',
          content: 'worked, played (regular), went, saw, bought (irregular)'
        },
        { 
          title: 'Conditional Sentences', 
          description: 'If + condition, result. Three main types for present, future, and past hypotheticals.',
          content: 'If I study, I pass (real), If I studied, I would pass (unreal), If I had studied, I would have passed (past unreal)'
        },
      ],
      vocabulary: [
        { 
          title: 'Everyday Phrases', 
          description: 'Essential for daily conversation',
          content: 'How are you? I\'m fine. Nice to meet you. See you later. What time is it?'
        },
        { 
          title: 'Work & Business', 
          description: 'Professional vocabulary',
          content: 'meeting, deadline, colleague, presentation, schedule, report, client'
        },
        { 
          title: 'Travel English', 
          description: 'Navigate English-speaking countries',
          content: 'Where is...? How much does it cost? A ticket to... Excuse me. Could you help me?'
        },
        { 
          title: 'Academic English', 
          description: 'For students and professionals',
          content: 'research, analyze, hypothesis, significant, therefore, however, in conclusion'
        },
      ],
      practice: [
        { 
          title: 'Pronunciation Tips', 
          description: 'English pronunciation can be tricky',
          content: 'TH sounds: "think" (voiceless) vs "this" (voiced). Silent letters: knight, psychology. Word stress matters: REcord (noun) vs reCORD (verb)'
        },
        { 
          title: 'Common Mistakes', 
          description: 'Avoid these errors',
          content: 'He don\'t (wrong) → He doesn\'t. I go to home (wrong) → I go home. Much people (wrong) → Many people'
        },
        { 
          title: 'Listening Practice', 
          description: 'Understand different accents',
          content: 'Watch English movies with subtitles, listen to podcasts, try TED Talks, watch news in English'
        },
        { 
          title: 'Speaking Confidence', 
          description: 'Practice makes perfect',
          content: 'Talk to yourself in English, join conversation groups online, don\'t fear mistakes - they\'re learning opportunities!'
        },
      ],
      tips: [
        { 
          title: 'Daily Practice', 
          description: 'Make English part of your routine',
          content: 'Read English news for 10 minutes, write 3 sentences daily, speak aloud when doing exercises'
        },
        { 
          title: 'Vocabulary Building', 
          description: 'Learn words in context',
          content: 'Learn phrases, not just words. Instead of "big", learn "a big house", "big problem", "big deal"'
        },
        { 
          title: 'Immersion at Home', 
          description: 'Create an English environment',
          content: 'Change phone/computer to English, watch English YouTube, follow English social media, think in English'
        },
        { 
          title: 'Set Clear Goals', 
          description: 'Measure your progress',
          content: 'Weekly: Learn 30 new words. Monthly: Finish one level. Quarterly: Have a 5-minute conversation'
        },
      ],
    },
  };

  const currentResources = studyResources[currentLanguage as keyof typeof studyResources] || studyResources.spanish;

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
              {currentResources.grammar.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Book className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      {'content' in resource && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-mono">{resource.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vocabulary" className="space-y-4">
            <div className="grid gap-4">
              {currentResources.vocabulary.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      {'content' in resource && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm font-mono">{resource.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="practice" className="space-y-4">
            <div className="grid gap-4">
              {currentResources.practice.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      {'content' in resource && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm">{resource.content}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <div className="grid gap-4">
              {currentResources.tips.map((resource, index) => (
                <Card key={index} className="p-6 hover:shadow-hover transition-smooth group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      {'content' in resource && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm">{resource.content}</p>
                        </div>
                      )}
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
