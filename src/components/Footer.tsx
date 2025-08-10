import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Heart, ArrowUp, Instagram, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RangeshPandianPT', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rangeshpandian-pt-428b04325/', label: 'LinkedIn' },
    { icon: Code, href: 'https://leetcode.com/u/RANGESHPANDIAN/', label: 'LeetCode' },
    { icon: Instagram, href: 'https://www.instagram.com/_rangesh_07/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:rangeshpandian@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-t from-secondary/20 to-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold gradient-text mb-2">RANGESHPANDIAN PT</h3>
              <p className="text-muted-foreground">
                Full Stack Developer & Data Science Enthusiast
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="glass-effect border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Highlight */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Python', 'JavaScript', 'Node.js', 'Data Science'].map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs glass-effect border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 rangeshpandian@gmail.com</p>
              <p>📱 +91 8190901516</p>
              <p>📍 Chennai, TamilNadu</p>
            </div>
            <div className="mt-4">
              <Badge variant="outline" className="border-green-500/30 text-green-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for work
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} RANGESHPANDIAN PT. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>and lots of ☕</span>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="glass-effect border-primary/30 hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;