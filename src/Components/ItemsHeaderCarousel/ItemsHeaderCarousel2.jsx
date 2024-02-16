
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


import banner1 from '../../assets/home/chef-service.jpg'
import banner2 from '../../assets/home/banner.jpg'



// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// import required modules


// Import Swiper styles
import 'swiper/css';
import Sliders from './Sliders';

const ItemsHeaderCarousel2 = () => {
    return (

        <>
        <div className='mySwiperContainer'>

         <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper md:h-[400px]"
        >



          <SwiperSlide>
            <Sliders image={banner1} routeName={'click'} />
          </SwiperSlide>

          <SwiperSlide>
            <Sliders image={banner2} routeName={'Click'} />
          </SwiperSlide>







        </Swiper>
        </div>
        </>

    );
};


export default ItemsHeaderCarousel2;