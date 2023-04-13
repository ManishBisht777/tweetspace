import Search from "@/components/explore/Search";
import Filter from "@/components/filter/Filter";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import useStore from "@/store/store";
import React, { useEffect, useState } from "react";

type Props = {};

const Explore = (props: Props) => {
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const [startLimit, setStartLimit] = useState<number>(0);
  const [endLimit, setEndLimit] = useState<number>(5);

  const { spaces, getSpaces, setSpaces } = useStore((state) => ({
    spaces: state.spaces,
    getSpaces: state.getSpaces,
    setSpaces: state.setSpaces,
  }));

  console.log(timeFilter);

  useEffect(() => {
    getSpaces(startLimit, endLimit, timeFilter);
  }, [endLimit]);

  useEffect(() => {
    setSpaces([]);
    setStartLimit(0);
    setEndLimit(5);
  }, [timeFilter]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("fetch something");
      setStartLimit((startLimit) => startLimit + 6);
      setEndLimit((endLimit) => endLimit + 6);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="flex flex-col items-center my-10">
      <Search />
      <h1 className="my-4 text-xl md:text-3xl font-semibold text-skin-base dark:text-skin-inverted/80 max-w-[25rem] text-center">
        Search spaces and creators in one place
      </h1>
      <p className="bg-accent-muted/20 text-accent-muted font-medium px-6 py-1 rounded-full text-sm ">
        Displaying {spaces && spaces.length} results
      </p>

      <Filter setTimeFilter={setTimeFilter} />
      <div className="mt-10">
        {spaces ? (
          <div className="flex gap-4 flex-wrap justify-center">
            {spaces.map((space: any, idx: any) => {
              return <SpaceCard key={idx} space={space} />;
            })}
          </div>
        ) : (
          <>
            <h1>Loading</h1>
          </>
        )}
      </div>
    </Container>
  );
};

export default Explore;
