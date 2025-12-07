import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-black text-white border-t px-15 pt-20  border-white/10">
        <div className="md:grid grid-cols-3 pb-4">
            <div>
                <h2 className="text-2xl font-bold pb-2 bg-linear-to-r from-blue-400 to-rose-400 bg-clip-text text-transparent">VoyageVista</h2>
                <p className=" text-gray-300 mt-2 ">Discover premium travel packages crafted for unforgettable experiences.</p>

                <div className="flex gap-4 mt-4 ">
                    <FaInstagram className="text-xl opacity-80 hover:opacity-100 cursor-pointer" />
                    <FaFacebook className="text-xl opacity-80 hover:opacity-100 cursor-pointer" />
                    <FaTwitter className="text-xl opacity-80 hover:opacity-100 cursor-pointer" />
                    <FaYoutube className="text-xl opacity-80 hover:opacity-100 cursor-pointer" />
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4 mt-4 md:mt-0">Quick Links</h3>
                <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">Home</li>
                    <li className="hover:text-white cursor-pointer">About</li>
                    <li className="hover:text-white cursor-pointer">Packages</li>
                    <li className="hover:text-white cursor-pointer">Testimonials</li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4 mt-4 md:mt-0">Top Destinations</h3>
                <ul className="space-y-2 text-gray-300">
                    <li className="hover:text-white cursor-pointer">Bali</li>
                    <li className="hover:text-white cursor-pointer">Paris</li>
                    <li className="hover:text-white cursor-pointer">Swiss Alps</li>
                    <li className="hover:text-white cursor-pointer">Dubai</li>
                </ul>
            </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-gray-400">© VoyageVista. All rights reserved.</div>
    </div>
  )
}

export default Footer