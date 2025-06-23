'use client';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BookOpen } from 'lucide-react'; // Removed HelpCircle as "How it Works?" is removed
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';

function Header() {
  const path = usePathname();
  const { isLoaded, user } = useUser();

  const links = [
    { href: "/", label: "Home" },
    { href: "/#faq", label: "FAQ" },
    { href: "/notes", label: "Quick Revision", icon: BookOpen },
    { href: "/dashboard/upgrade", label: "Upgrade" },
    // Removed: { href: "/how-it-works", label: "How it Works?", icon: HelpCircle },
  ];

  return (
    <header className="bg-blue-700 text-white shadow-lg sticky top-0 z-50"> {/* Slightly darker blue, more prominent shadow */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-3 flex justify-between items-center"> {/* Slightly reduced vertical padding */}

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2"> {/* Added flex for better alignment */}
          <Image src="/logo.png" width={120} height={50} alt="SmartMock Logo" className="drop-shadow-sm" /> {/* Slightly smaller logo, subtle shadow */}
          {/* <span className="font-bold text-xl text-blue-100">SmartMock</span> Optional: Add text logo */}
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-base font-medium"> {/* Increased gap, slightly larger font */}
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = path === href;
            return (
              <Link key={href} href={href}>
                <span
                  className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 cursor-pointer
                    ${isActive
                      ? 'bg-blue-800 text-white shadow-md' // Active state: solid background, more prominent
                      : 'hover:bg-blue-600 hover:text-white' // Hover state: subtle background change
                    }`}
                >
                  {Icon && <Icon className="w-5 h-5" />} {/* Slightly larger icon */}
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side Auth */}
        <div className="ml-4 flex items-center"> {/* Added flex and items-center for better vertical alignment */}
          {isLoaded && !user ? (
            <Link href="/dashboard">
              <Button className="bg-white text-blue-700 hover:bg-blue-100 px-5 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md"> {/* Refined button styling */}
                Login
              </Button>
            </Link>
          ) : (
            // Ensure UserButton is vertically aligned
            <div className="flex items-center">
              <UserButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
