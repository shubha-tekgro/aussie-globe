'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from './layout/Header';
import Footer from './layout/Footer';
import cebrabian from './icons/cebrabian.svg';
import toggleMenuIcon from './icons/toggleMenu.svg';
import togglecrossIcon from './icons/cross.svg';

const MenuItems = () => (
  <>
    <div className='hover:text-blue'>About Us</div>
    <div className='hover:text-blue flex items-center gap-1'>
      Support Services
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
    </div>
    <div className='hover:text-blue flex items-center gap-1'>
      Migration visas
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
    </div>
    <div className='hover:text-blue flex items-center gap-1'>
      Resources
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
    </div>
    <div className='hover:text-blue'>Contact Us</div>
  </>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className='w-full min-h-screen bg-white relative'>
      <Header />

      <button
        className='lg:hidden absolute top-14 right-4 z-50 text-black'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle menu'
      >
        <Image
          src={menuOpen ? togglecrossIcon : toggleMenuIcon}
          alt='Menu Icon'
          className='w-6 h-12'
        />
      </button>
      <div className='hidden lg:flex text-xl text-black justify-center gap-16 mt-20 xl:-ml-10 xl:gap-10'>
        <MenuItems />
      </div>

      <div
        className={`lg:hidden flex flex-col mt-24 gap-5 px-4 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100':'max-h-0 opacity-0'
        }`}
      >
        <MenuItems />


      </div>
    </main>
  );
}
