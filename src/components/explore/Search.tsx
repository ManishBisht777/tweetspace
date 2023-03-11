import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className="flex bg-accent-inverted/10 p-3 rounded-lg min-w-[30rem] text-skin-base font-medium">
      <div className="w-[85%] flex gap-2 items-center ">
        <BsSearch />
        <form action="">
          <input className="bg-transparent" type="text" placeholder="Search" />
          <button type="submit" className="hidden">
            search
          </button>
        </form>
      </div>
      <div className="w-[15%] pl-2 border-l border-accent-base">Spaces</div>
    </div>
  );
};

export default Search;
