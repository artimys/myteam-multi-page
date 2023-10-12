"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import FullBleedContainer from "@/components/layout/FullBleedContainer";
import MyTeamLogo from "@/components/svg/MyTeamLogo";
import SlideOutMenu from "@/components/slide-out-menu/SlideOutMenu";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;

      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-216px)";
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FullBleedContainer classNames="bg-primary-midnight-green">
      <header
        className="container fixed top-0 left-0 right-0 z-50 pt-10 transition-transform duration-300 transform translate-y-0 xxxpb-20 xxmd:pb-28 md:pb-10 md:pt-16 bg-primary-midnight-green"
        ref={headerRef}
      >
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
