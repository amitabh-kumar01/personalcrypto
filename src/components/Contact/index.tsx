import React from 'react'
import { contact } from '@/assets/sharedSection'
const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center py-16 "
      style={{
        backgroundImage: `url(${contact.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-[40px]  text-white mb-4 font-light">
          Have Any Questions? <span className="text-[#FEA301] font-bold">Contact Us</span>
        </h2>
        <form className="bg-transparent p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-8 mb-5">
            <input
              type="email"
              placeholder="text@domain.com"
              className="p-3 border border-gray-300  focus:outline-none focus:border-[#FEA301] focus:shadow-[0_0_10px_#FEA301]"
              required
            />
            <div className="flex gap-3 mb-2">
              <input
                type="text"
                placeholder="John"
                className="p-3 border border-gray-300  focus:outline-none focus:border-[#FEA301] focus:shadow-[0_0_10px_#FEA301] w-1/2"
                required
              />
              <input
                type="text"
                placeholder="Christopher"
                className="p-3 border border-gray-300  focus:outline-none focus:border-[#FEA301] focus:shadow-[0_0_10px_#FEA301] w-1/2"
                required
              />
            </div>
          </div>
          <textarea
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300  focus:outline-none focus:border-[#FEA301] focus:shadow-[0_0_10px_#FEA301] mb-9"
            rows={4}
            required
          ></textarea>
          <button className="w-full bg-customYellow text-white py-4  hover:cursor-pointer hover:bg-crypOrange transition duration-300">
            <p className='font-opensans font-bold text-[14px] '>SEND</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm
