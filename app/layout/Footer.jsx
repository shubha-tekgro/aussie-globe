'use client';
import { useState } from 'react';
import Image from 'next/image';
import cebrabian_right from '../icons/cebrabian_right.svg';
import cebrabian_down1 from '../icons/cebrabian_down1.svg';
import logo from '../icons/logo.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import linkedin from '../icons/linkedin.svg';
import instagram from '../icons/instagram.svg';
import tekgro from '../icons/tekgro.svg';
import Torres from '../icons/Torres.svg';
import aboriginal from '../icons/aboriginal.svg';

export default function Footer() {
  const [showNew, setShowNew] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showResources, setShowResources] = useState(false);
  return (
    <section className='mt-8 '>
      <div className=' 2xl:py-10  2xl:px-8 py-10  bg-gradient-to-b from-blue to-blue-500 text-white 2xl:ml-64 xl:mr-32'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='flex flex-col ml-4 items-center lg:items-start text-center lg:text-left gap-4  font-semibold'>
        <h2 className='text-xl xl:text-3xl font-bold '>
              Unlock Your Future with Our Fast & Trusted Processing
            </h2>
            <p className='text-base opacity-80 font-normal'>
              Get expert guidance for admissions, visas, and career success—hassle-free!
            </p>
          </div>
          <div className='flex flex-col gap-4 sm:gap-4 w-full sm:w-auto mx-auto px-4 lg:px-12'>
            <button className='bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 justify-center w-auto md:px-12 md:py-3'>
              Get a Free Consultation
              <Image src={cebrabian_right} alt='cebrabian-right' />
            </button>
            <button className='bg-blue-500 hover:border-blue-500 text-white border-2 px-12 py-2 rounded flex justify-center w-auto'>
              Talk to Our Experts!
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap xl:justify-start px-4 md:px-20 lg:px-40 mt-4'>
        <div className='flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-24 md:ml-10 text-center md:text-left'>
          <div className='mb-2 md:mb-0 md:mr-6 -ml-20 xl:ml-0'>
            <Image src={logo} alt='Logo' className='w-32 xl:-mt-16' />
          </div>
          <div className='xl:w-[26rem] w-full text-xs xl:text-sm text-gray xl:mt-32 -ml-24 xl:-ml-40  justify-center  px-4 sm:mx-auto my-2'>
            Trusted experts in education & migration, helping students and professionals achieve their
            Australian dream with fast, reliable, and hassle-free solutions.
          </div>
        </div>
        <div className='flex justify-center '>
          <div className='  flex gap-4 h-10 w-6 xl:hidden -ml-48 '>
            <Image src={facebook} alt='Facebook' />
            <Image src={twitter} alt='Twitter' />
            <Image src={linkedin} alt='LinkedIn' />
            <Image src={instagram} alt='Instagram' />
          </div>
        </div>
        <div className='w-[98%] xl:hidden max-w-screen-2xl  border-t border-gray opacity-20 mt-2 
            mx-8 sm:mx-auto ml-1 mr-24 my-2'></div>
        <div className='flex flex-col sm:flex-row xl:-mt-44 md:ml-96 sm:flex ml-0 items-start'>
          <div className=' flex flex-col w-full sm:w-auto md:ml-72 relative'>
            <div className='flex items-center justify-between mb-4 w-72 my-3'>
              <h2 className='text-sm md:text-sub whitespace-nowrap'>New to Aussie Globe?</h2>
              <Image src={cebrabian_down1} alt='Toggle Explore' className={`w-4 transition-transform duration-300 xl:hidden cursor-pointer 
                      absolute  right-24 sm:static ${showNew ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => setShowNew(!showNew)} />
            </div>
            <div className={`transition-all duration-300 ease-in-out ${showNew ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} sm:max-h-full sm:opacity-100`}>
              <nav className='flex flex-col gap-2 text-sm text-gray'>
                <div>Who We Are</div>
                <div>Who We Offer</div>
                <div>Why Choose Us</div>
                <div>Success Stories</div>
              </nav>
            </div>
          </div>

          <div className='w-[75%] xl:hidden max-w-screen-2xl  border-t border-gray opacity-20  mx-8 sm:mx-auto ml-1 mr-24'></div>
          <div className=' flex flex-col w-full sm:w-auto xl:-ml-0 relative'>
            <div className='flex items-center justify-between mb-4 w-72 my-3'>
              <h2 className='text-sm md:text-sub whitespace-nowrap'>Explore Our Services</h2>
              <Image src={cebrabian_down1} alt='Toggle Explore' className={`w-4 transition-transform duration-300 cursor-pointer 
                      absolute  right-24 max-[425px]:block min-[426px]:hidden sm:static
                      ${showExplore ? 'rotate-180' : 'rotate-0'}`} onClick={() => setShowExplore(!showExplore)} />
            </div>
            <div className={`transition-all duration-300 ease-in-out ${showExplore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} sm:max-h-full sm:opacity-100`}>
              <nav className='flex flex-col gap-2 text-sm text-gray'>
                <div>Education Services</div>
                <div>Migration Services</div>
                <div>PY & Skills Assessment</div>
                <div>Visa Consultation</div>
              </nav>
            </div>
          </div>
          <div className='w-[75%] xl:hidden max-w-screen-2xl  border-t border-gray opacity-20  mx-8 sm:mx-auto ml-1 mr-24'></div>
          <div className=' flex flex-col w-full sm:w-auto xl:-ml-0 relative'>
            <div className='flex items-center justify-between mb-4 w-72 my-3'>
              <h2 className='text-sm md:text-sub whitespace-nowrap'>Resources & Support</h2>
              <Image src={cebrabian_down1} alt='Toggle Resources' className={`w-4 transition-transform duration-300 cursor-pointer 
                      absolute right-24 xl:hidden sm:static ${showResources ? 'rotate-180' : 'rotate-0'}`}
                onClick={() => setShowResources(!showResources)} />
            </div>
            <div className={`transition-all duration-300 ease-in-out ${showResources ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} sm:max-h-full sm:opacity-100`}>
              <nav className='flex flex-col gap-2 text-sm text-gray'>
                <div>Student Guides</div>
                <div>Migration FAQs</div>
                <div>Scholarships & Funding</div>
                <div>Health Insurance</div>
              </nav>
            </div>
          </div>
        </div>
        <div className='w-[100%] xl:hidden max-w-screen-2xl  border-t border-gray opacity-20 mx-8 sm:mx-auto -ml-1 mr-24'></div>
      </div>
      <div className='mt-4 hidden sm:flex gap-4 h-8 w-6 2xl:ml-72'>
        <Image src={facebook} alt='Facebook' className='ml-4' />
        <Image src={twitter} alt='Twitter' />
        <Image src={linkedin} alt='LinkedIn' />
        <Image src={instagram} alt='Instagram' />
      </div>
      <div className='  flex flex-row justify-center gap-2 xl:hidden pb-8 py-4'>
        <Image src={Torres} alt='Torres' className='w-6' />
        <Image src={aboriginal} alt='Aboriginal' className='w-6' />
      </div>
      <div className='xl:ml-72 mt-4'>
        <div className='mt-4 ml-4 hidden sm:flex flex-col'>
          <Image src={Torres} alt='Torres' className='w-4' />
          <Image src={aboriginal} alt='aboriginal' className='mt-1 w-4' />
        </div>
        <div className='ml-4 w-[85%] text-gray text-xs -mt-9 xl:w-[47%] xl:ml-10 text-center sm:text-left'>
          Aussieglobe Education And Migration Acknowledges The Aboriginal And Torres Strait Islander Peoples As The
          Traditional Owners Of The Land, Respecting Their Ongoing Connection To Land, Waters, And Cultures, And Honoring
          Their Elders Past And Present.
        </div>
      </div>
      <div className='w-full mt-10 flex xl:justify-end items-end gap-2 2xl:-mt-10 justify-center ml-12'>
        <p className='text-sm font-medium '>Developed by:</p>
        <Image src={tekgro} alt='TekGro logo' className='w-16 h-auto mr-32' />
      </div>
      <div className='w-[92%] xl:w-full max-w-screen-2xl  border-t border-gray opacity-50 
            mx-8 sm:mx-auto xl:ml-72 xl:mr-24 xl:my-6  ml-4 mr-24 my-6'></div>
       <p className=' text-xs leading-loose opacity-90 pb-10 no-wrap xl:mr-24 xl:-mt-4
     text-blue-500 flex flex-wrap gap-1 justify-center xl:justify-end sm:mt-0 '>All Rights Reserved <span className='text-black mx-2'>|</span>Terms & Conditions<span className='text-black mx-2'>|</span>Privacy Policy
  </p>
      <div className='opacity-90 items-start text-xs text-gray text-center xl:ml-72 xl:-mt-16 pb-10 xl:text-start -mt-6'>
        Copyright © 2019 Aussieglobe Education and Migration
      </div>
    </section>
  );
}