import Image from "next/image";
import FullBleedContainer from "@/components/layout/FullBleedContainer";
import IconPerson from "../../../public/images/icon-person.svg";
import IconCog from "../../../public/images/icon-cog.svg";
import IconChart from "../../../public/images/icon-chart.svg";
import ContactForm from "@/components/contact/ContactForm";

function contact() {
  return (
    <>
      <FullBleedContainer classNames="bg-contact-pattern bg-primary-midnight-green">
        <div className="container">
          <div className="grid grid-cols-1 max-w-[542px] lg:max-w-2xl xl:max-w-[1110px] mx-auto xl:grid-cols-2 gap-16">
            <div className="text-center xl:text-left">
              <h1 className="xl:mt-5">Contact</h1>
              <p className="text-primary-light-coral mt-3 xl:mt-8 text-[32px] font-bold leading-[48px]">
                Ask us about
              </p>

              <ul className="flex flex-col gap-6 text-lg font-bold text-left mt-9 md:gap-3 text-primary-white">
                <li className="flex items-center gap-6">
                  <Image src={IconPerson} width={72} alt="" />
                  The quality of our talent network
                </li>
                <li className="flex items-center gap-6">
                  <Image src={IconCog} width={72} alt="" />
                  Usage & implementation of our software
                </li>
                <li className="flex items-center gap-6">
                  <Image src={IconChart} width={72} alt="" />
                  How we help drive innovation
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </FullBleedContainer>
    </>
  );
}

export const metadata = {
  title: "Frontend Mentor | myteam website challenge - Contact",
  description: "Generated by create next app",
};

export default contact;
