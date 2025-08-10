'use server';

interface State {
  message: string;
  error?: string | null;
  success: boolean;
}

// NOTE: This action simulates sending an email.
// In a real application, you would integrate an email service like Resend, SendGrid, or Nodemailer.
// For now, it logs the message to the console.

export async function sendMessageAction(prevState: State, formData: FormData): Promise<State> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return { 
        message: '',
        error: 'All fields are required.',
        success: false,
    };
  }

  // Simulate sending email
  console.log('--- New Contact Form Submission ---');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Destination Email:', 'atharvpatil269@gmail.com');
  console.log('------------------------------------');

  // In a real app, the try/catch block would handle errors from the email service.
  try {
    // await sendEmail({ to: 'atharvpatil269@gmail.com', from: email, subject: `Message from ${name}`, text: message });
    return {
      message: 'Your message has been sent successfully! We will get back to you shortly.',
      error: null,
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      message: '',
      error: 'Sorry, there was an error sending your message. Please try again later.',
      success: false,
    };
  }
}
