// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './style.css';

import silder1 from '../../assets/home/slide1.jpg'
import silder2 from '../../assets/home/slide2.jpg'
import silder3 from '../../assets/home/slide3.jpg'
import silder4 from '../../assets/home/slide4.jpg'
import silder5 from '../../assets/home/slide5.jpg'

// import required modules
import { Pagination } from 'swiper/modules';

import './OrderOnLine.css'
import Container from '../Container/Container';

import OrderOnlineSlider from './OrderOnlineSlider';
import MenuHeaderTitle from '../MenuHeaderTitle/MenuHeaderTitle';

const OrderOnline = () => {
    return (
        <Container>

        <div className='mb-12 -mt-[13rem] md:mt-20 '>

        <MenuHeaderTitle title={'ORDER ONLINE'} subtitle={'---From 11:00am to 10:00pm---'}/>
        </div>


        <div className='  '>
          <Swiper
            autoplay
            slidesPerView={4}
            spaceBetween={12}
            pagination={{
              clickable: true,

            }}
            modules={[Pagination]}
            className="mySwiper"


          >
            <SwiperSlide>

            <OrderOnlineSlider image={silder1} title={'alads'} firstLetter={'s'}/>

            </SwiperSlide>
            <SwiperSlide>

            <OrderOnlineSlider image={silder2} firstLetter={'s'} title={'oups'}/>

            </SwiperSlide>
            <SwiperSlide>

            <OrderOnlineSlider image={silder3} firstLetter={'p'} title={'izzas'}/>

            </SwiperSlide>
            <SwiperSlide>

            <OrderOnlineSlider image={silder4} title={'esserts'} firstLetter={'d'}/>

            </SwiperSlide>
            <SwiperSlide>

            <OrderOnlineSlider image={silder5} title={'urger'} firstLetter={'b'}/>

            </SwiperSlide>

          </Swiper>
        </div>


        </Container>
      );
};

export default OrderOnline;