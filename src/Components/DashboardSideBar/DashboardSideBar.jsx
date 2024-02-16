import DashboardLink from "./DashboardLink";
import React from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { MdReviews } from "react-icons/md";
import { TbCalendarSmile } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";


const homeIcon = React.createElement(FaHome)
const reservationIcon = React.createElement(FaCalendarAlt)
const paymentIcon = React.createElement(GiWallet)
const cartIcon = React.createElement(MdShoppingCart)
const reviewIcon = React.createElement(MdReviews)
const bookingIcon = React.createElement(TbCalendarSmile)
const menuIcon = React.createElement(IoMenu)
const shopIcon = React.createElement(FaShopify)
const contactIcon = React.createElement(MdEmail)
const userIcon = React.createElement(FaUser)

const itemsIcon  = React.createElement(FaUtensils)
const listIcon = React.createElement(FaList)
const bookIcon = React.createElement(FaBook)
// const Icon = React.createElement()


const DashboardSideBar = () => {
    const [isAdmin] = useAdmin()

    return (
        <>
         <div className="pt-[50px] px-6 h-screen">
            <Link to={'/'}>

            <div className="w-fit font-cinzel uppercase text-blacks   hover:text-white duration-300 mb-9 ">
                    <h1 className=" font-extrabold text-2xl  ">MHR BOSS</h1>
                    <p className="  text-base font-bold tracking-[.18rem]">Restaurant</p>
            </div>
            </Link>
            <div className="p-[10px] ">
                {
                    isAdmin ?

                    <>

                    <DashboardLink name='Admin Home' pathName='dashboard/adminHome' icon={homeIcon}/>
                    <DashboardLink name='Add Items' pathName='dashboard/addItem' icon={itemsIcon}/>
                    <DashboardLink name='manage items' pathName='dashboard/manageItems' icon={listIcon}/>

                    <DashboardLink name='All User' pathName='dashboard/allUsers' icon={userIcon}/>

                    <DashboardLink name='Manage bookings' pathName='dashboard/manageBookings' icon={bookIcon}/>

                    {/* <DashboardSideBarLink name='' pathName='dashboard/' icon={}/> */}
                    </>

                    :
                    <>

                    <DashboardLink name='User Home' pathName='dashboard/userHome' icon={homeIcon}/>

                    <DashboardLink name='reservation' pathName='dashboard/reservation' icon={reservationIcon}/>

                    <DashboardLink name='payment history' pathName='dashboard/paymentHistory' icon={paymentIcon}/>
                    <DashboardLink name='my cart' pathName='dashboard/cart' icon={cartIcon}/>
                    <DashboardLink name='add review' pathName='dashboard/addReview' icon={reviewIcon}/>
                    <DashboardLink name='my booking' pathName='dashboard/paymentHistory' icon={bookingIcon}/>
                    </>
                }


            </div>
            <p className="mb-7 mt-2 border-white border-b border" ></p>

            {/* Common Dashboard Link */}
            <div className="p-[10px]">
            <DashboardLink name='Home' pathName='' icon={homeIcon}/>
            <DashboardLink name='menu' pathName='menu' icon={menuIcon}/>
            <DashboardLink name='shop' pathName='' icon={shopIcon}/>
            <DashboardLink name='Contact' pathName='contact' icon={contactIcon}/>



            </div>
        </div>

        </>
    );
};

export default DashboardSideBar;