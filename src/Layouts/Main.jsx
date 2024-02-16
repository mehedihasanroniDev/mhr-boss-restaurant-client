import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import './main.css'
import Navbar from "../Components/Nabvars/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const hidenNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signUp')


    return (
        <div className="font-inter">
        {hidenNavbarFooter  ? '' : <Navbar/>}
        <Outlet/>
        { hidenNavbarFooter  ? '' : <Footer/>}
        </div>
    );
};

export default Main;