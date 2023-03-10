import AddSpaceModal from "@/components/account/AddSpaceModal";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import { getMyPosts } from "@/server/lib/getSpaces";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

type Props = {};

const index = (props: Props) => {
  const { data: session } = useSession();
  const [spaces, setSpaces] = useState<any>();

  console.log(session);

  useEffect(() => {
    (async () => {
      setSpaces(await getMyPosts(session?.id));
    })();
  }, [session?.user]);

  return (
    <Container>
      <div className="flex justify-center items-center flex-col md:gap-1">
        {/* replace with image later */}
        <div className="w-20 h-20 rounded-full bg-gray-500 md:w-40 md:h-40"></div>
        <h3 className="text-lg font-semibold text-accent-base md:text-xl">
          Manish Bisht
        </h3>
        <p className="text-sm text-skin-base text-center md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex gap-2 text-xs flex-wrap justify-center mt-3">
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            CSS
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            JS
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            react
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
        </div>
      </div>

      <div>
        <AddSpaceModal session={session} />
        <div className="flex gap-2 flex-wrap">
          {spaces && spaces.map((space) => <SpaceCard />)}
        </div>
      </div>
    </Container>
  );
};

export default index;
