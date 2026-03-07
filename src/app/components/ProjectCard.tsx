import { motion } from 'motion/react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  title: string;
  category: string;
  problem: string;
  techStack: string[];
  results: string;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export function ProjectCard({
  title,
  category,
  problem,
  techStack,
  results,
  liveUrl,
  githubUrl,
  image
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full overflow-hidden rounded-2xl border-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 bg-card backdrop-blur-sm">
        {/* Project Image/Thumbnail */}
        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute top-4 right-4">
            <Badge className="bg-background/90 backdrop-blur-sm text-foreground shadow-lg">
              {category}
            </Badge>
          </div>
          
          {/* Floating icon on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute bottom-4 left-4 w-10 h-10 bg-primary/90 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
          >
            <TrendingUp className="h-5 w-5 text-primary-foreground" />
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">
              <span className="font-semibold">Problem:</span> {problem}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-2">
            <p className="text-sm font-semibold">Impact:</p>
            <p className="text-sm text-muted-foreground">{results}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            {liveUrl && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 gap-2 rounded-xl group/btn"
                onClick={() => window.open(liveUrl, '_blank')}
              >
                <ExternalLink className="h-4 w-4 group-hover/btn:rotate-45 transition-transform" /> View Live
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-xl group/btn"
                onClick={() => window.open(githubUrl, '_blank')}
              >
                <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}