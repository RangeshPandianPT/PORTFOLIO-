import { Heart, Coffee, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BuiltByMe = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 px-4 border-t border-border/50">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Built with</span>
        <Heart className="h-4 w-4 text-red-500 animate-pulse" />
        <span>and lots of</span>
        <Coffee className="h-4 w-4 text-amber-600" />
        <span>by</span>
        <strong className="text-foreground">Rangesh</strong>
        <span>in Chennai</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-xs hover:bg-primary/10"
          asChild
        >
          <a 
            href="https://github.com/RangeshPandianPT" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Github className="h-3 w-3" />
            View Source
          </a>
        </Button>
      </div>
    </div>
  );
};

export default BuiltByMe;