import React from 'react'

export default function AboutSection() {
    return (
        <div className="bg-gray-50">
            <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          
        </svg>
       
      </span>
      About Us
    </h2>
    <p className="text-base text-gray-700 md:text-lg">
    Our goal is to enhance business performance and help our clients in the best way we can.
    </p>
  </div>
  <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
    <div className="flex flex-col justify-center">
      <div className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">
            Get proven solutions
          </h6>
          <p className="text-sm text-gray-900">
          Bitssolutions is a Zimbabwean private limited company based in Harare CBD that is involved in providing solutions to your business needs. 
          </p>
          <hr className="w-full my-6 border-gray-300" />
        </div>
      </div>
      <div className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">Get heard</h6>
          <p className="text-sm text-gray-900">
          Have trouble reaching your clients? As Bitssolutions we help you reach your target audience by using proven tools and techniques.
          </p>
          <hr className="w-full my-6 border-gray-300" />
        </div>
      </div>
      <div className="flex">
        <div className="mr-4">
          <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </div>
        </div>
        <div>
          <h6 className="mb-2 font-semibold leading-5">Stand Out!</h6>
          <p className="text-sm text-gray-900">
          Our branding solutions will helps your business stand out from the rest and allow you customers to easily find and connect with you.
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-5">
      <img className="object-cover w-full h-56 col-span-2 rounded shadow-lg" src="https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?cs=srgb&dl=pexels-pixabay-163064.jpg&fm=jpg" alt="" />
      <img className="object-cover w-full h-48 rounded shadow-lg" src="https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg?cs=srgb&dl=pexels-mikael-blomkvist-6476591.jpg&fm=jpg" alt="" />
      <img className="object-cover w-full h-48 rounded shadow-lg" src="https://images.pexels.com/photos/7661590/pexels-photo-7661590.jpeg?cs=srgb&dl=pexels-eva-elijas-7661590.jpg&fm=jpg" alt="" />
    </div>
  </div>
</div>
        </div>
    )
}
