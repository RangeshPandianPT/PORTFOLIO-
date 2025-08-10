import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, BarChart, TrendingUp, Users, Zap } from 'lucide-react';

const ProjectCaseStudies = () => {
  const caseStudies = [
    {
      title: 'HarvAI - Agricultural Intelligence Platform',
      problem: 'Small-scale farmers lacked access to modern agricultural insights, leading to reduced crop yields and inefficient resource usage.',
      solution: 'Developed an AI-powered platform providing real-time crop monitoring, pest prediction, and yield forecasting using machine learning algorithms.',
      impact: [
        { metric: '30% Increase', description: 'in crop yield predictions accuracy' },
        { metric: '50% Reduction', description: 'in water usage through smart irrigation' }
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'IoT Sensors', 'Real-time Analytics'],
      githubUrl: '#',
      liveUrl: 'https://harv-ai.netlify.app/',
      featured: true
    },
    {
      title: 'Alpha AI - Stock Market Prediction',
      problem: 'Investors needed accurate, data-driven insights for stock market trends to make informed decisions.',
      solution: 'Built an LSTM neural network model with interactive web interface for real-time stock price prediction and trend analysis.',
      impact: [
        { metric: '85% Accuracy', description: 'in price trend predictions' },
        { metric: '40% Faster', description: 'analysis compared to traditional methods' }
      ],
      technologies: ['Python', 'LSTM', 'TensorFlow', 'React', 'Real-time Data APIs'],
      githubUrl: 'https://github.com/RangeshPandianPT/Stock-Price-Trend-Prediction-with-LSTM.git',
      liveUrl: 'https://alpha-trendai.netlify.app/',
      featured: true
    }
  ];

  const getIcon = (index: number) => {
    const icons = [TrendingUp, BarChart, Users, Zap];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            📈 Case Studies
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Project <span className="gradient-text">Impact & Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world problems solved with measurable business impact and technical excellence
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {study.title}
                  </CardTitle>
                  {study.featured && (
                    <Badge variant="outline" className="border-primary/30 bg-primary/10">
                      ⭐ Featured Case Study
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-red-500">🎯 Problem</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-green-500">💡 Solution</h4>
                    <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold gradient-text flex items-center gap-2">
                    📊 Measurable Impact
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {study.impact.map((impact, impactIndex) => (
                      <Card key={impactIndex} className="glass-effect border-accent/30 bg-gradient-to-br from-accent/10 to-primary/5 hover:from-accent/20 hover:to-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 group">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors duration-300">
                              {getIcon(impactIndex)}
                            </div>
                            <div className="flex-1">
                              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform duration-300">{impact.metric}</div>
                              <div className="text-muted-foreground leading-relaxed">{impact.description}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">🛠️ Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                  <Button 
                    variant="outline" 
                    className="glass-effect border-primary/30 hover:bg-primary/10 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    asChild
                  >
                    <a href={study.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                  {study.liveUrl && study.liveUrl !== '#' && (
                    <Button 
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                      asChild
                    >
                      <a href={study.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCaseStudies;