import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'SLT Digital Lab',
      location: 'Sri Lanka',
      period: '2025 (Upcoming)',
      type: 'Internship',
      description: 'Upcoming internship focusing on DevOps practices, CI/CD pipelines, and cloud infrastructure management.',
      highlights: [
        'Cloud infrastructure setup and management',
        'CI/CD pipeline development',
        'Automation and monitoring systems',
        'Collaboration with development teams'
      ],
      technologies: ['Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      status: 'upcoming'
    },
    {
      title: 'Software Development Intern',
      company: 'Orange Orel Corporation',
      location: 'Sri Lanka',
      period: '2025 (Upcoming)',
      type: 'Internship',
      description: 'Upcoming software development internship focusing on full-stack development and enterprise solutions.',
      highlights: [
        'Full-stack web application development',
        'Enterprise software solutions',
        'Code quality and best practices',
        'Agile development methodologies'
      ],
      technologies: ['React', 'Spring Boot', 'Database Management', 'API Development'],
      status: 'upcoming'
    },
    {
      title: 'University Projects & Research',
      company: 'University of Kelaniya',
      location: 'Kelaniya, Sri Lanka',
      period: '2024 - Present',
      type: 'Academic',
      description: 'Leading and contributing to various university projects spanning IoT, full-stack development, and research initiatives.',
      highlights: [
        'MyBike - Sustainable Bicycle Sharing System',
        'IoT GPS Tracking Solutions',
        'E-commerce Platform Development',
        'Research in Cybersecurity Applications'
      ],
      technologies: ['React', 'Spring Boot', 'Firebase', 'ESP32', 'MongoDB'],
      status: 'current'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'upcoming':
        return <Badge variant="outline" className="border-accent text-accent">Upcoming</Badge>;
      case 'current':
        return <Badge variant="outline" className="border-success text-success">Current</Badge>;
      default:
        return <Badge variant="secondary">Completed</Badge>;
    }
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey through internships, academic projects, and professional development.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <Card className="project-card ml-6">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                          <Building className="text-primary" size={20} />
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-primary font-medium">{exp.company}</p>
                      </div>
                      {getStatusBadge(exp.status)}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="project-card max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Ready to Collaborate?
                </h3>
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new opportunities and exciting projects.
                </p>
                <div className="flex gap-2 justify-center">
                  <button 
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-hero px-6 py-2 text-sm"
                  >
                    Let's Connect
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;