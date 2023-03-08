import Container from "@/layouts/Container";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <div
        className="flex justify-center items-center flex-col md:gap-2
      "
      >
        {/* replace with image later */}
        <div className="w-20 h-20 rounded-full bg-gray-500 md:w-40 md:h-40"></div>
        <h3 className="text-lg font-semibold text-accent-base md:text-xl">
          Manish Bisht
        </h3>
        <p className="text-sm text-skin-base/80 text-center md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>

        <div className="flex gap-2 text-xs flex-wrap justify-center mt-3">
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
          <p className="md:text-[1rem] md:py-2 px-4 py-1 bg-accent-inverted/30 rounded-sm text-accent-inverted font-medium">
            HTML
          </p>
        </div>
      </div>
    </Container>
  );
};

export default index;
