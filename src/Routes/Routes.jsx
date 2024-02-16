import { createBrowserRouter } from "react-router-dom";
// import ErrorMegases from "../Pages/ErrorMegases/ErrorMegases";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Oder from "../Pages/Oder/Oder";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Main from "../Layouts/main";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import PrivetRoute from "./PrivetRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./adminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import MenuDetails from "../Pages/MenuDetails/FoodDetails";
import PrivateRoute from "./PrivetRoute";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";
import ErrorMegases from "../Pages/ErrorMegases/ErrorMegases";


const Routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorMegases/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/menu',
                element:<Menu/>
            },
            {
                path: '/foodDetails/:id',
                element: <PrivateRoute> <MenuDetails/></PrivateRoute>,
            },
            {
                path:'/oder/:category',
                element:<Oder/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signUp',
                element:<SignUp/>
            }

        ]

    },
    {
        path:'/dashboard',
        element:<PrivetRoute><Dashboard/></PrivetRoute>,
        children:[
            // normal user use
            {
                path:'userHome',
                element:<UserHome/>
            },
            {
                path:'cart',
                element: <Cart/>
            },
            {
                path:'payment',
                element:<Payment/>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistory/>
            },
            {
                path:'addReview',
                element:<AddReview/>
            },
            // only admin use routes
            {
                path:'adminHome',
                element:<AdminRoute><AdminHome/></AdminRoute>
            },
            {
                path:'addItem',
                element: <AdminRoute><AddItem/></AdminRoute>

            },
            {
                path:'manageItems',
                element:<AdminRoute><ManageItems/></AdminRoute>
            },
            {
                path:'manageBookings',
                element:<AdminRoute><ManageBookings/></AdminRoute>
            },
            {
                path:'updateItem/:id',
                element: <AdminRoute><UpdateItem/></AdminRoute>,
            },
            {
                path:'allUsers',
                element: <AdminRoute><AllUsers/></AdminRoute>
            }
        ]
    }
])

export default Routes;