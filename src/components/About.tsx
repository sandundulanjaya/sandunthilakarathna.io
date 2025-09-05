import { User, GraduationCap, Target, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Award,
      value: '2+',
      label: 'Years Experience',
      color: 'text-primary'
    },
    {
      icon: Target,
      value: '10+',
      label: 'Projects Completed',
      color: 'text-accent'
    },
    {
      icon: GraduationCap,
      value: '3',
      label: 'Internship Experiences',
      color: 'text-success'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology and innovation, building the future one project at a time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-8 flex items-center justify-center shadow-elevated">
                  <User size={200} className="text-primary/50" />
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <GraduationCap className="text-primary" size={28} />
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm an Electronics & Computer Science undergraduate at the University of Kelaniya, 
                  passionate about creating innovative solutions that bridge the gap between hardware 
                  and software. My expertise spans full-stack development, IoT systems, and I'm 
                  actively pursuing knowledge in cybersecurity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With strong foundations in technologies like React, Spring Boot, Firebase, and 
                  hardware platforms like ESP32, I enjoy building end-to-end solutions that solve 
                  real-world problems. My goal is to contribute to the cybersecurity field while 
                  continuing to develop cutting-edge applications.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-foreground">Key Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    University of Kelaniya - Electronics & Computer Science
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Full-Stack Development with React, Spring Boot & Firebase
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    IoT Systems Development & Hardware Integration
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Aspiring Cybersecurity Specialist
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="project-card text-center group">
                <CardContent className="p-6">
                  <stat.icon className={`${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} size={40} />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;