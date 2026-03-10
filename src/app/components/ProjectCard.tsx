import { motion } from 'motion/react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { GitHubRepo } from '../hooks/useGitHubRepos';

interface ProjectCardProps {
  repo: GitHubRepo;
}

// Map language names to gradient classes for visual variety
const languageColors: Record<string, string> = {
  TypeScript: 'from-blue-500/20 to-cyan-500/20',
  JavaScript: 'from-yellow-500/20 to-orange-500/20',
  Python: 'from-green-500/20 to-emerald-500/20',
  PHP: 'from-indigo-500/20 to-purple-500/20',
  Java: 'from-red-500/20 to-orange-500/20',
  HTML: 'from-orange-500/20 to-red-500/20',
  CSS: 'from-purple-500/20 to-pink-500/20',
  Vue: 'from-green-500/20 to-teal-500/20',
};

function formatRepoName(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ProjectCard({ repo }: ProjectCardProps) {
  const gradient = languageColors[repo.language ?? ''] ?? 'from-primary/20 to-accent/20';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full overflow-hidden rounded-2xl border border-border/60 hover:shadow-2xl hover:border-primary/40 transition-all duration-300 bg-card backdrop-blur-sm">
        {/* Project Header */}
        <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
              {repo.name.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {repo.language && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-background/90 backdrop-blur-sm text-foreground shadow-lg">
                {repo.language}
              </Badge>
            </div>
          )}

          {/* Stats on hover */}
          <div className="absolute bottom-4 left-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all">
            <span className="flex items-center gap-1 text-xs text-foreground/80 bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-xs text-foreground/80 bg-background/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
            </span>
          </div>
        </div>

        <CardContent className="p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
              {formatRepoName(repo.name)}
            </h3>
            {repo.description && (
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 leading-relaxed line-clamp-3">
                {repo.description}
              </p>
            )}
          </div>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div className="space-y-1.5 sm:space-y-2">
              <p className="text-xs sm:text-sm font-semibold">Topics:</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {repo.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Last Updated */}
          <p className="text-xs text-muted-foreground">
            Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            {repo.homepage && (
              <Button
                variant="default"
                size="sm"
                className="flex-1 gap-2 rounded-xl group/btn"
                asChild
              >
                <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 group-hover/btn:rotate-45 transition-transform" /> View Live
                </a>
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl group/btn"
              asChild
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}