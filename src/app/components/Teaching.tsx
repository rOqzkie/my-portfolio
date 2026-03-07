import { motion } from 'motion/react';
import { BookOpen, Users, Award, FileCode } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Teaching() {
  const timeline = [
    {
      year: '2024 - Present',
      role: 'Senior Instructor',
      institution: 'State University',
      courses: [
        'Web Development (React & TypeScript)',
        'Database Management Systems',
        'Full-Stack Development',
        'Software Engineering'
      ],
      achievements: [
        'Mentored 15+ capstone projects',
        'Developed new curriculum for modern web development',
        'Average student satisfaction rating: 4.8/5.0'
      ]
    },
    {
      year: '2022 - 2024',
      role: 'Part-Time Instructor',
      institution: 'Technical College',
      courses: [
        'PHP Programming',
        'JavaScript Fundamentals',
        'Web Design & Development',
        'Database Concepts'
      ],
      achievements: [
        'Supervised 10+ undergraduate research projects',
        'Introduced project-based learning approach',
        '90% student employment rate in tech industry'
      ]
    },
    {
      year: '2020 - 2022',
      role: 'Visiting Lecturer',
      institution: 'Community College',
      courses: [
        'Introduction to Programming',
        'Web Technologies',
        'Computer Applications'
      ],
      achievements: [
        'Developed hands-on lab materials',
        'Organized coding workshops',
        'Established industry partnerships'
      ]
    }
  ];

  const stats = [
    { icon: BookOpen, value: '12+', label: 'Courses Taught' },
    { icon: Users, value: '500+', label: 'Students Mentored' },
    { icon: Award, value: '25+', label: 'Capstone Projects' },
    { icon: FileCode, value: '100+', label: 'Lab Materials' },
  ];

  return (
    <section id="teaching" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Teaching & Academic Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shaping the next generation of developers through practical, industry-focused education
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center p-6 rounded-2xl border-2">
                <CardContent className="p-0 space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="rounded-2xl border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Timeline Marker */}
                    <div className="flex-shrink-0">
                      <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-xl font-semibold">
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className="text-muted-foreground">{item.institution}</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Courses */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Courses Taught:</h4>
                          <ul className="space-y-1">
                            {item.courses.map((course) => (
                              <li key={course} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1.5">•</span>
                                <span>{course}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement) => (
                              <li key={achievement} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1.5">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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
