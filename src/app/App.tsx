import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalIdentity } from './components/ProfessionalIdentity';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Teaching } from './components/Teaching';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActionButton } from './components/FloatingActionButton';
import { Analytics } from './components/Analytics';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <ProfessionalIdentity />
        <TechStack />
        <Projects />
        <Teaching />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}