export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose dark:prose-invert max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <p>
          Welcome to Floriography Explored. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2 className="font-headline">Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        
        <h3 className="font-headline">Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
        </p>
        
        <h3 className="font-headline">AI Suggester Data</h3>
        <p>
          Any text or information you enter into the AI Suggester tool may be processed by a third-party AI provider (such as Google Gemini) to generate suggestions. We do not store these inputs or associate them with your personal account. We advise against entering any sensitive personal information into the tool.
        </p>

        <h2 className="font-headline">Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Email you regarding your account or order.</li>
          <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
          <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
        </ul>

        <h2 className="font-headline">Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="font-headline">Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us through the contact form on our website.
        </p>
        
        <p className="text-sm text-muted-foreground mt-8">
            Please note: This is a template privacy policy and is not legal advice. You should consult with a legal professional to ensure your privacy policy is compliant with all applicable laws and regulations.
        </p>

      </div>
    </div>
  );
}
