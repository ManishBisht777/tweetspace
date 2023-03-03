import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  // initilizes Swiper instance with breakpoints for different screen sizes
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      modules: [Navigation, Pagination],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      navigation: {
        nextEl: ".next-button",
        prevEl: ".prev-button",
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
          centeredSlides: true,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 2.25,
        },
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <section className="testimonial-cards mt-12">
      <div className="mx-auto  md:container px-4 py-24 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="max-w-xl text-center  sm:text-left">
            <h2 className="text-xl flex flex-col font-bold tracking-tight md:text-2xl text-skin-base">
              Dont just take our word for it... Read reviews from our customers
            </h2>

            <p className="mt-4 text-accent-base font-medium text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4  transition-all">
              <button className="prev-button rounded-full border-2 p-3  hover:bg-white hover:text-violet-600">
                <span className="sr-only">Previous Slide</span>
                <svg
                  className="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button className="next-button rounded-full border-2 p-3  hover:bg-white hover:text-violet-600">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 shadow-lg border border-gray-300 p-4 lg:col-span-2 lg:mx-0">
            <div className="swiper-container !overflow-hidden">
              <div className="swiper-wrapper">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="prev-button rounded-full border-2 border-violet-500 p-4 text-pink-600 hover:bg-pink-600 hover:"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
