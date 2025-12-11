'use client';
import { useParams } from 'next/navigation';
import { AppShell } from '../../../components/AppShell';
import { Card, Button } from '@pandadoc-clone/ui';

export default function DocumentDetail() {
  const { id } = useParams();
  return (
    <AppShell>
      <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
        <Card className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Document {id}</h1>
              <p className="text-sm text-gray-500">Draft · 2 recipients</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost">Preview</Button>
              <Button>Send</Button>
            </div>
          </div>
          <div className="border rounded-[0.3vw] p-4 bg-white min-h-[300px]">
            <p className="text-gray-500">Rich text / block editor placeholder with variables like {{client_name}}.</p>
            <ul className="list-disc pl-4 text-sm text-gray-600">
              <li>Drag fields from the right panel</li>
              <li>Insert variables</li>
              <li>Collaborate via comments</li>
            </ul>
          </div>
        </Card>
        <div className="grid gap-3">
          <Card>
            <h2 className="font-semibold mb-2">Content blocks</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {['Text', 'Heading', 'Table', 'Checklist'].map((item) => (
                <div key={item} className="border rounded-[0.3vw] px-3 py-2 text-center bg-[var(--color-primary-soft)]">
                  {item}
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="font-semibold mb-2">Fields</h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Signature', 'Initials', 'Text', 'Checkbox', 'Date'].map((field) => (
                <span key={field} className="px-3 py-1 rounded-[0.3vw] bg-gray-100">
                  {field}
                </span>
              ))}
            </div>
          </Card>
          <Card>
            <h2 className="font-semibold mb-2">Recipients</h2>
            <ul className="text-sm space-y-2">
              <li>
                <div className="font-medium">Alex Johnson</div>
                <div className="text-gray-500 text-xs">Signer · alex@example.com</div>
              </li>
              <li>
                <div className="font-medium">Taylor Lee</div>
                <div className="text-gray-500 text-xs">Viewer · taylor@example.com</div>
              </li>
            </ul>
          </Card>
          <Card>
            <h2 className="font-semibold mb-2">Variables</h2>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>client_name</span>
                <input className="border rounded-[0.3vw] px-2 py-1 text-sm" defaultValue="Acme Inc." />
              </div>
              <div className="flex items-center justify-between">
                <span>project_start_date</span>
                <input className="border rounded-[0.3vw] px-2 py-1 text-sm" defaultValue="2024-07-01" />
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="font-semibold mb-2">AI</h2>
            <div className="space-y-2 text-sm">
              <Button className="w-full">Summarize with AI</Button>
              <textarea className="w-full border rounded-[0.3vw] p-2" rows={3} placeholder="Ask anything about this document" />
              <div className="bg-gray-50 rounded-[0.3vw] p-2 text-xs text-gray-600 min-h-[60px]">AI response will appear here.</div>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
