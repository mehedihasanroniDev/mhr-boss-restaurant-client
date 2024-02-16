import { VscGithub } from "react-icons/vsc";
import { FaGoogle } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const SocileMediaLogin = () => {
    const {googleLogin, gitHubLogin, } = useAuth()
    const location = useLocation()
    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const axiosSecure = useAxiosSecure()


    const handleSocailMediaLogin = (media)=>{
        media().then( async(res)=> {
            const userInfo = {
                name: res.user.displayName,
                email: res.user.email,
                emailVerified: res.user.emailVerified
            }

            toast.success('User logged in successfully');
            Navigate(from, { replace: true });

            // Save user info to database
            await axiosSecure.post('/users', userInfo)

        })
        .catch(() => {
            toast.error('Login closed! Try Again Login.')
            return false
        })
    }

    return (
        <>
        <div className="flex gap-12 text-[#444] text-4xl">
            <div className="w-fit cursor-pointer duration-100 hover:text-fromBg"
             onClick={()=> handleSocailMediaLogin(gitHubLogin) }
            ><VscGithub/></div>
            <div className="w-fit cursor-pointer duration-100 hover:text-fromBg"
            onClick={()=> handleSocailMediaLogin(googleLogin)}
            ><FaGoogle/></div>
            <div className="w-fit cursor-pointer duration-100 hover:text-fromBg"
            onClick={()=> handleSocailMediaLogin(googleLogin)}
            ><CiFacebook/></div>
        </div>
        </>
    );
};

export default SocileMediaLogin;