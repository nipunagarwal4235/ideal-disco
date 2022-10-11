import React from "react";
import tshirt from "../assets/tshirt.png";

const Merch = () => {
  return (
    <>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div>
            <span class="inline-block w-12 h-1 bg-red-700"></span>
            <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
              MERCH
            </h2>
          </div>

          <div class="grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-8 gap-y-8 ">
            <a href="#" class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                  New
                </strong>
              </div>
              <div className="box bg-blue-200 rounded-lg">
                <img
                  alt="Trainer"
                  src={tshirt}
                  class="object-cover w-full -mt-3 h-50 p-8 "
                />
              </div>
              <div className="my-4 text-center">
                <a
                  class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-slate-400 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
                  href="/download"
                >
                  Buy Now
                </a>
              </div>
            </a>

            <a href="#" class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                  New
                </strong>
              </div>
              <div className="box bg-blue-200 rounded-lg">
                <img
                  alt="Trainer"
                  src={tshirt}
                  class="object-cover w-full -mt-3 h-50 p-8 "
                />
              </div>
              <div className="my-4 text-center">
                <a
                  class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-slate-400 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
                  href="/download"
                >
                  Buy Now
                </a>
              </div>
            </a>

            <a href="#" class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                  New
                </strong>
              </div>
              <div className="box bg-blue-200 rounded-lg">
                <img
                  alt="Trainer"
                  src={tshirt}
                  class="object-cover w-full -mt-3 h-50 p-8 "
                />
              </div>
              <div className="my-4 text-center">
                <a
                  class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-slate-400 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
                  href="/download"
                >
                  Buy Now
                </a>
              </div>
            </a>

            <a href="#" class="block">
              <div class="flex justify-center">
                <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                  New
                </strong>
              </div>
              <div className="box bg-blue-200 rounded-lg">
                <img
                  alt="Trainer"
                  src={tshirt}
                  class="object-cover w-full -mt-3 h-50 p-8 "
                />
              </div>
              <div className="my-4 text-center">
                <a
                  class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-slate-400 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring"
                  href="/download"
                >
                  Buy Now
                </a>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Merch;
