import Image from "next/image";

function DistributedTeamsItem({ feature }) {
  return (
    <div className="flex flex-col items-center space-y-4 text-center sm:text-left sm:space-x-7 sm:flex-row">
      <Image src={feature.icon} width={72} alt="" />

      <div className="space-y-2 sm:space-y-4">
        <strong className="text-lg font-bold text-primary-light-coral">
          {feature.title}
        </strong>

        <p className="font-semibold text-[15px] leading-[25px]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default DistributedTeamsItem;
