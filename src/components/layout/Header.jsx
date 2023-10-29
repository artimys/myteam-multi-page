import Link from "next/link";
import Image from "next/image";
import FullBleedContainer from "@/components/layout/FullBleedContainer";
import SlideOutMenu from "@/components/slide-out-menu/SlideOutMenu";
import Logo from "../../../public/images/logo.svg";

function Header() {
  return (
    <FullBleedContainer classNames="bg-primary-midnight-green">
      <header className="container pt-10 pb-20 md:pb-28 md:pt-16">
        <div className="flex flow-row max-w-[1110px] mx-auto items-center">
          <div className="w-[128px] h-[32px] lg:w-[160px] lg:h-[40px] mr-12 lg:mr-20">
            <Link href="/">
              <Image src={Logo} alt="myteam Logo" />
            </Link>
          </div>

          <nav className="flex-1 hidden md:block">
            <ul className="flex flex-row items-center gap-10">
              <li>
                <Link
                  href="/"
                  className="text-lg text-primary-white hover:text-primary-light-coral"
                >
                  home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-lg text-primary-white hover:text-primary-light-coral"
                >
                  about
                </Link>
              </li>

              <li className="ml-auto">
                <Link href="/contact" className="btn btn-primary">
                  contact us
                </Link>
              </li>
            </ul>
          </nav>

          <SlideOutMenu />
        </div>
      </header>
    </FullBleedContainer>
  );
}

export default Header;
