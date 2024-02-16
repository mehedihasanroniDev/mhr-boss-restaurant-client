import { useForm } from "react-hook-form"

import loginImage2 from '../../assets/others/authentication2.png'
import { Link, useNavigate } from "react-router-dom";
import SocileMediaLogin from "../../Components/SocileMediaLogin/SocileMediaLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useState } from "react";
import {  IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

import './signUp.css'
import Helmets from "../../Components/Helmets/Helmets";


const image_API_KEY = 'f821e1735598bbd9ff2a449a6b05d661'
const image_Hosting_Url = `https://api.imgbb.com/1/upload?key=${image_API_KEY}`

const SignUp = () => {
    const Navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

     const [showPassword, setShowPassword] = useState(false)
    const {createUser} = useAuth()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = async(data) =>{
        const name = data.name;
        const email = data.email
        const password = data.password
        const imageFile = {image : data.photo[0]}


        const toastId = toast.loading('Loading...')

        try{
            const resImage = await axios.post(image_Hosting_Url, imageFile, {
                headers:{
                    "content-type": "multipart/form-data",
                }
            })
            if(resImage.data.success){
            const resUser = await createUser(email, password)
            const user = resUser.user;
            updateProfile(user,{
                displayName: name,
                photoURL: resImage.data.data.display_url
            })
            const userInfo = {
                name: name,
                email: email,
                emailVerified:  resUser.user.emailVerified
            }
            Navigate('/')
            await axiosPublic.post('/users', userInfo )

           await sendEmailVerification(user)

            toast.success('Successfully...', {id: toastId})
            Swal.fire({
                title: "SignUp Successfully!",
                text: "Chack your email and verify Email!",
                icon: "success"
                });
            }

        }catch(error){
            toast.error(`${error}`, {id: toastId})
        }

      }

      return (
        <div  className={'h-fit  p-[25px] lg:p-32 bgImage'}>
        <Helmets title={'Sign Up'} />
        <div className={'h-fit  shadow-custom bgImage'}>

            <div className="flex items-center flex-col lg:flex-row-reverse p-10 ">
                <div className="flex-auto mt-6 lg:mt-0">
                    <img src={loginImage2} alt="MHR BOSS" className="lg:w-[648px]"/>
                    <Link to={'/'}>
                    <button className="flex justify-center btn4 mx-auto mt-5 items-center py-2 px-8">GO HOME</button>
                    </Link>
                </div>

                <div className="pl-0 lg:pl-10 w-full lg:w-[65%] flex-auto mt-16 md:mt-0">
                    <h1 className="text-center text-blacks font-bold text-[40px] mb-4">Sign Up</h1>

                <form  onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Feild */}
                    <div className="mb-6">
                        <label htmlFor="name" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Name:</label>
                        <input placeholder='Enter your name' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="name" type="text" {...register('name', {required: true})} />
                        {errors.name && <span className="text-yellow text-base font-semibold mt-1">This Name is <span className="text-base font-bold">Required.</span></span>}
                    </div>

                    {/* Email Feild */}
                    <div className="mb-6">
                        <label htmlFor="email" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Email:</label>
                        <input placeholder='Enter your email address' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="email" type="email" {...register('email', {required: true})} />
                        {errors.email && <span className="text-yellow text-base font-semibold mt-1">This Emsil is <span className="text-base font-bold">Required.</span></span>}
                    </div>


                    {/* Password Feild */}
                    <div className="mb-6">
                        <label htmlFor="password" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Password:</label>
                        <div className="relative">

                        <input placeholder='Enter your password' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" type={`${showPassword ? 'text' :'password'}`} id="password" {...register('password', {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} />
                        <label htmlFor="password"  onClick={()=> setShowPassword(!showPassword)} className="text-2xl absolute right-3 top-3 w-fit  cursor-pointer text-titleGrey">
                        {
                            showPassword ?

                            <IoEyeOffOutline/>
                            :
                            <IoEyeOutline/>
                        }
                        </label>

                        </div>

                        {errors.password?.type === 'required'     && <span className="text-yellow text-base font-semibold mt-1">This Password is <span className="text-base font-bold">Required.</span></span>}

                        {errors.password?.type === 'minLength' && <span className="text-yellow text-base font-semibold mt-1">Password must be 8 characters</span>}

                        {errors.password?.type === 'maxLength' && <span className="text-yellow text-base font-semibold mt-1">Password must be less than 20 characters</span>}

                        {errors.password?.type === 'pattern' && <span className="text-yellow text-base font-semibold mt-1">Password must have one upper case, one lower case, one number and one special characters.</span>}
                    </div>

                    {/* photo Feild */}
                    <div className="mb-6">
                        <label htmlFor="photo" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Photo:</label>
                        <input placeholder='Enter your photo' className="file-input  border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="photo" type="file" {...register('photo', {
                         required: true,
                         pattern: /(\.(jpg|jpeg|png|gif))/
                        // pattern: {
                        //     value: /\.(jpg|jpeg|png|gif)/i,
                        //     message: "Invalid file format. Please upload an image file with extension jpg, jpeg, png, or gif."
                        // }
                        //  pattern: /\.(jpeg|jpg|png|webp)/

                        })} />
                        {errors.photo?.type === 'required' && <span className="text-yellow text-base font-semibold mt-1">This Photo is <span className="text-base font-bold">Required.</span></span>}

                        {/* {errors.photo && <span className="text-yellow text-base font-semibold mt-1">{errors.photo.message}</span>} */}

                        {errors.photo?.type === 'pattern' && <span className="text-yellow text-base font-semibold mt-1">Invalid file format. Please upload an image file with extension jpg, jpeg, png, or gif.</span>}
                    </div>


                    <input className="input bg-fromBg w-full text-xl text-white" type="submit" value={'Sign In'} />
                </form>

                <div  className="text-xl font-medium  mt-8 mb-14 w-fit mx-auto text-center">
                <h1 className=" font-medium text-fromBg  ">Already registered? <Link to={'/login'} className="font-bold">Go to log in</Link> </h1>
                <p className="mt-4 text-[#444]">Or sign in with</p>
                <div className="mt-8 w-fit mx-auto">
                    <SocileMediaLogin/>

                </div>

                </div>


                </div>
            </div>

        </div>
        </div>
      )
};

export default SignUp;

//
// <div className="mb-6">
// <label htmlFor="email" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Email</label>
// <input placeholder={'Your Email Address'} className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="email" {...register("email")}  />
// {errors.email && <span className="text-yellow text-base font-semibold mt-1">This Emsil is Required</span>}
// </div>