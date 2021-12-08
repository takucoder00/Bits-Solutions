import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AppLogo from './appLogo'
import axios from 'axios'

export default function Footer() {

  const [email, setEmail] = useState("")



  useEffect(() => {
    axios.defaults.withCredentials = true;
  })

  const handleSubscribe = (e) => {


    axios.get(process.env.SITE_ENDPOINT + 'sanctum/csrf-cookie')
      .then(res => {

        axios.post(process.env.SITE_ENDPOINT + 'api/subscribe',
          {
            email: email
          }).then(res => {
            let respData = res.data
            if (respData.status === "success") {
              // openSnackbar(respData.message)   
            }
          })
      });
  }




  let currentYear = new Date().getFullYear()

  return (
    <div>


      <footer className="text-gray-600 bg-orange-50 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LINKS</h2>
              <nav className="list-none mb-10">

                <li className="text-gray-600 hover:text-gray-800">
                  <Link href='/' >Home</Link>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <Link href='/business-systems' >Business Systems</Link>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <Link href="/about#about" >About</Link>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <Link href="/contact" >Contact</Link>
                </li>

                <li className="text-gray-600 hover:text-gray-800">
                  <Link href="/terms" >Terms and Conditions</Link>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <Link href="/privacy" >Privacy Policy</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SERVICES</h2>
              <nav className="list-none mb-10">
                <li className="text-gray-600 hover:text-gray-800">
                  <a href="#services" >Solutions</a>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <a href="#services" >Marketing</a>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <a href="#services" >Networking</a>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <a href="#services" >Branding</a>
                </li>
                <li className="text-gray-600 hover:text-gray-800">
                  <a href="#services" >Branding & Support</a>
                </li>
              </nav>
            </div>
            <div className="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0">
              <h5 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SAY HELLO</h5>


              <div className="mt-3">
                <div className="">
                  <strong>Phone &amp; Email</strong>

                  <a href="telephone:+263713007044" className="block border-b border-transparent border-solid hover:border-orange-800 hover:text-orange-800">+263 71 300 7044</a>
                  <a href="mailto:info@bs.co.zw" className="block border-b border-transparent border-solid hover:border-orange-800 hover:text-orange-800">info@bitssolutions.co.zw</a>
                </div>
                <div className="mt-3">
                  <h6 className="mb-2 font-bold">Address</h6>
                  <address className="mb-4 not-italic">
                    Second Floor, Karimapondo Offices, 78 Leopold Takawira,

                    Harare
                  </address>
                </div>
              </div>

            </div>
            {/* <div className="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 md:mt-0">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Email</label>
                  <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-orange-200 focus:border-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={handleSubscribe} className="lg:mt-2 xl:mt-0 mt-3 flex-shrink-0 inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded">Subscribe</button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Recieve offers, news and tips
                <br className="lg:block hidden" />in your inbox
              </p>


            </div> */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <AppLogo />
              <span className="ml-3 text-orange-500 text-xl">Bitssolutions</span>
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© {currentYear} BitsSolutions Private Limited —
              {/* <a href="https://taku.co.zw" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">taku</a> */}
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>


    </div>
  )
}
