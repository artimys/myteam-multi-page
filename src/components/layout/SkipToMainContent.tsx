import Link from "next/link";

function SkipToMainContent({ targetId }) {
  return (
    <Link
      href={`#${targetId}`}
      aria-label="Skip to main content"
      className="btn btn-primary--dark absolute left-0 right-0 block mx-auto -translate-y-[150%] transition-[transform] duration-300 ease-in-out w-60 focus:translate-y-1/2 bg-primary-light-coral text-center"
    >
      Skip to main content
    </Link>
  );
}

export default SkipToMainContent;
