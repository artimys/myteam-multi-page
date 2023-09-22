import Link from "next/link";

function ReadyGetStarted() {
  return (
    <div className="py-20 xl:bg-left-bottom bg-[left_calc(100%_+_22px)] bg-no-repeat xl:py-16 bg-primary-light-coral bg-contactus mx-auto max-w-[1440px] shadow-coral clip-coral">
      <div className="max-w-xl xl:max-w-[917px] mx-auto text-center md:flex md:items-center md:justify-between xbg-red-100">
        <h4 className="text-[32px] xl:text-5xl font-bold px-20 leading-8 md:px-0">
          Ready to get started?
        </h4>

        <Link href="/contact" className="mt-5 btn-primary-dark md:mt-0">
          contact us
        </Link>
      </div>
    </div>
  );
}

export default ReadyGetStarted;
