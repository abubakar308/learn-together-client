import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Slide image={banner1} text='Global Learning Hub'></Slide>
          </SwiperSlide>
          <SwiperSlide>
          <Slide image={banner2}></Slide>
          </SwiperSlide>
          <SwiperSlide>
          <Slide image={banner3}></Slide>
          </SwiperSlide>
          <SwiperSlide>
          <Slide image={banner4}></Slide>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;