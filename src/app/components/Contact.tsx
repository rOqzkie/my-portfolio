import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { projectId, publicAnonKey } from '../../utils/supabase/info';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-75c2b73e/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', email: '', organization: '', message: '' });
      }, 3000);

    } catch (err) {
      console.error('Contact form error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      
      // Auto-dismiss error after 5 seconds
      setTimeout(() => {
        setError(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'roqueday30@gmail.com',
      href: 'mailto:roqueday30@gmail.com',
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/roque-day-394338384',
      href: 'https://linkedin.com/in/roque-day-394338384',
      color: 'text-sky-600',
      bg: 'bg-sky-500/10',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/rOqzkie',
      href: 'https://github.com/rOqzkie',
      color: 'text-cyan-600',
      bg: 'bg-cyan-500/10',
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Available for freelance projects, and academic collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="block"
              >
                <Card className="rounded-2xl border-2 hover:shadow-lg hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${method.bg} flex items-center justify-center flex-shrink-0`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold mb-1">{method.label}</p>
                        <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}

            {/* Availability */}
            <Card className="rounded-2xl border-2 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">Availability</h4>
                <p className="text-sm text-muted-foreground">
                  Currently accepting new projects. Response time: 24-48 hours.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="rounded-2xl border-2 relative overflow-hidden">
              {/* Success overlay */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center"
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">I'll get back to you within 24-48 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Error overlay */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm z-10 flex items-center justify-center"
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Error</h3>
                      <p className="text-muted-foreground">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-xl transition-all focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl transition-all focus:ring-2 focus:ring-primary"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      placeholder="Your company or institution"
                      value={formData.organization}
                      onChange={handleChange}
                      className="rounded-xl transition-all focus:ring-2 focus:ring-primary"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="rounded-xl resize-none transition-all focus:ring-2 focus:ring-primary"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto gap-2 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}