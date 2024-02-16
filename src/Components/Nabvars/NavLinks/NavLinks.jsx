
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";


const NavLinks = () => {
    const {user} = useAuth()
    const [isAdmin] = useAdmin()
    const navLink = [
        {name: 'Home', path: '/'},
        {name: 'CONTACT US', path: '/contact'},
        {name: 'OUR MENU', path: '/menu'},
        {name: 'Food Oder', path: '/oder/salad'},
        {name: user && 'Dashbord', path: (user && isAdmin && `/dashboard/adminHome`) ||  (user && !isAdmin && '/dashboard/userHome') },
    ] || []
    return (
        <>
        {
            navLink?.map((items, index)=> <div key={index} >

            <NavLink  className={'hover:text-[#e8fc0fec] duration-100 ml-6 lg:ml-0 hover:border-b-[3px] border-[#e8fc0fec]  uppercase lg:pb-[32px] lg:hover:pb-[34px] text-lg'} to={`${items?.path}`}>{items?.name}</NavLink>
             {(user || index !== navLink.length -1)  && <div className="border-[#d6a1a1d3]  border-b pb-2 lg:border-none "></div>}
            </div>)
        }

        {/* {
            user && isAdmin &&
            <NavLink className={'hover:text-[#e8fc0fec] duration-100 ml-6 lg:ml-0 hover:border-b-[3px] border-[#e8fc0fec]  uppercase lg:pb-[38px] hover:pb-10  text-lg'} to={`/dashboard/adminHome`}>DASHBOARD</NavLink>
        }
        {
            user && !isAdmin &&
            <NavLink className={'hover:text-[#e8fc0fec] duration-100 ml-6 lg:ml-0 hover:border-b-[3px] border-[#e8fc0fec]  uppercase lg:pb-[38px] hover:pb-10 text-lg'} to={`/dashboard/userHome`}>DASHBOARD</NavLink>
        } */}
        </>
    );
};

export default NavLinks;