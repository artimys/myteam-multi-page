import Link from "next/link";
import IconClose from "@/components/svg/IconClose";

function MobileNav({ closeMenuHandler }) {
  return (
    <nav className="fixed top-0 right-0 z-50 min-h-screen pt-12 bg-no-repeat bg-secondary-police-blue w-[255px] bg-about-mobile-nav-1 bg-[bottom_right_-99px] md:hidden">
      <div className="flex justify-end mt-1 mb-10 mr-6">
        <button onClick={closeMenuHandler}>
          <IconClose />
        </button>
      </div>

      <ul className="flex flex-col space-y-5 px-14">
        <li>
          <Link
            href="/"
            className="text-lg text-primary-white hover:text-primary-light-coral"
            onClick={closeMenuHandler}
          >
            home
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            className="text-lg text-primary-white hover:text-primary-light-coral"
            onClick={closeMenuHandler}
          >
            about
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className="mt-3 btn btn-primary"
            onClick={closeMenuHandler}
          >
            contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
