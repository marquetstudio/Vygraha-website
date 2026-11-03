import React, { useState } from 'react';
import { VygrahaLogo } from './VygrahaLogo';
import { BRAND_INFO } from '../data/siteData';
import { Menu, X } from 'lucide-react';

export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo with exact provided artwork */}
        <button
          onClick={() => handleNavClick('home')}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded text-left shrink-0"
          aria-label="Vygraha Interiors & Constructions"
        >
          <VygrahaLogo size="md" />
        </button>

        {/* Desktop Page Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral-600"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`py-1.5 transition-colors relative ${
                  isActive
                    ? 'text-neutral-900 font-bold'
                    : 'hover:text-neutral-900 text-neutral-600'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Schedule Consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('contact')}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-neutral-900 rounded-md"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 rounded-lg"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-5 space-y-2">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-neutral-100 text-neutral-900 font-bold'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-200 text-xs text-neutral-500">
            <div>Direct: {BRAND_INFO.phone1}</div>
            <div className="truncate">{BRAND_INFO.email}</div>
          </div>
        </div>
      )}
    </header>
  );
};
