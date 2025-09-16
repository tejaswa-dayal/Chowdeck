import { useRef } from 'react';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';
import twitterLogo from '/twitterLogo.svg';
import testimonial1 from "../assets/testimonial1.png";
import testimonial2 from "../assets/testimonial2.png";
import testimonial3 from "../assets/testimonial3.png";
import testimonial4 from "../assets/testimonial4.png";
import testimonial5 from "../assets/testimonial5.png";
import testimonial6 from "../assets/testimonial6.png";
import testimonial7 from "../assets/testimonial7.png";
import testimonial8 from "../assets/testimonial8.png";
import {ArrowRight,ArrowLeft} from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const testimonialData = [
  {
    name: "Fá",
    username: "@victorfatanmi",
    image: testimonial1,
    testimonial: "Chowdeck is the best Nigerian mobile app I have ever used. Yes, quote me."
  },
  {
    name: "THEE AWAZI",
    username: "@THEAWAZI",
    image: testimonial2, 
    testimonial: "Food!!! 🤤💚 So excited that I can now order through @chowdeck on the island. Go team Chowdeck!!!🚀"
  },
  {
    name: "Teffy Billion Dollars",
    username: "@Jegc_tola",
    image: testimonial3,
    testimonial: "My Yam and pepper sauce just came in from King Glab and Chowdeck and my Godddd! This is the best thing to happen to me this week!"
  },
  {
    name: "Temz👑",
    username: "@TheRealTemz",
    image: testimonial4,
    testimonial:"I wan go baff but I can’t. Because chowdeck riders move like thieves in the night. The efficiency and speed is crazy 🥹"
  },
  {
    name: "先生",
    username: "@TheFisola",
    image: testimonial5,
    testimonial: "Chowdeck delivered in 20 minutes. Rider said “pardon my lateness” 💀"
  },
  {
    name: "Wine",
    username:"@RedWhinee",
    image: testimonial6,
    testimonial: "I genuinely love @chowdeck A top app with service"
  },
  {
    name: "Folasade Daini",
    username: "@folasade_daini",
    image: testimonial7,
    testimonial: "Have you seen the new list of vendors on Chowdeck?? Omo. It is giving 🔥🔥"
  },
  {
    name: "Scheherazade",
    username: "@_chiisom",
    image: testimonial8,
    testimonial: "You’ll order Chowdeck and say yeah I have about 20 minutes to get home. In 5 minutes, delivery man will tell you he’s outside 😭"
  }
];

const Testimonial = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6 w-full px-6">
      <button className="font-extrabold text-xl flex justify-center items-center gap-2 bg-[#FFF3CC] px-4 py-2 border-3 border-black rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300">
        <span className="w-2 h-2 rounded-full bg-[#FFB3CE]"></span>Street Cred
      </button>
      <CTAButton
        color={'blue'}
        icon={twitterLogo}
        title={'Join our community'}
        iconSize={15}
        size={'full'}
      />

      <Swiper
        modules={[Navigation]}
        navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev"
  }}
  
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },   // Mobile
          640: { slidesPerView: 1 },   // Small tablets
          1024: { slidesPerView: 3 },  // Laptops
          1440: { slidesPerView: 4 },  // Large screens
        }}
        className="w-full mt-4"
      >
        {testimonialData.map((data, index) => (
          <SwiperSlide key={index} className='w-full flex justify-center' >
            <TestimonialCard
              name={data.name}
              image={data.image}
              username={data.username}
              testimonial={data.testimonial}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center gap-10 w-full items-center">
  <button className="custom-prev bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex justify-center items-center text-center text-2xl cursor-pointer hover:scale-150 transition-transform duration-300" ref={prevRef}><ArrowLeft/></button>
  <button className="custom-next bg-[#1DA1F2] text-white w-10 h-10 rounded-full flex justify-center items-center text-center text-2xl cursor-pointer hover:scale-150 transition-all duration-300" ref={nextRef}><ArrowRight /></button>
</div>
    </div>
  );
};

export default Testimonial;
