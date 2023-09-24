import Link from "next/link";
import MyTeamLogo from "../svg/MyTeamLogo";

function Header() {
  return (
    <header className="px-6 mt-10 mb-20 md:mb-24 md:mt-16 md:px-10">
      <div className="flex flow-row max-w-[1110px] mx-auto">
        {/* TODO sm md 128px, lg xl 160 */}
        <Link href="/" className="mr-20">
          <MyTeamLogo />
        </Link>

        <nav className="hidden w-full md:block">
          <ul className="flex flex-row items-center gap-10">
            <li>
              <Link
                href="/"
                className="text-primary-white xl:text-lg hover:text-primary-light-coral"
              >
                home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="text-primary-white xl:text-lg hover:text-primary-light-coral"
              >
                about
              </Link>
            </li>

            <li className="ml-auto">
              <Link href="/contact" className="btn btn-primary-light">
                contact us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
