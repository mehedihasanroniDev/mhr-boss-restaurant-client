
// import component 👇
import { IoCloseSharp } from 'react-icons/io5';
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import NavLinks from '../NavLinks/NavLinks';

import './NavbarDrawer.css'
import ShopingCart from '../../ShopingCart/ShopingCart';
import Logo from '../../Logo/Logo';


const NavbarDrawer = ({isOpen, handelNavberDrewer}) => {
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={handelNavberDrewer}
                direction='left'
            >

                <div className='bg-[#1f2937e8] h-full '>

                <div className='ml-4 py-8'>
                    <Logo className={'block'}/>
                </div>



                <div className='absolute right-0 top-0 text-4xl w-fit cursor-pointer text-white hover:text-[#e8fc0fec] duration-500 hover:-translate-y-1 '
                onClick={handelNavberDrewer}
                >
                <IoCloseSharp />
                </div>


                <div onClick={handelNavberDrewer} className=" font-semibold     text-white text-xl space-y-6 pt-5">
                <NavLinks/>

               </div>
               <div className='w-fit ml-6 mt-3'>

               <ShopingCart className={'text-[44px]'}/>
               </div>
               </div>

            </Drawer>
        </>
    )
};

export default NavbarDrawer;