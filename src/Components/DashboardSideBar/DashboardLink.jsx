import { NavLink } from "react-router-dom";

import './DashboardSideBarLink.css'

const DashboardLink = ({name, pathName,icon}) => {
    return (
        <>


        <NavLink
        to={`/${pathName}`}

        className={({ isActive, isPending }) =>
        isPending ? "pending" :isActive ?
         "flex items-center mb-5  font-semibold hover:text-white duration-300 text-[#FFFFFF] font-cinzel text-base"
         :
         "text-blacks text-base flex items-center mb-5  font-medium hover:text-white duration-300 font-cinzel"
        }
        >
            <div className="pr-3 text-[26px]">{icon}</div>
            <h1>{name}</h1>
        </NavLink>

        {/* <NavLink to={`/${pathName}`} >
            <div className="text-blacks flex items-center mb-6 font-cinzel font-medium hover:text-white duration-300">
            <div className="mr-3">{icon}</div>
            <h1>{name}</h1>
            </div>
        </NavLink> */}
        {/* <NavLink to={`/${pathName}`} >
            <div className="text-blacks flex items-center mb-6 font-cinzel font-medium hover:text-white duration-300">
            <div className="mr-3">{icon}</div>
            <h1>{name}</h1>
            </div>
        </NavLink> */}
        </>
    );
};

export default DashboardLink;