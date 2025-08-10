import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink, TrendingUp, Code, Brain } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Elevate Labs',
      position: 'AIML Intern',
      duration: 'July - August',
      location: 'Bengaluru',
      type: 'Internship',
      description: 'Developed an AI-powered stock market tracker using machine learning algorithms. Implemented predictive models for market analysis and real-time tracking capabilities.',
      technologies: ['AIML', 'Stock Market Analysis', 'Predictive Modeling', 'Machine Learning'],
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-600'
    },
    {
      company: 'Edunet powered by IBM',
      position: 'AIML Intern',
      duration: 'July - August',
      location: 'Bengaluru',
      type: 'Internship',
      description: 'Built a smart irrigation system using artificial intelligence and machine learning. Developed intelligent water management solutions with automated decision-making capabilities.',
      technologies: ['AIML', 'IoT', 'Smart Systems', 'Automation'],
      icon: Brain,
      color: 'from-green-500 to-teal-600'
    },
    {
      company: 'CodTech Solutions',
      position: 'Web Developer Intern',
      duration: 'June - July',
      location: 'Hyderabad',
      type: 'Internship',
      description: 'Focused on frontend development using modern technologies. Designed user interfaces with performance and improved application functionality.',
      technologies: ['Frontend', 'UI/UX', 'Performance Optimization'],
      icon: Code,
      color: 'from-orange-500 to-red-600'
    },
    {
      company: 'Future Interns',
      position: 'Full Stack Developer',
      duration: 'June - July',
      location: 'Bengaluru',
      type: 'Internship', 
      description: 'Built and maintained full-stack web applications using React.js, Node.js, Express.js and MongoDB. Developed and optimized applications with enhanced user experience and improved application scalability.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      icon: Code,
      color: 'from-purple-500 to-pink-600'
    },
    {
      company: 'CodeAlpha',
      position: 'Frontend Developer',
      duration: 'June - July',
      location: 'Lucknow',
      type: 'Internship',
      description: 'Focused on frontend development using modern technologies like JavaScript, HTML, CSS. Built innovative frontend frameworks with real-time data and 50% performance improvement in loading times.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Performance Optimization'],
      icon: Code,
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300">
            <TrendingUp className="w-3 h-3 mr-1" />
            Career Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A timeline of my professional journey and contributions in the tech industry
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line with Gradient */}
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-60 blur-sm" />
          <div className="absolute left-4 lg:left-1/2 lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-12 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Enhanced Timeline Dot with Icon */}
                  <div className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 z-20">
                    <div className="w-14 h-14 bg-gradient-to-br bg-card border-4 border-primary/20 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-110 transition-transform duration-300">
                      <div className={`w-8 h-8 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Card */}
                  <div className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${index % 2 === 0 ? '' : 'lg:mr-20'}`}>
                    <Card className="glass-effect border-border/50 hover:border-primary/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-primary/10 transform hover:-translate-y-2">
                      <CardContent className="p-6 relative overflow-hidden">
                        {/* Subtle Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        <div className="space-y-4 relative z-10">
                          <div className="flex flex-wrap items-center gap-2 justify-between">
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                              <IconComponent className="w-3 h-3 mr-1" />
                              {exp.type}
                            </Badge>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{exp.duration}</span>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {exp.position}
                            </h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-3">
                              <span className="font-medium gradient-text">{exp.company}</span>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span className="text-sm">{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge 
                                key={techIndex} 
                                variant="outline" 
                                className="text-xs glass-effect border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up" style={{animationDelay: '1s'}}>
          <Card className="glass-effect border-primary/20 inline-block hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group">
            <CardContent className="p-8 relative overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center animate-pulse-glow">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 gradient-text">Looking for New Opportunities</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  I'm currently open to full-time positions and exciting projects
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 px-4 py-2 text-sm transition-all duration-300">
                    ✨ Available
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 hover:bg-accent/10 px-4 py-2 text-sm transition-all duration-300">
                    🌍 Remote Friendly
                  </Badge>
                  <Badge variant="outline" className="border-primary/30 hover:bg-primary/10 px-4 py-2 text-sm transition-all duration-300">
                    🚀 Ready to Start
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;