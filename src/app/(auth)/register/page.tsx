'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { registerAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <Loader2 className="mr-2 size-4 animate-spin" />}
      Register
    </Button>
  );
}

export default function RegisterPage() {
  const [state, formAction] = useActionState(registerAction, { error: null });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (state?.error) {
      toast({
        title: 'Registration Failed',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (password !== confirmPassword) {
      event.preventDefault();
      toast({
        title: 'Password Mismatch',
        description: 'The passwords you entered do not match.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form action={formAction} onSubmit={handleFormSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create an Account</CardTitle>
          <CardDescription>Join our platform to streamline your examination process.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="organizationName">Organization Name</Label>
            <Input id="organizationName" name="organizationName" placeholder="e.g., Delhi Public School" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organizationType">Organization Type</Label>
            <Select name="organizationType" required>
              <SelectTrigger id="organizationType">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="government_body">Government Body</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Official Email</Label>
            <Input id="email" name="email" type="email" placeholder="contact@yourschool.edu" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
           <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <SubmitButton />
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
