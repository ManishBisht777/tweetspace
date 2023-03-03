import React from "react";
import Container from "@/layouts/Container";

type Props = {};

const Features = (props: Props) => {
  return (
    <Container className="my-20">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="md:w-5/12 w-full h-80 rounded-lg bg-accent-base"></div>
        <div className="md:w-3/12 w-full h-80 rounded-lg bg-accent-muted"></div>
        <div className="md:w-4/12 w-full h-80 rounded-lg bg-accent-inverted"></div>
      </div>

      <div className="flex flex-col gap-4 mt-20 md:flex-row md:justify-between">
        <div className="md:w-3/12 flex flex-col gap-2 items-center md:items-start">
          <p className="text-sm bg-accent-inverted/10 md:-mx-4 px-6 py-1 rounded-full text-accent-inverted font-medium">
            One stop to Spaces and events
          </p>
          <h3 className="text-skin-base text-lg font-semibold md:text-xl text-center md:text-right">
            Lorem lol hehe xd damn hehe xd damn
          </h3>
          <p className="text-skin-base/80 text-sm text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            corrupti.
          </p>
        </div>
        <div className="md:w-4/12 w-full h-40 bg-skin-inverted rounded-lg"></div>
        <div className="md:w-3/12 flex flex-col gap-2 items-center md:items-start">
          <p className="text-sm bg-accent-inverted/10 md:-mx-4 px-6 py-1 rounded-full text-accent-inverted font-medium">
            One stop to Spaces and events
          </p>
          <h3 className="text-skin-base text-lg font-semibold md:text-xl text-center md:text-right">
            Lorem lol hehe xd damn hehe xd damn
          </h3>
          <p className="text-skin-base/80 text-sm text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
            corrupti.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
