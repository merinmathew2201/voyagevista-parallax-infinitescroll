import React from 'react'
import { FaClock, FaTags } from 'react-icons/fa'
import { motion } from "framer-motion";
import { IoIosArrowDropright } from "react-icons/io";

const packages = [
  {
    title: "New York City Escape",
    image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,h_474,q_65,w_640/v1/clients/newyorkstate/5232359e_e163_475c_abe3_0f20af112a8c_ae020bfc-a771-4564-87b7-479fbe55735d.jpg",
    duration: "5 Days",
    price: "₹1,45,000",
    includes: "Skyscrapers • Times Square • Broadway"
  },
  {
    title: "London Royal Tour",
    image: "https://static.toiimg.com/thumb/116719125/london.jpg?width=1200&height=900",
    duration: "6 Days",
    price: "₹1,70,000",
    includes: "London Eye • Royal Palace • City Tours"
  },
  {
    title: "Rome Heritage Journey",
    image: "https://i0.wp.com/www.touristitaly.com/wp-content/uploads/2023/03/Trevi-Fountain-rome-2-scaled.jpg?fit=4272%2C2848&ssl=1",
    duration: "5 Days",
    price: "₹1,55,000",
    includes: "Colosseum • Vatican • Ancient Ruins"
  },
  {
    title: "Maldives Luxury Escape",
    image: "https://www.sunsiyam.com/media/qnfnzgmq/ssiv_general_04.jpg?width=782&height=521&mode=max",
    duration: "4 Days",
    price: "₹1,95,000",
    includes: "Water Villas • Beach Dining • Coral Reefs"
  },
  {
    title: "Singapore City Adventure",
    image: "https://www.pelago.com/img/destinations/singapore/1023-1702_singapore2-xlarge.webp",
    duration: "5 Days",
    price: "₹1,40,000",
    includes: "Marina Bay • Sentosa • Gardens by the Bay"
  },
  {
    title: "Seoul Culture Experience",
    image: "https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg",
    duration: "6 Days",
    price: "₹1,30,000",
    includes: "Palaces • K-Culture • Street Markets"
  },
  {
    title: "Sydney Coastal Escape",
    image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071422/destination/vzvmnbw5xkbxrwhj7kva.jpg",
    duration: "6 Days",
    price: "₹1,85,000",
    includes: "Opera House • Beaches • Wildlife"
  },
  {
    title: "Cairo Ancient Expedition",
    image: "https://media.cntravellerme.com/photos/68345bc6555111a68229fc15/3:2/w_4998,h_3332,c_limit/1353691436",
    duration: "5 Days",
    price: "₹1,50,000",
    includes: "Pyramids • Nile Cruise • Desert Safari"
  },
  {
    title: "Istanbul Cultural Retreat",
    image: "https://www.planretreat.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fretreat-5b95b.appspot.com%2Fo%2Fdestinations%252F2hZTsBlqhRLkC2HaC7qJ4U%252Fimages%252Fbd4e315d-9589-472b-9d73-70ea6fb29b5e%3Falt%3Dmedia%26token%3Dd5e70093-ec40-4faf-abd9-70ebd87dcb9b&w=1200&q=75",
    duration: "5 Days",
    price: "₹1,35,000",
    includes: "Mosques • Bazaars • Bosphorus"
  },
  {
    title: "Phuket Island Escape",
    image: "https://thailandawaits.com/wp-content/uploads/2022/08/Koh-Mook-Southern-Thailand-1125x695.jpg",
    duration: "4 Days",
    price: "₹1,25,000",
    includes: "Beaches • Island Tours • Nightlife"
  }
]
function Packages() {
  return (
    <div className="py-20 bg-black">
      <h2 className="text-center text-5xl text-white mb-12">POPULAR TRAVEL PACKAGES</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-30">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.6 }}
            className="bg-stone-900 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">

            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />

            <div className="p-6">
              <h3 className="text-xl  text-white">{pkg.title}</h3>

              <div className="flex items-center gap-2 mt-3 text-gray-400">
                <FaClock /><span>{pkg.duration}</span>
              </div>

              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <FaTags /><span>{pkg.price}</span>
              </div>

              <p className="mt-3 text-gray-500">{pkg.includes}</p>

              <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">Book Now</button>
            </div>
          </motion.div>))}
        <div className='text-white flex justify-center items-center  '>
          <h1 className='text-2xl cursor-pointer hover:underline flex  items-center' >Explore more <IoIosArrowDropright className='ms-2  ' /></h1>
        </div>
      </div>
    </div>
  )
}

export default Packages