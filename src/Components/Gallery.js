import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="py-6 bg-gray-800 text-white">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={process.env.PUBLIC_URL+"Assets/gallery5.jpg"}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 object-cover bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery6.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery2.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery1.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery3.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery8.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery11.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery10.jpg"}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src={process.env.PUBLIC_URL+"Assets/gallery4.jpg"}
          />
          <img
            src={process.env.PUBLIC_URL+"Assets/gallery9.jpg"}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
