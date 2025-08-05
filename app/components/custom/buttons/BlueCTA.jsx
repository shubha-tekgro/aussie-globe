export const BlueCTA = ({ text }) => {
  return (
    <button
      className="bg-blue hover:opacity-90 text-white font-medium px-4 py-2 rounded-md transition duration-200"
    >
      {text}
    </button>
  );
};