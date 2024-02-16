
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { GrNext, GrPrevious } from "react-icons/gr";

import imga from '../../assets/home/chef-service.jpg'


const ItemsHeaderCarousel = ({image1, image2, }) => {

        return (
            <>
          <CarouselProvider

            naturalSlideWidth={300}
            naturalSlideHeight={90}
            totalSlides={2}
            interval={4000}
            isPlaying={true}
            infinite={true}


            playDirection='forward'
          >
            <Slider className='relative h-full'>


            <Slide index={0}>
            <div className=' h-[450px] flex justify-center  items-center'
            style={
            {
                backgroundImage: `url(${imga})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }>
                <p className='bg-red-400  h-fit py-10 w-full '>fg</p>

            </div>
            </Slide>

            <Slide index={1}>
            <div className=' h-[450px]'
            style={
            {
                backgroundImage: `url(https://cristianonew.ukrdevs.com/wp-content/uploads/2016/10/slide-1.jpg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }></div>
            </Slide>



            </Slider>

            <ButtonBack className='bg-[#1b202485] text-slate-100 text-lg py-4 lg:py-10 px-2 top-[40%] flex justify-between absolute '><GrPrevious/></ButtonBack>
            <ButtonNext className='bg-[#1b202485] text-slate-100 text-lg py-4 lg:py-10 px-2 flex justify-between absolute top-[40%] right-0'><GrNext/></ButtonNext>
          </CarouselProvider>
          <ItemsHeaderCarousel/>
            </>
        );

};

export default ItemsHeaderCarousel;