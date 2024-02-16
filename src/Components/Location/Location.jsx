

const Location = ({icon, title, subTitle, text,}) => {
    return (
        <>
        <div className="border border-[#E8E8E8] bg-[#fff]">
                    <div className=" text-white py-6 text-3xl bg-fromBg">
                        <p className="w-fit mx-auto">{icon}</p>
                    </div>
                    <div className="bg-gray h-[200px] mx-4 mb-4">
                        <h1 className="text-blacks uppercase text-2xl font-medium pt-10">{title}</h1>
                        <p className="text-fromBlack font-normal mt-4">{subTitle}</p>
                        <p className="text-fromBlack font-normal mt-1">{text}</p>

                    </div>

                </div>
        </>
    );
};

export default Location;