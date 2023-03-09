import React from "react";

type Props = {};

const SpaceCard = (props: Props) => {
  return (
    <div className="rounded-lg bg-accent-base p-4 max-w-[12rem]">
      <div className="flex">
        <div className="flex flex-col gap-2 text-skin-inverted w-[80%]">
          <p>
            Today @ <span className="text-semibold">7.45</span>
          </p>
          <p className="text-[1rem]">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-accent-muted">
          {/* replace by image later */}
        </div>
      </div>

      <button className="w-full py-1 font-semibold rounded-full mx-auto bg-accent-muted text-skin-base">
        Join
      </button>
    </div>
  );
};

export default SpaceCard;
