import { Code2, Palette, Database, Smartphone} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'text-primary',
      skills: [
        { name: 'C/C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 60 },
        { name: 'JavaScript/TypeScript', level: 80 },
      ]
    },
    {
      icon: Database,
      title: 'Core Engineering',
      color: 'text-accent',
      skills: [
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Computer Architecture', level: 78 },
        { name: 'Object Oriented Programming', level: 91 },
        { name: 'Operating Systems', level: 85 },
      ]
    },
    
    {
      icon: Smartphone,
      title: 'Web Development',
      color: 'text-orange',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Express.js', level: 70 },
      ]
    },
    {
      icon: Palette,
      title: 'Tools & Technologies',
      color: 'text-muted-foreground',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Linux/Ubuntu', level: 88 },
        { name: 'Git & Github', level: 92 },
        { name: 'Figma', level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, from programming and web development to tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-secondary ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;