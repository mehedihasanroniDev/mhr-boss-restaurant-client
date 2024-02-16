import { twMerge } from "tailwind-merge";

const BackgroundImage = ({imageURL, children, className}) => {
    return (
        <>
            <div className={twMerge('h-[700px]', className)}
            style={
            {
                backgroundImage: `url(${imageURL})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }>{children}</div>
        </>
    );
};

export default BackgroundImage;