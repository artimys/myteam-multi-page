import Link from "next/link";

function SkipToMainContent() {
  return (
    <Link
      href="#main-content"
      aria-label="Skip to main content"
      className="absolute block py-3 mx-auto mt-5 font-bold text-center rounded-full w-60 -left-full border-secondary-deep-jungle-green bg-primary-light-coral focus:left-0 focus:right-0 text-secondary-sacramento-state-green hover:underline"
      tabIndex={0}
    >
      Skip to main content
    </Link>
  );
}

export default SkipToMainContent;
