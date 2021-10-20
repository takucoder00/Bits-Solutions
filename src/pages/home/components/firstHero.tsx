import React from 'react';
import { Link } from 'react-router-dom';


export default function firstHeroHome() {

  const heroBackgroundStyle = { 'background': `url(${process.env.PUBLIC_URL + '/images/hero.jpeg'}) no-repeat center center fixed`, 
  'WebkitBackgroundSize': 'cover', 
  'MozBackgroundSize': 'cover',
  'OBackgroundSize': 'cover', 
  'backgroundSize': 'cover'}

  return (
    <div>
      <div className="firstHero" style={heroBackgroundStyle}>
        <div className="w-full px-6 pb-12 antialiased">
        <div className="mx-auto max-w-7xl">          
            <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
                <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                    <span className="text-orange-500">We
                        champion the bold</span> <span className="inline md:block">to achieve the extraordinary</span></h1>
                <div className="mx-auto mt-5 text-true-gray-800 bg-gray-custom bg-opacity-30 backdrop-blur-3xl md:mt-12 md:max-w-lg md:text-center lg:text-lg">We say, “Plan
                    your business properly, manage your business properly, professionalise your
                    business, beautify your business, market and develop your business.” And we help you to do
                    that!.</div>
                <div className="flex flex-col items-center mt-12 text-center">
                    <span className="relative inline-flex w-full md:w-auto">
                    <a href="#" className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto">
                                Get Championed
                                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </a>
                </span></div>
            </div>
        </div>
    </div>

    </div>
    </div>
  );
}

