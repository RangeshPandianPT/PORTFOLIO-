import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      duration: '2024 - 2028',
      status: 'Currently Pursuing',
      highlights: [
        'Focused on Software Development and Data Science',
        'Relevant Coursework: Data Structures, Algorithms, Web Development',
        'Active in coding competitions and tech events'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Computer Science',
      institution: 'FAIRLANDS A FOUNDATION SCHOOL',
      location: 'Theni',
      duration: '2022 - 2024',
      status: 'Completed',
      highlights: [
        'Specialized in Computer Science and Mathematics',
        'Strong foundation in programming concepts',
        'Achieved excellent academic performance'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Multiple Platforms',
      year: '2025',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      link: 'https://drive.google.com/drive/folders/1wsS697trbYpm25r25858TX9lYW_u-fmV'
    },
    {
      title: 'Data Science Fundamentals',
      issuer: 'Online Certification',
      year: '2025',
      skills: ['Python', 'NumPy', 'Pandas', 'Data Visualization'],
      link: 'https://drive.google.com/drive/folders/1wspB_B1Vdg65H0ddZqHmiOfbYLHSqEYt'
    },
    {
      title: 'Job Simulation Project',
      issuer: 'Professional Experience',
      year: '2025',
      skills: ['Real-world Application', 'Problem Solving', 'Industry Standards'],
      link: 'https://drive.google.com/drive/folders/1FEoTYMcbEGWumTaU6ZPJe9vkksGEbUq0'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect">
            Academic Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and continuous learning journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Formal Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-fade-in">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <Badge 
                        variant={edu.status === 'Currently Pursuing' ? 'default' : 'secondary'}
                        className={`transition-all duration-300 hover:scale-110 ${edu.status === 'Currently Pursuing' ? 'bg-primary/10 text-primary border-primary/20' : ''}`}
                      >
                        {edu.status}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary group-hover:scale-105 transition-all duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground font-medium mb-2">{edu.field}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{edu.institution}</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Key Highlights:</h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-effect border-border/50 hover:border-accent/30 transition-all duration-500 group hover:scale-105 hover:shadow-xl hover:shadow-accent/10 animate-fade-in">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <Badge variant="outline" className="border-accent/30 text-accent hover:scale-110 transition-transform duration-300">
                        {cert.year}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent group-hover:scale-105 transition-all duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs glass-effect border-accent/20 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {cert.link && (
                      <Button 
                        asChild 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-accent/30 hover:bg-accent/10 hover:border-accent/50 hover:scale-105 transition-all duration-300"
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          View Certification
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Learning Philosophy Card */}
            <Card className="glass-effect border-primary/20 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">Continuous Learning</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in lifelong learning and staying updated with the latest technologies. 
                  Currently expanding my knowledge in cloud computing, DevOps, and advanced data science techniques.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-primary/20 hover:scale-110 hover:bg-primary/10 transition-all duration-300">Self-Motivated</Badge>
                  <Badge variant="outline" className="border-accent/20 hover:scale-110 hover:bg-accent/10 transition-all duration-300">Tech Enthusiast</Badge>
                  <Badge variant="outline" className="border-primary/20 hover:scale-110 hover:bg-primary/10 transition-all duration-300">Problem Solver</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Academic Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">2028</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Expected Graduation</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-accent/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 group">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">3+</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">Certifications</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-primary/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 group">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">CSE</div>
              <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">Specialization</div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-accent/20 text-center hover:scale-105 hover:shadow-lg hover:shadow-accent/20 transition-all duration-500 group">
            <CardContent className="p-4">
              <div className="text-2xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform duration-300">4+</div>
              <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors duration-300">Years of Study</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;