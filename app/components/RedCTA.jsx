import { ChevronRight } from 'lucide-react';

export const RedCTA = ({ text, className = "" }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 bg-red hover:opacity-90 text-white font-medium px-4 py-2 rounded-md transition duration-200 ${className}`}
    >
      {text}
      <ChevronRight size={18} />
    </button>
  );
};