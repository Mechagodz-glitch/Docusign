'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from '@pandadoc-clone/ui';

type FormValues = { email: string; password: string };

export default function LoginPage() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('login', data);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('email')} placeholder="Email" className="w-full border rounded-[0.3vw] px-3 py-2" />
        <input
          {...register('password')}
          placeholder="Password"
          type="password"
          className="w-full border rounded-[0.3vw] px-3 py-2"
        />
        <Button type="submit" className="w-full">
          Continue
        </Button>
      </form>
      <p className="mt-4 text-sm text-gray-500">
        No account?{' '}
        <Link href="/signup" className="text-[var(--color-primary)]">
          Sign up
        </Link>
      </p>
    </div>
  );
}
