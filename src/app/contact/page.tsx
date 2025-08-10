import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Get in Touch</h1>
          <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto">
            Whether you have a question about a flower's meaning, a suggestion for our AI, or just want to share a story, we'd love to hear from you.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          
          <div className="md:col-span-2">
            <div className="p-8 rounded-lg bg-secondary/50 border border-border h-full flex flex-col">
              <h2 className="text-3xl font-headline text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                We read every message and love connecting with our community. Please feel free to send us your thoughts directly via email. We aim to respond within two business days.
              </p>
              <div className="space-y-6 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <a href="mailto:atharvpatil269@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      atharvpatil269@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
