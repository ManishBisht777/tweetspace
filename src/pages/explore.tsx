import Search from "@/components/explore/Search";
import Filter from "@/components/filter/Filter";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import useStore from "@/store/store";
import React, { useEffect, useState } from "react";

type Props = {};

const Explore = (props: Props) => {
  const [timeFilter, setTimeFilter] = useState<string>("all");

  const { spaces, getSpaces } = useStore((state) => ({
    spaces: state.spaces,
    getSpaces: state.getSpaces,
  }));

  console.log(timeFilter);

  useEffect(() => {
    getSpaces(0, 10, timeFilter);
  }, [timeFilter]);

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
