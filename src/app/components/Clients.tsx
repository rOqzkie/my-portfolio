import { motion } from 'motion/react';
import { Globe, Clock, CheckCircle, Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function Clients() {
  const testimonials = [
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Dean, College of Computer Studies',
      company: 'State University',
      content: 'John has been instrumental in modernizing our academic systems. His E-Class Record System has transformed how we manage student records and grades.',
      rating: 5,
      avatar: '👩‍🏫'
    },
    {
      name: 'Alessandro Bianchi',
      role: 'Restaurant Owner',
      company: 'Trattoria Roma, Italy',
      content: 'The reservation system exceeded our expectations. Professional communication despite the time difference, and the final product is exactly what we needed.',
      rating: 5,
      avatar: '👨‍🍳'
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      company: 'TechRetail Solutions',
      content: 'Working with John was seamless. He delivered our inventory platform ahead of schedule and provided excellent documentation and support.',
      rating: 5,
      avatar: '👩‍💼'
    },
  ];

  const highlights = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Clients from Philippines, USA, Europe, and Asia',
    },
    {
      icon: Clock,
      title: 'Remote Ready',
      description: 'Experienced in async communication and timezone management',
    },
    {
      icon: CheckCircle,
      title: 'Agile Workflow',
      description: 'Iterative development with regular progress updates',
    },
  ];

  return (
    <section id="clients" className="py-20 sm:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Collaboration</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by organizations worldwide for delivering exceptional solutions
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="text-center p-8 rounded-2xl border-2 hover:shadow-xl hover:border-primary/50 transition-all">
                <CardContent className="p-0 space-y-4">
                  <motion.div 
                    className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center mb-8">Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full rounded-2xl border-2 hover:shadow-2xl hover:border-primary/50 transition-all bg-gradient-to-br from-card to-card/50">
                  <CardContent className="p-6 space-y-4">
                    {/* Quote icon */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}