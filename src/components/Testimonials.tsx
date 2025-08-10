import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      content: 'Rangesh delivered exceptional work on our e-commerce platform. His attention to detail and ability to implement complex features while maintaining clean code was impressive. The 40% performance improvement he achieved exceeded our expectations.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Analytics',
      content: 'Working with Rangesh on our machine learning project was a great experience. His expertise in Python and data science helped us achieve 85% accuracy in our prediction models. Highly recommend for any AI/ML projects.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Priya Sharma',
      role: 'Lead Developer',
      company: 'AgriTech Innovations',
      content: 'Rangesh has a unique ability to understand complex agricultural problems and translate them into technical solutions. His work on HarvAI has genuinely helped farmers in our region improve their crop yields.',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Senior Engineer',
      company: 'GitHub Community',
      content: 'Great collaboration on open-source projects. Rangesh writes clean, well-documented code and is always willing to help other developers. His contributions to our React components library were valuable.',
      rating: 5,
      avatar: 'AR'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            💬 Client Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from clients and collaborators on project outcomes and professional experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass-effect border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Average Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;