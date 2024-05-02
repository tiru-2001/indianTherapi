// Import Swiper React components
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./homeCarousel.scss";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const HomeCarousel = ({
  slidesPerView,
  spaceBetween,
  breakpoints,
  children,
}) => {
  return (
    <>
      <Swiper
        breakpoints={breakpoints}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {children}
      </Swiper>
    </>
  );
};

export default HomeCarousel;
