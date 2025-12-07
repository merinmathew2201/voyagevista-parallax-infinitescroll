import React from 'react'

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "India",
    message: "The Bali trip was unforgettable! Everything was arranged perfectly.",
    rating: "★★★★★",
    image: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-145493.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Sophia Williams",
    location: "UK",
    message: "The Swiss Alps package was breathtaking. Highly recommended!",
    rating: "★★★★",
    image: "https://cdn.prod.website-files.com/6318be76dbd6930c5f04cb53/631a5b3cda08e18ebf63f147_AdobeStock_246344306-scaled.jpeg"
  },
  {
    name: "Liam Johnson",
    location: "USA",
    message: "Smooth booking and premium experience. Loved every moment!",
    rating: "★★★★★",
    image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Emma Brown",
    location: "Australia",
    message: "Paris was magical. VoyageVista made it even more special.",
    rating: "★★★★",
    image: "https://plus.unsplash.com/premium_photo-1705009607254-5618bb0d0c35?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBzbWlsaW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000"
  },
  {
    name: "Hiro Tanaka",
    location: "Japan",
    message: "Dubai skyline tour was the best travel experience of my life!",
    rating: "★★★★★",
    image: "https://img.freepik.com/free-photo/handsome-man-smiling-happy-face-portrait-close-up_53876-143272.jpg?semt=ais_hybrid&w=740&q=80"
  },
];

function Testimonials() {
  return (
    <div className="w-full py-20 bg-black text-white overflow-hidden ">
      <h2 className=" text-center text-5xl  mb-12">WHAT OUR TRAVELERS SAY</h2>
      <div className="flex gap-10 animate-infinite">
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className="min-w-[260px] bg-stone-800 shadow-lg p-5 rounded-xl  hover:scale-105">
            <img src={item.image} className="w-20 h-20 rounded-full object-cover mx-auto mb-3"/>
            <h3 className="text-lg  text-center">{item.name}</h3>
            <p className="text-sm text-gray-400 text-center">{item.location}</p>

            <div className="flex justify-center mt-2">
                <span className="text-yellow-500 text-xl">{item.rating}</span>
            </div>

            <p className="text-gray-500 text-center mt-3">{item.message}</p>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Testimonials