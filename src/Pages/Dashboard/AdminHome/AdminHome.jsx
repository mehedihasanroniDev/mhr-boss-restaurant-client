import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import {  FaMagnet, FaUsers, FaWallet } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import Helmets from "../../../Components/Helmets/Helmets";

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: stats = {}} = useQuery({
        queryKey:['admin-stats'],
        queryFn:async()=>{
            const res = await axiosSecure('/admin-stats')
            return res.data
        }
    })
    const {users, orders, menuItems, revenue} = stats || {}
    return (
        <>
        <Helmets title={'Admin Home'} />
            <h1 className="font-cinzel text-3xl text-blacks font-bold ">Hi, Welcome
              <span className="text-yellow"> {user.displayName ? user.displayName : 'Back' }</span>
            </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-4 my-8">

            <div className=" bg-gradient-to-l  from-[#f88ae9e7] to-[#ff01dd] rounded-lg text-white ">
                <div className="flex items-center text-center w-fit mx-auto gap-4 h-full">
                    <div className=" text-4xl">
                        <FaWallet/>
                    </div>
                    <div >
                        <h1 className="text-3xl font-bold">{revenue}</h1>
                        <h1 className="text-3xl font-bold ">Revenue</h1>
                    </div>
                </div>
            </div>

            <div className="stat text-center bg-gradient-to-r from-[#D6A75E] to-[#f8d398] text-white rounded-lg">
                <div className="flex items-center text-center w-fit mx-auto  h-full">
                    <div className=" text-4xl">
                        <FaUsers/>
                    </div>
                    <div >
                        <h1 className="text-3xl font-bold">{users}</h1>
                        <h1 className="text-3xl font-bold">Customers</h1>
                    </div>
                </div>
            </div>

            <div className="stat text-center bg-gradient-to-r from-[#FE4F86] to-[#e090aa] text-white rounded-lg">
                <div className="flex items-center text-center w-fit mx-auto gap-4 h-full">
                    <div className=" text-4xl">
                        <FaMagnet/>
                    </div>
                    <div >
                        <h1 className="text-3xl font-bold">{menuItems}</h1>
                        <h1 className="text-3xl font-bold">Products</h1>
                    </div>
                </div>

            </div>

            <div className="stat text-center bg-gradient-to-r from-[#71B4FF] to-[#abc9eb] text-white rounded-lg">
                <div className="flex items-center text-center w-fit mx-auto gap-4 h-full">
                    <div className=" text-4xl">
                        <FaCarSide/>
                    </div>
                    <div >
                        <div className="text-3xl font-bold">{orders}</div>
                        <div className="text-3xl font-bold">Orders</div>
                    </div>
                </div>
            </div>

        </div>
{/*
        <div className="stats gap-4 bg-pink-400 text-blacks">

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="text-3xl font-bold">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="text-3xl font-bold">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="text-3xl font-bold">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>

</div> */}
        </>
    );
};

export default AdminHome;