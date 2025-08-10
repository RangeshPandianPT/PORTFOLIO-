import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

const TechStack = () => {
  const techStack = [
    {
      category: 'Frontend Mastery',
      skills: [
        { name: 'React.js', level: 90, proficiency: 'Advanced', years: '2+' },
        { name: 'TypeScript', level: 85, proficiency: 'Advanced', years: '1.5+' },
        { name: 'Tailwind CSS', level: 95, proficiency: 'Expert', years: '2+' },
        { name: 'Next.js', level: 80, proficiency: 'Advanced', years: '1+' }
      ]
    },
    {
      category: 'Backend & Data',
      skills: [
        { name: 'Python', level: 88, proficiency: 'Advanced', years: '2+' },
        { name: 'Node.js', level: 82, proficiency: 'Advanced', years: '1.5+' },
        { name: 'SQL/NoSQL', level: 85, proficiency: 'Advanced', years: '2+' },
        { name: 'Machine Learning', level: 78, proficiency: 'Intermediate', years: '1+' }
      ]
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Git/GitHub', level: 92, proficiency: 'Expert', years: '2+' },
        { name: 'Docker', level: 70, proficiency: 'Intermediate', years: '6m+' },
        { name: 'Firebase', level: 85, proficiency: 'Advanced', years: '1.5+' },
        { name: 'Agile/Scrum', level: 80, proficiency: 'Advanced', years: '1+' }
      ]
    }
  ];

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return 'text-green-500 bg-green-500/10 border-green-500/30';
      case 'Advanced': return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/30';
    }
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            🛠️ Technical Proficiency
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tech Stack & <span className="gradient-text">Expertise Levels</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdown of technical skills with proficiency levels and years of experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {techStack.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 group animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 gradient-text group-hover:scale-105 transition-transform duration-300">{category.category}</h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 hover:bg-secondary/20 p-3 rounded-lg transition-all duration-300 hover:scale-102 group/skill">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-sm group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                          <Badge 
                            variant="outline" 
                            className={`text-xs transition-all duration-300 hover:scale-110 ${getProficiencyColor(skill.proficiency)}`}
                          >
                            {skill.proficiency}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground font-mono group-hover/skill:text-primary transition-colors duration-300">
                          {skill.years}
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">Proficiency</span>
                          <span className="text-xs font-mono group-hover/skill:text-primary transition-colors duration-300">{skill.level}%</span>
                        </div>
                        <div className="relative overflow-hidden">
                          <Progress value={skill.level} className="h-2 bg-secondary" />
                          <div 
                            className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out hover:brightness-110 ${getProgressColor(skill.level)}`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `slideInRight 1.5s ease-out ${(categoryIndex * 4 + skillIndex) * 0.1}s both`
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="glass-effect border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20 group">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-accent group-hover:scale-105 transition-transform duration-300">🎯 Industry Focus</h3>
              <div className="space-y-2">
                {[
                  'E-commerce & Retail Solutions',
                  'Financial Technology (FinTech)',
                  'Agricultural Technology (AgTech)',
                  'Educational Platforms',
                  'Data Analytics & Visualization'
                ].map((industry, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm hover:text-accent transition-colors duration-300 hover:translate-x-1">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:animate-pulse" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 group">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-primary group-hover:scale-105 transition-transform duration-300">🚀 Currently Learning</h3>
              <div className="space-y-2">
                {[
                  'Advanced React Patterns',
                  'Microservices Architecture',
                  'Deep Learning with TensorFlow',
                  'Cloud Computing (AWS/GCP)',
                  'Blockchain Development'
                ].map((learning, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm hover:text-primary transition-colors duration-300 hover:translate-x-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;