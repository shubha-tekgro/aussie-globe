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

      <nav className="nav-custom text-blue ml-36 gap-9 hidden lg:flex mt-8">
        <div className="flex items-center space-x-2">
          <Image src={LocationIcon} alt="Location" className="w-6 h-6" />
          <span className="whitespace-nowrap">Sydney, AUS</span>
          <Image src={Cebrabian_down2} alt="Arrow" className="w-3" />
        </div>
        <div className="flex items-center space-x-2 ml-12">
          <Image src={MailIcon} alt="Mail" className="w-6 h-6" />
          <span>info@aussieglobe.com.au</span>
        </div>
      </nav>

      <div className="hidden lg:block absolute top-16 left-36">
        <Image src={Logo} alt="Logo" className='w-32 md:w-44' />
      </div>

      <div className="flex justify-center w-full ml-96 hidden lg:flex -mt-8">

        <div className="relative items-center gap-1 flex w-52">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Image src={SearchIcon} alt="Search" className="h-5 w-5" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
        </div>
      </div>

      <div className="contact-section flex justify-end items-center space-x-1 mr-40 -mt-12">
        <Image src={PhoneIcon} alt="Phone" className="h-6 w-12" />
        <div>
          <div className="text-blue-900 font-bold block  whitespace-nowrap">Call us</div>
          <span className="text-sm text-red font-bold  whitespace-nowrap">(02) 8592 4713</span>
        </div>
      </div>


      <nav className="relative w-full">
         <div className="block lg:hidden absolute left-2 top-20">
          <Image src={Logo} alt="Logo" className="w-24 -mt-16 sm:w-38 h-12 mr-3" />
        </div>


        <div className="absolute text-white top-14 right-36">
          <button className="bg-red px-6 py-3 rounded mt-3 justify-between items-center gap-1 hidden lg:flex">
            Get a Free Consultation
            <Image src={Cebrabian_right} alt="Arrow" className="h-6 w-6 ml-2" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

