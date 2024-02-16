// import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
//
//
// const axiosSecure = axios.create({
//     baseURL: 'https://mhr-boss-restaurnt.vercel.app'
// })
//
// const useAxiosSecure = () => {
//     const navigate = useNavigate()
//     const {logOut} = useAuth()
//     axiosSecure.interceptors.request.use(function(config){
//         const token = localStorage.getItem('access-token')
//         config.headers.authorization = `Bearer ${token}`;
//         return config
//     }, function(error){
//         return Promise.reject(error)
//     }
//     )
//
//     // interceptors 401 and 403 status
//     axiosSecure.interceptors.response.use((response)=>{
//         return response
//     }, async(error)=>{
//         const status = error?.response?.status;
//         if(status === 401 || status === 403){
//             await logOut();
//             navigate('/')
//         }
//         return Promise.reject(error)
//     }
//     )
//     return axiosSecure
// };
//
// export default useAxiosSecure;
//
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
//
// const axiosSecure = axios.create({
//     baseURL: 'https://mhr-boss-restaurnt.vercel.app'
// });
//
// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const { logOut } = useAuth();
//
//     useEffect(() => {
//         const interceptors = axiosSecure.interceptors;
//
//         // Request interceptor
//         interceptors.request.use(function (config) {
//             const token = localStorage.getItem('access-token');
//             config.headers.authorization = `Bearer ${token}`;
//             return config;
//         }, function (error) {
//             return Promise.reject(error);
//         });
//
//         // Response interceptor
//         interceptors.response.use(
//             function (response) {
//                 return response;
//             },
//             async function (error) {
//                 const status = error?.response?.status;
//                 if (status === 401 || status === 403) {
//                     await logOut();
//                     navigate('/');
//                 }
//                 return Promise.reject(error);
//             }
//         );
//
//         // Clean up interceptors
//         return () => {
//             interceptors.request.eject();
//             interceptors.response.eject();
//         };
//     }, [logOut, navigate]);
//
//     return axiosSecure;
// };
//
// export default useAxiosSecure;

import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'https://mhr-boss-restaurnt.vercel.app'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    useEffect(() => {
        const interceptors = axiosSecure.interceptors;
        let timeoutId;

        // Request interceptor
        interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // Response interceptor
        interceptors.response.use(
            function (response) {
                return response;
            },
            async function (error) {
                const status = error?.response?.status;
                if (status === 401 || status === 403) {
                    await logOut();
                    // Debounce the navigation
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout(() => {
                        navigate('/');
                    }, 500); // Adjust the debounce delay as needed
                }
                return Promise.reject(error);
            }
        );

        // Clean up interceptors
        return () => {
            interceptors.request.eject();
            interceptors.response.eject();
        };
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;
