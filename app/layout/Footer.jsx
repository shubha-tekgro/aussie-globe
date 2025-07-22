import Image from 'next/image';
import cebrabian_right from '../icons/cebrabian_right.svg';
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
    <section className='mt-48 py-24'>
      <div className='px-4 sm:px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-b from-blue to-blue-500 text-white 2xl:ml-64 2xl:mr-32
      mx-auto flex flex-col gap-12'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug'>
            Unlock Your Future With Our Fast & Trusted Processing
          </h2>
          <button className='bg-red text-white px-6 py-3 rounded flex items-center gap-2 sm:text-sm self-start lg:self-center'>
            Get a Free Consultation
            <Image src={cebrabian_right} alt='cebrabian right' className='w-4 h-4' />
          </button>
        </div>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6'>
          <p className='text-base sm:text-lg md:text-xl opacity-80 leading-relaxed max-w-2xl whitespace-nowrap'>
            Get expert guidance for admissions, visa, and career success — hassle-free!
          </p>
          <button className=' bg-blue-500 text-white px-8 py-3 rounded flex items-center border-2
                                            hover:border-blue-300  self-start lg:self-center'>
            Talk to Our Experts!
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-start px-16 md:px-20 lg:px-40 mt-8 ml-8 '>
        <div className='px-4 md:px-12 lg:px-24 ml-16 mt-4 '>
          <Image src={logo} alt='Logo' className='w-32 md:w-44 ' />
          <div className='xl:w-[26rem] md:w-72 text-sm text-gray -ml-32 sm:ml-0'>
            Trusted experts in education & migration, helping students and professionals achieve their Australian dream with fast, reliable, and hassle-free solutions.
          </div>
        </div>
        <div className='flex flex-col w-full sm:w-auto md:ml-4'>
          <h2 className='text-lg md:text-xl mb-4 font-semibold'>New to Aussie Globe?</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
            <div>Who We Are</div>
            <div>Who We Offer</div>
            <div>Why Choose Us</div>
            <div>Success Stories</div>
          </nav>
        </div>

        <div className='flex flex-col w-full sm:w-auto ml-28'>
          <h2 className='text-lg md:text-xl mb-4 font-semibold'>Explore Our Services</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
            <div>Education Services</div>
            <div>Migration Services</div>
            <div>PY & Skills Assessment</div>
            <div>Visa Consultation</div>
          </nav>
        </div>

        <div className='flex flex-col w-full sm:w-auto ml-28'>
          <h2 className='text-lg md:text-xl mb-4 font-semibold'>Resources & Support</h2>
          <nav className='flex flex-col gap-2 text-sm text-gray'>
            <div>Student Guides</div>
            <div>Migration FAQs</div>
            <div>Scholarships & Funding</div>
            <div>Health Insurance</div>
          </nav>
        </div>
      </div>


      <div className='mt-2 flex gap-4 h-8 sm:ml-4 sm:w-6 2xl:ml-64'>
        <Image src={facebook} alt='Facebook ' />
        <Image src={twitter} alt='Twitter ' />
        <Image src={linkedin} alt='LinkedIn ' />
        <Image src={instagram} alt='Instagram ' />
      </div>

      <div className='w-full mt-10 flex justify-end items-end gap-2'>
        <p className='text-sm font-medium '>Developed by</p>
        <Image src={tekgro} alt='TekGro logo' className='w-16 h-auto mr-32' />
      </div>

      <div className='ml-64 sm:mt-4 sm:w-full'>
        <div className='ml-10 w-1/2 text-gray -mt-12'>
          Aussieglobe Education And Migration Acknowledges The Aboriginal And Torres Strait Islander Peoples As The
          Traditional Owners Of The Land, Respecting Their Ongoing Connection To Land, Waters, And Cultures, And Honoring
          Their Elders Past And Present.
        </div>
        <Image src={Torres} alt='Torres' className='-mt-16' />
        <Image src={aboriginal} alt='aboriginal' className='mt-2' />
      </div>

      <div className='border-t border-gray opacity-50 w-1/8 sm:w-[100%] sm:ml-0 my-4 ml-32 mr-24'></div>

      <div className='flex flex-col md:items-end md:text-right text-sm text-gray gap-1 mt-6'>
        <div className='opacity-90 text-center md:text-right w-full md:w-auto'>
          © 2019 Aussieglobe Education and Migration
        </div>
      </div>
      <div className='opacity-90 text-blue-500 text-center md:text-right w-full md:w-auto'>
        <span>All Rights Reserved</span>
        <span className='text-black mx-2'>|</span>
        <span>Terms & Conditions</span>
        <span className='text-black mx-2'>|</span>
        <span>Privacy Policy</span>
      </div>
    </section>
  );
}