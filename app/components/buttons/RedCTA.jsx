import { ChevronRightIcon } from '@heroicons/react/24/outline';

export const RedCTA = ({ text, className = "" }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 bg-red hover:opacity-90 text-white font-medium px-4 py-2 rounded-md transition duration-200 ${className}`}
    >
      {text}
      <ChevronRightIcon width={18} />
    </button>
  );
};