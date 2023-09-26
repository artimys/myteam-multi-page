"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconCross from "../../../../public/images/icon-cross.svg";
import IconTwitter from "../../svg/IconTwitter";
import IconLinkedin from "../../svg/IconLinkedin";

function MeetDirectorItem({ director }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div className="relative flex flex-col items-center pt-8 bg-secondary-sacramento-state-green text-primary-white">
      {showMoreInfo ? (
        <div className="absolute top-0 flex flex-col items-center w-full h-full p-8 lg:px-2 xl:px-12 bg-secondary-dark-green">
          <strong className="text-lg text-secondary-rapture-blue">
            {director.name}
          </strong>

          <p className="text-sm font-semibold leading-[25px] text-center pt-2">
            "{director.quote}"
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
      ) : null}

      <Image
        src={director.image}
        alt={director.name}
        width={90}
        className="border-2 border-white rounded-full"
      />

      <div className="flex flex-col mt-3 text-center">
        <strong className="text-lg text-secondary-rapture-blue">
          {director.name}
        </strong>
        <em className="text-sm">{director.role}</em>
      </div>

      <button
        className={`${
          showMoreInfo ? "btn-panel btn-panel-active" : "btn-panel"
        }`}
        onClick={toggleMoreInfo}
      >
        <Image src={IconCross} alt={`${showMoreInfo ? "Close" : "Open"}`} />
      </button>
    </div>
  );
}

export default MeetDirectorItem;
