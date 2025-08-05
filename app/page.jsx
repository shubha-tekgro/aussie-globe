import { TrophyIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { ConsultationForm } from "@/components/custom/ConsultationForm";
import { ContactToggle } from "@/components/custom/ContactToggle";
import { OutlineCTA } from "@/components/custom/buttons/OutlineCTA";
import { RedCTA } from "@/components/custom/buttons/RedCTA";
import { BlueCTA } from "@/components/custom/buttons/BlueCTA";
import { TestimonialList } from "@/components/custom/slider/TestimonialList";
import { VideoTestimonial } from "@components/custom/slider/VideoTestimonial";
import { CustomCard } from "@/components/custom/CustomCard";
import { BlogView } from "@/components/custom/BlogView";
import { FAQ } from "@/components/custom/FAQ";

import { SectionHeader } from "@/sections/SectionHeader";
import Hero from "@/sections/Hero";
import data from "@/data/data.json";

export default function HomePage() {
  const { services, steps, featureList, benefits } = data;
  return (
    <>
      <Hero
        statusItems={[
          { Icon: TrophyIcon, label: "MARA Certified" },
          { Icon: GlobeAltIcon, label: "Global Partner" },
        ]}
        heading={
          <>
            Begin Your
            <br />
            <span className="text-blue-500">Global Education</span> <br />
            Journey in <span className="text-yellow">Australia</span>
          </>
        }
        description={
          <span>
            Expert education migration consultants guiding your global study
            journey with dedicated, personalised support.
          </span>
        }
        featureList={[
          "Custom Education Strategies",
          "Efficient Visa Assistance",
          "Committed Support Staff",
        ]}
        redCTA={{ show: true, text: "Why Choose AussieGlobe?" }}
        outlineCTA={{ show: true, text: "Explore Programs" }}
        showForm={true}
        showContactToggle={true}
        ConsultationForm={ConsultationForm}
        ContactToggle={ContactToggle}
        RedCTA={RedCTA}
        OutlineCTA={OutlineCTA}
      />

      <TestimonialList />


      <div className="pt-section md:pt-section-lg">
        <SectionHeader
          outlinetext="Trusted by 20,000+ Successful Applicants"
          heading="Unlock Your Future: Study, Work & Migrate with Confidence"
          subheading="Seamless Solutions for Your Education and Migration Journey"
        />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4 pt-section-md">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white px-6 py-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center justify-center"
          >
            <div className="absolute top-4 right-4 bg-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {item.tag}
            </div>

            <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />

            <h3 className="text-base xl:text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-sm xl:text-base text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>

              <div className="flex justify-center mt-section-md">
          <div className="flex flex-col lg:flex-row gap-4">
            <RedCTA
              text="Start Your Visa Appilication Today"
              className="justify-center py-3"
            />
            <BlueCTA
              text="Explore Education and Migration Options"
              className="justify-center py-3"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 bg-opacity-50 mt-section py-section md:mt-section-md md:py-section-md">
        <SectionHeader
          outlinetext="Leading Australian Education Consultants"
          heading="Unlock Your Future: Study, Work & Migrate with Confidence"
          subheading="From university admissions to visa assistance and beyond, AussieGlobe offers expert guidance at every step of your education and migration process."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-section px-section xl:px-section-2xl justify-center content-center">
          {services.map((service, index) => (
            <CustomCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              list={service.list}
              button={service.button}
            />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue to-blue-500 text-white px-4 py-10 lg:px-12 lg:py-16">
        <div className="px-section xl:px-section-2xl flex flex-col lg:flex-row  gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="font-semibold text-xl xl:text-4xl">
              Get Your Personalized Study Plan
            </h3>
            <p className="text-sm xl:text-lg max-w-lg">
              Connect with our experts to discover your ideal education pathway
              in Australia
            </p>
            <ul className="space-y-4 pt-6">
              {featureList.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircleIcon
                    width={20}
                    className="text-green"
                    aria-hidden="true"
                  />
                  <span className="font-thin">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 lg:ml-44">
            <ConsultationForm
              fields={["fullName", "email", "phone", "interest", "submit"]}
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-section-lg bg-gradient-to-t from-blue-100 to-transparent">
        <SectionHeader
          heading="Your Trusted Education and Migration Partner"
          subheading="Seamless Solutions for Your Education and Migration Journey"
        />
        <div className="flex flex-col lg:flex-row items-stretch lg:items-start justify-center flex-wrap lg:flex-nowrap gap-6 relative max-w-6xl mx-auto lg:my-section-md my-section">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-white rounded-xl shadow-sm flex flex-col text-center px-4 py-6 relative"
            >
              <div className="bg-blue text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2 text-start">
                {step.title}
              </h3>
              <p className="text-base text-gray whitespace-pre-line text-start">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-32px] w-8 h-[2px] bg-blue"></div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-4">
            <RedCTA
              text="Begin Your 4-Step Journey"
              className="justify-center py-3"
            />
            <BlueCTA
              text="Consult Our Experts Now!"
              className="justify-center py-3"
            />
          </div>
        </div>
      </div>

      <VideoTestimonial />
      <BlogView />
      <FAQ />
    </>
  );
}
