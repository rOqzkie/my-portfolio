import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ProfessionalIdentity() {
  const identities = [
    {
      icon: Building2,
      title: 'Government Service',
      subtitle: 'State University & College (SUC)',
      description: 'Developing and maintaining institutional systems for academic management and student services.',
      highlights: [
        'Institutional Systems Development',
        'Public Sector Digital Transformation',
        'Compliance & Security Focus',
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: GraduationCap,
      title: 'Academic Experience',
      subtitle: 'University Instructor',
      description: 'Teaching advanced programming, web development, and database management to aspiring developers.',
      highlights: [
        'Full-Stack Development Courses',
        '500+ Students Mentored',
        'Curriculum Development',
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500/10',
    },
    {
      icon: Briefcase,
      title: 'Freelance Development',
      subtitle: 'Full-Stack Developer',
      description: 'Delivering custom web applications for local businesses and international clients across various industries.',
      highlights: [
        'React & TypeScript Expertise',
        'End-to-End Project Delivery',
        'International Client Portfolio',
      ],
      color: 'text-sky-600',
      bgColor: 'bg-sky-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Identity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unique blend of institutional expertise, academic excellence, and technical innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {identities.map((identity, index) => (
            <motion.div
              key={identity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow rounded-2xl border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <identity.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1">{identity.title}</h3>
                    <p className="text-sm text-muted-foreground">{identity.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {identity.description}
                  </p>
                  
                  <div className="pt-4 space-y-2">
                    {identity.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}