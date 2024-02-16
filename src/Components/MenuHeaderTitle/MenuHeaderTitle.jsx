import { twMerge } from "tailwind-merge";

const MenuHeaderTitle = ({title, subtitle, className}) => {
    return (
        <div className="lg:w-[425px] w-fit mx-auto text-center font-inter ">

            <p className="font-normal text-xl italic text-yellow">{subtitle}</p>
            <h1 className={twMerge("py-2 border-y-4 border-[#E8E8E8] mt-2 font-normal text-[32px] text-blacks ", className)} >{title}</h1>
        </div>
    );
};

export default MenuHeaderTitle;