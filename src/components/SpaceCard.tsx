import React from "react";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  space: any;
};

const SpaceCard = ({ space }: Props) => {
  console.log(space);

  return (
    <div className="rounded-lg bg-accent-base/80 p-4 w-[12rem]">
      <div className="flex text-sm">
        <div className="flex flex-col text-skin-inverted w-[80%] gap-1">
          <p>
            Today @ <span className="text-semibold">7.45</span>
          </p>
          <p>{space.description}</p>
        </div>

        <img className="w-10 h-10 rounded-full" src={space.user.image} alt="" />
      </div>

      <button className="hover:gap-3 transition-all hover:font-semibold flex gap-2 justify-center items-center mt-2 w-full py-1 rounded-full mx-auto bg-accent-base text-skin-inverted">
        Join
        <BsArrowRight />
      </button>
    </div>
  );
};

export default SpaceCard;
