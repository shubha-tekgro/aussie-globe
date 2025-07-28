'use client';
import cebrabian_right from '../icons/cebrabian_right.svg';
import Image from 'next/image';
import zig_zag from '../icons/zig-zag.svg';
import notebook from '../icons/notebook.svg';
import note_search from '../icons/note-search.svg';
import multiply from '../icons/multiply.svg';
import microscrope from '../icons/microscrope.svg';
import circle from '../icons/circle.svg';
import surface from '../icons/surface.svg';

export default function Error() {
    return (
        <div className='bg-gradient-to-b from-blue-500 to-blue xl:ml-64 xl:mr-32 py-12 xl:px-8 mt-5'>

            <div className='mt-24 absolute right-40'>
                <Image src={zig_zag} alt='cebrabian-right' className='w-70' />
            </div>


            <div className='mt-16 absolute right-60 '>
                <Image src={note_search} alt='cebrabian-right'  className='w-60'/>
            </div>
            <div className='mt-28 absolute right-72'>
                <Image src={notebook} alt='cebrabian-right' className='w-28 mr-4' />
            </div>
            <div className='mt-40 absolute right-60'>
                <Image src={microscrope} alt='cebrabian-right' className='w-36' />
            </div>
            <div className='mt-24 absolute right-56'>
                <Image src={circle} alt='cebrabian-right' />
            </div>

             <div className='mt-16 absolute right-96'>
                <Image src={circle} alt='cebrabian-right' className='mr-8 mt-20 w-5' />

            </div> <div className='mt-40 absolute right-56'>
                <Image src={circle} alt='cebrabian-right' className='mr-64 mt-20  w-5' />

              </div> <div className='mt-24 absolute right-56'>
                <Image src={circle} alt='cebrabian-right' className='mr-64 mt-20  w-3' />

                 </div> <div className='mt-32 absolute right-52'>
                <Image src={circle} alt='cebrabian-right' className='mt-20  w-3' />
              
              
              
               </div> 

            <div className='mt-32 absolute right-64'>
                <Image src={multiply} alt='cebrabian-right' />
            </div>

             <div className='mt-64 absolute right-96'>
                <Image src={multiply} alt='cebrabian-right'className=' py-4 mr-2 w-5' />
            </div>

             <div className='mt-80 absolute right-64'>
                <Image src={surface} alt='cebrabian-right'className=' py-4' />
            </div>
            



            <div className='text-yellow text-h1 font-semibold mt-28'>  404 </div>
            <div className=' text-white py-4 font-bold text-h2'>
                Oops! Page Not Found
            </div>
            <div className=' text-white py-4 text-xs'>
                It looks like the page you're looking for doesn't exist, has been moved, or the link was mistyped.
                <div className=' text-white py-4 w-[38%]'>
                    Need help finding something? We're here to support your journey, whether you're planning to study, migrate, or need trusted advice.
                </div>
            </div>
            <div className='flex flex-row gap-4 sm:gap-4 w-full sm:w-auto mx-auto px-4 lg:px-12 mb-16'>
                <button className='bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 justify-center w-auto md:px-12 md:py-3'>
                    Go Back To Home
                    <Image src={cebrabian_right} alt='cebrabian-right' />
                </button>
                <button className='bg-blue-500 hover:border-blue-500 text-white border-2 px-12 py-2 rounded flex justify-center w-auto'>
                    Explore Our Services
                </button>
            </div>

        </div>


    )
}
