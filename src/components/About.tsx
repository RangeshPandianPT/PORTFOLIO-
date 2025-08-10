import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Users } from 'lucide-react';
import professionalWorkImage from '@/assets/professional-work.jpg';

const About = () => {
  const strengths = [
    {
      icon: Code,
      title: 'Soft Skills',
      description: 'Problem Solving and Communication as my soft skills',
      color: 'text-primary'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Teamwork experience in agile teams',
      color: 'text-accent'
    },
    {
      icon: Brain,
      title: 'Positive Attitude',
      description: 'Experience to think out of your work',
      color: 'text-primary'
    }
  ];

  const languages = [
    { name: 'English', level: 4, color: 'bg-primary' },
    { name: 'Tamil', level: 5, color: 'bg-accent' },
    { name: 'Japanese', level: 3, color: 'bg-secondary' }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-primary/8 to-accent/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-accent/8 to-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-accent/20 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-pulse-glow">
            👨‍💻 About Me
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block">About Me</span> & My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Professional Full Stack Developer with <strong className="text-foreground">2+ years of hands-on experience</strong> 
            building scalable web applications and AI-driven solutions. Specialized in React ecosystem, Python data science, 
            and modern development practices. Successfully delivered <strong className="text-foreground">15+ production-ready projects</strong> 
            with measurable business impact, including a 40% performance improvement in e-commerce platforms and 
            AI models achieving 85%+ accuracy in agricultural predictions.
          </p>
          
          {/* Professional Image */}
          <div className="max-w-md mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="relative rounded-2xl overflow-hidden glass-effect border border-border/20 group hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <img 
                src={professionalWorkImage} 
                alt="Professional developer working on MacBook Pro"
                className="w-full h-64 object-cover hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent group-hover:from-primary/20 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge variant="outline" className="glass-effect border-white/30 text-white bg-white/10 hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                  ✨ Passionate Developer
                </Badge>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/50 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent/50 rotate-45 animate-spin-slow" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Strengths */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Core Strengths</h3>
            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <Card 
                  key={index} 
                  className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up"
                  style={{animationDelay: `${0.9 + (index * 0.1)}s`}}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={`p-3 rounded-lg bg-secondary/20 ${strength.color} group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 animate-pulse-glow`}>
                        <strength.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{strength.title}</h4>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80">{strength.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Languages</h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{language.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {language.level === 5 ? 'Native' : 
                       language.level === 4 ? 'Fluent' : 
                       language.level === 3 ? 'Intermediate' : 'Basic'}
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${language.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${(language.level / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="glass-effect border-border/50 mt-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 gradient-text">Professional Focus</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Frontend development with modern frameworks
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Backend architecture and API development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Data analysis and machine learning
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Responsive web applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;