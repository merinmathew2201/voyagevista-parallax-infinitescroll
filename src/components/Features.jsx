import React from 'react'
import { FaMountain, FaShip, FaCameraRetro, FaUmbrellaBeach } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({opacity: 1,y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const experiences = [
  {
    icon: <FaMountain size={45} />,
    title: "Mountain Trekking",
    description: "Conquer breathtaking peaks with expert-guided alpine routes.",
    glow: "from-blue-400 to-cyan-300",
  },
  {
    icon: <FaShip size={45} />,
    title: "Luxury Cruise",
    description: "Indulge in royal cruises featuring world-class comfort and views.",
    glow: "from-purple-400 to-pink-300",
  },
  {
    icon: <FaCameraRetro size={45} />,
    title: "City Photography Walks",
    description: "Capture iconic streets and cultural landmarks with professional mentors.",
    glow: "from-yellow-400 to-orange-300",
  },
  {
    icon: <FaUmbrellaBeach size={45} />,
    title: "Beach Adventures",
    description: "Enjoy waves, sun, snorkeling, and thrilling seaside activities.",
    glow: "from-green-400 to-teal-300",
  },
];

function Features() {
    
  return (
    <div className="w-full py-24 bg-[#0a0a0a] text-white">
      <h2 className="text-center text-5xl  mb-16 tracking-wide">
        FEATURED EXPERIENCES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-10 md:px-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false,amount:0.8 }}
            variants={cardVariants}
            className="relative backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl p-10 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
            <div className={`mx-auto w-20 h-20 rounded-full bg-linear-to-br ${exp.glow} flex items-center justify-center mb-6 shadow-xl animate-float`}>
              {exp.icon}
            </div>

            <h3 className="text-center text-xl font-semibold mb-3">{exp.title}</h3>
            <p className="text-justify text-white/70 text-sm leading-relaxed">{exp.description}</p>

            <div className='text-center'><button className ={`cursor-pointer mt-4 px-8 py-3 bg-linear-to-r ${exp.glow} rounded-xl shadow-lg`}>Explore more</button></div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  )
  
}

export default Features