import ShopingCart from "../../ShopingCart/ShopingCart";

import userImage from '../../../assets/others/profile.png'
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import toast from "react-hot-toast";


const LoginBtn = ({ scrollColor}) => {
    const {user ,logOut} = useAuth()
    const [isAdmin] = useAdmin()
    const Navigate = useNavigate()

    console.log();


    const handleUserLogOut = async()=>{

        try{
            await logOut(user.email)
            window.location.reload()
            Navigate('/')
        }
        catch(error){
            toast.error(`${error.message}`)
        }

    }


    return (
        <div className="flex items-center gap-6 flex-row-reverse lg:flex-row">

        {
           user?.emailVerified && <ShopingCart/>
        }
         <div className="flex  lg:order-2  rtl:space-x-reverse">

                <div className="dropdown lg:dropdown-end">

                <div tabIndex={0} role="button" className="  avatar">
                    <div className="w-[4.5rem] rounded-full border border-[#FF9000] duration-300 hover:border-[#EEFF25] mt-1">
                    <img  src={user?.photoURL ? user?.photoURL : userImage} alt="MHR BOSS"/>

                    </div>
                </div>
                <ul tabIndex={0} className={`menu menu-lg dropdown-content mt-[2px] -ml-10 z-[1] p-2 shadow  rounded-b-box w-52 ${scrollColor ? 'bg-[#1f2937e8]': 'bg-[#1f2937e8] lg:bg-[#1515154b]'}`}>

                    {
                        user?
                        <>
                        <li className="text-[#FF9000] text-center text-base  lg:ml-0">Hi, {user?.displayName}</li>
                        <li className="hover:bg-[#30435c] rounded-xl "><Link >Profile</Link></li>
                        {/* admin user dashboard */}
                        {
                        user && isAdmin &&
                        <li className="hover:bg-[#30435c] rounded-xl "><Link to={`/dashboard/adminHome`} >Dashboard</Link></li>
                        }


                        {/* Normal user dashboard */}
                        {
                        user && !isAdmin &&
                        <li className="hover:bg-[#30435c] rounded-xl "><Link to={`/dashboard/userHome`} >Dashboard</Link></li>
                        }

                         <li className="hover:bg-[#30435c] rounded-xl "><p onClick={handleUserLogOut}   >Log Out</p></li>


                        </>
                        :

                        <li>
                        <h3 className="justify-between">
                            <Link to={'/login'} className="text-base p-1 bg-[#FF9000] rounded">Login</Link>
                            <Link to={'/signUp'} className="text-base p-1 bg-[#FF9000] rounded">Sign Up</Link>
                        </h3>
                        </li>
                    }

                </ul>
                </div>
        </div>
{/*

        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</div> */}



{/*
                <div className="relative">


                <div className="  avatar ">
                    <div className=" w-[4rem] rounded-full border border-[#FF9000]" onClick={()=> setShowProfile(!showProfile)}>
                    <img alt="MHR BOSS" className="cursor-pointer" src={userImage} />
                    </div>


                </div>

                    <div className={`bg-red w-52 h-[10rem] p-2 text-xl font-medium absolute top-[78px] -right-18 lg:right-0 duration-1000 shadow-sm  ${showProfile ? 'block' : 'hidden'}`}>
fgh
                    </div>
                </div> */}


        </div>
    );
};

export default LoginBtn;
