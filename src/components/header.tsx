//import liraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from './appLogo';


// create a component
const Header = () => {
    return (
        <div className="Header bg-gray-50">
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <AppLogo />
                <span className="ml-3 text-xl text-green-500">Scoufy</span>
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                
            
                <Link to="/" className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Home</Link>
                <Link to="/shop#products" className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Shop</Link>
                {/* <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Inspiraton</a>
                <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Bamboo</a>
                <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Application</a> */}
                <Link to='/about' className="mr-5 hover:border-b-2 border-green-500 px-3">About</Link>
                <Link to='/contact' className="mr-5 hover:border-b-2 border-green-500 px-3">Contact</Link>
          
              </nav>
            
            </div>
          </header>


        </div>
    );
};


export default Header;
