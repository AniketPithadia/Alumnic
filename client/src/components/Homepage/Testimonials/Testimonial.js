import React from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    id: 1,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 2,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 3,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 4,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 5,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 6,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 7,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 8,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 9,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 10,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
  {
    id: 11,
    username: "Aniket Pithadia",
    testimonial: "I am very happy alumni of this college",
  },
];
const Testimonial = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className="slide">
          <div className="slide-content">
            <div className="user-image">
              <img src="../../../assets/images/logo.png" alt="a profile " />
            </div>
            <div className="user-testimonial">{user.testimonial}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default Testimonial;
