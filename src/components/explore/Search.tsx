import { getSpacesByQuery } from "@/server/lib/getSpaces";
import useStore from "@/store/store";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const Search = (props: Props) => {
  const focus = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");

  const { setSpaces } = useStore((state) => ({
    setSpaces: state.setSpaces,
  }));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (
        focus.current &&
        event.key === "/" &&
        (event.metaKey || event.ctrlKey)
      ) {
        focus.current.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const searchQuery = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //@ts-ignore
    setSpaces(await getSpacesByQuery(0, 10, query));
  };

  return (
    <div className="flex bg-accent-inverted/10 py-2 px-2 md:px-6 rounded-lg md:min-w-[30rem] text-skin-base dark:text-skin-inverted font-medium items-center focus-within:outline focus-within:outline-accent-muted mx-1 ">
      <div className="md:w-[85%] w-full flex gap-2 items-center justify-between">
        <BsSearch />
        <form
          action=""
          className="relative flex justify-between items-center  w-full"
          onSubmit={(e) => searchQuery(e)}
        >
          <input
            ref={focus}
            className="bg-transparent px-2 py-1 focus:outline-none w-3/4"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
          <div className="pointer-events-none mx-2 px-2 py-0.5 rounded-full md:flex items-center dark:bg-skin-base bg-skin-inverted font-medium dark:text-skin-base text-skin-inverted sm:block hidden ">
            ctrl + /
          </div>
          <button
            type="submit"
            className="md:hidden block mx-2 px-2 py-0.5 rounded-full items-center dark:bg-skin-base bg-skin-inverted font-medium dark:text-skin-base text-skin-inverted "
          >
            search
          </button>
        </form>
      </div>
      <div className="w-[15%] pl-2 border-l border-accent-base hidden md:block">
        Spaces
      </div>
    </div>
  );
};

export default Search;
