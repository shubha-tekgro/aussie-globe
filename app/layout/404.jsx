'use client';
import cebrabian_right from '../icons/cebrabian_right.svg';
import Image from 'next/image';
import finder from '../icons/finder.svg';
import zig_zag from '../icons/zig-zag.svg';
import circle from '../icons/circle.svg';
import plus from '../icons/plus.svg';
import circle_right from '../icons/circle-right.svg';
import university from '../icons/university.svg';
import safeguard from '../icons/safeguard.svg';
import writenote from '../icons/writenote.svg';
import copy from '../icons/copy.svg';
import graph from '../icons/graph.svg';
import plane from '../icons/plane.svg';
import cebrabian_red from '../icons/cebrabian-red.svg';

export default function Error() {
    return (
        <div>
               <div className='bg-gradient-to-l from-blue-500 to-blue  py-12 xl:px-8 mt-8'>
                <div className='md:ml-16'>
                    <div className='absolute md:mt-8  md:right-40 right-0 -mt-12'>
                        <Image src={zig_zag} alt='zig_zag' className='md:w-80 w-48' />
                    </div>
                    <div className='absolute md:mt-2  md:right-60 right-12 -mt-16'>
                        <Image src={finder} alt='finder' className='md:w-48 w-28' />
                    </div>
                  <div className='absolute md:mt-6  md:right-64 right-12 -mt-16'>
                        <Image src={circle} alt='circle' className='md:w-3 w-3' />
                    </div>
                    <div className='absolute md:mt-24 md:right-56 right-10 mt-2'>
                        <Image src={circle} alt='circle' className='md:mt-12  md:w-2 w-2' />
                    </div>
                     <div className='absolute md:mt-24 md:right-56 right-44 -mt-2'>
                        <Image src={circle} alt='circle' className='md:mr-56 md:w-2 w-2' />
                    </div>
                   <div className='absolute md:mt-40 md:right-56 right-40 mt-6'>
                        <Image src={circle} alt='circle' className='md:mr-52 md:w-3 w-3' />
                    </div>
                   <div className='absolute md:mt-6 md:right-80 right-40 -mt-12'>
                        <Image src={plus} alt='plus' className='md:w-3 md:mr-28' />
                    </div> 

                    <div className='text-yellow text-h1 font-semibold md:mt-12 mt-10 px-4 '>  404 </div>
                    <div className=' text-white py-4 font-bold md:text-h2 text-lg px-4 '>
                        Oops! Page Not Found
                    </div>
                    <div className=' text-white py-4 px-4 text-xs '>
                        It looks like the page you're looking for doesn't exist, has been moved, or the link was mistyped.
                        <div className=' text-white py-4 md:w-[38%]'>
                            Need help finding something? We're here to support your journey, whether you're planning to study, migrate, or need trusted advice.
                        </div>
                    </div>
                </div>
                </div>
            <div className=' mt-20 flex justify-center content-center text-xxs' >
                <button className=' border-gray-100 border-2 px-4 py-2 rounded-xl gap-2 flex justify-center w-auto '>
                    <Image src={circle_right} alt='circle_right' />
                    Leading Australian Education Consultants
                </button>
            </div>
            <div className=' xl:ml-96 xl:mr-32 py-4 text-blue text-sub md:text-h2 font-bold text-center'>
                Unlock Your Future: Study, Work & Migrate with Confidence

                <div className=' py-2 text-xs font-light w-full text-black '>
                    Expert guidance for your Australian education and migration journey, backed by 15+ years of experience and thousands of success stories.
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 xl:px-6 mt-2 bg-gray-100 bg-opacity-50 justify-center content-center'>
                <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={university} alt='university' />
                    <div className='font-bold text-xs xl:text-xl  hover:text-blue-500'>
                        University Admissions
                    </div>
                    <div className='w-[82%] text-xs xl:text-base md:py-2 '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl '>
                        Explore Australian Universities
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={plane} alt='plane' />
                    <div className='font-bold text-xs xl:text-xl py-2 hover:text-blue-500'>
                        Study & Migration Visa
                    </div>
                    <div className='w-[82%] text-xs xl:text-base '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Explore Visa Options
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
               <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={copy} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-2 hover:text-blue'>
                        Test Preparation Courses
                    </div>
                    <div className='w-[82%] text-xs xl:text-base'>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Enroll in Test Prep Courses
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={safeguard} alt='safeguard' />
                    <div className='font-bold text-xs xl:text-xl py-2 hover:text-blue-500'>
                        Health Cover Services
                    </div>
                    <div className='w-[82%] text-xs xl:text-base'>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto py-2 text-xs xl:text-xl'>
                        Get Health Cover Advice
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={writenote} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-2 hover:text-blue-500'>
                        Professional Year & Skill Assessment
                    </div>
                    <div className='w-[82%] text-xs xl:text-base'>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Advance Your Career
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div  className='bg-white px-8 py-4 mr-4 rounded-xl'>
                    <Image src={graph} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-2 hover:text-blue-500'>
                        Tax Return & Accounting Services
                    </div>
                    <div className='w-[82%] text-xs xl:text-base'>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-2 mb-4 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Consult Our Tax Experts
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
            </div>
        </div>
    )
}
