//import liraries
import React, { Component } from 'react';
import Link  from 'next/link';
import AppLogo from './appLogo';


// create a component
const Header = () => {
    return (
        <div className="Header bg-gray-50">
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <AppLogo />
                <span className="ml-3 text-xl text-orange-500">Bitssolutions</span>
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                
            
                <div className="mr-5 hover:border-b-2 hover:border-orange-500 px-3"><Link href="/">Home</Link></div>
                <div className="mr-5 hover:border-b-2 hover:border-orange-500 px-3"><Link href="/blog">Blog</Link></div>
                <div className="mr-5 hover:border-b-2 hover:border-orange-500 px-3"><Link href='/about'>About</Link></div>
                <div className="mr-5 hover:border-b-2 hover:border-orange-500 px-3"><Link href='/contact'>Contact</Link></div>
          
              </nav>
            
            </div>
          </header>


        </div>
    );
};


export default Header;
