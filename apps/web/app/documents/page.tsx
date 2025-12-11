'use client';
import Link from 'next/link';
import { AppShell } from '../../components/AppShell';
import { Card, Button } from '@pandadoc-clone/ui';
import { DocumentStatus } from '@pandadoc-clone/types';

const docs = [
  { id: '1', title: 'Sales Proposal', status: 'draft' as DocumentStatus, updated: '2h ago' },
  { id: '2', title: 'MSA - Contoso', status: 'sent' as DocumentStatus, updated: '1d ago' },
  { id: '3', title: 'NDA - Beta', status: 'completed' as DocumentStatus, updated: '3d ago' },
];

const statusColor: Record<DocumentStatus, string> = {
  draft: 'bg-gray-100 text-gray-700',
  sent: 'bg-blue-50 text-blue-700',
  viewed: 'bg-amber-50 text-amber-700',
  completed: 'bg-green-50 text-green-700',
  expired: 'bg-red-50 text-red-700',
  declined: 'bg-red-100 text-red-700',
};

export default function DocumentsPage() {
  return (
    <AppShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Documents</h1>
        <Button>Create document</Button>
      </div>
      <div className="grid gap-3">
        <div className="flex gap-3 text-sm">
          {['All', 'Draft', 'Sent', 'Completed'].map((tab) => (
            <button key={tab} className="px-3 py-1 rounded-[0.3vw] bg-white border border-[var(--color-border-subtle)]">
              {tab}
            </button>
          ))}
        </div>
        <Card>
          <div className="grid grid-cols-[1fr_120px_120px] text-sm font-semibold mb-2">
            <div>Title</div>
            <div>Status</div>
            <div className="text-right">Updated</div>
          </div>
          {docs.map((doc) => (
            <div key={doc.id} className="grid grid-cols-[1fr_120px_120px] items-center py-2 text-sm border-t border-[var(--color-border-subtle)]">
              <Link href={`/documents/${doc.id}`} className="text-[var(--color-primary)] font-medium">
                {doc.title}
              </Link>
              <span className={`px-2 py-1 rounded-[0.3vw] text-xs ${statusColor[doc.status]}`}>{doc.status}</span>
              <div className="text-right text-gray-500">{doc.updated}</div>
            </div>
          ))}
        </Card>
      </div>
    </AppShell>
  );
}
