
import LocationIcon from './icons/location.svg';
import MailIcon from './icons/mail-info.svg';
import SearchIcon from './icons/search.svg';
import PhoneIcon from './icons/phone.svg';
import Logo from './icons/logo.svg';
import Cebrabian_right from './icons/cebrabian_right.svg';

const Header = () => {
    return (
        <>
            <nav className="nav-custom text-primaryBlue ml-36 gap-9 hidden lg:flex">
                <div className="flex items-center space-x-2">
                    <LocationIcon className="w-6 h-6" />
                    <span className="whitespace-nowrap">Sydney, AUS</span>
                </div>
                
                 <div className="flex items-center space-x-2">
                    <MailIcon className="w-6 h-6" />
                    <span>info@aussieglobe.com.au</span>
                </div>
            </nav>

            <div className="flex w-full justify-end mt-8 ml-96">
                <div className="relative w-64 mr-24 flex items-center gap-1">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
                    />
                </div>

                <div className="contact-section flex items-center space-x-3">
                    <PhoneIcon className="h-6 w-12 text-primaryBlue ml-96" />
                    <div>
                        <span className="text-blue-900 font-bold block">Call us</span>
                        <span className="text-sm text-primaryRed font-bold">(02) 8592 4713</span>
                    </div>
                </div>
            </div>

            <nav className="relative w-full">
                <div className="hidden lg:block absolute top-4 left-36">
                    <Logo className="h-6 w-6 text-primaryBlue" />
                </div>

                <div className="block lg:hidden absolute left-2 top-4">
                    <Logo className="h-6 w-6 text-primaryBlue" />
                </div>

                <div className="absolute top-11 right-36 xl:right-20">
                    <button className="bg-primaryRed px-6 py-3 rounded mt-3 justify-between items-center gap-1 hidden lg:flex">
                        Get a Free Consultation
                        <Cebrabian_right className="h-6 w-6 ml-2" />
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Header;
