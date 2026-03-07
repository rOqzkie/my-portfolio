import { motion } from 'motion/react';
import { Code, Server, Wrench, Database, Layers, GitBranch, Box, Layout } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function TechStack() {
  const techCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vite', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'REST API', level: 90 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-sky-600',
      bgColor: 'bg-sky-500/10',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Supabase', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Box,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel', level: 85 },
      ],
    },
    {
      title: 'Architecture',
      icon: Layout,
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      skills: [
        { name: 'Microservices', level: 80 },
        { name: 'Clean Code', level: 90 },
        { name: 'Design Patterns', level: 85 },
        { name: 'Agile/Scrum', level: 85 },
      ],
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-600/10',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 90 },
        { name: 'GitLab', level: 85 },
        { name: 'Bitbucket', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across modern web development technologies and methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow rounded-2xl border-2">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full ${category.bgColor} ${category.color}`}
                            style={{
                              background: `linear-gradient(to right, currentColor, currentColor)`
                            }}
                          />
                        </div>
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