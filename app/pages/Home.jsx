import Hero from "@/layout/Hero";
import { TrophyIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ContactToggle } from "@/components/ContactToggle";
import { OutlineCTA } from "@/components/buttons/OutlineCTA";
import { RedCTA } from "@/components/buttons/RedCTA";
import { TestimonialList } from "@/components/slider/TestimonialList";
import { SectionHeader } from "@/components/SectionHeader";

export const Home = () => {
  return (
    <>
      <Hero
        statusItems={[
          { Icon: TrophyIcon, label: "MARA Certified" },
          { Icon: GlobeAltIcon, label: "Global Partner" },
        ]}
        heading={
          <>
           Begin Your<br />
            <span className="text-blue-500">Global Education</span> <br />
            Journey in <span className="text-yellow">Australia</span>
          </>
        }
        description={
          <span>Expert education migration consultants guiding your global study journey with dedicated, personalised support.</span>
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
      <SectionHeader
        outlinetext="Trusted by 20,000+ Successful Applicants"
        heading="Your Trusted Education and Migration Partner"
        subheading="Seamless Solutions for Your Education and Migration Journey"
      />
    </>
  );
};
