import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Clock, MapPin, Calendar } from 'lucide-react';

const ProfessionalSummary = () => {
  const metrics = [
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Clock },
    { label: 'Technologies Mastered', value: '20+', icon: Badge },
    { label: 'Based in', value: 'Chennai, IN', icon: MapPin }
  ];

  return (
    <Card className="glass-effect border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
      <CardContent className="p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className="border-primary/30 bg-primary/10">
                Professional Summary
              </Badge>
              <Badge variant="outline" className="border-accent/30 bg-accent/10">
                📍 Available for Projects
              </Badge>
            </div>
            
            <h3 className="text-2xl font-bold mb-3 gradient-text">
              Full Stack Developer & Data Science Specialist
            </h3>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">2+ years</strong> of hands-on experience building scalable web applications 
              and AI-driven solutions. Specialized in React ecosystem, Python data science, and modern development practices. 
              Successfully delivered <strong className="text-foreground">15+ projects</strong> ranging from e-commerce platforms 
              to machine learning models.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <metric.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-lg font-bold gradient-text">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 btn-hover-lift"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
            
            <div className="text-center">
              <div className="text-xs text-muted-foreground mb-1">Response Time</div>
              <div className="text-sm font-medium">Usually within 24 hours</div>
              <div className="text-xs text-muted-foreground">Chennai, IST (UTC+5:30)</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessionalSummary;