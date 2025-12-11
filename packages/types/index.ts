export type DocumentStatus = 'draft' | 'sent' | 'viewed' | 'completed' | 'expired' | 'declined';

export interface Recipient {
  id: string;
  name: string;
  email: string;
  role: 'viewer' | 'approver' | 'signer';
  signingUrl?: string;
}

export interface Document {
  id: string;
  title: string;
  status: DocumentStatus;
  content: any;
  variables: Record<string, string>;
  recipients: Recipient[];
}
