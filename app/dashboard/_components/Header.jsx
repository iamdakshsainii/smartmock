'use client';
import { useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx'; // optional helper for classNames

export default function Header() {
  const path = usePathname();
  const { isLoaded, user } = useUser();
  const [isMobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/notes', label: 'Quick Revision', icon: BookOpen },
    { href: '/dashboard/upgrade', label: 'Upgrade' },
  ];

  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-[120px] h-[50px] flex-shrink-0">
          <Image
            src="/logo.png"
            alt="SmartMock Logo"
            fill
            sizes="(max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
            style={{ objectFit: 'contain' }}
            className="drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = path === href || (href.includes('#') && path.startsWith(href.split('#')[0]));
            return (
              <Link key={href} href={href}>
                <span
                  className={clsx(
                    'flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 cursor-pointer',
                    isActive ? 'bg-blue-800 text-white shadow-md' : 'hover:bg-blue-600 hover:text-white'
                  )}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Auth & Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {isLoaded && !user ? (
            <Link href="/dashboard">
              <Button className="bg-white text-blue-700 hover:bg-blue-100 px-5 py-2 rounded-lg font-semibold shadow-md transition-all duration-200">
                Login
              </Button>
            </Link>
          ) : (
            <UserButton />
          )}

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-blue-600 transition-all duration-200"
            onClick={() => setMobileOpen(!isMobileOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          'md:hidden bg-blue-700 overflow-hidden transition-all duration-300',
          isMobileOpen ? 'max-h-96 py-4 px-6 flex flex-col gap-3' : 'max-h-0'
        )}
      >
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = path === href || (href.includes('#') && path.startsWith(href.split('#')[0]));
          return (
            <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
              <span
                className={clsx(
                  'flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 cursor-pointer',
                  isActive ? 'bg-blue-800 text-white shadow-md' : 'hover:bg-blue-600 hover:text-white'
                )}
              >
                {Icon && <Icon className="w-5 h-5" />}
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
