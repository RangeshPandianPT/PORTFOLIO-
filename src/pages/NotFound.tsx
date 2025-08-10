import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertCircle, Coffee, FileText, HelpCircle, Home } from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/#about', icon: FileText },
    { name: 'Projects', href: '/#projects', icon: HelpCircle },
    { name: 'Contact', href: '/#contact', icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-muted/30 px-6">
      <Card className="w-full max-w-md glass-effect border-border/50">
        <CardHeader className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-primary" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold gradient-text mb-2">404</CardTitle>
            <CardDescription className="text-lg">
              Oops! The page you're looking for doesn't exist.
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Don't worry, you can find your way back to the homepage or explore other sections.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="glass-effect border-primary/30 hover:bg-primary/10 h-auto p-3 flex flex-col items-center gap-2"
                asChild
              >
                <a href={link.href}>
                  <link.icon className="h-5 w-5" />
                  <span className="text-sm">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-300"
            asChild
          >
            <a href="/">
              Take me home
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
