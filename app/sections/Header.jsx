'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { RedCTA } from '@/components/custom/buttons/RedCTA';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  {
    title: 'About Us',
    submenu: [],
  },
  {
    title: 'Support Services',
    submenu: ['Student Guides', 'FAQs', 'Scholarships', 'Health Insurance'],
  },
  {
    title: 'Migration Visas',
    submenu: ['Who We Are', 'Why Choose Us', 'Success Stories'],
  },
  {
    title: 'Resources',
    submenu: ['Blog', 'E-books', 'Tools'],
  },
  {
    title: 'Contact Us',
    submenu: [],
  },
];

const locations = ['Sydney, AUS', 'Melbourne, AUS', 'Brisbane, AUS'];

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Top Bar */}
      <div className="hidden lg:flex justify-center bg-white text-blue border-b border-gray-100 px-6">
        <div className="max-w-screen-2xl w-full flex justify-between items-center text-sm py-2">
          <div className="flex items-center gap-6">
            {/* Location Dropdown */}
            <div className="relative flex items-center gap-1 cursor-pointer" ref={dropdownRef}>
              <button
                onClick={() => setShowLocationDropdown((prev) => !prev)}
                className="flex items-center gap-1"
              >
                <MapPinIcon className="h-4 w-4 text-gray-700" />
                <span className="px-1 whitespace-nowrap">{selectedLocation}</span>
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
              {showLocationDropdown && (
                <ul className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-300 rounded shadow-md z-50">
                  {locations.map((loc) => (
                    <li
                      key={loc}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSelectedLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      {loc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex items-center gap-1">
              <EnvelopeIcon className="h-4 w-4 text-gray-700" />
              <span>info@aussieglobe.com.au</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative w-60">
              <span className="absolute inset-y-0 left-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="search"
                placeholder="Search"
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-md text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-red-200 p-1.5 rounded-full">
                <PhoneIcon className="h-5 w-5 text-red-800" />
              </div>
              <div className="flex flex-col">
                <span className="text-blue-900 font-semibold leading-none">Call us</span>
                <span className="text-red font-semibold leading-none text-sm">(02) 8592 4713</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 px-6 sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-3">
          <Image src="/icons/logo.svg" alt="Logo" width={120} height={36} priority />

          <nav className="hidden lg:flex gap-10 mx-auto text-sm font-medium text-blue-900">
            {navItems.map(({ title, submenu }) => (
              <div key={title} className="relative group">
                <button className="inline-flex items-center gap-1">
                  {title}
                  {submenu.length > 0 && (
                    <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>
                {submenu.length > 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-20">
                    <ul className="py-2">
                      {submenu.map((item) => (
                        <li
                          key={item}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <RedCTA text="Get a Free Consultation" className="hidden lg:flex text-sm" />
            <button
              onClick={() => setHamburgerOpen((prev) => !prev)}
              className="lg:hidden"
              aria-label="Toggle menu"
            >
              {hamburgerOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showMobileSearch && (
          <div className="lg:hidden px-4 pb-4">
            <div className="relative">
              <input
                type="search"
                autoFocus
                placeholder="Search"
                className="pl-4 pr-10 py-2 w-full border border-gray-300 rounded-md"
              />
              <button
                onClick={() => setShowMobileSearch(false)}
                className="absolute right-3 top-2.5"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Nav */}
      {hamburgerOpen && (
        <div
          className="fixed inset-0 bg-white z-50 px-6 py-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Mobile Menu Header: Logo + Close */}
          <div className="flex items-center justify-between mb-6">
            <Image src="/icons/logo.svg" alt="Logo" width={120} height={36} priority />
            <button
              onClick={() => setHamburgerOpen(false)}
              aria-label="Close menu"
              className="text-gray-700 focus:outline-none"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {navItems.map(({ title, submenu }) => (
            <div key={title}>
              <button
                onClick={() =>
                  setOpenMobileDropdown(openMobileDropdown === title ? null : title)
                }
                className="w-full flex justify-between items-center text-left text-sm font-semibold py-3 border-b border-gray-200"
                aria-expanded={openMobileDropdown === title}
                aria-controls={`submenu-${title.replace(/\s+/g, '')}`}
              >
                {title}
                {submenu.length > 0 && (
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      openMobileDropdown === title ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              {submenu.length > 0 && openMobileDropdown === title && (
                <ul
                  id={`submenu-${title.replace(/\s+/g, '')}`}
                  className="pl-4 space-y-2 text-sm text-gray-600"
                >
                  {submenu.map((item) => (
                    <li key={item} className="py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-6 pt-4">
            <div className="text-sm text-blue-800 mb-2">{selectedLocation}</div>
            <div className="text-sm text-blue-800 mb-2">info@aussieglobe.com.au</div>
            <div className="text-sm text-blue-800 mb-4">(02) 8592 4713</div>
            <RedCTA text="Get a Free Consultation" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
