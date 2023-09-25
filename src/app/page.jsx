export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="container relative bg-home-two-patterns">
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

      <div className="container relative h-80 bg-secondary-sacramento-state-green">
        <h2>Build & Manage ...</h2>
      </div>
    </>
  );
}
