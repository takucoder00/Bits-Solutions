import React from "react";



export const Steps = () => {
    return (
      <div className="px-4 py-16 mb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Get our services in 3 easy steps
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At Bitssolutions we focus on providing the best services to our clients in 3 easy steps. Simplicity is key.
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-orange-100 sm:mx-auto">
              1
            </div>
            <h6 className="mb-2 leading-5 text-xl font-medium text-gray-900">Ask for a service</h6>
            <p className="max-w-md mb-3 sm:mx-auto text-base text-center text-gray-500">
              Pick any of our services that you need.
            </p>
           
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-orange-200 sm:mx-auto">
              2
            </div>
            <h6 className="mb-2 leading-5 text-xl font-medium text-gray-900">Get a quote</h6>
            <p className="max-w-md mb-3 sm:mx-auto text-base text-center text-gray-500">
              Request a quote from our team and make payment.
            </p>
            
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-orange-300 sm:mx-auto">
              3
            </div>
            <h6 className="mb-2 leading-5 text-xl font-medium text-gray-900">We deliver</h6>
            <p className="max-w-md mb-3 sm:mx-auto text-base text-center text-gray-500">
              We deliver the service right to your door.
            </p>
        
          </div>
        </div>
      </div>
    );
  };