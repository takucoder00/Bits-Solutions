import React from 'react';

export default function Inspiration() {
  return (
    <div className="inspiration">
         <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Inspiration</h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Besides making toothpics, bamboo can be used to build medium and large structures, thanks to its hardness and durability. The other great thing about bamboo is that it perfectly blends with nature, so dont be alarmed when you find yourself becoming more kind, happy and creative.</p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/house2.jpg'}/>
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/house1.jpg'}/>
          </div>
          <div className="md:p-2 p-1 w-full">
            <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/jakarta.jpg'}/>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img alt="gallery" className="w-full h-full object-cover object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/solana.jpg'}/>
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/house.jpg'}/>
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img alt="gallery" className="w-full object-cover h-full object-center block" src={process.env.PUBLIC_URL + '/images/inspiration/furniture1.jpg'}/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
