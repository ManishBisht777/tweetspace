import Search from "@/components/explore/Search";
import Container from "@/layouts/Container";
import { getAllSpaces } from "@/server/lib/getSpaces";
import React, { useEffect } from "react";

type Props = {};

const explore = (props: Props) => {
  useEffect(() => {
    (async () => {
      console.log(await getAllSpaces(0, 1));
    })();
  }, []);

  return (
    <Container className="flex flex-col items-center mt-5">
      <Search />
      <h1 className="my-4 text-xl md:text-3xl font-semibold text-skin-base max-w-[25rem] text-center">
        Search spaces and creators in one place
      </h1>
      <p className="bg-accent-muted/20 text-accent-muted font-medium px-6 py-1 rounded-full text-sm ">
        Displaying 10 results
      </p>
    </Container>
  );
};

export default explore;
