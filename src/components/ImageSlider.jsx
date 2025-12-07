import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const slides =[
    {
        image:"https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGJlYWNofGVufDB8fDB8fHww",
        title: "Bali Beach Paradise",
        description: "Golden sands, crystal-clear waters, and the peaceful rhythm of island life."

    },
    {
        image:"https://www.aparisguide.com/eiffeltower/eiffel-tower003.jpg",
        title: "Paris, The City of Lights",
        description: "Romantic streets and iconic landmarks crowned by the stunning Eiffel Tower."

    },
    {
        image:"https://as1.ftcdn.net/v2/jpg/01/16/10/66/1000_F_116106668_v8ZPDa39FLyLKcU6JjxOud1DWdCIpsWb.jpg",
        title: "Dubai – A Futuristic Oasis",
        description: "Soaring skyscrapers, luxury experiences, and endless desert horizons."

    },
    {
        image:"https://journeywoman.com/wp-content/uploads/2024/06/Travel-Switzerland-by-Train-Filisur-Landwasser-Viaduct.jpg",
        title: "Swiss Alps Adventure",
        description: "Majestic peaks, snowy landscapes, and breathtaking alpine scenery."

    },
    {
        image:"https://www.santorini-view.com/files/temp/8cd8d21cdb0e615987d8f491af10f583.jpg",
        title: "Santorini Cliffside Views",
        description: "White-washed homes overlooking deep blue waters and unforgettable sunsets."

    },
    {
        image:"https://www.thetravelpocketguide.com/wp-content/uploads/sorasak-_UIN-pFfJ7c-unsplash-759x500.jpg",
        title: "Kyoto – The Heart of Tradition",
        description: "Ancient temples, tranquil gardens, and timeless Japanese culture."

    }]

function ImageSlider() {
  return (
    <div className="w-full py-20 bg-black/90">
      <h2 className="text-center text-4xl  text-white mb-10">EXPLORE DESTINATIONS</h2>

      <Swiper effect="coverflow" modules={[EffectCoverflow, Autoplay]}  loop={true}  
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor centeredSlides
        breakpoints={{
          0: { slidesPerView: 1 },       
          768: { slidesPerView: 2 },     
          1024: { slidesPerView: 3 },    
        }}  
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: false,
        }} className="w-[90%] md:w-[70%] mx-auto">
        {
        slides.map((slide, index) => (
             <SwiperSlide key={index} className="rounded-2xl overflow-hidden shadow-2xl relative"> 
                <img src={slide.image} alt={slide.title} className="w-full h-[350px] md:h-[450px] object-cover" /> 
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center">
                    <h3 className="text-sm md:text-2xl font-semibold">{slide.title}</h3> 
                    <p className="text-xs md:text-base mt-1">{slide.description}</p>
                </div> 
            </SwiperSlide> ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider