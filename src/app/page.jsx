import FullBleedContainer from "@/components/layout/FullBleedContainer";
import DistributedTeamsContainer from "@/components/home/distributed-teams/DistributedTeamsContainer";
import SuccessStoriesContainer from "@/components/home/success-stories/SuccessStoriesContainer";
import ReadyGetStarted from "@/components/layout/ReadyGetStarted";

export default function Home() {
  return (
    <>
      <FullBleedContainer classNames="bg-home-two-patterns bg-primary-midnight-green">
        <div className="container relative">
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
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
              </p>
            </div>
          </div>
        </div>
      </FullBleedContainer>

      <FullBleedContainer classNames="bg-home-pattern-distributed bg-secondary-sacramento-state-green">
        <div className="container relative grid grid-cols-1 max-w-[1110px] mx-auto xl:grid-cols-2 md:px-20 xl:px-0">
          <div
            className="paragraph-bar pt-9 lg:pt-14
                before:absolute before:w-[50px] before:bg-primary-light-coral before:h-1 before:top-0"
          >
            <h2 className="pr-28 sm:pr-40 lg:pr-32">
              Build & manage distributed teams like no one else.
            </h2>
          </div>

          <DistributedTeamsContainer />
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

      <ReadyGetStarted />
    </>
  );
}
