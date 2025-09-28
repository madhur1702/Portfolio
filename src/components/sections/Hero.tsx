import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 fade-in-up">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">Hello,</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              I'm <span className="gradient-text">Madhur Bhandarkar</span>
            </h2>
          </div>

          {/* Typewriter effect */}
          <div className="text-xl md:text-2xl text-muted-foreground h-8 flex items-center justify-center">
            <span className="typewriter">Competitive Programmer</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driven by passion for coding, creativity and constant learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="glow-effect animate-glow-pulse">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            <a
              href="https://github.com/madhur1702" // or your projects page
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="glass-card border-primary/50 hover:border-primary">
                View My Work
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/madhur1702" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect">
              <Github className="h-6 w-6 text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/madhur-bhandarkar-9bb342288/" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect">
              <Linkedin className="h-6 w-6 text-foreground" />
            </a>
            <a href="mailto:bhandarkarmadhur02@gmail.com" className="p-3 glass-card rounded-full hover:bg-primary/20 transition-all duration-300 glow-effect">
              <Mail className="h-6 w-6 text-foreground" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-accent" />
      </button>
    </section>
  );
};

export default Hero;