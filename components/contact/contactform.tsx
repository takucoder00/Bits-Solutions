import axios from 'axios';
import React, {useState, useEffect} from 'react'
// import { useSnackbar } from 'react-simple-snackbar'

export default function ContactForm() {

  // const [openSnackbar, closeSnackbar] = useSnackbar({
  //   position: 'bottom-left',
  // })

  const [topic, setTopic] = useState('Enquiry');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userExtras, setUserExtras] = useState('');
  const [userPhone, setUserPhone] = useState('');


  const sendContactMessage = () => {

    const wholeMessage = `*Topic:* \n${topic}\n\n*Name:* \n${userName}\n\nEmail: \n${userEmail}\n\nMessage:\n${userMessage}`
    window.location.href = "https://wa.me/263774267438?text=" + encodeURIComponent(wholeMessage);
    
    // axios.get(siteEndpoint + 'sanctum/csrf-cookie')
    // .then(res => {

    //   axios.post(siteEndpoint + 'api/contact', 
    //   {
    //     topic: topic,
    //     name: userName,
    //     email: userEmail,
    //     message: userMessage,
    //     extras: userExtras,
    //     phone: userPhone

    //   }).then(res => {
    //     let respData = res.data
    //     if(respData.status === "success") {
    //       openSnackbar(respData.message)   
    //     }
    //   }) 
    // });
  }

  
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <h2 className="text-center w-full mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl">
      <span className="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          
        </svg>
       
      </span>
      Contact Us
    </h2>

    <p className="text-base text-center text-gray-700 md:text-lg">
    Do you have any question or suggestion? Say hello to Bitssolutions.
          </p>
  <div className="container px-5 pb-24 mt-6 mx-auto flex sm:flex-nowrap flex-wrap">

 
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?q=Second%20Floor,%20Karimapondo%20Offices,%2078%20Leopold%20Takawira,%20Harare&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Second Floor, Karimapondo Offices, 78 Leopold Takawira, Harare</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">info@bitssolutions.co.zw</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+263 71 300 7044</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      
      <div className="relative mb-4">
        <label htmlFor="topic" className="leading-7 text-sm text-gray-600">Topic</label>
        <select id="topic" name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
            <option value="enquiry">Enquiry</option>
            <option value="suggestion">Suggestion</option>
            <option value="query">Query</option>
            <option value="greetings">Greetings</option>
            <option value="issue">Issue</option>
            <option value="other">Other</option>
        </select>
      </div>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input placeholder="Your Name Here" type="text" id="name" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input placeholder="Your Email Address" type="email" id="email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea placeholder="Your Message Here" id="message" name="message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={sendContactMessage} className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Send Message</button>
      <p className="text-xs text-gray-500 mt-3">Terms and Conditions apply</p>
    </div>
  </div>
</div>
    )
}
