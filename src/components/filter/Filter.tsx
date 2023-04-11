import React from "react";

type Props = {
  setTimeFilter: (type: string) => void;
};

function Filter({ setTimeFilter }: Props) {
  return (
    <div className="flex mt-5 gap-4">
      <button
        className="px-4 py-1 bg-accent-inverted/10 rounded-full"
        onClick={() => setTimeFilter("past")}
      >
        Past
      </button>
      <button
        className="px-4 py-1 bg-accent-base/10 rounded-full"
        onClick={() => setTimeFilter("ongoing")}
      >
        Ongoing
      </button>
      <button
        className="px-4 py-1 bg-accent-muted/10 rounded-full"
        onClick={() => setTimeFilter("future")}
      >
        Future
      </button>
    </div>
  );
}

export default Filter;
