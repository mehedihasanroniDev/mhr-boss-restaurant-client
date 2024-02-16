// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import { FaQuoteLeft } from "react-icons/fa";
import MenuHeaderTitle from "../MenuHeaderTitle/MenuHeaderTitle";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';





const Testimonials = () => {
    const axiosPublic = useAxiosPublic()
    const {data: reviews = []} = useQuery({
        queryKey: ['reviews'],
        queryFn: async()=>{
            const res = await axiosPublic('/reviews')
            return res.data
        }
    })


    return (
        <>
        <div className="my-28 max-w-[1200px] mx-auto">
            <MenuHeaderTitle title={'TESTIMONIALS'} subtitle={'---What Our Clients Say---'} />

        <Swiper navigation={true} modules={[Navigation]} className="mt-10 text-center">
            {
                reviews.map(review => <SwiperSlide key={review._id}>
                    <div className='w-fit mx-auto mb-3'>

                    <Rating
                    style={{ maxWidth: 200, color: 'red' }}
                    value={review.rating}
                    readOnly

                    />
                    </div>
                    <div className='w-fit mx-auto text-5xl text-blacks  my-10'>
                        <FaQuoteLeft/>
                    </div>
                    <p className='font-normal text-lg leading-7 text-[#444] w-[82%]  mx-auto'>{review.details}</p>
                    <h1 className='text-3xl font-medium text-[#CD9003]'>{review.name}</h1>

                </SwiperSlide> )
            }
        </Swiper>


        </div>
        </>
    );
};

export default Testimonials;