import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>

        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <div className="bg-[#1F2937] h-[400px] flex justify-center items-center">
                <div className="text-lg space-y-1 text-center">

                <h1 className="mb-6 border-b w-fit mx-auto text-2xl font-cinzel font-semibold">CONTACT US</h1>
                <p>123 ABS Street, Uni 21, Bangladesh</p>
                <p>+88 123456789</p>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>

                </div>
            </div>

            <div className="bg-[#111827] h-[400px]  flex justify-center items-center">
                <div className="text-center">
                    <h1 className="mb-6 border-b w-fit mx-auto text-2xl font-cinzel font-semibold ">Follow US</h1>
                    <p className="text-xl">Join us on social media</p>

                    <div className="flex gap-4 text-4xl mt-4">
                        <a href="https://www.facebook.com/" className="hover:text-yellow   duration-300" target="_blank">
                            <FaFacebook/>
                        </a>

                        <a href="https://twitter.com/" className="hover:text-yellow    duration-300"  target="_blank" >
                            <FaTwitter/>
                        </a>

                        <a href="https://www.linkedin.com/" className="hover:text-yellow    duration-300" target="_blank">
                            <FaLinkedin/>
                        </a>

                        <a href="https://www.youtube.com/" className="hover:text-yellow    duration-300" target="_blank">
                            <FaYoutube/>
                        </a>
                    </div>
                </div>

            </div>

        </div>
            <h1 className="py-4 text-center text-white bg-blacks font-medium leading-9 ">Copyright © CulinaryCloud. All rights reserved.</h1>

        </>
    );
};

export default Footer;