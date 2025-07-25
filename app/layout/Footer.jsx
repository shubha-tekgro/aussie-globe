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
    <section className='mt-96 '>
      <div className=' 2xl:py-10  2xl:px-8 py-10  bg-gradient-to-b from-blue to-blue-500 text-white 2xl:ml-64 2xl:mr-32'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
          <div className='flex flex-col ml-4 items-center lg:items-start text-center lg:text-left gap-4'>
            <h2 className='text-2xl sm:text-3xl font-bold '>
              Unlock Your Future with Our Fast & Trusted Processing
            </h2>
            <p className='text-base sm:text-lg opacity-80'>
              Get expert guidance for admissions, visas, and career success—hassle-free!
            </p>
          </div>

          <div className='flex flex-col gap-4 sm:gap-4 2xl:mr-16 w-full sm:w-auto mx-4 lg:mx-12'>
            <button className='bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 justify-center w-full sm:w-auto md:px-12 md:py-3 2xl:w-full'>
              Get a Free Consultation
              <Image src={cebrabian_right} alt='cebrabian-right' />
            </button>
            <button className='bg-blue-500 hover:border-blue-500 text-white border-2 px-12 py-2 rounded flex justify-center w-full sm:w-auto 2xl:w-full'>
              Talk to Our Experts!
            </button>
          </div>


        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap xl:justify-start px-20 md:px-20 lg:px-40 mt-4 '>
        <div className='px-4 md:px-12 lg:px-24 ml-10 '>
          <Image src={logo} alt='Logo' className='w-32 my-2' />
          
          <div className='xl:w-[26rem] w-80 text-xs text-gray md:-ml-32 -ml-32 text-center xl:text-sm xl:text-start '>
            Trusted experts in education & migration, helping students and professionals achieve their
            Australian dream with fast, reliable, and hassle-free solutions.
          </div>
        </div>
        <div className='mt-8 flex gap-4 h-8 w-6 xl:hidden 2xl:ml-72  '>
          <Image src={facebook} alt='Facebook' className='ml-4' />
          <Image src={twitter} alt='Twitter ' />
          <Image src={linkedin} alt='LinkedIn ' />
          <Image src={instagram} alt='Instagram ' />
        </div>

        <div className="flex flex-col sm:flex-row -ml-16">
          <div className='mt-4 flex flex-col w-full sm:w-auto md:ml-8'>
            <div className='flex items-center justify-between mb-4 w-72'>
              <h2 className='text-base md:text-sub whitespace-nowrap'>New to Aussie Globe?</h2>
              <Image src={cebrabian_down1} alt='Toggle Explore' className={`w-4 transition-transform duration-300 xl:hidden cursor-pointer 
                        sm:hidden ${showNew ? 'rotate-180' : 'rotate-0'}`} onClick={() => setShowNew(!showNew)} />
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


          <div className='mt-4 flex flex-col w-full sm:w-auto xl:ml-32'>
            <div className='flex items-center justify-between mb-4 w-72'>
              <h2 className='text-base md:text-sub whitespace-nowrap' >Explore Our  Services </h2>
              <Image src={cebrabian_down1} alt='Toggle Explore' className={`w-4 transition-transform duration-300 xl:hidden cursor-pointer ml-24 
                        sm:hidden ${showExplore ? 'rotate-180' : 'rotate-0'}`} onClick={() => setShowExplore(!showExplore)} />
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

          <div className='mt-4 flex flex-col w-full sm:w-auto xl:ml-32'>
            <div className='flex items-center justify-between mb-4 w-72'>
              <h2 className='text-base md:text-sub whitespace-nowrap'>Resources & Support</h2>
              <Image src={cebrabian_down1} alt='Toggle Resources' className={`w-4 transition-transform duration-300 xl:hidden cursor-pointer ml-24 sm:hidend
                         ${showResources ? 'rotate-180' : 'rotate-0'}`} onClick={() => setShowResources(!showResources)} />
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

      <div className='w-full mt-10 flex justify-end items-end gap-2 2xl:-mt-10 '>
        <p className='text-sm font-medium '>Developed by</p>
        <Image src={tekgro} alt='TekGro logo' className='w-16 h-auto mr-32' />
      </div>
      <div className=' ml-4'>

        <div className='w-full border-t border-gray opacity-50 xl:my-6 xl:ml-72 xl:mr-24 my-6 mx-4 mt-8 sm:mx-0 '></div>



        <div className='opacity-90 text-blue-500 text-xs flex xl:justify-end justify-center -mt-2 pb-10 whitespace-nowrap 2xl:mr-24'>
          <span>All Rights Reserved</span>
          <span className='text-black mx-2'>|</span>
          <span>Terms & Conditions</span>
          <span className='text-black mx-2'>|</span>
          <span>Privacy Policy</span>
        </div>

        <div className='opacity-90 items-start text-xs text-gray text-center xl:ml-72 xl:-mt-16 pb-10 xl:text-start'>
          Copyright © 2019 Aussieglobe Education and Migration
        </div>
      </div>
    </section>
  );
}