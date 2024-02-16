import React, { useRef, useState } from "react";
import ContactBanner from "../../Components/Banner/ContactBanner";
import Container from "../../Components/Container/Container";
import Location from "../../Components/Location/Location";
import MenuHeaderTitle from "../../Components/MenuHeaderTitle/MenuHeaderTitle";
import ReCAPTCHA from "react-google-recaptcha";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { useForm } from "react-hook-form";
import { GrSend } from "react-icons/gr";
import Helmets from "../../Components/Helmets/Helmets";

const phoneIcon = React.createElement(FaPhoneVolume)
const locationIcon = React.createElement(FaLocationDot)
const watchIcon = React.createElement(MdWatchLater)

const Contact = () => {
    const [captchaValue, setCaptchaValue] = useState('')
    const [captchaError, setCaptchaError] = useState(false)
    const captchRef = useRef()

    const onChange = (value) => {
        setCaptchaValue(value);
      }


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) =>{
          if(captchaValue){

            console.log(data);
            reset()
            captchRef.current.reset()
            setCaptchaError(false)
        }else{
            setCaptchaError(true)
        }
      }

    return (
        <>
        <Helmets title={'Contact'} />
        <ContactBanner/>
        <Container>
            {/* Location */}
        <div className="my-28">
            {/* Location titel*/}
            <MenuHeaderTitle title={'OUR LOCATION'} subtitle={'---Visit Us---'} />
            {/* Location details*/}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">

                <Location icon={phoneIcon} title={'phone'} subTitle={'01784359867'} />

                <Location icon={locationIcon} title={'address'} subTitle={'Road #312, Savar, Dhaka'}/>

                <Location icon={watchIcon} title={'working hours'} subTitle={'Mon - Fri: 08:00 - 22:00'} text={'Sat - Sun: 10:00 - 23:00'}/>

            </div>
        </div>


            {/* Contact form*/}
        <div className="my-28">
            {/* Contact Form*/}
            <MenuHeaderTitle title={'CONTACT FORM'} subtitle={'------Send Us a Message---'} />

            {/* form */}
            <div className="p-5 lg:p-[88px] bg-gray mt-11">
            <form  onSubmit={handleSubmit(onSubmit)} >
                {/* Field */}
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
            {/* Name Feild */}
            <div className="mb-4">
                <label htmlFor="name" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Name*</label>
                <input placeholder='Enter your name' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="name" type="text" {...register('name', {required: true})} />
                {errors.name && <span className="text-yellow text-sm font-semibold mt-1">This Name is <span className="text-base font-bold">Required.</span></span>}
            </div>

            {/* Email Feild */}
            <div className="mb-4 ">
                <label htmlFor="email" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Email*</label>
                <input placeholder='Enter your email' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="email" type="email" {...register('email', {required: true})} />
                {errors.email && <span className="text-yellow text-sm font-semibold mt-1">This Emsil is <span className="text-base font-bold">Required.</span></span>}
            </div>

            {/* phoneNumber Feild */}
            <div className="mb-4 md:col-span-2">
                <label htmlFor="phoneNumber" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Phone*</label>
                <input type="number" placeholder='Enter your phone number' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="phoneNumber" {...register('phone', {required: true})} />
                {errors.phone && <span className="text-yellow text-sm font-semibold mt-1">This phone number is <span className="text-base font-bold">Required.</span></span>}
            </div>

            {/* message Feild */}
            <div className="mb-4 md:col-span-2">
                <label htmlFor="message" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Message*</label>
                <textarea
                placeholder='Write your message here' className="textarea border border-[#D0D0D0] w-full h-[250px] text-fromGray text-base font-bold" id="message" {...register('message', {required: true})}
                >
                </textarea>
                {errors.message && <span className="text-yellow text-sm font-semibold mt-1">This message is <span className="text-base font-bold">Required.</span></span>}
            </div>

            </div>

            <div className={` ${captchaError && 'shadow-custom2' } h-fit w-fit mt-6`}>
            <ReCAPTCHA
                sitekey={`${import.meta.env.VITE_GOOGLE_CAPTCHA_SITEKEY}`}

                onChange={onChange}
                ref={captchRef}
                />
            </div>



            {/* send message button */}
            <div className="w-fit mx-auto mt-16 mb-10 lg:mb-0">
            <button
            className="input text-center   text-xl text-white mt-2 font-bold flex items-center gap-2" type="submit"  style={{background:' linear-gradient(90deg, #835D23 0%, #B58130 100%)'}}
            >
                Send Message
                <span className="">{<GrSend/>}</span>
            </button>

            </div>

            </form>
            </div>

        </div>
        </Container>

        </>
    );
};

export default Contact;