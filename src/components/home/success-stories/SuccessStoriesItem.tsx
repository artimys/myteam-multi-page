import Image from "next/image";

import { SuccessStoriesProps } from "@/types/SuccessStoriesProps.type";

function SuccessStoriesItem({ name, role, image, quote }: SuccessStoriesProps) {
  return (
    <div className="flex flex-col items-center flex-1 text-center bg-home-quotes-stories text-primary-white pt-9">
      <p className="font-semibold text-[15px] leading-[25px] mb-5">
        &quot;{quote}&quot;
      </p>

      <div className="flex flex-col">
        <strong className="text-lg font-bold text-secondary-rapture-blue">
          {name}
        </strong>
        <em className="text-[13px] leading-[18px] font-medium">{role}</em>
      </div>

      <Image
        src={image}
        alt={name}
        width={62}
        className="mt-5 border-2 border-white rounded-full lg:mt-7"
      />
    </div>
  );
}

export default SuccessStoriesItem;
