import { space } from "@/types/type";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { formatDate, formatTime } from "./utilities/utility";

type Props = {
  space: space;
};

const SpaceCard = ({ space }: Props) => {
  return (
    <div className="rounded-lg bg-accent-base/80 p-4 w-[12rem] flex flex-col justify-between">
      <div className="flex text-sm">
        <div className="flex flex-col text-skin-inverted w-[80%] gap-1">
          <p>
            {formatDate(space.date)} @{" "}
            <span className="text-semibold"> {formatTime(space.from)}</span>
          </p>
          <p>{space.title}</p>
        </div>

        <img
          className="w-10 h-10 rounded-full"
          src={space.users.image}
          alt=""
        />
      </div>

      <button className="hover:gap-3 transition-all hover:font-semibold flex gap-2 justify-center items-center mt-2 w-full py-1 rounded-full mx-auto bg-accent-base text-skin-inverted">
        <Link href={space.link}>Join</Link>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default SpaceCard;
