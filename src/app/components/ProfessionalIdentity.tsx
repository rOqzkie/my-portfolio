import { motion } from 'motion/react';
import { Building2, GraduationCap, Briefcase } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ProfessionalIdentity() {
  const identities = [
    {
      icon: Building2,
      title: 'Government Service',
      subtitle: 'State University & College (SUC)',
      description: 'Data Processor of the Office of the Registrar. (Former Graduate School Secretary and ICT Staff)',
      highlights: [
        'Encodes and manages student records with precision',
        'Public Sector Digital Transformation',
        'Compliance & Security Focus',
      ],
      color: 'text-teal-600',
      bgColor: 'bg-teal-500/10',
    },
    {
      icon: GraduationCap,
      title: 'Academic Experience',
      subtitle: 'Part-time Instructor',
      description: 'Teaching data structures and algorithms, embedded systems, and automata theory and formal languages to aspiring developers.',
      highlights: [
        'Programming and Theory Courses',
        '100+ Students Mentored',
        'Curriculum Development',
      ],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-500/10',
    },
    {
      icon: Briefcase,
      title: 'Freelance Development',
      subtitle: 'Full-Stack Developer',
      description: 'Delivering custom web applications for local clients and national clients in education and various industries.',
      highlights: [
        'React & TypeScript Expertise',
        'End-to-End Project Delivery',
        'National Client Portfolio',
      ],
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-500/10',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Professional Identity</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A unique blend of institutional expertise, academic excellence, and technical innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {identities.map((identity, index) => (
            <motion.div
              key={identity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 rounded-2xl border border-border/60 hover:border-primary/30">
                <CardContent className="p-5 sm:p-6 lg:p-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <identity.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{identity.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{identity.subtitle}</p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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