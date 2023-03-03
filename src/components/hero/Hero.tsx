import Container from "@/layouts/Container";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Container className="flex flex-col justify-center items-center gap-4 my-8">
      <p className="text-sm bg-accent-inverted/10 px-6 py-1 rounded-full text-accent-inverted font-medium">
        One stop to Spaces and events
      </p>

      <h1 className="text-xl font-Montserrat font-bold text-skin-base max-w-[18rem] text-center">
        Work on big Ideas, without the{" "}
        <span className="p-[.1rem] text-skin-inverted font-extrabold relative before:absolute before:bg-accent-base before:inset-0 before:z-[-1] before:rotate-[4deg] before:translate-y-1">
          Busywork
        </span>
      </h1>
      <p className="max-w-[14rem] text-skin-base/80 text-center text-sm">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots.
      </p>

      <div className="flex gap-4">
        <button className="text-sm px-3 py-[.1rem] bg-skin-inverted/95 text-skin-inverted rounded-full">
          Explore
        </button>
        <button className="text-sm px-3 py-[.1rem] bg-skin-inverted/95 text-skin-inverted rounded-full">
          Explore
        </button>
      </div>
    </Container>
  );
};

export default Hero;
