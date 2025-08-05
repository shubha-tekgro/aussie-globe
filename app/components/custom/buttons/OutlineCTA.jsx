export const OutlineCTA = ({ text }) => {
  return (
    <button
      className="border border-white text-white bg-transparent hover:bg-white/10 font-medium px-4 py-2 rounded-md transition duration-200"
    >
      {text}
    </button>
  );
};