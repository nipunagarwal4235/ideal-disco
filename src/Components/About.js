import React from "react";

const About = () => {
  return (
    <>
      <section class="relative pt-5 bg-blueGray-50">
        <div class="max-w-screen-xl  py-8 mx-auto">
          <div>
            <span class="inline-block w-12 h-1 bg-red-700"></span>

            <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
              ABOUT US
            </h2>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg h-150 bg-blue-400">
                <iframe
                  className="iframe-round h-60"
                  src="https://www.youtube.com/embed/ldmQwLfOcVo"
                  title="ACM BMU Student Chapter Club"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 class="text-xl font-bold text-white">
                    ACM (Association of Computer Machinery)
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    We are not just an organization, we are a family, united by
                    one cause, working towards making technology more accessible
                    much like our parent organization, ACM.
                  </p>
                </blockquote>
              </div>
            </div>
            <div class="md:7/12 lg:w-6/12 bg-center ">
              <h2 class="text-xl text-gray-900 font-bold md:text-2xl">
                Empowering Coding Culture and execution expertise in BMU
              </h2>
              <p class="my-5 text-black-800 text-l">
                The objective of the chapter to promote computer science as
                field of education and foster a sense of innovation and
                creativity among computer enthusiasts.It is one of the most
                reputed and distinguished technical chapter in BMU has been
                working with vision and determination since its inception in
                2016, with the aspirations of advancement of computer science as
                a science and a profession.Alumni of the chapter have gone on to
                conduct research at top universities and create
                successful companies.
              </p>
              <p class="mt-4 text-black-800 text-l">
                {" "}
                Defining enlightened educational frameworks and resources for
                students and professionals to advance understanding, learning,
                and evolving of computing and computer science.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
