import { User, Heart, Coffee, Code } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
    { icon: Heart, label: 'Hackathons & Competitions', value: '5+' },
    { icon: User, label: 'Years Coding Experience', value: '2+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             A quick look at my journey, passions, and the things that drive me to
            grow as a programmer and creator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Competitive Programmer & Aspiring Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Madhur Bhandarkar, a Computer Engineering student (2023–2027) with a strong passion for problem-solving and building impactful digital solutions. From coding competitions like TCS CodeVita to hackathons, open-source projects and my role as Webmaster and Technical Head of the SVKMIOT ACM Student Chapter, I’m always looking for ways to challenge myself and grow.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies and contributing to open-source 
                projects.
              </p>
            </div>

            {/* Skills highlight */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">What I Work With</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-lg">
                  <h5 className="font-semibold text-primary mb-2">Frontend</h5>
                  <p className="text-sm text-muted-foreground">React, TypeScript, Tailwind</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h5 className="font-semibold text-accent mb-2">Backend</h5>
                  <p className="text-sm text-muted-foreground">Node.js, Python, Databases</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h5 className="font-semibold text-purple mb-2">AI & Problem Solving</h5>
                  <p className="text-sm text-muted-foreground">Python, OpenAI APIs, DSA</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <h5 className="font-semibold text-orange mb-2">Other Tools</h5>
                  <p className="text-sm text-muted-foreground">Git, GitHub, Figma, Linux</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto glass-card rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
               <img
    src="/1.jpeg"  // Put your image in the public folder
    alt="Madhur Bhandarkar"
    className="w-full h-full object-cover rounded-2xl"
  />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl floating-animation" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="glass-card p-6 rounded-lg text-center hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;