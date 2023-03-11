import AddSpaceModal from "@/components/account/AddSpaceModal";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import { getMyPosts } from "@/server/lib/getSpaces";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

const UserProfile = (props: Props) => {
  const { data: session } = useSession();
  const [spaces, setSpaces] = useState<any>();

  console.log(session);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      setSpaces(await getMyPosts(session?.id));
    })();
  }, [session?.user]);

  return (
    <Container>
      <div className="flex justify-center items-center flex-col md:gap-1">
        {/* replace with image later */}
        {/* <div className="w-20 h-20 rounded-full bg-gray-500 md:w-[7rem] md:h-[7rem]"></div> */}

        <Image
          className="rounded-full md:w-[7rem] md:h-[7rem] w-20 h-20"
          src={session?.user?.image}
          width={100}
          height={100}
        />
        <h3 className="text-lg font-semibold text-accent-base md:text-xl">
          Manish Bisht
        </h3>
        <p className="text-sm text-skin-base text-center md:text-[1rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex gap-2 text-xs flex-wrap justify-center mt-3">
          <p className="md:text-[1rem] md:px-2 md:py-1 bg-accent-inverted/20 rounded-sm text-accent-inverted font-medium">
            html
          </p>
          <p className="md:text-[1rem] md:px-2 md:py-1 bg-accent-inverted/20 rounded-sm text-accent-inverted font-medium">
            html
          </p>
          <p className="md:text-[1rem] md:px-2 md:py-1 bg-accent-inverted/20 rounded-sm text-accent-inverted font-medium">
            html
          </p>
          <p className="md:text-[1rem] md:px-2 md:py-1 bg-accent-inverted/20 rounded-sm text-accent-inverted font-medium">
            html
          </p>
        </div>
      </div>

      <div>
        <AddSpaceModal session={session} />
        <div className="flex gap-2 flex-wrap">
          {spaces &&
            spaces.map((space: any, idx: any) => <SpaceCard key={idx} />)}
        </div>
      </div>
    </Container>
  );
};

export default UserProfile;
