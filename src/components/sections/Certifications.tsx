import { Award, CheckCircle, Calendar, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      expiryDate: 'March 2026',
      credentialId: 'AWS-CSA-2023-001',
      description: 'Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: 'January 2023',
      expiryDate: 'January 2025',
      credentialId: 'GCP-PD-2023-002',
      description: 'Demonstrates ability to build scalable and reliable cloud-native applications using Google Cloud technologies.',
      skills: ['GCP Services', 'Kubernetes', 'Cloud Functions', 'DevOps'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    },
    {
      title: 'Microsoft Azure Fundamentals',
      issuer: 'Microsoft',
      date: 'November 2022',
      expiryDate: 'Never',
      credentialId: 'AZ-900-2022-003',
      description: 'Foundation-level knowledge of cloud services and how they are provided with Microsoft Azure.',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Compliance'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: 'September 2022',
      expiryDate: 'Never',
      credentialId: 'META-REACT-2022-004',
      description: 'Comprehensive certification covering React fundamentals, advanced patterns, and best practices.',
      skills: ['React', 'JavaScript', 'JSX', 'Component Design'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: 'July 2022',
      expiryDate: 'July 2025',
      credentialId: 'CKA-2022-005',
      description: 'Validates skills and knowledge to perform responsibilities of Kubernetes administrators.',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'May 2022',
      expiryDate: 'May 2025',
      credentialId: 'MDB-DEV-2022-006',
      description: 'Demonstrates proficiency in developing applications using MongoDB database.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
      logo: '/placeholder.svg',
      verifyLink: '#',
      downloadLink: '#',
      status: 'Active'
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-52 h-52 bg-accent/5 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-10 left-20 w-44 h-44 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications that validate my expertise across various technologies and platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className={`glass-card p-6 rounded-xl hover:bg-primary/5 transition-all duration-300 group ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        cert.status === 'Active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <CheckCircle className="h-6 w-6 text-green-400" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Skills Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <Calendar className="h-3 w-3" />
                    <span>Issued</span>
                  </div>
                  <div className="text-foreground">{cert.date}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-muted-foreground mb-1">
                    <Calendar className="h-3 w-3" />
                    <span>Expires</span>
                  </div>
                  <div className="text-foreground">{cert.expiryDate}</div>
                </div>
              </div>

              {/* Credential ID */}
              <div className="mb-4 text-sm">
                <div className="text-muted-foreground mb-1">Credential ID</div>
                <div className="text-foreground font-mono">{cert.credentialId}</div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Verify
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-muted-foreground">Total Certifications</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">6</div>
            <div className="text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted-foreground">Active Status</div>
          </div>
          <div className="glass-card p-6 rounded-xl text-center animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold gradient-text mb-2">2023</div>
            <div className="text-muted-foreground">Latest Certification</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Continuously updating my skills with the latest certifications
          </p>
          <Button className="glow-effect">
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;