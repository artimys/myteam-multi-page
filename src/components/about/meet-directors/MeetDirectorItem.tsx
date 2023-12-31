"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import IconCross from "../../../../public/images/icon-cross.svg";
import IconTwitter from "../../svg/IconTwitter";
import IconLinkedin from "../../svg/IconLinkedin";

import { DirectorProps } from "@/types/DirectorProps.type";

function MeetDirectorItem({ name, role, image, quote }: DirectorProps) {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div>
      <div className="relative flex flex-col items-center pt-8 overflow-hidden pb-14 bg-secondary-sacramento-state-green text-primary-white">
        <div
          className={`absolute flex flex-col items-center w-full h-full p-8 lg:px-2 xl:px-12 bg-secondary-dark-green director-panel ${
            showMoreInfo ? "director-panel__slidein" : ""
          }`}
        >
          <strong className="text-lg text-secondary-rapture-blue">
            {name}
          </strong>

          <p className="text-sm font-semibold leading-[25px] text-center pt-2">
            &quot;{quote}&quot;
          </p>

          <div className="flex gap-5 pt-5 pb-8 mt-auto">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLinkedin />
            </Link>
          </div>
        </div>

        <Image
          src={image}
          alt={name}
          width={90}
          className="border-2 border-white rounded-full"
        />

        <div className="flex flex-col mt-3 text-center">
          <strong className="text-lg font-bold text-secondary-rapture-blue">
            {name}
          </strong>
          <em className="text-sm font-medium">{role}</em>
        </div>
      </div>

      <div className="text-center -translate-y-1/2">
        <button
          className={`btn-panel ${showMoreInfo ? "btn-panel__rotate" : ""}`}
          onClick={toggleMoreInfo}
        >
          <Image src={IconCross} alt={`${showMoreInfo ? "Close" : "Open"}`} />
        </button>
      </div>
    </div>
  );
}

export default MeetDirectorItem;
