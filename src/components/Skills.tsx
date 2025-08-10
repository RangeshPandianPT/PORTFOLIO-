import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'CSS', level: 90, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'HTML', level: 95, icon: '🌐' },
        { name: 'Tailwind', level: 90, icon: '💨' }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 75, icon: '☕' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'C', level: 95, icon: '🔧' },
        { name: 'C++', level: 95, icon: '⚙️' }
      ]
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'SQL', level: 80, icon: '🗄️' },
        { name: 'MongoDB', level: 75, icon: '🍃' },
        { name: 'Firebase', level: 80, icon: '🔥' },
        { name: 'GitHub', level: 88, icon: '🐙' },
        { name: 'Tableau', level: 75, icon: '📊' }
      ]
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Angular', level: 75, icon: '🅰️' },
        { name: 'Next.js', level: 80, icon: '▲' },
        { name: 'Bootstrap', level: 85, icon: '🅱️' }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'bg-primary';
    if (level >= 75) return 'bg-accent';
    return 'bg-secondary';
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-20 left-10 text-2xl animate-bounce" style={{animationDelay: '1s'}}>⚛️</div>
        <div className="absolute top-40 right-20 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🐍</div>
        <div className="absolute bottom-32 left-20 text-2xl animate-bounce" style={{animationDelay: '3s'}}>🔥</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-bounce" style={{animationDelay: '4s'}}>⚡</div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-pulse-glow">
            💻 Technical Expertise
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Skills & <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up relative overflow-hidden"
              style={{animationDelay: `${categoryIndex * 0.1}s`}}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-4 relative z-10">
                <h3 className="text-lg font-bold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">{category.title}</h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="space-y-2 hover:bg-secondary/20 p-2 rounded-lg transition-all duration-300 hover:scale-102 group/skill animate-fade-in-up"
                      style={{animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`}}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm group-hover/skill:scale-125 group-hover/skill:rotate-12 transition-transform duration-300">{skill.icon}</span>
                          <span className="font-medium text-sm group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono group-hover/skill:text-primary transition-colors duration-300 group-hover/skill:scale-110">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative overflow-hidden group-hover/skill:scale-105 transition-transform duration-300">
                        <Progress 
                          value={skill.level} 
                          className="h-1.5 bg-secondary"
                        />
                        <div 
                          className={`absolute top-0 left-0 h-1.5 rounded-full transition-all duration-1000 ease-out hover:brightness-110 group-hover/skill:shadow-lg group-hover/skill:shadow-primary/30 ${getSkillColor(skill.level)}`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `slideInRight 1.5s ease-out ${(categoryIndex * 0.2) + (skillIndex * 0.1)}s both`
                          }}
                        />
                        {/* Animated shine effect */}
                        <div 
                          className="absolute top-0 left-0 h-1.5 w-8 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 group-hover/skill:animate-pulse"
                          style={{
                            animation: `slideInRight 2s ease-out ${(categoryIndex * 0.3) + (skillIndex * 0.15)}s infinite`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Flutter', 'MongoDB', 'Express.js', 'Node.js', 'Git', 'Agile', 
              'REST APIs', 'Responsive Design', 'Data Visualization', 'Machine Learning'
            ].map((tech, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="glass-effect border-primary/20 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Programming Languages</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-accent/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-muted-foreground group-hover:text-accent transition-colors duration-300">Frameworks & Tools</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Completed Projects</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;