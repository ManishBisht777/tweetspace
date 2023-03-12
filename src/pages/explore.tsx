import Search from "@/components/explore/Search";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import { getAllSpaces } from "@/server/lib/getSpaces";
import React, { useEffect, useState } from "react";

type Props = {};

const explore = (props: Props) => {
  const [spaces, setSpaces] = useState<any>();

  useEffect(() => {
    (async () => {
      setSpaces(await getAllSpaces(0, 2));
    })();
  }, []);

  return (
    <Container className="flex flex-col items-center mt-5">
      <Search />
      <h1 className="my-4 text-xl md:text-3xl font-semibold text-skin-base max-w-[25rem] text-center">
        Search spaces and creators in one place
      </h1>
      <p className="bg-accent-muted/20 text-accent-muted font-medium px-6 py-1 rounded-full text-sm ">
        Displaying {spaces && spaces.length} results
      </p>

      <div className="mt-6">
        {spaces ? (
          <div className="flex gap-2 flex-wrap">
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

export default explore;
