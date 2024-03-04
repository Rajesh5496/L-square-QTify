import React from "react";
import styles from "./Carousel.module.css";
// import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../Card/Card";
// import {SliderWrap} from "./swiper.style";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import leftArrowImage from "../../assets/carouselleftarrow.svg"
// import SwiperCore, {Navigation, Pagination } from "swiper";
// SwiperCore.use([Navigation, Pagination]);

// import SwiperCore, { Navigation, Pagination } from 'swiper/core';

// SwiperCore.use([Navigation, Pagination]);

function Carousel({ data, type }) {
  console.log(data.length);
  
  return (
    <div className={styles.divw}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={4}
        slidesPerView={7}
        navigation
        //   navigation={{
        //     nextEl: `.${styles.imagenext}`,
        //     prevEl: `.${styles.imageprev}`,
        //     disabledClass: `.${styles.imagedis}`
        //   }}
        //   pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log('slide change')}
      >
        {data.map((ele) => (
          <SwiperSlide key={ele.id}>
            <Cards data={ele} type={type} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide className={styles.fontcolor}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.fontcolor}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.fontcolor}>Slide 3</SwiperSlide>
      <SwiperSlide className={styles.fontcolor}>Slide 4</SwiperSlide> */}
      </Swiper>

      {/* <swiper-container
            //   spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
            >
              {data.map((ele) => (
                <swiper-slide key={ele.id}>
                  <Cards data={ele} type={type} />
                </swiper-slide>
              ))}
            </swiper-container> */}
      {/* <swiper-container
        space-between="10"
        slides-per-view="7"
        pagination="true"
        navigation="true"
      >
        <swiper-slide>Slide1</swiper-slide>
        <swiper-slide>Slide2</swiper-slide>
        <swiper-slide>Slide3</swiper-slide>
        <swiper-slide>Slide4</swiper-slide>
        <swiper-slide>Slide5</swiper-slide>
      </swiper-container> */}
    </div>
  );
}

export default Carousel;
