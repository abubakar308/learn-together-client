import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Slide from "./Slide";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpeg";
const Banner = () => {
    return (
      <>
    <Swiper
  spaceBetween={30}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  centeredSlides={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  modules={[Autoplay, EffectFade, Pagination]}
  className="mySwiper mt-16 w-full h-[500px] rounded-lg"
>
        <SwiperSlide>
          <Slide 
            image={banner1} 
            text="Global Learning Hub"
            textAnimation="fade-in" // Text fade-in animation
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
            image={banner2} 
            text="Empowering Knowledge" 
            textAnimation="slide-in-left" // Text slide-in animation
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
            image={banner3} 
            text="Expert Tutors Available" 
            textAnimation="zoom-in" // Text zoom-in animation
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide 
            image={banner4} 
            text="Your Learning Journey" 
            textAnimation="slide-in-right" // Text slide-in animation
          />
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;