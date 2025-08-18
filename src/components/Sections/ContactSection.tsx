import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    try {
      // Simulate email sending - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-20 bg-pure-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-red/5 via-transparent to-hero-red/5" />
        
        {/* Animated Border */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hero-red to-transparent animate-shimmer" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hero-red to-transparent animate-shimmer" style={{
          animationDelay: '1s'
        }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-display text-foreground mb-6 animate-fade-in-up">
              Let's Work Together
            </h2>
            <p className="text-body-large text-muted-foreground animate-fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input name="name" placeholder="Your Name" required className="bg-muted border-border focus:border-hero-red text-foreground placeholder:text-muted-foreground" />
                </div>
                
                <div>
                  <Input name="email" type="email" placeholder="Your Email" required className="bg-muted border-border focus:border-hero-red text-foreground placeholder:text-muted-foreground" />
                </div>
                
                <div>
                  <Textarea name="message" placeholder="Tell me about your project..." rows={6} required className="bg-muted border-border focus:border-hero-red text-foreground placeholder:text-muted-foreground resize-none" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-hero-red hover:bg-hero-red/90 text-pure-white font-semibold uppercase tracking-wide py-3 group">
                  {isSubmitting ? <>
                      <div className="w-4 h-4 border-2 border-pure-white/20 border-t-pure-white rounded-full animate-spin mr-2" />
                      Sending...
                    </> : <>
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-section text-foreground mb-6">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you have a project in mind, need design consultation, 
                    or just want to say hello, I'd love to hear from you.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <a href="mailto:hamza00990.khan@gmail.com" className="flex items-center space-x-4 text-muted-foreground hover:text-hero-red transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-hero-red/10 transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm">hamza00990.khan@gmail.com</p>
                    </div>
                  </a>

                  <a href="tel:+923353090387" className="flex items-center space-x-4 text-muted-foreground hover:text-hero-red transition-colors duration-300 group">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center group-hover:bg-hero-red/10 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm">+92 335 3090 387</p>
                    </div>
                  </a>

                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm">Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-6 bg-muted/50 rounded-xl border border-border/20">
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. For urgent projects, 
                    feel free to mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;