import Link from "next/link";

function ReadyGetStarted() {
  return (
    <div className="container bg-primary-light-coral bg-contactus bg-[left_calc(100%_+_22px)] bg-no-repeat desktop:bg-left-bottom">
      <div className="py-20 text-center xl:py-16 md:flex xl:items-center md:justify-between max-w-xl xl:max-w-[917px] mx-auto">
        <h4 className="text-[32px] xl:text-5xl font-bold px-20 leading-8 md:px-0">
          Ready to get started?
        </h4>

        <Link href="/contact" className="mt-5 btn btn-primary-dark md:mt-0">
          contact us
        </Link>
      </div>
    </div>
  );
}

export default ReadyGetStarted;
