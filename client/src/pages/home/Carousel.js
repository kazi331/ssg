import React from "react";
import banner1 from "../../images/banner/butterfly-ssg-30122020.png";
import banner2 from "../../images/banner/led-bulb-ssg--30122020.png";
import banner3 from "../../images/banner/velvet-switch-ssg--30122020.png";
import banner4 from "../../images/banner/Website-Home-Page-tissue.png";
const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide4"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} alt="" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-sm hidden lg:flex bg-transparent border-primary hover:bg-primary btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
