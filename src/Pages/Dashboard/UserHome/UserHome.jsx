import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  FaCalendarAlt, FaShoppingCart, FaStar, FaWallet } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { FaShop,FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Helmets from "../../../Components/Helmets/Helmets";

const UserHome = () => {
    const {user, loading} = useAuth()
    const axiosSecure = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey:['user-stats'],
        enabled: !loading,
        queryFn:async()=>{
            const res = await axiosSecure(`/users-stats/?email=${user.email}`)
            return res.data
        }
    })
    const {menu,  orders,reviews, booking, payment} = stats || {}

    return (
        <div>
            <Helmets title={'User Home'} />
            <h1 className="font-cinzel text-3xl text-blacks font-bold ">Hi, Welcome MHR Boss Restaurant

            </h1>


            <div className="lg:stats-horizontal grid  grid-cols-1 md:grid-cols-3    gap-4 my-8">

                <div className=" bg-gradient-to-l  from-[#f88ae9e7] to-[#ff01dd] rounded-lg text-white">
                    <div className="flex items-center text-center w-fit mx-auto gap-6 h-full">
                        <div className=" text-5xl">
                            <FaWallet/>
                        </div>
                        <div >
                            <h1 className="stat-value">{menu}</h1>
                            <h1 className="stat-value ">Menu</h1>
                        </div>
                    </div>
                </div>

                <div className="stat text-center bg-gradient-to-r from-[#D6A75E] to-[#f8d398] text-white rounded-lg">
                    <div className="flex items-center text-center w-fit mx-auto gap-6 h-full">
                        <div className=" text-5xl">
                             <FaShop/>
                        </div>
                        <div >
                            <h1 className="stat-value">103</h1>
                            <h1 className="stat-value">Shop</h1>
                        </div>
                    </div>
                </div>

                <Link to={'/contact'} className="stat text-center bg-gradient-to-r from-[#FE4F86] to-[#e090aa] text-white rounded-lg">
                    <div className="flex items-center text-center w-fit mx-auto gap-6 h-full">
                        <div className=" text-5xl">
                        <FaPhoneVolume/>
                        </div>
                        <div >
                            <div className="stat-value">3</div>
                            <div className="stat-value">Contact</div>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  pt-6 pb-16">

                <div className="bg-[#FFEDD5] flex flex-col justify-center items-center  md:border-r-4 border-yellow h-[20rem] md:h-[30rem]">

                    <div className="avatar cursor-pointer">
                            <div className="w-[10rem] rounded-full ring-[4px] ring-yellow hover:ring-[#ff01dd] duration-500 ring-offset-base-100 ring-offset-1">
                                <img src={ user?.photoURL} />
                            </div>
                    </div>
                    <h1 className="text-yellow mt-6 text-3xl uppercase font-cinzel font-medium"> {user && user?.displayName }</h1>
                </div>


                <div className="bg-[#FEF9C3] h-[20rem] md:h-[30rem] flex  justify-start items-center pl-8 font-cinzel font-semibold uppercase">
                <div>

                    <h1 className=" text-3xl text-blacks  mb-10">Your Activities</h1>

                    <div className="text-[#0088FE] flex gap-2 text-2xl ">
                        <FaShoppingCart/>
                        <h3>Orders</h3>
                        <p>: {orders} </p>
                    </div>

                    <div className="text-[#00C4A1] flex gap-2 text-2xl mt-2">
                        <FaStar/>
                        <h3>Reviews</h3>
                        <p>: {reviews} </p>
                    </div>

                    <div className="text-[#FFBB28] flex gap-2 text-2xl mt-2">
                        <FaCalendarAlt/>
                        <h3>Bookings</h3>
                        <p>: {booking} </p>
                    </div>

                    <div className="text-[#FF8042] flex gap-2 text-2xl mt-2">
                        <GiWallet/>
                        <h3>Payment</h3>
                        <p>: {payment} </p>
                    </div>

                </div>
                </div>

            </div>

        </div>
    );
};

export default UserHome;