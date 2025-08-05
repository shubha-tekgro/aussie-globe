import { TrophyIcon, GlobeAltIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const Hero = ({
  statusItems = [
    { Icon: TrophyIcon, label: "MARA Certified" },
    { Icon: GlobeAltIcon, label: "Global Partner" },
  ],
  heading = (
    <>
      Begin Your <br />
      <span className="text-blue-500">Global Education</span> <br />
      Journey in <span className="text-yellow">Australia</span>
    </>
  ),
  description = (
    <>
      Expert education migration consultants guiding your global <br />
      study journey with dedicated, personalised support.
    </>
  ),
  featureList = [
    "Custom Education Strategies",
    "Efficient Visa Assistance",
    "Committed Support Staff",
  ],
  redCTA = { show: true, text: "Why Choose AussieGlobe?" },
  outlineCTA = { show: true, text: "Explore Programs" },
  showForm = true,
  showContactToggle = true,
  ConsultationForm,
  ContactToggle,
  RedCTA,
  OutlineCTA,
}) => {
  return (
    <section
      aria-labelledby="home-heading"
      className="relative flex flex-col lg:flex-row items-start justify-between xl:justify-center w-full bg-gradient-to-r from-blue to-blue-500 gap-6 lg:gap-0 lg:py-section-lg py-section px-section"
    >
      <div className="w-full text-white md:max-w-xl md:mx-auto lg:mx-0 lg:w-1/2">
        {statusItems && statusItems.length > 0 && (
          <div className="flex items-center gap-2 lg:gap-6 my-6">
            {statusItems.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1 lg:gap-2 bg-white/10 px-2 py-1 lg:px-4 lg:py-2 rounded lg:rounded-lg"
                role="status"
                aria-label={label}
              >
                <Icon className="text-yellow w-4 lg:w-5" aria-hidden="true" />
                <span className="text-white text-xs lg:text-sm font-thin">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <h1
          id="home-heading"
          className="text-4xl lg:text-5xl font-bold leading-tight"
        >
          {heading}
        </h1>

        {description && (
          <p className="mt-4 text-md lg:text-lg text-white/90 max-w-xl">
            {description}
          </p>
        )}

        {featureList && featureList.length > 0 && (
          <ul className="mt-6 space-y-2 list-none">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircleIcon
                  width={20}
                  className="text-green"
                  aria-hidden="true"
                />
                <span className="font-thin">{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-4">
          {redCTA?.show && RedCTA && <RedCTA text={redCTA.text} />}
          {outlineCTA?.show && OutlineCTA && (
            <OutlineCTA text={outlineCTA.text} />
          )}
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        {showForm && ConsultationForm && <ConsultationForm />}
        {showContactToggle && ContactToggle && (
          <div className="hidden lg:block">
            <ContactToggle />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
