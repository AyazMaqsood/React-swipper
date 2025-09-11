import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

export default function TravelSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      id: 1,
      title: "Marrakech Merzouga",
      location: "Sahara Desert - Morocco",
      url: "https://picsum.photos/id/1018/1000/600",
    },
    {
      id: 2,
      title: "Yosemite",
      location: "National Park - USA",
      url: "https://picsum.photos/id/1015/1000/600",
    },
    {
      id: 3,
      title: "Les Landes",
      location: "Beach - France",
      url: "https://picsum.photos/id/1019/1000/600",
    },
    {
      id: 4,
      title: "Cinque Terre",
      location: "Italy",
      url: "https://picsum.photos/id/1020/1000/600",
    },
    {
      id: 5,
      title: "Alps",
      location: "Switzerland",
      url: "https://picsum.photos/id/1036/1000/600",
    },
    {
      id: 6,
      title: "Kyoto",
      location: "Japan",
      url: "https://picsum.photos/id/1041/1000/600",
    },
    {
      id: 7,
      title: "Santorini",
      location: "Greece",
      url: "https://picsum.photos/id/1065/1000/600",
    },
    {
      id: 8,
      title: "Dubai Desert",
      location: "UAE",
      url: "https://picsum.photos/id/1074/1000/600",
    },
  ];

  return (
    <div className="slider-container">
      
      <Swiper
        modules={[ Thumbs, EffectFade, Autoplay]}
       
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 4000, 
          disableOnInteraction: false,
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="background-swiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div
              className="background-slide"
              style={{ backgroundImage: `url(${s.url})` }}
            >
              <div className="overlay-content">
                <h4>{s.location}</h4>
                <h1>{s.title}</h1>
                <p>
                  Discover the beauty of {s.title}. Perfect destination for
                  adventure and exploration.
                </p>
                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="cards-slider">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, Autoplay]}
          slidesPerView={4}
          spaceBetween={15}
          watchSlidesProgress={true}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 4000, 
            disableOnInteraction: false,
          }}
          className="thumbs-swiper"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="card">
                <img src={s.url} alt={s.title} />
                <h3>{s.title}</h3>
                <p>{s.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
