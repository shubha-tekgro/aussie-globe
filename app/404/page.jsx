'use client';

import Image from 'next/image';
import data from '@/data/data.json';

const ServiceCard = ({ icon, title, description, button }) => (
  <div className="bg-white px-8 py-4 mr-4 rounded-xl">
    <Image src={icon} alt={title} width={32} height={32} />
    <div className="font-bold text-xs xl:text-xl py-2 hover:text-blue-500">
      {title}
    </div>
    <div className="w-[82%] text-xs xl:text-base">{description}</div>
    <button className="text-red mt-2 mb-4 flex gap-4 justify-center w-auto py-2 text-xs xl:text-xl">
      {button}
      <Image src="/icons/cebrabian-red.svg" alt="arrow" width={16} height={16} />
    </button>
  </div>
);

export default function Error() {
  const { services } = data;
  return (
    <div>
      <div className="bg-gradient-to-l from-blue-500 to-blue py-12 xl:px-8 mt-8 relative overflow-hidden">
        <Image
          src="/icons/zig-zag.svg"
          alt="zig_zag"
          width={320}
          height={80}
          className="absolute right-0 top-[-3rem] hidden md:block"
        />
        <Image
          src="/icons/finder.svg"
          alt="finder"
          width={192}
          height={192}
          className="absolute right-12 top-[-4rem] hidden md:block"
        />
        <Image
          src="/icons/circle.svg"
          alt="circle"
          width={12}
          height={12}
          className="absolute right-12 top-[4rem] hidden md:block"
        />
        <Image
          src="/icons/circle.svg"
          alt="circle"
          width={12}
          height={12}
          className="absolute right-44 top-[6rem] hidden md:block"
        />
        <Image
          src="/icons/plus.svg"
          alt="plus"
          width={12}
          height={12}
          className="absolute right-40 top-[2rem] hidden md:block"
        />

        <div className="md:ml-16 relative z-10 px-4">
          <div className="text-yellow text-h1 font-semibold mt-10 md:mt-12">404</div>
          <div className="text-white py-4 font-bold md:text-h2 text-lg">
            Oops! Page Not Found
          </div>
          <div className="text-white py-4 text-xs">
            It looks like the page you're looking for doesn't exist, has been moved, or the link was mistyped.
            <div className="text-white py-4 md:w-[38%]">
              Need help finding something? We're here to support your journey, whether you're planning to study, migrate, or need trusted advice.
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-20 flex justify-center content-center text-xxs">
        <button className="border-gray-100 border-2 px-4 py-2 rounded-xl gap-2 flex justify-center w-auto">
          <Image src="/icons/circle-right.svg" alt="circle_right" width={16} height={16} />
          Leading Australian Education Consultants
        </button>
      </div>

      {/* Subheader */}
      <div className="xl:ml-96 xl:mr-32 py-4 text-blue text-sub md:text-h2 font-bold text-center">
        Unlock Your Future: Study, Work & Migrate with Confidence
        <div className="py-2 text-xs font-light w-full text-black">
          Expert guidance for your Australian education and migration journey, backed by 15+ years of experience and thousands of success stories.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 xl:px-6 mt-2 bg-gray-100 bg-opacity-50 justify-center content-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            button={service.button}
          />
        ))}
      </div>
    </div>
  );
}
