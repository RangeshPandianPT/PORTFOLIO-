import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2023',
      status: 'Certified',
      credentialId: 'META-RDC-2023-001',
      skills: ['React.js', 'JSX', 'Hooks', 'State Management'],
      verifyUrl: '#',
      featured: true
    },
    {
      title: 'Python for Data Science',
      issuer: 'IBM',
      date: '2023',
      status: 'Certified',
      credentialId: 'IBM-PDS-2023-002',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      verifyUrl: '#',
      featured: true
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University (Coursera)',
      date: '2023',
      status: 'Completed',
      credentialId: 'STAN-ML-2023-003',
      skills: ['ML Algorithms', 'TensorFlow', 'Neural Networks'],
      verifyUrl: '#',
      featured: false
    },
    {
      title: 'Advanced CSS and Sass',
      issuer: 'Udemy',
      date: '2022',
      status: 'Certified',
      credentialId: 'UDM-CSS-2022-004',
      skills: ['CSS3', 'Sass', 'Flexbox', 'Grid'],
      verifyUrl: '#',
      featured: false
    },
    {
      title: 'Git & GitHub Mastery',
      issuer: 'GitHub Education',
      date: '2022',
      status: 'Certified',
      credentialId: 'GH-GM-2022-005',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      verifyUrl: '#',
      featured: false
    },
    {
      title: 'Agile Project Management',
      issuer: 'Scrum Alliance',
      date: '2024',
      status: 'In Progress',
      credentialId: 'Expected March 2024',
      skills: ['Scrum', 'Agile', 'Project Management'],
      verifyUrl: '#',
      featured: false
    }
  ];

  const achievements = [
    {
      title: 'Top Contributor',
      description: 'React Community Discord - 2023',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'Hackathon Winner',
      description: 'AgriTech Innovation Challenge',
      icon: Award,
      color: 'text-green-500'
    },
    {
      title: 'Open Source Contributor',
      description: '50+ contributions across repositories',
      icon: CheckCircle,
      color: 'text-blue-500'
    },
    {
      title: 'Technical Speaker',
      description: 'Local React Meetup Chennai',
      icon: Award,
      color: 'text-purple-500'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Certified': return 'text-green-500 bg-green-500/10 border-green-500/30';
      case 'Completed': return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
      case 'In Progress': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/30';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            🏆 Credentials & Recognition
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and achievements demonstrating continuous learning and expertise
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Featured Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className={getStatusColor(cert.status)}>
                      {cert.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                      <span>•</span>
                      <span className="font-mono text-xs">{cert.credentialId}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-4 glass-effect border-primary/30 hover:bg-primary/10"
                      asChild
                    >
                      <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Verify Certificate
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">All Certifications</h3>
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-accent/30 transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <Badge variant="outline" className={`text-xs ${getStatusColor(cert.status)}`}>
                      {cert.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground font-mono">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-accent/30 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <achievement.icon className={`h-8 w-8 mx-auto mb-3 ${achievement.color}`} />
                  <h4 className="font-bold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;