import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../images/banner/butterfly-ssg-30122020.png";
import slide2 from "../../images/banner/cables-ssg-30122020.png";
import slide3 from "../../images/banner/led-bulb-ssg--30122020.png";
import slide4 from "../../images/banner/velvet-switch-ssg--30122020.png";
import slide5 from "../../images/banner/Website-Home-Page-tissue.png";
import "./styles.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper rounded lg:rounded-xl none"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
