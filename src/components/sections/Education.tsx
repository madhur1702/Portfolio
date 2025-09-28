import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'SVKM’s Institute of Technology, Dhule',
      location: 'Maharashtra, India',
      period: '2023 - 2027',
      description: 'Focusing on programming, competitive coding, web development, and software engineering principles.',
      achievements: [
        'Technical Head & Webmaster of SVKMIOT ACM Student Chapter',
        'Secured Global Rank 633 in TCS CodeVita',
        'Winner of 4 coding competitions',
        '800 + Contributions to open-source projects',
      ]
    },
    {
      degree: 'Higher Secondary Certificate (12th)',
      institution: 'Jaihind Junior College',
      location: 'Maharashtra, India',
      period: '2021 - 2023',
      description: 'Science stream with Physics, Chemistry, Mathematics, and Information Technology.',
      achievements: [
        'Achieved 1st rank in IT subject',
  'Honored with a certificate 📜 and trophy 🏆 for outstanding performance',
      ]
    },
    {
      degree: 'Secondary School Certificate (10th)',
      institution: 'Netaji Day School',
      location: 'Gujarat, India',
      period: '2009 - 2021',
      description: 'Strong academic foundation with excellence in Mathematics and Science.',
      achievements: [
        'School Topper',
        '🎓 Honored as Student of the Year for the Batch 2020-21',
        '🎖️ Successfully cracked the Maharashtra Talent Search (MTS) Examination and Scholarship Examination'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and the foundation that shaped my technical expertise.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={edu.degree}
              className={`glass-card p-8 rounded-xl hover:bg-primary/5 transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left: Icon and Basic Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Middle: Degree and Institution */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Right: Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Education;
