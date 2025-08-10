'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendMessageAction } from '@/actions/send-message';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Loader } from 'lucide-react';

const initialState = {
  message: '',
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader className="animate-spin" /> : 'Send Message'}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(sendMessageAction, initialState);

  if (state.success) {
    return (
        <Card className="h-full flex flex-col justify-center items-center p-8 bg-secondary/30">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">Thank You!</CardTitle>
                <CardDescription>{state.message}</CardDescription>
            </CardHeader>
        </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we will get back to you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <Input name="name" placeholder="Your Name" required />
            <Input name="email" type="email" placeholder="Your Email" required />
            <Textarea name="message" placeholder="Your Message" required rows={5} />
          </div>
          <SubmitButton />
          {state.error && (
            <p className="text-sm font-medium text-destructive">{state.error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
