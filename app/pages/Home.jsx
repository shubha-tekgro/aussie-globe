import { ConsultationForm } from "@/components/ConsultationForm";
import { ContactToggle } from "@/components/ContactToggle";
import { OutlineCTA } from "@/components/OutlineCTA";
import { RedCTA } from "@/components/RedCTA";
import { Award, Globe } from "lucide-react";
import { CircleCheckBig, Phone, MessageCircle, ChevronRight } from "lucide-react";

export const Home = () => {
  return (
<div
  className="relative flex flex-col lg:flex-row items-start justify-between 2xl:justify-center w-full bg-gradient-to-r from-blue to-blue-500 py-12 px-4 lg:px-8 lg:px-16 xl:px-32 2xl:px-52"
  aria-labelledby="home-heading"
>
  <div className="w-full text-white lg:w-1/2">
    <div className="flex items-center gap-2 lg:gap-6 my-6">
      {[{ Icon: Award, label: "MARA Certified" }, { Icon: Globe, label: "Global Partner" }].map(({ Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-1 lg:gap-2 bg-white/10 px-2 py-1 lg:px-4 lg:py-2 rounded lg:rounded-lg"
          role="status"
          aria-label={label}
        >
          <Icon className="text-yellow w-4 lg:w-5" />
          <span className="text-white text-xs lg:text-sm font-thin">{label}</span>
        </div>
      ))}
    </div>

    <h1 id="home-heading" className="text-3xl lg:text-5xl font-bold leading-tight">
      Begin Your <br />
      <span className="text-blue-500">Global Education</span> <br />
      Journey in <span className="text-yellow">Australia</span>
    </h1>

    <p className="mt-4 text-sm lg:text-lg text-white/90 max-w-xl">
      Expert education migration consultants guiding your global <br />
      study journey with dedicated, personalised support.
    </p>

    <ul className="mt-6 space-y-2 list-none">
      {["Custom Education Strategies", "Efficient Visa Assistance", "Committed Support Staff"].map((item) => (
        <li key={item} className="flex items-center gap-2">
          <CircleCheckBig size={20} className="text-green" />
          <span className="font-thin">{item}</span>
        </li>
      ))}
    </ul>

    <div className="mt-6 flex flex-wrap gap-4">
      <RedCTA text="Why Choose AussieGlobe?" />
      <OutlineCTA text="Explore Programs" />
    </div>
  </div>

  <div className="w-full lg:w-1/2 max-w-lg">
    <ConsultationForm />   
    <ContactToggle/> 
  </div>
</div>

  );
};
 