import React from "react";

type Props = {};

const TestimonialCard = (props: Props) => {
  return (
    <div className="swiper-slide">
      <blockquote className="flex h-[15rem] flex-col justify-between rounded-md border-2 border-purple-500 shadow-xl p-3">
        <div className="">
          <div className="flex  flex-col items-center gap-2">
            <div className="w-12 h-12 bg-accent-base rounded-full"></div>
            <p className="text-lg font-bold text-pink-600 sm:text-xl">
              Stayin' Alive
            </p>
          </div>

          <p className="mt-2 leading-relaxed text-gray-500 text-sm text-center">
            No, Rose, they are not breathing. And they have no arms or legs …
            Where are they? You know what? If we come across somebody with no
            arms or leg. do we bother resuscitating them?
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
