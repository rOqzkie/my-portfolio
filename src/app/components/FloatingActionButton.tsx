import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: Mail, label: 'Email', href: 'mailto:roqueday30@gmail.com', color: 'bg-teal-500 hover:bg-teal-600' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/roque-day-394338384', color: 'bg-emerald-500 hover:bg-emerald-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/rOqzkie', color: 'bg-cyan-600 hover:bg-cyan-700' },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-20 right-0 space-y-3"
          >
            {actions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                className={`flex items-center gap-3 ${action.color} text-white px-4 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group`}
              >
                <action.icon className="h-5 w-5" />
                <span className="text-sm font-medium whitespace-nowrap">{action.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary text-primary-foreground rounded-full shadow-2xl flex items-center justify-center hover:shadow-primary/50 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}