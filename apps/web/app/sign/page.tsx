'use client';
import { Button, Card } from '@pandadoc-clone/ui';

export default function SigningPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <Card className="space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">Sign: Sales Proposal</h1>
            <p className="text-sm text-gray-500">You were invited to sign this document.</p>
          </div>
          <Button variant="ghost">Decline</Button>
        </div>
        <div className="border rounded-[0.3vw] p-4 bg-white min-h-[320px]">
          <p className="text-gray-600">Render document for signing with fields highlighted.</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <label className="flex flex-col gap-1">
              Signature
              <input className="border rounded-[0.3vw] px-3 py-2" placeholder="Type your name" />
            </label>
            <label className="flex flex-col gap-1">
              Date
              <input className="border rounded-[0.3vw] px-3 py-2" type="date" />
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> I agree to the terms
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>Finish signing</Button>
        </div>
      </Card>
    </div>
  );
}
