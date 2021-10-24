import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { siteEndpoint } from '../../../global';
import { useSnackbar } from 'react-simple-snackbar'

export default function ContactForm() {

  const [openSnackbar, closeSnackbar] = useSnackbar({
    position: 'bottom-left',
  })

  const [topic, setTopic] = useState('Enquiry');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userExtras, setUserExtras] = useState('');
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    document.title = 'MutengaBamboo - Contact Us';
  })

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
        <section className="text-gray-600 body-font relative">
             <h1 className="text-3xl py-10 px-14  font-bold title-font text-gray-900 mb-12">Say Hello</h1>
  <div className="container px-5 pb-24 mx-auto flex sm:flex-nowrap flex-wrap">

 
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
      <p className="leading-relaxed mb-5 text-gray-600">Do you have any question or suggestion? Say hello to Bitssolutions</p>
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
        <input type="text" id="name" name="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={sendContactMessage} className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Send Message</button>
      <p className="text-xs text-gray-500 mt-3">Terms and Conditions apply</p>
    </div>
  </div>
</section>
    )
}
