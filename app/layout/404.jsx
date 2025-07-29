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
            <div className='bg-gradient-to-l from-blue-500 to-blue xl:ml-64 xl:mr-32 py-12 xl:px-8 mt-8'>
                <div className='md:ml-16'>
                    <div className='mt-20 absolute right-40'>
                        <Image src={zig_zag} alt='zig_zag' className='w-80' />
                    </div>
                    <div className='mt-12 absolute right-60 '>
                        <Image src={finder} alt='finder' className='w-48' />
                    </div>
                    <div className='mt-16 absolute right-64'>
                        <Image src={circle} alt='circle' className='w-3' />
                    </div>
                    <div className='mt-28 absolute right-56'>
                        <Image src={circle} alt='circle' className='mt-12  w-2' />
                    </div>
                    <div className='mt-16 absolute right-56'>
                        <Image src={circle} alt='circle' className='mr-56 mt-20  w-2' />
                    </div>
                    <div className='mt-36 absolute right-56'>
                        <Image src={circle} alt='circle' className='mr-52 mt-16  w-3' />
                    </div>
                    <div className='mt-20 absolute right-80'>
                        <Image src={plus} alt='plus' className='w-3 mr-28' />
                    </div>

                    <div className='text-yellow text-h1 font-semibold mt-12 px-4 '>  404 </div>
                    <div className=' text-white py-4 font-bold text-h2 px-4 '>
                        Oops! Page Not Found
                    </div>
                    <div className=' text-white py-4 px-4 text-xs '>
                        It looks like the page you're looking for doesn't exist, has been moved, or the link was mistyped.
                        <div className=' text-white py-4 md:w-[38%]'>
                            Need help finding something? We're here to support your journey, whether you're planning to study, migrate, or need trusted advice.
                        </div>
                    </div>
                </div> 
                <div className='flex flex-row gap-4 sm:gap-4 w-full sm:w-auto mx-auto px-4 lg:px-12 mb-16'>

                    <button className='bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 
                    justify-center w-auto md:px-4 md:py-3 text-xs md:text-xl ml-8 '>
                        Go Back To Home
                        <Image src={cebrabian_right} alt='cebrabian-right' />
                    </button>
                    <button className='bg-blue-500 hover:border-blue-500 text-white  text-xs md:text-xl
                    border-2 px-4 py-2 md:ml-4 rounded flex justify-center w-auto'>
                        Explore Our Services
                    </button>

                </div>

            </div>


            <div className=' mt-20 flex justify-center content-center text-xxs' >
                <button className=' border-gray-100 border-2 px-4 py-2 rounded-xl gap-2 flex justify-center w-auto xl:ml-64 xl:mr-16'>
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


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:ml-64 py-12 xl:px-8 mt-2 px-4'>
                <div>
                    <Image src={university} alt='university ' />
                    <div className='font-bold text-xs xl:text-xl py-4 hover:text-blue-500'>
                        University Admissions
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Explore Australian Universities
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div>
                    <Image src={plane} alt='plane' />
                    <div className='font-bold text-xs xl:text-xl py-4  hover:text-blue-500'>
                        Study & Migration Visa
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Explore Visa Options
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div>
                    <Image src={copy} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-4  hover:text-blue'>
                        Test Preparation Courses
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Enroll in Test Prep Courses
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div>
                    <Image src={safeguard} alt='safeguard' />
                    <div className='font-bold text-xs xl:text-xl py-4  hover:text-blue-500'>
                        Health Cover Services
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto py-2 text-xs xl:text-xl'>
                        Get Health Cover Advice
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div>
                    <Image src={writenote} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-4  hover:text-blue-500'>
                        Professional Year & Skill Assessment
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Advance Your Career
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
                <div>
                    <Image src={graph} alt='' />
                    <div className='font-bold text-xs xl:text-xl py-4  hover:text-blue-500'>
                        Tax Return & Accounting Services
                    </div>
                    <div className='w-[82%] text-xs xl:text-xl '>
                        Expert guidance for admissions into prestigious Australian universities with high acceptance rates.
                    </div>
                    <button className=' text-red mt-8 flex gap-4 justify-center w-auto  py-2 text-xs xl:text-xl'>
                        Consult Our Tax Experts
                        <Image src={cebrabian_red} alt='cebrabian_red' />
                    </button>
                </div>
            </div>

        </div>
    )
}
