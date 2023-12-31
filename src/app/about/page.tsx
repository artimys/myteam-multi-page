import Image from "next/image";
import FullBleedContainer from "@/components/layout/FullBleedContainer";
import LogoTheVerge from "../../../public/images/logo-the-verge.png";
import LogoJakartaPost from "../../../public/images/logo-jakarta-post.png";
import LogoTheGuardian from "../../../public/images/logo-the-guardian.png";
import LogoTechRadar from "../../../public/images/logo-tech-radar.png";
import LogoGadgetsNow from "../../../public/images/logo-gadgets-now.png";

import MeetDirectorsGrid from "@/components/about/meet-directors/MeetDirectorsGrid";
import ReadyGetStarted from "@/components/layout/ReadyGetStarted";

function about() {
  return (
    <>
      <FullBleedContainer classNames="bg-about-pattern-right bg-primary-midnight-green">
        <div className="container relative">
          <div className="grid grid-cols-1 max-w-[1110px] mx-auto text-center xl:text-left xl:grid-cols-[1fr_2fr] gap-4 md:gap-6">
            <div className="xl:mt-5">
              <h1>About</h1>
            </div>

            <div className="flex items-end mx-auto max-w-sm md:max-w-[457px] xl:max-w-[730px] paragraph-bar xl:before:bg-primary-light-coral xl:pt-10">
              <p className="text-[15px] leading-[28px] xl:text-lg xl:leading-7 font-semibold text-primary-white">
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We&apos;ll bring
                those teams to you.
              </p>
            </div>
          </div>
        </div>
      </FullBleedContainer>

      <FullBleedContainer classNames="bg-secondary-deep-jungle-green bg-about-pattern-directors">
        <div className="container">
          <h2 className="pt-24 pb-12 text-center xl:pt-36 xl:pb-16">
            Meet the directors
          </h2>

          <MeetDirectorsGrid />
        </div>
      </FullBleedContainer>

      <FullBleedContainer classNames="bg-secondary-sacramento-state-green bg-about-pattern-clients">
        <div className="container py-24 md:py-20 xl:pb-28 xl:pt-32">
          <div className="max-w-[689px] xl:max-w-[1110px] mx-auto space-y-12 text-center">
            <h2>Some of our clients</h2>
            <ul className="flex flex-col items-center justify-center gap-12 md:flex-row xl:gap-20">
              <li>
                {/* 146.56 x 24.19, md:103 x 17, lg:165 x 28 */}
                <Image
                  src={LogoTheVerge}
                  alt="The Verge Logo"
                  width={165}
                  height={28}
                  // width={146.56}
                  // height={24.19}
                  sizes="(min-width: 1440px) 165px, (min-width: 768px) 103px, 146px"
                />
              </li>
              <li>
                {/* 162.21 x 19.92, md:114 x 14, lg:184 x 23 */}
                <Image
                  src={LogoJakartaPost}
                  alt="Jakarta Post Logo"
                  width={184}
                  height={23}
                  sizes="(min-width: 1440px) 184px, (min-width: 768px) 114px, 162px"
                />
              </li>
              <li>
                {/* 159.37 x 24.19, md:112 x 17, lg:180 x 28 */}
                <Image
                  src={LogoTheGuardian}
                  alt="The Guardian Logo"
                  width={180}
                  height={28}
                  sizes="(min-width: 1440px) 180px, (min-width: 768px) 112px, 159px"
                />
              </li>
              <li>
                {/* 146.56 x 24.19, md:103 x 17, lg:165 x 28 */}
                <Image
                  src={LogoTechRadar}
                  alt="Tech Radar Logo"
                  width={165}
                  height={28}
                  sizes="(min-width: 1440px) 165px, (min-width: 768px) 103px, 146px"
                />
              </li>
              <li>
                {/* 86.8 x 39.84, md:61 x 28, lg:98 x 45 */}
                <Image
                  src={LogoGadgetsNow}
                  alt="Gadgets Now Logo"
                  width={98}
                  height={45}
                  sizes="(min-width: 1440px) 98px, (min-width: 768px) 61px, 86px"
                />
              </li>
            </ul>
          </div>
        </div>
      </FullBleedContainer>

      <ReadyGetStarted />
    </>
  );
}

export const metadata = {
  title: "Frontend Mentor | myteam website challenge - About",
  description: "Generated by create next app",
};

export default about;
