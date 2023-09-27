import SuccessStoriesContainer from "@/components/home/success-stories/SuccessStoriesContainer";
import FullBleedContainer from "@/components/layout/FullBleedContainer";

export default function Home() {
  return (
    <>
      <div className="container relative bg-home-two-patterns bg-primary-midnight-green">
        <div className="grid grid-cols-1 max-w-[1110px] mx-auto text-center xl:text-left xl:grid-cols-[1.5fr_1fr] gap-4 md:gap-6">
          <div>
            <h1 className="xl:text-[100px] xl:leading-[100px] xl:w-[590px]">
              Find the
              <br />
              best <span className="text-primary-light-coral">talent</span>
            </h1>
          </div>

          <div className="flex items-end max-w-sm md:max-w-[457px] mx-auto paragraph-bar">
            <p className="text-[15px] leading-[28px] xl:text-lg xl:leading-7 font-semibold text-primary-white">
              Finding the right people and building high performing teams can be
              hard. Most companies aren't tapping into the abundance of global
              talent. We're about to change that.
            </p>
          </div>
        </div>
      </div>

      <FullBleedContainer classNames="bg-home-pattern-distributed bg-secondary-sacramento-state-green">
        <div className="container text-center">
          <h2>Build & manage distributed teams like no one else.</h2>
        </div>
      </FullBleedContainer>

      <FullBleedContainer classNames="bg-home-pattern-stories bg-secondary-deep-jungle-green">
        <div className="container">
          <h2 className="text-center">
            Delivering real results for top companies. Some of our{" "}
            <span className="text-secondary-rapture-blue">success stories</span>
          </h2>

          <SuccessStoriesContainer />
        </div>
      </FullBleedContainer>
    </>
  );
}
