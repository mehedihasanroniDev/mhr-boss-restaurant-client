import { Link } from "react-router-dom";

import useCart from "../../Hooks/useCart";
// import { MdShoppingCart } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import useAuth from "../../Hooks/useAuth";
const ShopingCart = ({className}) => {
    const {user} = useAuth()
    const {cart} = useCart()


    return (
        <>

        {
            user &&
            <Link to={'/dashboard/cart'} className='relative '>
                <div className={twMerge("text-4xl g-[#e8fc0fec] border border-[#FF9000]  bg-[#1f2937] g-[#FF9000] rounded-full p-2 hover:border-[#EEFF25] duration-300", className)}>

            <IoMdCart  />
                </div>



                <p className='absolute top-[40%] right-[-8px] w-fit text-white bg-[#FF9000]   text-sm p-[3px] rounded-full  '>
                {cart.length > 9 ? cart.length : `0${cart.length}`}
                </p>
            </Link>
        }
        </>
    );
};

export default ShopingCart;