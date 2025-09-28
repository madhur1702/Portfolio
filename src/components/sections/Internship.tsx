import { Briefcase, Calendar, MapPin, Users, TrendingUp } from 'lucide-react';

const Internship = () => {
  const internships = [
     {
      organization: 'SVKM IOT ACM Student Chapter',
      role: 'Technical Head',
      period: 'Sept 2025 - Present',
      type: 'Volunteering / Leadership',
      description: 'Led the technical team, organized coding workshops and tech events, and guided students in developing projects.',
      teamSize: '50+ members',
      technologies: ['React', 'Node.js', 'JavaScript', 'Tailwind CSS']
    },
    {
      organization: 'SVKM IOT ACM Student Chapter',
      role: 'Webmaster',
      period: 'Aug 2025 - Present',
      type: 'Volunteering / Leadership',
      description: 'Managed and maintained the official website, updated content, and ensured smooth website operations for events and announcements.',
      teamSize: 'Self-managed',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      organization: 'GirlScript Summer of Code',
      role: 'Open Source Contributor',
      period: 'July 2025 - Present',
      type: 'Open Source',
      description: 'Contributed to open source projects by fixing bugs, adding features, and improving documentation. Collaborated with global contributors.',
      teamSize: 'Collaborative Community',
      technologies: ['Git', 'GitHub', 'Open Source Workflow']
    }
  ];

  return (
    <section id="internship" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-56 h-56 bg-accent/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience & Volunteering
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my open source contributions and leadership roles in volunteering.
          </p>
        </div>

        <div className="space-y-12">
          {internships.map((internship, index) => (
            <div 
              key={internship.organization}
              className={`glass-card p-8 rounded-xl hover:bg-primary/5 transition-all duration-300 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full">
                      {internship.type}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {internship.organization}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-3">
                      {internship.role}
                    </p>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{internship.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{internship.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Internship;