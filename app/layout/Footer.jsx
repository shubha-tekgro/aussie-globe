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
          <div className='flex flex-col items-center gap-4 sm:gap-4 2xl:mr-16'>
            <button className='bg-red hover:bg-red-600 text-white px-6 py-3 rounded flex items-center gap-4 w-full sm:w-auto sm:px-12 sm:py-3 2xl:w-full'>
              Get a Free Consultation
              <Image src={cebrabian_right} alt='cebrabian-right' />
            </button>
            <button className='bg-blue-500 hover:border-blue-500 text-white border-2 px-12 py-3 rounded flex items-center w-full sm:w-auto 2xl:w-full'>
              Talk to Our Experts!
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-start px-16 md:px-20 lg:px-40 mt-4 '>
        <div className='px-4 md:px-12 lg:px-24 ml-12 '>
          <Image src={logo} alt='Logo' className='w-32 my-2' />
          <div className='xl:w-[26rem] md:w-72 text-sm text-gray -ml-32 sm:ml-0'>
            Trusted experts in education & migration, helping students and professionals achieve their Australian dream with fast, reliable, and hassle-free solutions.
          </div>
        </div>



        <div className='flex flex-col w-full sm:w-auto md:ml-8'>
          <h2 className='text-sub mb-4 '>New to Aussie Globe?</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
          <Image src={cebrabian_down1} alt='Logo' className='w-4 my-2 hidden ' />

            <div>Who We Are</div>
            <div>Who We Offer</div>
            <div>Why Choose Us</div>
            <div>Success Stories</div>
          </nav>
        </div>

        <div className='flex flex-col w-full sm:w-auto ml-32'>
          <h2 className='text-sub mb-4 '>Explore Our Services</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
            <div>Education Services</div>
            <div>Migration Services</div>
            <div>PY & Skills Assessment</div>
            <div>Visa Consultation</div>
          </nav>
        </div>

        <div className='flex flex-col w-full sm:w-auto ml-32'>
          <h2 className='text-subl mb-4 '>Resources & Support</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
            <div>Student Guides</div>
            <div>Migration FAQs</div>
            <div>Scholarships & Funding</div>
            <div>Health Insurance</div>
          </nav>
        </div>
      </div>


      <div className='mt-4 flex gap-4 h-8 w-6 2xl:ml-72'>
        <Image src={facebook} alt='Facebook' className='ml-4' />
        <Image src={twitter} alt='Twitter ' />
        <Image src={linkedin} alt='LinkedIn ' />
        <Image src={instagram} alt='Instagram ' />
      </div>

      <div className='ml-72 mt-20'>
        <div className='ml-11 w-[47%] text-gray text-xs -mt-16 text-justify'>
          Aussieglobe Education And Migration Acknowledges The Aboriginal And Torres Strait Islander Peoples As The
          Traditional Owners Of The Land, Respecting Their Ongoing Connection To Land, Waters, And Cultures, And Honoring
          Their Elders Past And Present.
        </div>
        <div className='ml-4'>
          <Image src={Torres} alt='Torres' className='-mt-9 w-4' />
          <Image src={aboriginal} alt='aboriginal' className='mt-1 w-4' />
        </div>
      </div>

      <div className='w-full -mt-10 flex justify-end items-end gap-2'>
        <p className='text-sm font-medium '>Developed by</p>
        <Image src={tekgro} alt='TekGro logo' className='w-16 h-auto mr-32' />
      </div>
      <div className=' ml-4'>
        <div className='w-100 border-t border-gray opacity-50 my-6 ml-72 mr-24 mt-8'></div>


        <div className='opacity-90 text-blue-500 text-xs flex justify-end mr-24 -mt-2 pb-10'>
          <span>All Rights Reserved</span>
          <span className='text-black mx-2'>|</span>
          <span>Terms & Conditions</span>
          <span className='text-black mx-2'>|</span>
          <span>Privacy Policy</span>
        </div>

        <div className='opacity-90 items-start text-xs text-gray ml-72 -mt-16 pb-10'>
          Copyright © 2019 Aussieglobe Education and Migration
        </div>
      </div>
    </section>
  );
}