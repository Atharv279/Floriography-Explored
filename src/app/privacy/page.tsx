
export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          Welcome to Floriography Explored! Your privacy is incredibly important to us. This policy is designed to explain how we handle your information in a way that is clear and straightforward. Our goal is to help you understand what information we collect, why we collect it, and how we keep it safe.
        </p>

        <h2 className="font-headline">Our Philosophy on Privacy</h2>
        <p>
          We believe in privacy by design. That means we aim to collect as little personal information as possible while still providing you with a wonderful experience exploring the language of flowers.
        </p>
        
        <h2 className="font-headline">Information We Collect</h2>
        <p>
          Our website is primarily for information and exploration. Here’s a simple breakdown of the data we might handle:
        </p>
        
        <h3 className="font-headline">When You Contact Us</h3>
        <p>
          If you use our contact form, we will collect your name and email address. We only use this information to respond to your message. We won’t add you to any mailing lists or share your details with others.
        </p>
        
        <h3 className="font-headline">When You Use Our AI Suggester</h3>
        <p>
          Our AI Flower Suggester is designed to be anonymous. The occasion or sentiment you enter is sent to our AI provider (like Google Gemini) to generate your flower suggestion. 
        </p>
        <ul>
            <li>We do not store your prompts or the suggestions you receive.</li>
            <li>We do not link this information to you in any way.</li>
            <li><strong>Please do not enter any sensitive personal information</strong> (like names, addresses, or health details) into the suggester tool.</li>
        </ul>

        <h2 className="font-headline">How We Use Your Information</h2>
        <p>
          To put it simply, we use the information you provide for the purpose you provided it:
        </p>
        <ul>
          <li><strong>Contact Information:</strong> To reply to your questions and comments.</li>
          <li><strong>AI Suggester Input:</strong> To provide you with a creative flower suggestion.</li>
        </ul>
        <p>
          We do not use your information for advertising, and we do not sell your data to third parties. Ever.
        </p>

        <h2 className="font-headline">Security of Your Information</h2>
        <p>
          We take reasonable measures to protect the information you provide. Our site uses standard security protocols. However, please remember that no method of transmission over the Internet is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
        </p>

        <h2 className="font-headline">Changes to This Policy</h2>
        <p>
            We may update this privacy policy from time to time. The "Last updated" date at the top of this page will always be current. We encourage you to review this page periodically to stay informed.
        </p>

        <h2 className="font-headline">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please don’t hesitate to reach out to us through our <a href="/contact">contact page</a>. We're happy to help.
        </p>
        
      </div>
    </div>
  );
}
