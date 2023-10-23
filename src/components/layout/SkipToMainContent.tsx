import Link from "next/link";

function SkipToMainContent() {
  return (
    <Link
      href="#main-content"
      aria-label="Skip to main content"
      // className="absolute left-0 right-0 block py-3 mx-auto font-bold text-center -translate-y-[150%] transition-[transform] duration-300 ease-in-out rounded-full w-60 border-secondary-deep-jungle-green bg-primary-light-coral text-secondary-sacramento-state-green hover:underline focus:translate-y-1/2"
      className="btn btn-primary--dark absolute left-0 right-0 block mx-auto -translate-y-[150%] transition-[transform] duration-300 ease-in-out w-60 focus:translate-y-1/2 bg-primary-light-coral text-center"
      tabIndex={1}
    >
      Skip to main content
    </Link>
  );
}

export default SkipToMainContent;
