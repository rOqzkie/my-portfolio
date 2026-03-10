import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from './ui/carousel';
import { cn } from './ui/utils';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { Loader2 } from 'lucide-react';

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { repos, loading, error } = useGitHubRepos();

  const scrollTo = useCallback(
    (index: number) => api?.scrollTo(index),
    [api],
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay: advances every 5 seconds, pauses on hover
  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Live from my GitHub — explore my latest repositories and open-source work
          </p>
        </motion.div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading repositories...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-destructive mb-2">Failed to load repositories</p>
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {repos.map((repo) => (
                <CarouselItem
                  key={repo.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard repo={repo} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-5 lg:-left-12" />
            <CarouselNext className="-right-4 sm:-right-5 lg:-right-12" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                )}
              />
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  );
}
