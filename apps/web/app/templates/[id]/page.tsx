'use client';
import { useParams } from 'next/navigation';
import { AppShell } from '../../../components/AppShell';
import { Card, Button } from '@pandadoc-clone/ui';

export default function TemplateDetail() {
  const { id } = useParams();
  return (
    <AppShell>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Template {id}</h1>
              <p className="text-sm text-gray-500">Reusable blocks and variables</p>
            </div>
            <Button>Create from template</Button>
          </div>
          <div className="border rounded-[0.3vw] p-4 bg-white min-h-[240px] text-gray-600">
            Editable template canvas placeholder with variables and blocks.
          </div>
        </Card>
        <Card>
          <h2 className="font-semibold mb-2">Variables</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>company_name</span>
              <input className="border rounded-[0.3vw] px-2 py-1 text-sm" defaultValue="PandaDoc" />
            </div>
            <div className="flex items-center justify-between">
              <span>client_name</span>
              <input className="border rounded-[0.3vw] px-2 py-1 text-sm" defaultValue="Acme Inc." />
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
