import { StarIcon } from "@heroicons/react/20/solid";

export const Testimonial = ({
  profileImage,
  reviewText,
  userName,
  userRole,
  rating
}) => {
  return (
    <article className={`flex gap-3 items-start h-full `}>
      <div>
        <img
          src={profileImage}
          alt={`${userName} profile`}
          className="rounded-full w-10 h-10 object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-1 w-full h-full">
        <div
          className="flex items-center gap-1 text-yellow-500 pb-2"
          aria-label={`${rating} star rating`}
        >
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="w-4 h-4 text-yellow-500" />
          ))}
        </div>

        <p className="text-zinc-800 flex-grow pb-4">"{reviewText}"</p>

        <footer className="mt-auto">
          <p className="text-sm font-semibold text-yellow-500">{userName}</p>
          <p className="text-xs text-neutral-500">{userRole}</p>
        </footer>
      </div>
    </article>
  );
};
