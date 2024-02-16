
import Greetings from "../../Greetings/Greetings";
import Clock from "../../Clock/Clock";
import useAuth from "../../../Hooks/useAuth";
import Container from "../../Container/Container";
import Marquee from "react-fast-marquee";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";




const MiniNavbar = ({scrollColor}) => {

    const {user} = useAuth()
    return (
        <>
        {
         user &&
            <div className={`sticky top-0 text-white z-20 w-full  bg-[#1B2024]  text-sm md:h-[40px] duration-1000 ${scrollColor ? 'hidden' : 'block'}`}>
            <Container>
                <div className="flex justify-between items-center flex-row">

                    <div className=" font-medium">
                        <h1>Hello, <Greetings/>! </h1>
                        <Clock/>
                    </div>


                    <div className="uppercase font-cinzel text-[#EEFF25] w-[30%]">
                        <Marquee>
                            <h1 className="ml-3 mr-1">Welcome </h1>

                            <span>

                            {user.displayName}
                            </span>


                        </Marquee>
                    </div>

                    <div>


                    <div className="flex gap-3 text-xl mt-1">
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

                    <h1 className="text-xs text-center ">mhr.boss@gmail.com</h1>
                    </div>
                </div>


            </Container>
            </div>
        }
        </>
    );
};

export default MiniNavbar;