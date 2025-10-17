import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Globe, Trophy, Zap, Sparkles, Target } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Master Any Language</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Learn Languages
              <br />
              The Fun Way
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the most engaging way to learn Spanish, French, Japanese, German, Hindi, and English.
              Master any language from A1 to C2 proficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/languages')}
                className="text-lg px-8 py-6 gradient-primary text-white shadow-success hover:shadow-hover transition-all"
              >
                <Globe className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
              >
                <Trophy className="w-5 h-5 mr-2" />
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Why We're Different</h2>
          <p className="text-xl text-muted-foreground">
            The most advanced language learning platform ever created
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Smart Learning',
              description: 'AI-powered lessons that adapt to your learning style and pace',
              gradient: 'gradient-primary',
            },
            {
              icon: Zap,
              title: 'Instant Feedback',
              description: 'Get immediate corrections and explanations for every answer',
              gradient: 'gradient-french',
            },
            {
              icon: Target,
              title: 'Goal Tracking',
              description: 'Track your progress with detailed stats and achievements',
              gradient: 'gradient-spanish',
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Language</h2>
          <p className="text-xl text-muted-foreground">
            Start with any of our 6 comprehensive courses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Spanish', flag: '🇪🇸', gradient: 'gradient-spanish' },
            { name: 'French', flag: '🇫🇷', gradient: 'gradient-french' },
            { name: 'Japanese', flag: '🇯🇵', gradient: 'gradient-japanese' },
            { name: 'German', flag: '🇩🇪', gradient: 'gradient-german' },
            { name: 'Hindi', flag: '🇮🇳', gradient: 'gradient-hindi' },
            { name: 'English', flag: '🇬🇧', gradient: 'gradient-english' },
          ].map((language, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-hover transition-smooth cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate('/languages')}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {language.flag}
              </div>
              <h3 className="font-bold text-xl">{language.name}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <Card className="p-12 text-center gradient-primary text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners mastering new languages every day
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/languages')}
            className="text-lg px-8 py-6"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your Journey
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Index;
