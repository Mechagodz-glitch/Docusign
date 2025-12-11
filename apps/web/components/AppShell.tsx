import React from 'react';
import Link from 'next/link';
import { BellIcon } from './Icons';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/documents', label: 'Documents' },
  { href: '/templates', label: 'Templates' },
  { href: '/inbox', label: 'Inbox' },
  { href: '/settings', label: 'Settings' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="hidden md:flex flex-col gap-4 border-r border-[var(--color-border-subtle)] p-4 bg-white">
        <div className="text-xl font-bold text-[var(--color-primary)]">PandaDoc</div>
        <nav className="flex flex-col gap-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--color-primary)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex flex-col min-h-screen">
        <header className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-subtle)] bg-white sticky top-0">
          <div className="flex items-center gap-3 text-sm">
            <div className="font-semibold">Acme Workspace</div>
            <span className="text-gray-400">|</span>
            <input
              className="border border-[var(--color-border-subtle)] rounded-[0.3vw] px-3 py-2 text-sm"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-[0.3vw] hover:bg-[var(--color-primary-soft)]"><BellIcon /></button>
            <div className="w-8 h-8 bg-[var(--color-primary-soft)] rounded-[0.3vw] flex items-center justify-center text-[var(--color-primary)] font-bold">
              JD
            </div>
          </div>
        </header>
        <main className="p-4 bg-[#f8fafc] flex-1">{children}</main>
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-border-subtle)] flex justify-around py-2 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="px-2 py-1">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
