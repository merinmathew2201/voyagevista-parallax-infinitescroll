import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

function Contact() {
  return (
    <div className="w-full bg-black text-white py-20 px-6" >
      <h2 className="text-4xl md:text-5xl  text-center mb-12">
        GET IN <span className="text-teal-400">TOUCH</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 ">

        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Contact Information</h3>
          <p className="text-gray-400">Have questions or need help planning your next adventure? Our team is here to assist you anytime!</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-400 text-xl" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-teal-400 text-xl" />
              <span>support@voyagevista.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-teal-400 text-xl" />
              <span>Kerala, India</span>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            <FaFacebook className="text-2xl cursor-pointer hover:text-teal-400" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-teal-400" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-teal-400" />
          </div>
        </div>

        <div className="bg-stone-900 p-8 rounded-xl shadow-xl border border-gray-700">
          <form className="space-y-3">
            <div>
              <label className="block mb-2">Your Name</label>
              <input type="text" className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-teal-400 outline-none" placeholder="Enter your name"/>
            </div>

            <div>
              <label className="block mb-2">Email Address</label>
              <input type="email" className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-teal-400 outline-none" placeholder="Enter your email"/>
            </div>

            <div>
              <label className="block mb-2">Message</label>
              <textarea rows={4} className="w-full p-3 rounded-lg bg-black border border-gray-600 focus:border-teal-400 outline-none" placeholder="Type your message..."></textarea>
            </div>

            <button className="w-full py-3 bg-linear-to-r from-blue-600 to-teal-500 rounded-lg font-semibold hover:opacity-90 transition">Send Message</button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact