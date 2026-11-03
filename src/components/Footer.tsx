import React from 'react';
import { VygrahaLogo } from './VygrahaLogo';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteData';
import { PageId } from './Navbar';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    onNavigate(page);
    scrollToTop();
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <button
              onClick={() => handleNav('home')}
              className="text-left"
              aria-label="Vygraha Interiors & Constructions"
            >
              <VygrahaLogo size="sm" />
            </button>
            <p className="text-neutral-600 leading-relaxed text-xs">
              End-to-End Architectural Construction &amp; Bespoke Interior Design in Bengaluru.
            </p>
            <div className="text-neutral-500 text-xs pt-1">
              Registered in Bengaluru, Karnataka – 560029.
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="space-y-2">
            <div className="text-neutral-900 font-semibold uppercase tracking-wider text-xs">
              Quick Links
            </div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-neutral-900">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-neutral-900">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-neutral-900">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-neutral-900">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-neutral-900">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Disciplines */}
          <div className="space-y-2">
            <div className="text-neutral-900 font-semibold uppercase tracking-wider text-xs">
              Services
            </div>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-neutral-900 text-left font-semibold text-neutral-800">
                  Construction
                </button>
                <div className="text-2xs text-neutral-500 pl-2 space-y-0.5 pt-0.5">
                  <div>• Home Construction</div>
                  <div>• Industrial Construction</div>
                  <div>• Commercial Construction</div>
                </div>
              </li>
              <li className="pt-1.5">
                <button onClick={() => handleNav('services')} className="hover:text-neutral-900 text-left font-semibold text-neutral-800">
                  Interiors
                </button>
                <div className="text-2xs text-neutral-500 pl-2 space-y-0.5 pt-0.5">
                  <div>• Residential (Custom Furniture)</div>
                  <div>• Commercial (Restaurant, Retail, Healthcare, Office)</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-2">
            <div className="text-neutral-900 font-semibold uppercase tracking-wider text-xs">
              Contact Us
            </div>
            <p className="text-neutral-600 leading-relaxed">
              {BRAND_INFO.location}
            </p>
            <div className="pt-1">
              <a href={`tel:${BRAND_INFO.phone1.replace(/\s/g, '')}`} className="block hover:text-neutral-900">
                {BRAND_INFO.phone1}
              </a>
              <a href={`tel:${BRAND_INFO.phone2.replace(/\s/g, '')}`} className="block hover:text-neutral-900">
                {BRAND_INFO.phone2}
              </a>
              <a href={`mailto:${BRAND_INFO.email}`} className="block hover:text-neutral-900 mt-1">
                {BRAND_INFO.email}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Vygraha Interiors &amp; Constructions. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 text-xs font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
