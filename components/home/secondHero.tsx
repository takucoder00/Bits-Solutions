import React from 'react'

export default function secondHero() {

    const onWorkWithUs = () => {
        window.location.href = "https://wa.me/263774267438?text=Hi+i+have+a+business+and+i+need+help+with";
      }

    return (
        <div>
            <div className="px-2 py-32 bg-white md:px-0">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
                <div className="w-full md:w-1/2 md:px-3">
                    <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                            <span className="block xl:inline">Working with us </span>
                            <span className="block text-orange-600 xl:inline">is a pleasure!</span>
                        </h1>
                        <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"><span className="italic">Running a business has
                                never been easy</span>, Bits Solutions is company that offers business consultancy
                            services. We offer a wide
                            range of services which include business solutions, business networking, business
                            marketing, business branding and business education. </p>

                        <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"></p>
                        <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                            <button onClick={onWorkWithUs} className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto">
                                Work with us!
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </button>

                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="w-full h-80 overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        <img className="md:flex-shrink-0" alt="" src="https://images.pexels.com/photos/7172814/pexels-photo-7172814.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-7172814.jpg&fm=jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}
