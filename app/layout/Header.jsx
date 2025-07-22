'use client';
import { useState } from 'react';
import Image from 'next/image';
import LocationIcon from '../icons/location.svg';
import MailIcon from '../icons/mail-info.svg';
import SearchIcon from '../icons/search.svg';
import PhoneIcon from '../icons/phone.svg';
import Logo from '../icons/logo.svg';
import Cebrabian_right from '../icons/cebrabian_right.svg';
import searchcross from '../icons/search_cross.svg';
import Cebrabian_down2 from '../icons/cebrabian_down2.svg';

const Header = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <>

      <nav className='text-blue gap-9 hidden lg:flex py-3 xl:ml-64 lg:ml-8'>
        <div className='flex items-center space-x-2'>
          <Image src={LocationIcon} alt='Location' className='w-6 h-6 ' />
          <span className='whitespace-nowrap'>Sydney, AUS</span>
          <Image src={Cebrabian_down2} alt='Arrow' className='w-3' />
        </div>
        <div className='flex items-center space-x-2 ml-4'>
          <Image src={MailIcon} alt='Mail' className='w-6 h-6' />
          <span>info@aussieglobe.com.au</span>
        </div>
      </nav>

      <div className='hidden lg:block absolute top-12 ml-64 lg:ml-8 xl:ml-64'>
        <Image src={Logo} alt='Logo' className='w-40' />
      </div>

      <div className=' justify-center w-full hidden lg:flex ml-52 -mt-10  lg:ml-48'>
        <div className='relative flex ml-96 w-56'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <Image src={SearchIcon} alt='Search' className='h-5 w-5' />
          </span>
          <input placeholder='Search' type='text' className='pl-10 pr-4 py-2 w-full text-blue bg-gray-300 border 
          border-gray-300 rounded-md placeholder-blue focus:outline-none focus:ring-2 focus:ring-gray-300' />
        </div>
      </div>
      <div className='flex justify-center items-center w-full p-2 lg:hidden '>
        <div className='relative flex items-center w-full justify-center md:ml-80 -mt-2'>

          <button onClick={() => setShowMobileSearch(true)} className='fixed top-5 right-36 z-50 md:right-44'>
            <Image src={SearchIcon} alt='Search' className='h-5 w-5' />
          </button>

          <div className={`relative mt-2 w-full mr-4 transition-all duration-500 ease-in-out transform ${showMobileSearch ?
            'translate-x-0 opacity-200' : 'translate-x-20 opacity-0 pointer-events-none md:ml-96 md:mt-2'}`}>

            <input type='text' placeholder='Search' autoFocus={showMobileSearch} className='pl-4 pr-10 py-1 text-sm w-full text-black bg-white 
              border border-gray-300 rounded-md placeholder-blue focus:outline-none focus:border-gray-500 mt-16 md:w-80 md:mt-2 md:-ml-20 '
            />

            <button
              onClick={() => setShowMobileSearch(false)}
              className='absolute right-4 top-[4.5rem]  z-50 md:-mt-14 md:mr-44'>
              <Image src={searchcross} alt='Close' className='h-4 w-4' />
            </button>
          </div>

        </div>
      </div>

      <div className=' justify-end items-center space-x-2 mr-60 -mt-12 whitespace-nowrap hidden lg:flex lg:mr-72'>
        <div className='w-8 h-8 bg-red-200 mt-2 flex items-center justify-center rounded'>
          <Image src={PhoneIcon} alt='Phone' className='w-6' />
        </div>
        <div className='flex flex-col'>
          <div className='text-blue-900 font-semibold -m-2 ml-1 mt-2'>Call us</div>
          <span className='text-sm text-red font-semibold'>(02) 8592 4713</span>
        </div>
      </div>

      <div className='flex justify-end items-center space-x-1 -mt-24 text-sm px-2 lg:hidden md:mr-4' >
        <div className='w-6 h-6 md:w-8 md:h-7 bg-red-200  flex items-center justify-center rounded md:mt-14'>
          <Image src={PhoneIcon} alt='phone' className='w-4 md:w-5' />
        </div>
        <div className='lg:flex flex-col whitespace-nowrap text-xs mt-1 sm:-ml-4 md:ml-8 md:text-sm md:mt-14'>
          <div className='text-blue-900 font-semibold -m-1 ml-1'>Call us</div>
          <span className=' text-red font-semibold'>(02) 8592 4713 </span>
        </div>
      </div>

      <div className='hidden lg:block border-t opacity-150 my-2 ml-64 mr-24 bg-blue-500 w-[72%]'></div>
      <nav className='relative w-full'>
        <div className='block lg:hidden fixed left-10 top-8'>
          <Image src={Logo} alt='Logo' className='w-20 sm:w-36 h-12 mr-4 -mt-6' />
        </div>

        <div className='absolute text-white top-3 right-60  2xl:right-60 whitespace-nowrap  lg:right-4  xl:right-32'>
          <button className='bg-red px-4 py-3 rounded items-center 2xl:justify-between hidden gap-4 lg:flex lg:w-52 lg:h-12 lg:text-sm 
          2xl:w-64 2xl:h-14 2xl:text-base 2xl:mr-12'>
            Get a Free Consultation
            <Image src={Cebrabian_right} alt='Arrow' className='h-5 w-5 2xl:ml-2' />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
