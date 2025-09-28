import { Trophy, Star, Medal, Award, Target, Zap } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Winner – Code-O-Thon, TECHNOCAVE 2025',
      organization: 'SVKM’s Institute of Technology',
      date: 'May 2025',
      description: 'Secured 1st place in the national-level Code-O-Thon organized by the Department of Computer Engineering. The competition included rounds on CS fundamentals, data structures & algorithms, and advanced coding challenges.',
      category: 'Competition',
      color: 'text-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Global Rank 633 – TCS CodeVita Season 12',
      organization: 'Tata Consultancy Services (TCS)',
      date: 'Jan 2025',
      description: 'Achieved a global rank of 633 among thousands of participants worldwide in the TCS CodeVita Season 12 competition.',
      category: 'Competition',
      color: 'text-green-500'
    }
, {
      icon: Star,
      title: 'Winner – CODE WARZ \'25',
      organization: 'ACM - TCET Student Chapter',
      date: 'Apr 2025',
      description: 'Secured 1st place in Day 2 of a national-level coding contest on HackerRank. Solved the Problem of the Day (POTD) faster than all other participants, showcasing skills in algorithms, optimization, and time-efficient coding under no-AI rules.',
      category: 'Competition',
      color: 'text-orange-500'
    },
    
    {
      icon: Medal,
      title: '3rd Place – DSA Olympiad 2025',
      organization: 'SVKM’s Institute of Technology, Dhule',
      date: 'Mar 2025',
      description: 'Secured 3rd place in DSA Olympiad 2025 organized in association with SVKMIOT ACM Student Chapter. The competition included Quiz, Debugging, and Problem-Solving rounds.',
      category: 'Competition',
      color: 'text-accent'
    },
   {
      icon: Zap,
      title: 'Runner-up – HACKSPARK CODEATHON',
      organization: 'Bannari Amman Institute of Technology (IEEE & IEEE WIE)',
      date: 'Aug 2025',
      description: 'Secured the Runner-up position in HACKSPARK CODEATHON, showcasing problem-solving and competitive coding skills.',
      category: 'Competition',
      color: 'text-blue-500'
    },
   {
  icon: Medal,
  title: 'Open Source Contributor',
  organization: 'GitHub',
  date: '2023-2025',
  description: 'Actively contributed to 15+ open source projects by fixing bugs, adding features, and improving documentation, collaborating with global contributors and following best practices in open source development.',
  category: 'Open Source',
  color: 'text-accent'
}

  ];

 
  return (
    <section id="achievements" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Highlights of my competitive programming journey and coding accomplishments.
          </p>
        </div>

       

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-secondary ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <span className="px-2 py-1 text-xs font-medium bg-accent/20 text-accent rounded">
                    {achievement.category}
                  </span>
                  <div className="text-sm text-muted-foreground mt-1">
                    {achievement.date}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-primary font-semibold">
                  {achievement.organization}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Achievements;