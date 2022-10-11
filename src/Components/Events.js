import React from "react";
import hack from "../assets/hack.jpg";

const Events = () => {
  return (
    <>
      <div class="max-w-screen-xl px-4  mx-auto">
        <div>
          <span class="inline-block w-12 h-1 bg-red-700"></span>
          <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            UPCOMING EVENTS
          </h2>
        </div>{" "}
      </div>
      <section>
        <div class="px-4  mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={hack}
                  class="absolute px-20 inset-0 h-full"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span class="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  HACKTOBER FEST 2022
                </h2>
                <h2 class="text-l pt-5 font-medium sm:text-lg">
                  Location: Online
                </h2>
                <h2 class="text-l  font-medium sm:text-lg">
                  Date: 1st Oct to 31st Oct
                </h2>
                <h2 class="text-xs font-medium sm:text-lg">
                  Eligibility: Open to All
                </h2>
                <p class="mt-4 text-gray-600">
                  Hacktoberfest is a month-long celebration of open source
                  software run by DigitalOcean. During the month of October, we
                  invite you to join open-source community by contributing to
                  open-source projects.
                </p>

                <a
                  href="#"
                  class="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
