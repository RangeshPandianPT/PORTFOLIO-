import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

const AvailabilityScheduler = () => {
  const availability = [
    { day: 'Monday', slots: ['9:00 AM - 12:00 PM', '2:00 PM - 6:00 PM'], timezone: 'IST' },
    { day: 'Tuesday', slots: ['9:00 AM - 12:00 PM', '2:00 PM - 6:00 PM'], timezone: 'IST' },
    { day: 'Wednesday', slots: ['9:00 AM - 12:00 PM', '2:00 PM - 6:00 PM'], timezone: 'IST' },
    { day: 'Thursday', slots: ['9:00 AM - 12:00 PM', '2:00 PM - 6:00 PM'], timezone: 'IST' },
    { day: 'Friday', slots: ['9:00 AM - 12:00 PM', '2:00 PM - 5:00 PM'], timezone: 'IST' },
    { day: 'Saturday', slots: ['10:00 AM - 2:00 PM'], timezone: 'IST' },
    { day: 'Sunday', slots: ['Limited Availability'], timezone: 'IST' }
  ];

  const consultationTypes = [
    {
      type: 'Quick Consultation',
      duration: '15 minutes',
      description: 'Brief discussion about your project requirements',
      price: 'Free',
      color: 'border-green-500/30 bg-green-500/5'
    },
    {
      type: 'Technical Review',
      duration: '30 minutes',
      description: 'Code review, architecture discussion, or technical guidance',
      price: '$50',
      color: 'border-blue-500/30 bg-blue-500/5'
    },
    {
      type: 'Project Planning',
      duration: '60 minutes',
      description: 'Detailed project scope, timeline, and technology stack planning',
      price: '$100',
      color: 'border-purple-500/30 bg-purple-500/5'
    }
  ];

  const responseTime = {
    email: '< 24 hours',
    message: '< 4 hours',
    urgent: '< 2 hours'
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass-effect border-primary/30">
            📅 Schedule a Meeting
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Available for consultations, project discussions, and collaboration opportunities. 
            Based in <strong className="text-foreground">Chennai, India (UTC+5:30)</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Availability Schedule */}
          <div className="lg:col-span-2">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Weekly Availability</h3>
                  <Badge variant="outline" className="border-primary/30 bg-primary/10">
                    IST (UTC+5:30)
                  </Badge>
                </div>

                <div className="space-y-4">
                  {availability.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      <div className="font-semibold text-lg min-w-[100px]">{day.day}</div>
                      <div className="flex-1 mx-4">
                        {day.slots.map((slot, slotIndex) => (
                          <Badge 
                            key={slotIndex} 
                            variant="outline" 
                            className="mr-2 mb-2 border-accent/30 bg-accent/10"
                          >
                            {slot}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-semibold">Location & Timezone</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Chennai, Tamil Nadu, India • GMT+5:30 (IST) • Available for remote meetings worldwide
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Consultation Types */}
          <div className="space-y-6">
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Consultation Types
                </h3>

                <div className="space-y-4">
                  {consultationTypes.map((consultation, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${consultation.color}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{consultation.type}</h4>
                        <Badge variant="outline" className="border-current">
                          {consultation.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {consultation.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-lg">{consultation.price}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="glass-effect border-current hover:bg-current/10"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="glass-effect border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">⚡ Response Times</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Email Inquiries</span>
                    <Badge variant="outline" className="border-green-500/30 bg-green-500/10 text-green-500">
                      {responseTime.email}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Direct Messages</span>
                    <Badge variant="outline" className="border-blue-500/30 bg-blue-500/10 text-blue-500">
                      {responseTime.message}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Urgent Matters</span>
                    <Badge variant="outline" className="border-orange-500/30 bg-orange-500/10 text-orange-500">
                      {responseTime.urgent}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 btn-hover-lift"
                asChild
              >
                <a href="https://calendly.com/rangeshpandian" target="_blank" rel="noopener noreferrer">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule on Calendly
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full glass-effect border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Send Direct Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilityScheduler;