import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Projects = () => {
  const projects = [
    {
      title: 'CabEase - Cab Booking System',
      description: 'A full-stack cab booking system with user and driver dashboards, ride management, and booking history.',
      image: '/CabEase.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/CabEase-Cab_Booking_System',
      category: 'Full Stack',
    },
    {
      title: 'Bank Management System',
      description: 'A console-based banking application managing accounts, transactions, and customer details securely.',
      image: '/bank.png',
      technologies: ['C++', 'OOP', 'File Handling'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/Bank-Management-System',
      category: 'Backend',
    },
    {
      title: 'PhoneBook App',
      description: 'A CRUD application to manage contacts efficiently with search and filtering features.',
      image: '/PhoneBook.png',
      technologies: ['C#', '.NET MAUI', 'XAML', 'SQLite'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/PhoneBook-App',
      category: 'Mobile App',
    },
    {
      title: 'Kids Learning App',
      description: 'An interactive learning app for kids with educational content and quizzes to make learning fun.',
      image: '/KidsApp.png',
      technologies: ['C#', '.NET MAUI', 'XAML'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/Kids-Learning-App',
      category: 'Mobile App',
    },
    {
      title: 'GiggleBits',
      description: 'A fun app for kids that combines games, quizzes, and learning activities in an engaging interface.',
      image: '/GiggleBits.png',
      technologies: ['HTML','CSS','JavaScript'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/GiggleBits',
      category: 'WebApp',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with React and TypeScript, showcasing my projects and skills.',
      image: '/Portfolio.png',
      technologies: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveLink: '#',
      githubLink: 'https://github.com/madhur1702/portfolio',
      category: 'Frontend',
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card rounded-xl overflow-hidden hover:bg-primary/5 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a 
                    href={project.liveLink !== '#' ? project.liveLink : project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-md text-sm text-white hover:bg-primary/20 transition"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                 
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 border border-white/20 rounded-md text-sm text-white hover:bg-primary/20 transition"
                  >
                    <Github className="h-4 w-4 mr-2" />
            
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
              href="https://github.com/madhur1702" // or your projects page
              target="_blank"
              rel="noopener noreferrer"
            >
          <Button variant="outline" size="lg" className="glass-card border-primary/50 hover:border-primary">
            <Github className="h-4 w-4 mr-2" />
            View All Projects on GitHub
          </Button></a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
