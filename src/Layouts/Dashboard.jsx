import {  Outlet } from "react-router-dom";
import DashboardSideBar from "../Components/DashboardSideBar/DashboardSideBar";


//import styles
import 'react-modern-drawer/dist/index.css'

import './main.css'
import DashboardDrawer from "../Pages/Dashboard/DashboardDrawer/DashboardDrawer";
import icon from '../assets/icon/icon.png'
import icon2 from '../assets/icon/icon2.png'
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] =useState(true)

    return (
        <div className="font-inter flex  h-full">

            {/* PC view Dashbord link side bar */}
            <div className="hidden lg:block">
            <div className={`w-[261px]  bg-fromBg h-full  ${isOpen ? 'block': 'hidden'}`}>
                 <DashboardSideBar/>

            </div>
            <div className={` top-1 fixed w-fit cursor-pointer hover:bg-fromBg rounded-full duration-500 rotate-180 hover:-rotate-180 ${isOpen? "left-[13.7rem]":"-left-3"}`}  onClick={()=> setIsOpen(!isOpen)}>

            {
                isOpen ?
                <img src={icon} className={`w-full h-[2.5rem]`}/>
                :
                <img src={icon2} className="w-full h-[2.5rem] " />
            }
            </div>
            </div>

            {/* Tablet and mobile view  Dashbord link side bar*/}
            <div className="block lg:hidden">
                <DashboardDrawer/>
            </div>

            {/* Dashborad other page */}
            <div className="flex-1 pt-[50px]   bg-[#F6F6F6] ">
                <div className="   mx-auto px-6 md:px-10  lg:px-20 ">
                <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;