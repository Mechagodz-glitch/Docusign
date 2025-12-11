'use client';
import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
import { Card, Button } from '@pandadoc-clone/ui';

const templates = [
  { id: 't1', title: 'SaaS Proposal', usage: '124 uses' },
  { id: 't2', title: 'Employment Offer', usage: '58 uses' },
];

export default function TemplatesPage() {
  return (
    <AppShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Templates</h1>
        <Button>Create template</Button>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {templates.map((tpl) => (
          <Card key={tpl.id} className="space-y-1">
            <Link href={`/templates/${tpl.id}`} className="text-[var(--color-primary)] font-semibold">
              {tpl.title}
            </Link>
            <div className="text-sm text-gray-500">{tpl.usage}</div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
