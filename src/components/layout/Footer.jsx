import Link from "next/link";
import Image from "next/image";
import IconFacebook from "@/components/svg/IconFacebook";
import IconPinterest from "@/components/svg/IconPinterest";
import IconTwitter from "@/components/svg/IconTwitter";
import Logo from "../../../public/images/logo.svg";

function Footer() {
  return (
    <footer className="w-full px-12 sm:px-10 pt-16 pb-12 xl:py-14 text-[#979797] bg-secondary-dark-green font-semibold text-base">
      <div className="grid justify-center grid-cols-1 mx-auto text-center md:grid-cols-2 xl:grid-cols-4 max-w-[1110px]">
        <section className="flex flex-col items-center md:justify-between md:items-start">
          <div className="w-[96px] h-[24px] lg:w-[160px] lg:h-[40px]">
            <Image src={Logo} alt="myteam Logo" />
          </div>

          <nav className="mt-9">
            <ul className="flex flex-row justify-center gap-7 xl:gap-11">
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
            </ul>
          </nav>
        </section>

        <section className="mt-12 md:mt-0 md:text-right xl:text-left">
          <address className="flex flex-col gap-1 not-italic">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>
              Call Us:{" "}
              <Link
                href="tel:9498337432"
                className="hover:text-primary-light-coral"
              >
                949-833-7432
              </Link>
            </p>
          </address>
        </section>

        <section className="flex flex-col items-center mt-14 md:mt-10 xl:mt-0 md:col-span-2 md:flex-row md:justify-between xl:flex-col xl:items-end">
          <ul className="flex flex-row items-center gap-5">
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook />
              </Link>
            </li>

            <li>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconPinterest />
              </Link>
            </li>

            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTwitter />
              </Link>
            </li>
          </ul>

          <p className="mt-6 md:mt-0">Copyright 2020. All Rights Reserved</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
