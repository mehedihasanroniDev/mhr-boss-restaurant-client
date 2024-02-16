import { useForm } from "react-hook-form"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import loginImage2 from '../../assets/others/authentication2.png'
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './login.css'
import SocileMediaLogin from "../../Components/SocileMediaLogin/SocileMediaLogin";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Helmets from "../../Components/Helmets/Helmets";


const Login = () => {
    const {login} = useAuth()
    const location = useLocation()
    const Navigate = useNavigate()
    const [captchaError, setCaptchaError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const captchaRef = useRef()
    const axiosPublic = useAxiosPublic()

    const from = location.state?.from?.pathname || "/"


    useEffect(()=>{
        loadCaptchaEnginge(6,'#EBECEE','#000',)
    },[])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()



      const onSubmit = async(data) =>{

          try{
            const user_captchValue = captchaRef.current.value
            if(validateCaptcha(user_captchValue)){
                setCaptchaError('')
                const res = await login(data.email, data.password);

                if(res.user.emailVerified){

                    Navigate(from, { replace: true });
                    Swal.fire({
                        title: "Login SuccessFully!",
                        text: `Enjoy the MHR Boss Restaurant`,
                        icon: "success"
                    });

                // update user email Verified
                const email = res.user.email;

                const emailInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    emailVerified: res.user.emailVerified,
                }
                await axiosPublic.put(`/users/?email=${email}`, emailInfo)



                }
                else{
                    Swal.fire({
                        title: "Email not Verify!",
                        text: `Please Verify Your Email`,
                        icon: "error"
                    });

                }


            }else{

                captchaRef.current.value = ""
                setCaptchaError('Text not mach! Type valid text.')

            }
        }
        catch(error){
            const message = error.message
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${message} added to your cart`,
                customClass: {
                    title: 'custom-title-class'
                }

            });
            // Swal.fire({
            // title: "Your account not found!",
            // text: `Please create a new account!`,
            // icon: "error"
            // });


        }
        }

//
//         // Handle reset password and email
//         const [resetEmail, setResetEmail]= useState('')
//         const [resetError, setResetError] = useState('')
//         const emailRef = useRef()
//
//         const handleResetPassword =()=>{
//             console.log(emailRef.current);
//             setResetError('')
//             const emailRegex =  /^[^@]+@[^@]+\.[^@]+$/;
//             if(!emailRegex.test(resetEmail)){
//
//                 setResetError('Your Email not vailed!!')
//                 return
//             }
//
//
//             //  Reset password
//              resetPassword(resetEmail)
//              .then(()=>{
//                  Swal('Change your password', 'Please Chack Your Email', 'success')
//              })
//              .catch((errors)=>{
//                 const error = errors.message
//                 toast.error(error)
//              })
//         }




      return (
        <div className={'h-fit  p-[25px] lg:p-32 bgImage'}>
        <Helmets title={'Login'} />
        <div className={'h-fit  shadow-custom bgImage'}>

            <div className="flex  flex-col lg:flex-row p-10 ">
                <div className="flex-auto lg:mt-32">
                    <img src={loginImage2} alt="MHR BOSS" className="lg:w-[648px]   "  />
                    <Link to={'/'}>
                    <button className="flex justify-center btn4 mx-auto mt-5 items-center py-2 px-8">GO HOME</button>
                    </Link>
                </div>

                <div className="pl-0 lg:pl-10 w-full lg:w-[75%] flex-auto mt-16 md:mt-0">
                    <h1 className="text-center text-blacks font-bold text-[40px] mb-4">Login</h1>


                <form  onSubmit={handleSubmit(onSubmit)}>


                    <div className="mb-6">
                        <label htmlFor="email" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Email</label>
                        <input   placeholder='Your Email Address' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="email" type="email" {...register('email', {required: true})} />
                        {/* {resetError && <span className="text-yellow text-sm font-semibold mt-1">{resetError}</span> } */}
                        {errors.email && <span className="text-yellow text-sm font-semibold mt-1">This Emsil is <span className="text-base font-bold">Required.</span></span>}
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
                        <label className="label">
                        {/* <p href="#" onClick={handleResetPassword} className="label-text-alt link font-semibold  text-[#F75B5F] text-base link-hover">Forgot password?</p> */}
                    </label>
                    </div>

                    {/* check Captch */}
                    <div className="mb-6 w-full">
                    <LoadCanvasTemplate reloadText='Reload text'  />
                    </div>
                    <div className="mb-6">
                        <input type="text" ref={captchaRef} placeholder='Type here text' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold"/>
                        {

                        captchaError &&
                        <span className="text-yellow text-sm font-semibold mt-1">{captchaError}</span>}

                    </div>



                    <input className="input bg-fromBg w-full text-xl text-white mt-2" type="submit" value={'Sign In'} />
                </form>

                <div  className="text-xl font-medium  mt-8 mb-14 w-fit mx-auto text-center">
                <h1 className="text-fromBg">New here? <Link to={'/signUp'} className="font-bold">Create a New Account</Link> </h1>
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

export default Login;
