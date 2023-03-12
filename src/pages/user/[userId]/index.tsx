import AddSpaceModal from "@/components/account/AddSpaceModal";
import SpaceCard from "@/components/SpaceCard";
import Container from "@/layouts/Container";
import { getMyPosts } from "@/server/lib/getSpaces";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaAssistiveListeningSystems } from "react-icons/fa";

type Props = {};

const UserProfile = (props: Props) => {
  const { data: session } = useSession();
  const [spaces, setSpaces] = useState<any>();

  useEffect(() => {
    (async () => {
      // @ts-ignore
      setSpaces(await getMyPosts(session?.id));
    })();
  }, [session?.user]);

  return (
    <Container>
      <div className="flex justify-center items-center flex-col md:gap-1">
        <Image
          className="rounded-full md:w-[7rem] md:h-[7rem] w-20 h-20"
          src={session?.user?.image}
          width={100}
          height={100}
        />
        <h3 className="text-lg font-semibold text-accent-base md:text-xl">
          Manish Bisht
        </h3>
        <p className="text-sm text-skin-base dark:text-skin-inverted/60 text-center md:text-[1rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex gap-2 text-xs flex-wrap justify-center mt-3">
          <p className="md:text-[1rem] md:px-3 md:py-2 bg-accent-inverted/20 rounded-md text-accent-inverted font-medium">
            html
          </p>
        </div>
      </div>

      <div className="my-8 flex justify-between items-center">
        <p className="flex gap-1 items-center px-4 py-2 rounded-full bg-skin-inverted text-skin-inverted text-sm">
          <FaAssistiveListeningSystems /> {spaces && spaces.length} Space
        </p>
        <AddSpaceModal session={session} />
      </div>

      <div className="flex gap-3 flex-wrap justify-center">
        {spaces &&
          spaces.map((space: any, idx: any) => (
            <SpaceCard key={idx} space={space} />
          ))}
      </div>
    </Container>
  );
};

export default UserProfile;
