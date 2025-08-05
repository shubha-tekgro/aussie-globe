'use client';

import Image from 'next/image';
import data from '@/data/data.json';

function OfficeCard({ city, flag, phoneNumbers, address, email }) {
  return (
    <div className="bg-white px-8 py-4 mr-4 rounded-xl">
      <div className="font-bold flex gap-2 text-xs xl:text-xl hover:text-blue-500 text-blue mt-4 items-center">
        <Image src="/icons/phone.svg" alt="phone" width={16} height={16} />
        {flag ? (
          <>
            <span>{flag}</span> {city}
          </>
        ) : (
          city
        )}
      </div>
      <div className="flex items-start space-x-2 mt-2">
        <Image src="/icons/location.svg" alt="location" width={16} height={16} />
        <div className="map text-sm">{address}</div>
      </div>
      <div className="flex items-center space-x-3 mt-2">
        <Image src="/icons/phone.svg" alt="phone icon" width={16} height={16} />
        <span className="text-sm">{phoneNumbers.join(' / ')}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <Image src="/icons/mail.svg" alt="mail" width={16} height={16} />
        <span className="text-sm">{email}</span>
      </div>
      <button className="text-red mt-4 flex gap-4 justify-center w-auto py-2 text-xs xl:text-xl">
        Enroll in Test Prep Courses
        <Image src="/icons/cebrabian-red.svg" alt="cebrabian red" width={20} height={20} />
      </button>
    </div>
  );
}

export default function Homepage() {
   const { offices, steps } = data;
  return (
    <div>
      <div className="bg-gradient-to-l from-blue-500 to-blue py-12 xl:px-8 mt-8 relative">
        <div className="absolute flex items-center bg-gray-100 bg-opacity-10 rounded-xl -mt-16 text-base text-white h-12 px-4 gap-2">
          <Image src="/icons/house.svg" alt="house" width={24} height={24} />
          <Image src="/icons/cebrabian_right.svg" alt="arrow" width={16} height={16} />
          Contact Us
        </div>

        <div className="absolute mt-4 right-0 overflow-hidden">
          <div className="mb-28 -mr-52">
            <Image src="/icons/wave.png" alt="wave" width={400} height={100} className="w-[90%] ml-auto" />
          </div>
        </div>

        <div className="md:ml-16 relative z-10 px-4">
          <div className="text-white text-h1 font-semibold mt-16">Talk to Trusted Experts</div>
          <div className="font-semibold text-white text-h1">
            in <span className="text-yellow">Education & Migration</span>
            <div className="text-white py-2 md:w-[38%] text-xl font-light">
              Whether you're planning to study in Australia, apply for a skilled visa, or need guidance on test preparation—we’re here to help. Reach out to our expert team for fast, reliable, and personalized support.
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4 w-full sm:w-auto mx-auto px-4 mt-8 lg:px-12 mb-8">
          <button className="bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 justify-center w-auto md:px-4 md:py-3 text-xs md:text-xl ml-8">
            Speak to an Expert
            <Image src="/icons/cebrabian_right.svg" alt="arrow" width={16} height={16} />
          </button>
          <button className="bg-blue-500 bg-opacity-60 hover:border-blue-500 text-white text-xs md:text-xl border-2 px-4 py-2 md:ml-4 rounded flex justify-center w-auto">
            Explore Programs
          </button>
        </div>

        <div className="max-w-md mx-auto -mt-96 mr-96 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="bg-gradient-to-l from-blue-500 to-blue text-white rounded-md px-4 py-2 mb-4">
            <h2 className="text-lg font-semibold">Book a Free Consultation</h2>
            <p className="text-sm">
              Let's discuss your goals and create the right plan for your future in Australia.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Interested In<span className="text-red-500">*</span>
              </label>
              <select
                name="interest"
                required
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select your interest</option>
              </select>
            </div>

            <div className="flex items-start">
              <input type="checkbox" required className="mr-2 mt-1" />
              <p className="text-xs">
                By continuing, you agree to our{' '}
                <a href="#" className="text-blue-600 underline">
                  terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 underline">
                  privacy policy
                </a>
              </p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-200 flex items-center justify-center">
              Get a Free Consultation
              <Image src="/icons/cebrabian_right.svg" alt="arrow" width={16} height={16} className="ml-2" />
            </button>

            <div className="flex justify-end items-center mt-2 text-gray-600 text-xs">
              <Image src="/icons/circle-right.svg" alt="circle-right" width={16} height={16} className="mr-2" /> Trusted Partner
            </div>
          </form>
        </div>
      </div>

      <p className="text-blue-500 font-bold text-h1 text-center py-8">Our Office Locations</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 xl:px-6 mt-2 bg-blue-300 bg-opacity-40 justify-center content-center">
        {offices.map((office, idx) => (
          <OfficeCard key={idx} {...office} />
        ))}
      </div>

      {/* Steps Section */}
      <div className="bg-gradient-to-l from-blue-100 to-white py-10 px-4">
        <p className="text-blue font-bold text-h2 text-center pt-8">Your Journey Made Simple</p>
        <p className="text-gray font-light text-sm text-center py-4">
          Your Seamless Path to Studying & Migrating: Every Step, Guided by Experts
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-4 gap-6 relative max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white w-[250px] h-[260px] rounded-xl shadow-sm flex flex-col items-center text-center px-4 py-6 relative"
            >
              <div className="bg-blue text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2 text-start">{step.title}</h3>
              <p className="text-base text-gray whitespace-pre-line text-start">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-32px] w-8 h-[2px] bg-blue"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4 w-full sm:w-auto mx-auto px-4 mt-8 lg:px-12 mb-8 justify-center">
          <button className="bg-red hover:bg-red-600 text-white px-6 py-2 rounded flex gap-2 justify-center w-auto md:px-4 md:py-3 text-xs md:text-xl ml-8">
            Start Your 5-Step Journey
            <Image src="/icons/cebrabian_right.svg" alt="arrow" width={16} height={16} />
          </button>
          <button className="bg-blue-500 hover:border-blue-500 text-white text-xs md:text-xl border-2 px-4 py-2 md:ml-4 rounded flex justify-center w-auto">
            Talk to Our Experts Today!
          </button>
        </div>
      </div>
    </div>
  );
}
