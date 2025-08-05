"use client";
import { useState } from "react";
import Image from "next/image";
import { RedCTA } from "@/components/custom/buttons/RedCTA";
import { OutlineCTA } from "@components/custom/buttons/OutlineCTA";

const sections = [
  {
    id: "new",
    title: "New to Aussie Globe?",
    items: ["Who We Are", "Who We Offer", "Why Choose Us", "Success Stories"],
  },
  {
    id: "explore",
    title: "Explore Our Services",
    items: [
      "Education Services",
      "Migration Services",
      "PY & Skills Assessment",
      "Visa Consultation",
    ],
  },
  {
    id: "resources",
    title: "Resources & Support",
    items: [
      "Student Guides",
      "Migration FAQs",
      "Scholarships & Funding",
      "Health Insurance",
    ],
  },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <footer>
      <div className="py-10 bg-gradient-to-b from-blue to-blue-500 text-white px-section">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 px-4">
          <div className="text-center lg:text-left">
            <h2 className="text-xl xl:text-3xl font-bold">
              Unlock Your Future with Our Fast & Trusted Processing
            </h2>
            <p className="text-base opacity-80 mt-2">
              Get expert guidance for admissions, visas, and career
              success—hassle-free!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
                        <RedCTA
                          text="Get a Free Consultation"
                          className="justify-center py-3"
                        />
                        <OutlineCTA
                          text="Talk to Our Experts!"
                          className="justify-center py-3"
                        />
          </div>
        </div>
      </div>

      <div className="bg-white text-blue-900 w-full px-section">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4">
          <div className="flex flex-col gap-4">
            <Image src="/icons/logo.svg" alt="Logo" width={128} height={32} />
            <p className="text-sm text-gray-600">
              Trusted experts in education & migration, helping students and
              professionals achieve their Australian dream with fast, reliable,
              and hassle-free solutions.
            </p>
            <div className="flex gap-4 mt-4">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (platform) => (
                  <Image
                    key={platform}
                    src={`/icons/${platform}.svg`}
                    alt={platform}
                    width={20}
                    height={20}
                  />
                )
              )}
            </div>
          </div>

          {sections.map(({ id, title, items }) => {
            const isOpen = openSections[id];
            return (
              <div key={id} className="flex flex-col lg:ms-24 text-left">
                <div className="flex justify-between mb-2 w-full">
                  <h3 className="font-semibold">{title}</h3>
                  <button
                    className="lg:hidden"
                    onClick={() => toggleSection(id)}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-section`}
                  >
                    <Image
                      src="/icons/cebrabian_down1.svg"
                      alt=""
                      width={16}
                      height={16}
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                <nav
                  id={`${id}-section`}
                  className={`space-y-2 text-sm text-gray-600 transition-all duration-300 ease-in-out w-full ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden lg:max-h-full lg:opacity-100"
                  }`}
                >
                  {items.map((item) => (
                    <div key={item} className="hover:underline cursor-pointer">
                      {item}
                    </div>
                  ))}
                </nav>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto pb-6 px-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-4 px-section">
        <div className="flex items-start gap-2 text-center md:text-left">
          <Image
            src="/icons/Torres.svg"
            alt="Torres"
            width={20}
            height={20}
            className="pt-1"
          />
          <Image
            src="/icons/aboriginal.svg"
            alt="Aboriginal"
            width={20}
            height={20}
            className="pt-1"
          />
          <p className="leading-relaxed w-3/4 ps-2">
            Aussieglobe Education And Migration acknowledges the Aboriginal and
            Torres Strait Islander peoples as the Traditional Owners of the
            land, respecting their ongoing connection to land, waters, and
            cultures, and honoring their Elders past and present.
          </p>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <p className="text-xs font-semibold">Developed by:</p>
          <Image
            src="/icons/tekgro.svg"
            alt="TekGro logo"
            width={72}
            height={24}
          />
        </div>
      </div>

      <div className="text-xs text-gray-500 border-t py-4 px-4 px-section">
        <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="flex flex-wrap justify-center gap-2">
            All Rights Reserved <span className="text-black">|</span> Terms &
            Conditions <span className="text-black">|</span> Privacy Policy
          </p>
          <p className="text-center sm:text-right">
            &copy; {new Date().getFullYear()} Aussieglobe Education and
            Migration
          </p>
        </div>
      </div>
    </footer>
  );
}
