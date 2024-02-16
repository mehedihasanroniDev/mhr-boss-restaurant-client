import { useQuery } from "@tanstack/react-query";
import { Link, Navigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MenuHeaderTitle from "../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import FoodCard from "../../Components/FoodCard/FoodCard";
import Container from "../../Components/Container/Container";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useAdmin from "../../Hooks/useAdmin";
import moment from "moment";
import Helmets from "../../Components/Helmets/Helmets";

// import './fooddetails.css'

const MenuDetails = () => {
    const [ratingValue, setRatingValue] = useState(0);
    const {user} = useAuth()
    const [isAdmin] = useAdmin()

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const {id} = useParams()

    const {data: menu = {}, isLoading: isMenuLoading, refetch: menuRefetch}= useQuery({
        queryKey: ['menuDetails',],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/menu/${id}`);
            return res.data
        }
    })

    // Refresh the menu items
    useEffect(()=>{
        const interval = setInterval(()=>{
            menuRefetch()
        }, 1000)

        return ()=> clearInterval(interval)
    }, [menuRefetch])

    const {name,recipe,image, price, category, _id} = menu || {}



    const {data = [], refetch} = useQuery({
        queryKey:['relatedItems', 'itemsReviews'],
        enabled: !isMenuLoading,
        queryFn: async()=>{

            const resRelatedMenu = await axiosPublic.get(`/relatedItemsMenu/${category}`);

            const resReview = await axiosPublic.get(`/reviewItems/${id}`)
            const relatedItems = resRelatedMenu.data
            const reviews = resReview.data
            console.log(reviews);
            return {relatedItems, reviews}
        }
    })


    const handleItemReview =async(e)=>{
        e.preventDefault()
        const comment = e.target.comment.value
        const rating = ratingValue;
        const authorName = user.displayName;
        const authorImage = user.photoURL;
         const date = new Date()
        const itemId = _id;
        const reviewInfo = {authorName, authorImage, rating, comment,date, itemId}

        const res = await axiosSecure.post('/reviewItems', reviewInfo)
        if(res.data.insertedId){
            setRatingValue(0)
            e.target.reset()
            refetch()
        }
    }




    const handleAddToCard = async()=>{
        if(user && user?.email){
            //send cart item to the database
            const cardItem={
                menuId: _id,
                email: user.email,
                name,
                recipe,
                image,
                price
            }
            const res = await axiosSecure.post('/carts', cardItem)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 2500,
                    customClass:{
                        title: 'customMessageStyle'
                    }

                });
                // refetch cart to update the cart items count
                refetch();
            }

        }else{

            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    Navigate('/login', { state: { from: location } })
                }
            });
        }

    }


    return (

        <>
        <Helmets title={'Food Details'} />
        <div className="bg-gradient-to-t from-[#1f2937e8] to-[#1515151c] ">
            <div className="pt-32 pb-16">
            <Container>
            <div className="card lg:card-side bg-base-100 rounded-none bg-gradient-to-t from-[#b4cef3e8] to-[#d4c4c41c]">

                <figure >
                    <img src={image} alt="MHR BOSS" className="lg:h-[30rem] w-full lg:w-[33rem] "/>
                </figure>
                <div className="p-4 lg:p-8 lg:pt-20  border m-2  border-dashed border-[#706c6cbb] relative">

                   <p className="absolute  font-normal text-white bg-blacks -top-[10px] -right-[9px] px-4 py-2 shadow-2xl text-xl">$ {price}</p>

                    <h2 className="card-title lg:text-3xl text-2xl font-bold uppercase font-cinzel text-blacks">{name}</h2>

                    <p className="uppercase mt-2 text-lg  font-semibold font-cinzel ">Category:
                    <span className="italic"> {category}</span></p>
                    <p className="my-6 font-medium text-lg">{recipe}</p>
                    <p className="my-6  text-sm lg:text-base border-l-2 py-3 pl-3 font-semibold text-grayBlack ">Cherries, Dough, White Sugar, Cheese, Vanilla Ice Cream</p>
                    <div className="card-actions justify-start mb-2 mt-14">
                    <button className="border-b-[3px]  rounded-lg  px-6 py-3 hover:text-blacks  duration-500 uppercase   font-normal w-fit mx-auto text-yellow border-yellow bg-[#E8E8E8] hover:bg-[#d4c4c4e0] hover:border-[#f1ecec] text-base"
                    onClick={handleAddToCard}
                    >
                    add to cart
                    </button>
                    </div>
                </div>
            </div>
            </Container>
            </div>
        </div>
        <Container>

            <div className="pt-10">
                <MenuHeaderTitle title={'Related Items'} className={'uppercase'}/>
            </div>
            <div className="mt-20 mb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0">
                {
                    data?.relatedItems?.map(items => <FoodCard key={items._id} item={items} />)
                }

            </div>


            {/* Item Reviews and feedback */}


            <div className="lg:w-[75%] ">
                    <h1 className="uppercase font-medium text-blacks font-cinzel text-lg md:text-2xl my-16">

                    {data?.reviews?.length < 10 ? `0${data?.reviews?.length}`: data?.reviews?.length} reviews for {name}</h1>



                    {
                       data?.reviews?.map(review =>

                        <div key={review._id} className="shadow-md  bg-base-100 rounded-2xl bg-gradient-to-r my-10  from-[#b4cef3e8] to-[#d4c4c41c] p-5 lg:py-5 lg:px-12 flex flex-col-reverse md:flex-row justify-between items-center ">

                        <div className="flex  gap-6 mt-4 md:mt-0">

                        <Link to={(user && isAdmin && `/dashboard/adminHome`) ||  (user && !isAdmin && '/dashboard/userHome')}>
                        <div className="avatar cursor-pointer">
                            <div className="w-20 rounded-full ring-2 ring-[#FF9000] hover:ring-[#EEFF25] duration-500 ring-offset-base-100 ring-offset-1">
                                <img src={  review?.authorImage} />
                            </div>
                        </div>
                        </Link>

                        <div>

                        <div className="text-blacks font-bold  text-xl ">

                        <span className="uppercase font-cinzel">{review?.authorName} </span>

                        <span className="text-base font-semibold font-raleway">–
                        {
                            moment(review?.data).format("MMMM DD, YYYY")
                        }
                        </span>

                        </div>
                        <p className="font-raleway text-lg font-semibold mt-1">{review?.comment}</p>
                        </div>

                        </div>

                        <div>
                        <Rating
                                style={{ maxWidth: 180,}}
                                value={review?.rating}
                                readOnly

                                />
                        </div>

                        </div>
                            )
                    }



                    {/* item Comment and feedback and add reivew  */}
                    <div className=" my-10 bg-base-200 p-5 lg:py-5 lg:px-12 rounded-xl shadow-md">
                        <form onSubmit={handleItemReview}>
                        <div className="text-lg font-medium uppercase mb-2">
                        ADD A REVIEW
                        </div>
                        <Rating
                            style={{ maxWidth: 180, color:'red' }}
                            value={ratingValue}
                            onChange={setRatingValue}
                            isRequired
                            />
                        <div className="mt-5 form-control text-lg font-medium text-blacks">
                            <label htmlFor="yourReview ">Your review *</label>
                            <textarea required name="comment" id="yourReview" className="textarea textarea-bordered h-32">

                            </textarea>
                        </div>
                        <button className="mt-3 bg-[#1f2937e8] hover:bg-fromBg text-white px-7 rounded-md py-2 text-base font-medium duration-300" type="submit">Submit</button>
                        </form>
                    </div>
            </div>


        </Container>
        </>
    );
};

export default MenuDetails;