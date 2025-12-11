'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@pandadoc-clone/ui';

type FormValues = { email: string; password: string; name: string };

export default function SignupPage() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('signup', data);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name')} placeholder="Full name" className="w-full border rounded-[0.3vw] px-3 py-2" />
        <input {...register('email')} placeholder="Email" className="w-full border rounded-[0.3vw] px-3 py-2" />
        <input
          {...register('password')}
          placeholder="Password"
          type="password"
          className="w-full border rounded-[0.3vw] px-3 py-2"
        />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        Have an account?{' '}
        <Link href="/login" className="text-[var(--color-primary)]">
          Log in
        </Link>
      </p>
    </div>
  );
}
