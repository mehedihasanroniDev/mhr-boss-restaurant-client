import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const LinkButton = ({path, title,className }) => {
    return (
        <Link to={`/${path}`} >
            <button className={twMerge("border-b-[3px] rounded-lg border-[#1F2937] py-3 px-7 hover:text-white hover:bg-[#1F2937] duration-500 uppercase text-[#1F2937] text-xl font-normal", className)} >{title}</button>
        </Link>
    );
};

export default LinkButton;