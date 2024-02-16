import { IoCloseSharp, IoMenu } from "react-icons/io5";
import './navbar.css'
import { useEffect, useState } from "react";
import NavLinks from "../NavLinks/NavLinks";
import LoginBtn from "../LoginBtn/LoginBtn";
import Logo from "../../Logo/Logo";
import NavbarDrawer from "../NavbarDrawer/NavbarDrawer";
import MiniNavbar from "../MiniNavbar/MiniNavbar";





const Navbar = () => {

    const [isOpen, setIsOpen] =useState(false)
    const [scrollColor, setScrollColor] = useState(false);


    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 450) {
                setScrollColor(true);
            } else {
                setScrollColor(false);
            }
        };

        window.addEventListener('scroll', changeColor);

        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);


    const handelNavberDrewer = () => {
        setIsOpen(!isOpen)
    }

    return (


        <>
        {/* user Login and show mini navbar */}
        <MiniNavbar scrollColor={scrollColor}/>


        <nav className={` max-w-[1500px]  mx-auto   w-full  z-20 fixed   text-white py-[2px] ${scrollColor ? 'bg-[#1f2937e8]' : 'lg:bg-[#1515154b] bg-[#1f2937e8]'}`}>
        <div className=" flex  items-center justify-between  max-w-[1200px]  mx-auto px-[25px] z-50 ">

            {/* user login  and logOut laptop view*/}
            <div className="lg:hidden">
            <LoginBtn/>
            </div>

            {/* MHR BOSS Logo */}
            <Logo/>

            {/* Menu bar icon*/}
            <button className="lg:hidden text-[42px] hover:text-[#e8fc0fec] duration-500 hover:-translate-y-1" onClick={handelNavberDrewer} type="button">
            {
                isOpen ? <IoCloseSharp /> : <IoMenu/>
            }
            </button>

            {/* Nav link */}
            <div className={`items-center justify-between hidden  lg:flex   lg:order-1  `}
            >
                <div className="flex font-semibold   space-x-5    items-center ">
                    <NavLinks/>

                    {/* user login  and logOut btn mobile view*/}
                    <LoginBtn scrollColor={scrollColor}/>
                </div>
            </div>

        </div>
        </nav>
        {/*  Navber Drewer only mobile view*/}
        <NavbarDrawer isOpen={isOpen} handelNavberDrewer={handelNavberDrewer}/>
        </>

    );
};

export default Navbar;

// import  { useState, } from 'react';
//
// function Navbar() {
//     const [showNavbar, setShowNavbar] = useState(true);
//
//
//     // Function to handle scroll event
//     const handleScroll = () => {
//         if(window.scrollTo){
//             setShowNavbar(true)
//
//         }
//     };
//
//     // Add event listener when component mounts
//
//     window.addEventListener('scroll', handleScroll);
//     console.log({showNavbar});
//
//
//     return (
//         <nav className='z-40' style={{ backgroundColor: '#333', color: '#fff', padding: '10px', position: 'fixed', top: showNavbar ? '30px' : '', width: '100%', transition: 'top 0.6s' }}>
//             <div>
//                 <h1>Scroll Navbar</h1>
//                 <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', padding: '0' }}>
//                     <li style={{ marginRight: '20px' }}><a href="#home">Home</a></li>
//                     <li style={{ marginRight: '20px' }}><a href="#about">About</a></li>
//                     <li style={{ marginRight: '20px' }}><a href="#services">Services</a></li>
//                     <li style={{ marginRight: '20px' }}><a href="#contact">Contact</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }
//
// export default Navbar;
