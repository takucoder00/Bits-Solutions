import React from 'react'
import { onGetChampioned } from '../../utils/helpers'

export default function JoinOurBusiness() {
    return (
        <div>

    <div className="dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center text-center">
        <div className="bg-white dark:bg-gray-800 lg:mx-8 ">
       
            <div className=" px-6 py-12 ">
            <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Join Us</h1>
                <p className="mx-auto   backdrop-blur-3xl md:mt-5 md:max-w-lg md:text-center lg:text-lg">We encourage any type of business to join us though our target market is small to medium enterprises which are still developing. <br /> We greatly look forward to having you join us.</p>
                
                <div className="mt-8 w-full">
                <button onClick={onGetChampioned} className="flex mx-auto items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-500 rounded-md sm:mb-0 hover:bg-orange-700 sm:w-auto">
                                Join Us
                                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            </button>
                </div>
            </div>
        </div>
    </div> 
            
        </div>
    )
}
