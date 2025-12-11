import Link from 'next/link';
import { Button } from '@pandadoc-clone/ui';

export default function Home() {
  return (
    <main className="p-10 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">PandaDoc Clone</h1>
      <p className="max-w-2xl text-gray-700">
        A streamlined document automation and e-signature platform with AI assistance. Navigate to the dashboard to explore the
        experience.
      </p>
      <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/signup">
          <Button variant="ghost">Sign up</Button>
        </Link>
      </div>
    </main>
  );
}
