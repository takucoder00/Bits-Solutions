import React from 'react';
import { onGetChampioned } from '../../utils/helpers';

export default function BusinessHero() {

   
  return (
    <>
    <div>
        <div className="w-full bg-center bg-cover h-128" style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
        }}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div className="text-center">
                <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
                    <span className="text-orange-500">Business</span> <span className="inline text-white">Systems</span></h1>
                    <p className=" mx-auto  text-white  backdrop-blur-3xl md:mt-5 md:max-w-lg md:text-center lg:text-lg">
                    Seeking and maintaining high standards DIFFERENTIATES you from the ordinary. We MAKE A DIFFERENCE in life when we seek and follow standards.
                        </p>
                        <div className="flex flex-col items-center mt-12 text-center">
                    <span className="relative inline-flex w-full md:w-auto">
                    <button onClick={onGetChampioned} className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto">
                                Join Us
                                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </button>
                </span></div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
