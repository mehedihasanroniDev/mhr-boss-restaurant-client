import { Link } from "react-router-dom";

import logo from '../../assets/logo/logo.png'
import { twMerge } from "tailwind-merge";


const Logo = ({className}) => {
    return (
        <>
                {/* Logo */}
            <Link to={'/'} className="rtl:space-x-reverse flex gap-2 items-center">
            <img src={logo} alt="" className={twMerge("h-[3rem] hover:bg-gray-300 duration-500 rounded bg-gray-200 hover:-translate-y-1 p-[1px] hidden lg:block", className)}  />

            <div className="w-fit uppercase text-[#FF9000] hover:text-[#e8fc0fec] duration-500 hover:-translate-y-1 ">
                <h1 className=" font-extrabold   text-2xl">MHR BOSS</h1>
                <p className="  text-base font-bold tracking-[.15rem]">Restaurant</p>
            </div>
            </Link>
        </>
    );
};

export default Logo;