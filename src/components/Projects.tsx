import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';
import workspaceImage from '@/assets/workspace-setup.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'HarvAI',
      description: 'An intelligent agricultural assistant designed to empower small-scale farmers with AI-driven insights. From smart irrigation scheduling to pest prediction and crop yield forecasting, HarvAI harnesses the power of machine learning and real-time data to boost productivity, reduce resource usage, and support sustainable farming practices. With a user-friendly interface and local language support, HarvAI bridges the gap between traditional farming and modern agri-tech.',
      technologies: ['AI', 'Machine Learning', 'Agriculture Tech', 'Python', 'Data Analysis', 'IoT', 'Real-time Data'],
      githubUrl: '#', // Add GitHub URL when available
      liveUrl: 'https://harv-ai.netlify.app/',
      type: 'AI/Agriculture',
      featured: true
    },
    {
      title: 'Alpha AI',
      description: 'A comprehensive web application that uses LSTM (Long Short-Term Memory) neural networks to predict stock price trends. Features real-time data analysis, interactive charts, and machine learning models for accurate financial forecasting.',
      technologies: ['Python', 'LSTM', 'TensorFlow', 'Machine Learning', 'Data Analysis', 'Web Development'],
      githubUrl: 'https://github.com/RangeshPandianPT/Stock-Price-Trend-Prediction-with-LSTM.git',
      liveUrl: 'https://alpha-trendai.netlify.app/',
      type: 'Machine Learning',
      featured: true
    },
    {
      title: 'Data Science Projects',
      description: 'A collection of comprehensive data science projects showcasing various machine learning algorithms, data analysis techniques, and statistical modeling. Includes exploratory data analysis, predictive modeling, and data visualization projects.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter'],
      githubUrl: 'https://github.com/RangeshPandianPT/DATA-SCIENCE-PROJECT.git',
      type: 'Data Science',
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden" id="projects">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute top-60 right-40 w-3 h-3 bg-accent/30 rotate-45 animate-spin-slow" style={{animationDelay: '3s'}} />
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30 hover:border-primary/50 transition-all duration-300 animate-pulse-glow">
            💻 Portfolio
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="gradient-text hover:scale-105 transition-transform duration-300 inline-block">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Showcasing innovative solutions and technical expertise through featured projects and cutting-edge applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 animate-fade-in-up relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="outline" 
                      className="border-primary/30 text-primary bg-primary/10"
                    >
                      {project.type}
                    </Badge>
                    {project.featured && (
                      <Badge 
                        variant="outline" 
                        className="border-white/30 text-white bg-white/10"
                      >
                        ⭐ Featured
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 glass-effect border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workspace Showcase */}
        <div className="mt-16 mb-12">
          <div className="relative rounded-2xl overflow-hidden glass-effect border border-border/20 max-w-4xl mx-auto">
            <img 
              src={workspaceImage} 
              alt="Modern developer workspace with iMac setup"
              className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-effect p-6 rounded-xl border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">Professional Development Environment</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Equipped with modern tools and technologies to deliver high-quality, scalable solutions for complex challenges.
                </p>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline" className="border-white/30 text-white bg-white/10">Modern Stack</Badge>
                  <Badge variant="outline" className="border-white/30 text-white bg-white/10">Clean Code</Badge>
                  <Badge variant="outline" className="border-white/30 text-white bg-white/10">Best Practices</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-effect border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in collaboration?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, innovative ideas, and opportunities to create something amazing together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300 glow-effect"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  className="glass-effect border-primary/30 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://github.com/RangeshPandianPT" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;