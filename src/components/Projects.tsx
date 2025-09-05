import { ExternalLink, Github, Smartphone, ShoppingCart, MapPin, Shield } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'MyBike - Sustainable Bicycle Sharing System',
      description: 'A comprehensive bicycle sharing platform with real-time tracking, user management, and sustainable transportation solutions.',
      image: '/placeholder.svg',
      icon: Smartphone,
      tech: ['React', 'Spring Boot', 'Firebase', 'MongoDB', 'GPS'],
      github: '#',
      demo: '#',
      category: 'Full-Stack'
    },
    {
      title: 'Full-Stack E-Commerce Platform',
      description: 'Complete e-commerce solution with payment integration, inventory management, and modern responsive design.',
      image: '/placeholder.svg',
      icon: ShoppingCart,
      tech: ['React', 'Spring Boot', 'MongoDB', 'PayPal API', 'JWT'],
      github: '#',
      demo: '#',
      category: 'Web Development'
    },
    {
      title: 'IoT GPS Tracker',
      description: 'Real-time GPS tracking system using ESP32 and SIM800L module with Firebase integration for data storage.',
      image: '/placeholder.svg',
      icon: MapPin,
      tech: ['ESP32', 'SIM800L', 'Firebase', 'C++', 'IoT'],
      github: '#',
      demo: '#',
      category: 'IoT'
    },
    {
      title: 'MyBike Admin Dashboard',
      description: 'Administrative panel for bicycle tracking, user management, and analytics with real-time data visualization.',
      image: '/placeholder.svg',
      icon: Shield,
      tech: ['React', 'Charts.js', 'Firebase', 'TypeScript', 'Tailwind'],
      github: '#',
      demo: '#',
      category: 'Dashboard'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical expertise through real-world applications and innovative solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <project.icon className="text-primary group-hover:text-accent transition-colors duration-300" size={32} />
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-3 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of my work?
            </p>
            <Button 
              className="btn-outline"
              onClick={() => window.open('#', '_blank')}
            >
              <Github size={16} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;