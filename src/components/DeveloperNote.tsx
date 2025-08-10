import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Heart, Code2 } from 'lucide-react';

const DeveloperNote = () => {
  return (
    <Card className="glass-effect border-primary/20 my-8">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Badge variant="outline" className="border-accent/30">
              <Code2 className="h-3 w-3 mr-1" />
              Dev Note
            </Badge>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How this was built:</strong> This portfolio started as a weekend experiment 
              with React and Tailwind CSS. I spent way too much time perfecting the animations and probably drank 
              too much coffee ☕ in the process. The design system uses custom Poppins font because I got tired 
              of seeing Inter everywhere. All the gradients and hover effects? Yeah, those took longer than I'd like to admit.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
              <Coffee className="h-3 w-3" />
              <span>Built with React, TypeScript & excessive attention to detail</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeveloperNote;