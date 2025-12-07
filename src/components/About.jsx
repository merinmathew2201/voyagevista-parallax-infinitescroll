import React from 'react'
import {  motion } from 'framer-motion'


function About() {
  return (
    <>
        <div className='px-30 bg-linear-to-b from-black to-black/80'>
            <div className="md:grid grid-cols-2 items-center gap-20 py-30 ">
                <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once:false, amount: 0.3 }}>
                    <h1 className="text-4xl md:text-5xl text-gray-300 mb-6 ">ABOUT VOYAGEVISTA</h1>
                    <p className="text-gray-500 text-lg  text-justify">VoyageVista is your trusted companion for discovering breathtaking journeys,  hidden gems, and immersive travel experiences. Our platform brings you curated destinations, real-time insights, and personalized travel recommendations — designed to make every journey unforgettable.</p>
    
                    <p className="mt-4 text-gray-500 text-lg  text-justify">Whether you're planning a family vacation, a solo escape, or a weekend adventure, VoyageVista ensures you explore the world with ease, clarity, and excitemen</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false,amount:0.3 }}
                    transition={{ duration: 2, delay: 0.2 }}>
                    <img src="https://images.squarespace-cdn.com/content/v1/53a05cdee4b0c1bc44841a7b/1523902733932-YDRML2BOZTCGUIOTUOI6/25+Travel+GIFS+from+Around+the+World" alt="" className='rounded-2xl shadow w-full' />
                </motion.div>
    
            </div>
        </div>
    </>
  )
}

export default About