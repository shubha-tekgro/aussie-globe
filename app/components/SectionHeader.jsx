import { CheckCircleIcon } from "@heroicons/react/24/outline";

export const SectionHeader = ({ outlinetext, heading, subheading }) => {
  return (
    <div className="text-center space-y-3 mb-10 mt-10 md:mt-24 mb-12">
      {outlinetext && (
        <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-700 border border-gray-300 px-2 md:px-4 py-1 md:mb-2 rounded-md">
          <CheckCircleIcon className="w-5 h-5 text-green" />
          {outlinetext}
        </div>
      )}

      {heading && (
        <h2 className="text-3xl md:text-4xl font-bold text-blue">
          {heading}
        </h2>
      )}

      {subheading && (
        <p className="text-sm md:text-lg text-gray-500 max-w-xl mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
};
