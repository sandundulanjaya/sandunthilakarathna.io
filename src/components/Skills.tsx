import { Code, Database, Server, Wrench, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C#', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C++'],
      color: 'text-primary'
    },
    {
      title: 'Frontend Frameworks',
      icon: Zap,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
      color: 'text-accent'
    },
    {
      title: 'Backend & APIs',
      icon: Server,
      skills: ['.NET Core', 'Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'JWT'],
      color: 'text-success'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'SQL Server', 'Firebase Firestore', 'MySQL', 'PostgreSQL'],
      color: 'text-primary'
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      skills: ['Git', 'Azure', 'Docker', 'Firebase', 'Postman', 'VS Code'],
      color: 'text-accent'
    },
    {
      title: 'Specialized Skills',
      icon: Shield,
      skills: ['IoT Development', 'Cybersecurity', 'ESP32', 'Arduino', 'Hardware Integration'],
      color: 'text-success'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning full-stack development, IoT systems, and emerging technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="project-card group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <category.icon 
                      className={`${category.color} group-hover:scale-110 transition-transform duration-300`} 
                      size={28} 
                    />
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Currently Learning & Exploring
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Advanced Cybersecurity',
                'Machine Learning',
                'Cloud Architecture',
                'Microservices',
                'Blockchain',
                'DevSecOps',
                'Kubernetes',
                'AI Integration'
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="skill-tag border-dashed border-2 border-primary/50 text-primary hover:bg-primary/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;