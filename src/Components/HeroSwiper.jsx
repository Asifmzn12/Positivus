import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper/modules';
import "../Asset/Css/swiper.css"
const MySwiper = () => {
  return (
    <div className='hero-right-image'>
    <Swiper
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    
      navigation={false}
      pagination={false}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
     
    <SwiperSlide>
      <img src='images/slider3.webp' className='img-fluid' alt="Slide 1" />
    </SwiperSlide>
      <SwiperSlide>
        <img src='images/slider2.webp' className='img-fluid' alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
      <img src='images/Walker.webp' className='h-100' alt="Slide 3" />
    </SwiperSlide>
     
    </Swiper>
    </div>


  );
};

export default MySwiper;
