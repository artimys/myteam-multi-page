import Link from "next/link";
import FullBleedContainer from "@/components/layout/FullBleedContainer";

function ReadyGetStarted() {
  return (
    <FullBleedContainer classNames="bg-pattern-get-started bg-primary-light-coral">
      <div className="container">
        <div className="py-16 text-center xl:py-16 md:flex xl:items-center md:justify-between max-w-xl xl:max-w-[917px] mx-auto">
          <h3 className="text-[32px] xl:text-5xl font-bold px-16 leading-8 md:px-0">
            Ready to get started?
          </h3>

          <Link href="/contact" className="mt-5 btn btn-primary--dark md:mt-0">
            contact us
          </Link>
        </div>
      </div>
    </FullBleedContainer>
  );
}

export default ReadyGetStarted;
