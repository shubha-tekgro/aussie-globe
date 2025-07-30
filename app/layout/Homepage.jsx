'use client';
import cebrabian_right from '../icons/cebrabian_right.svg';
import Image from 'next/image';
import wave from '../icons/wave.png';
import cebrabian_red from '../icons/cebrabian-red.svg';
export default function Homepage() {
    return (
        <div>
            <div className='bg-gradient-to-l from-blue-500 to-blue xl:ml-64 xl:mr-32 py-12 xl:px-8 mt-8'>
                <div className='md:ml-16'>
                    <div className='mt-4 absolute right-0 -mr-28 '>
                        <Image src={wave} alt='wave' className='mt-4 w-[80%] ml-96 overflow-hidden' />
                    </div>
                    <div className='text-white text-h2 font-semibold mt-12 px-4 '> Begin Your </div>
                    <div className=' text-blue-500 font-bold text-h2 px-4 '>
                        Global Education
                    </div>
                        <div className=' font-semibold  text-white px-4 text-h2'>
                            Journey in <span className='text-yellow text-h2'>Australia</span>

                        <div className=' text-white py-2 md:w-[38%] text-xs'>
                            Expert guidance for international education and migration services with personalized support at every step.
                            <div className=' text-white py-1 text-xs px-4 '>
                                Personalized Education Planning
                            </div>
                            <div className=' text-white py-1 text-xs px-4 '>
                                Streamlined Visa Process
                            </div>
                            <div className=' text-white py-1 text-xs px-4 '>
                                Dedicated Support Team
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-4 sm:gap-4 w-full sm:w-auto mx-auto px-4 lg:px-12 mb-16'>
                    <button className='bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 
                        justify-center w-auto md:px-4 md:py-3 text-xs md:text-xs ml-8 '>
                        Why Choose AussieGlobe?
                        <Image src={cebrabian_right} alt='cebrabian-right' />
                    </button>
                    <button className='bg-blue-500 hover:border-blue-500 text-white  text-xs md:text-xs
                        border-2 px-4 py-2 md:ml-4 rounded flex justify-center w-auto'>
                        Explore Programs
                    </button>
                </div>
            </div>
        </div>
    )
}
