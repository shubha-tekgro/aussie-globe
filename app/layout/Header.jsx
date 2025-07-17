import Image from 'next/image';
import LocationIcon from '../icons/location.svg';
import MailIcon from '../icons/mail-info.svg';
import SearchIcon from '../icons/search.svg';
import PhoneIcon from '../icons/phone.svg';
import Logo from '../icons/logo.svg';
import Cebrabian_right from '../icons/cebrabian_right.svg';
import Cebrabian_down2 from '../icons/cebrabian_down2.svg';

const Header = () => {
  return (
    <>

      <nav className=' text-blue ml-64 gap-9 hidden lg:flex py-3 '>
        <div className='flex items-center space-x-2'>
          <Image src={LocationIcon} alt='Location' className='w-6 h-6' />
          <span className='whitespace-nowrap'>Sydney, AUS</span>
          <Image src={Cebrabian_down2} alt='Arrow' className='w-3' />
        </div>
        <div className='flex items-center space-x-2 ml-4'>
          <Image src={MailIcon} alt='Mail' className='w-6 h-6' />
          <span>info@aussieglobe.com.au</span>
        </div>
      </nav>

      <div className='hidden lg:block absolute top-12 left-64'>
        <Image src={Logo} alt='Logo' className='w-40' />
      </div>

      <div className='flex justify-center w-full hidden lg:flex ml-52 -mt-10'>
        <div className='relative flex ml-96 w-56'>
          <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
            <Image src={SearchIcon} alt='Search' className='h-5 w-5' />
          </span>
          <input placeholder='Search' type='text' className='pl-10 pr-4 py-2 w-full text-blue bg-gray-300 border 
          border-gray-300 rounded-md placeholder-blue focus:outline-none focus:ring-2 focus:ring-gray-300' />
        </div>
      </div>

      <div className='flex justify-end items-center space-x-2 mr-60 -mt-12'>
        <div className='w-8 h-8 bg-red-200 mt-2 flex items-center justify-center rounded'>
          <Image src={PhoneIcon} alt='phone' className='w-6' />
        </div>
        <div className='hidden lg:flex flex-col'>
          <div className='text-blue-900 font-semibold -m-2 ml-1 mt-1'>Call us</div>
          <span className='text-sm text-red font-semibold'>(02) 8592 4713</span>
        </div>
      </div>

      <div className='hidden lg:block border-t opacity-150 my-4 ml-64 mr-24 bg-blue-500 w-[72%]'></div>


      <nav className='relative w-full'>
        <div className='block lg:hidden absolute left-2 top-20'>
          <Image src={Logo} alt='Logo' className='w-24 -mt-16 sm:w-38 h-12 mr-3' />
        </div>


        <div className='absolute text-white top-3 right-60'>
          <button className='bg-red px-6 py-3 rounded justify-between items-center gap-1 hidden lg:flex'>
            Get a Free Consultation
            <Image src={Cebrabian_right} alt='Arrow' className='h-6 w-6 ml-2' />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

