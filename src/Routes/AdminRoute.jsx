// import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
// import useAuth from "../Hooks/useAuth";
//
// const AdminRoute = ({children}) => {
//     const {user, loading} = useAuth()
//     const [isAdmin, isAdminLoading] = useAdmin();
//     const location = useLocation();
//
//     if(loading || isAdminLoading) {
//         return <progress className="progress w-56"></progress>
//     }
//
//     if(user?.email && isAdmin){
//         return children;
//     }
//
//     return <Navigate to="/login" state={{from: location}} replace></Navigate>;
//
// };
//
// export default AdminRoute;

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import loaderImage from '../assets/others/loader3.gif'



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="h-screen flex justify-center items-center bg-white">
        <img src={loaderImage} className=" " alt="" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;