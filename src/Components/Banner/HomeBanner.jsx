


import banner1 from '../../assets/home/01.jpg'
import banner2 from '../../assets/home/02.jpg'
import banner3 from '../../assets/home/03.png'
import banner4 from '../../assets/home/04.jpg'
import banner5 from '../../assets/home/05.png'
import banner6 from '../../assets/home/06.png'




import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeBanner = () => {



    return (

        <>

        <div className='pt-[5.4rem] lg:pt-0 h-screen'>
            <Carousel
            autoPlay
            infiniteLoop
            stopOnHover={false}
            interval={500000}
            className='main-slider text-center '

            >
            <div>
                 <img src={banner6} alt="" />
            </div>
            <div >
                <img src={banner1} alt="" />
            </div>

            <div>
                <img src={banner2} alt="" />
            </div>

            <div>
                <img src={banner3} alt="" />
            </div>

            <div>
                <img src={banner4} alt="" />
            </div>
            <div>
                <img src={banner5} alt="" />
            </div>


            </Carousel>
        </div>
        </>

    );
};


export default HomeBanner;