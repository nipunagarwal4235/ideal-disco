import React from "react";

const Events = () => {
  return (
    <>
      <div class="container bg-gray-800 block m-auto">
        <h2 className="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl text-center p-2 text-white">
          Our Events
        </h2>
        <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Hack BMU</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sed
                totam inventore provident at ab quidem voluptatibus natus minima
                numquam!
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">HacktoberFest</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                in amet neque corrupti aut molestiae quidem, at velit minima
                doloribus?
              </p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Smart India Hackathon</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                architecto rem nulla nihil asperiores esse ea sunt ducimus
                deleniti doloremque!
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* <!-- left --> */}
          <div class="flex flex-row-reverse md:contents">
            <div class="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore iste adipisci, porro aliquam itaque commodi deleniti?
                Temporibus quidem accusantium fuga?
              </p>
            </div>
            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div class="flex md:contents">
            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div class="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 class="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p class="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus magni tenetur eaque voluptas soluta doloremque quae
                facere deserunt, quo incidunt?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
