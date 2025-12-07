import React from 'react'
import {  Parallax } from 'react-scroll-parallax'
import {  motion } from 'framer-motion'

function Landing() {
    return (
        <>
            <div style={{ height: '100vh' }} className='relative bg-[url(./assets/images/landingbg.jpg)] bg-cover overflow-hidden '>
                <div className='flex items-center   text-white'>
                    <a className='decoration-none font-bold ps-10' href="/">VOYAGEVISTA</a>
                    <div className=' p-3 my-3 ps-110 flex justify-center items-center'>
                        <h1 className='me-3 '>HOME</h1>
                        <h1 className='me-3 '>ABOUT</h1>
                        <h1 className='me-3 '>GALLERY</h1>
                        <h1 >CONTACT</h1>
                    </div>
                </div> 
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/30"></div>

                <div className="absolute left-60 top-30">
                    <Parallax translateX={[-200, 300]} translateY={[0, 0]}>
                        <img src="./src/assets/images/moon.png" alt="birds" className='w-25 h-20' />
                    </Parallax>
                </div>
                <div className="absolute left-10 top-20">
                    <Parallax translateX={[-50, 50]} translateY={[250, -100]}>
                        <img src="./src/assets/images/birdlr.png" alt="birds" className='w-40 h-50' />
                    </Parallax>
                </div>

                <div className='absolute right-0 top-30'>
                    <Parallax translateX={[50, -50]} translateY={[200, -150]}>
                        <img src="./src/assets/images/birdsrl.png" alt="birds" className='w-60 h-50' />
                    </Parallax>
                </div>

                <div className="absolute top-120 w-full text-center text-white">
                    <Parallax rotateY = {[0, 180]} translateY= {[0, -20]} scale={[1, 1.1]}  >
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.3 }}> <h1 class="text-6xl md:text-8xl text-white font-thin">VOYAGEVISTA</h1>
                        </motion.div>
                    </Parallax>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.5 }}><p className="text-lg mt-2">Discover breathtaking journeys</p> </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, delay: 0.7 }}><button className="mt-4 px-8 py-3 bg-linear-to-r from-blue-600 to-teal-500 rounded-xl shadow-lg"> Explore Now </button> </motion.div>
                    
                </div>
            </div>
            

        </>
    )
}

export default Landing