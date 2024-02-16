import Drawer from 'react-modern-drawer'

//import styles 
import 'react-modern-drawer/dist/index.css'
import DashboardSideBar from '../../../Components/DashboardSideBar/DashboardSideBar';
import { useState } from 'react';
import icon from '../../../assets/icon/icon.png'
import icon2 from '../../../assets/icon/icon2.png'

const DashboardDrawer = () => {
    const [isOpen, setIsOpen] =useState(false)

    const handelNavberDrewer = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>

               <Drawer
                open={isOpen}
                onClose={handelNavberDrewer}
                direction='left'
                >
                <div className='bg-fromBg relative' onClick={handelNavberDrewer}>
                 <DashboardSideBar/>
                 <div className={`absolute top-1 right-1 w-fit cursor-pointer hover:bg-fromBg rounded-full duration-500 rotate-180 hover:-rotate-180  `}  onClick={handelNavberDrewer}>
                    <img src={icon} className="w-full h-[2.5rem] " />
                </div>
                </div>
                </Drawer>

                <div className={`top-1 fixed w-fit cursor-pointer hover:bg-fromBg rounded-full duration-500 rotate-180 hover:-rotate-180 -left-3 `}  onClick={handelNavberDrewer}>
                    <img src={icon2} className="w-full h-[2.5rem] " />
                </div>


        </>
    );
};

export default DashboardDrawer;