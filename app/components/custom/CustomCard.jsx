import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const CustomCard = ({ icon, title, description, list, button }) => {
  return (
    <div className="bg-white px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <Image src={icon} alt={title} width={44} height={44} />
      </div>

      <h3 className="font-semibold text-base xl:text-lg text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-sm xl:text-base text-gray-600 mb-4">{description}</p>

      {list && list.length > 0 && (
        <ul className="space-y-2 list-none">
          {list.map((item) => (
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

      <button
        type="button"
        className="text-red-600 flex items-center gap-2 text-sm xl:text-base font-medium mt-6 hover:underline transition-all duration-200"
      >
        {button}
        <Image
          src="/icons/cebrabian-red.svg"
          alt="arrow"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};
