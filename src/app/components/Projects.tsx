import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'E-Class Record System',
      category: 'Academic System',
      problem: 'Manual grade computation and record-keeping causing inefficiencies and errors in academic institutions.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      results: 'Reduced grade processing time by 70%, serving 5,000+ students across multiple departments.',
      liveUrl: '#',
    },
    {
      title: 'Student Grade Viewer Portal',
      category: 'Academic System',
      problem: 'Students lacked real-time access to their academic records and performance metrics.',
      techStack: ['React', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      results: 'Enabled 24/7 grade access for 10,000+ students with 99.9% uptime.',
      liveUrl: '#',
    },
    {
      title: 'University Enrollment System',
      category: 'Government System',
      problem: 'Paper-based enrollment process causing long queues and processing delays.',
      techStack: ['PHP', 'MySQL', 'jQuery', 'FPDF'],
      results: 'Digitized enrollment for 8,000+ students, reducing processing time from days to hours.',
      liveUrl: '#',
    },
    {
      title: 'Inventory Management Platform',
      category: 'Freelance - Local',
      problem: 'Small business struggling with stock tracking and order management.',
      techStack: ['React', 'Supabase', 'TypeScript', 'Recharts'],
      results: 'Improved inventory accuracy by 95% and reduced stock discrepancies.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Restaurant Reservation System',
      category: 'Freelance - International',
      problem: 'European restaurant needed modern booking system with payment integration.',
      techStack: ['React', 'Supabase', 'Stripe', 'Vite'],
      results: 'Increased bookings by 40% and streamlined customer management.',
      liveUrl: '#',
    },
    {
      title: 'Learning Management System',
      category: 'SaaS Platform',
      problem: 'Educational institutions needed affordable LMS alternative.',
      techStack: ['React', 'Supabase', 'TypeScript', 'Vite'],
      results: 'Deployed for 3 institutions with 2,000+ active users.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Alumni Tracking System',
      category: 'Academic System',
      problem: 'University struggled to maintain connections with graduates for accreditation.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
      results: 'Tracked 15,000+ alumni with automated survey distribution.',
      liveUrl: '#',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Freelance - Local',
      problem: 'Local retailer needed online presence with inventory sync.',
      techStack: ['React', 'Supabase', 'TypeScript', 'Stripe'],
      results: 'Generated $50K+ in online sales within first 6 months.',
      liveUrl: '#',
    },
    {
      title: 'Faculty Workload System',
      category: 'Government System',
      problem: 'Manual faculty scheduling causing conflicts and administrative overhead.',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'FullCalendar'],
      results: 'Automated scheduling for 200+ faculty members across 5 departments.',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A portfolio of impactful solutions across government, academic, and commercial sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
