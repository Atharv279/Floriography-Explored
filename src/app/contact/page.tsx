import { ContactForm } from '@/components/contact-form';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
        <p className="text-muted-foreground mt-2 text-lg">We'd love to hear from you. Drop us a line below.</p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
            <div className="p-8 rounded-lg bg-secondary/50 border">
                 <h2 className="text-2xl font-headline mb-4">Get in Touch</h2>
                 <p className="text-muted-foreground mb-6">
                    Have a question about a flower, a suggestion for our AI, or just want to say hello? Use the form and we'll get back to you as soon as we can.
                 </p>
                 <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-primary" />
                        <a href="mailto:atharvpatil269@gmail.com" className="text-lg hover:text-primary transition-colors">
                            atharvpatil269@gmail.com
                        </a>
                    </div>
                 </div>
            </div>
        </div>
        <div>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}
