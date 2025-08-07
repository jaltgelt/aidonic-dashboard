'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, List, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const NavLink = ({
    href,
    children,
    icon,
  }: {
    href: string;
    children: string;
    icon: React.ReactNode;
  }) => (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group block flex items-center gap-2
        ${
          isActive(href)
            ? 'text-primary bg-primary/10 border border-primary/20'
            : 'text-foreground hover:text-primary hover:bg-muted/50'
        }
      `}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon} {children}
      </span>
      {!isActive(href) && (
        <span className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
      )}
    </Link>
  );

  return (
    <nav className="bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              AIDONIC Dashboard
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <NavLink href="/" icon={<List className="w-4 h-4" />}>
                Distributions
              </NavLink>
              <NavLink href="/charts" icon={<BarChart3 className="w-4 h-4" />}>
                Analytics
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-2">
              <NavLink href="/" icon={<List className="w-4 h-4" />}>
                Distributions
              </NavLink>
              <NavLink href="/charts" icon={<BarChart3 className="w-4 h-4" />}>
                Analytics
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
