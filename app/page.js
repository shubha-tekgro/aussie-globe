'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from './layout/Header';
import Footer from './layout/Footer';
// import Error from './layout/404';
import Homepage from './layout/Homepage';
import cebrabian from './icons/cebrabian.svg';
import toggleMenuIcon from './icons/toggleMenu.svg';
import togglecrossIcon from './icons/cross.svg';
import Cebrabian_right from './icons/cebrabian_right.svg';


const MenuItems = () => (
  <>
    <div className='hover:text-blue cursor-pointer'>About Us</div>
    <div className='hover:text-blue flex items-center gap-1 cursor-pointer'>
      Support Services
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
      
    </div>
    <div className='hover:text-blue flex items-center gap-1 cursor-pointer'>
      Migration visas
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
    </div>
    <div className='hover:text-blue flex items-center gap-1 cursor-pointer'>
      Resources
      <Image src={cebrabian} alt='Support Icon' className='w-4 h-4' />
    </div>
    <div className='hover:text-blue cursor-pointer'>Contact Us</div>
  </>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <main className='w-full min-h-screen bg-white relative overflow-hidden '>

  
      <Header />

      <button className='lg:hidden absolute top-2 items-start ml-4 z-50 text-black' onClick={() => setMenuOpen(!menuOpen)}
        aria-label='Toggle menu' >
        <Image
          src={menuOpen ? togglecrossIcon : toggleMenuIcon} alt='Menu Icon' className='w-5 h-12' />
      </button>
      <div className='hidden text-base text-black font-light justify-start px-6 gap-6 
      lg:px-32 lg:flex lg:gap-4 mt-10 xl:ml-96 lg:text-sm 2xl:text-xl font-header lg:ml-28'>
        <MenuItems />
      </div>
    

      <div
        className={`lg:hidden flex flex-col mt-16 gap-5 px-4 overflow-hidden transition-all duration-500 
                    ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 '
          }`}
      >
        <MenuItems />


          <div className="w-full flex mt-6 justify-center items-center text-white lg:hidden">
  <button className="w-full max-w-[90%] absolute bg-red px-6 py-2 rounded flex justify-between items-center">
    Get a Free Consultation
    <Image src={Cebrabian_right} alt="Arrow" className="h-4 w-4" />
  </button>
  
</div>
      </div>
<Homepage />
{/* <Error /> */}
<Footer />

    </main>
  );
}