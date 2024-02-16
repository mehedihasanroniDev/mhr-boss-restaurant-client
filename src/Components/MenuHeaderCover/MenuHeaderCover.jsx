import { twMerge } from "tailwind-merge";
import Container from "../Container/Container";
import { Parallax } from 'react-parallax';

const MenuHeaderCover = ({imageURL,imageHeight, title, subtitle, className, textSize}) => {
    return (
        <>
        <Parallax
        bgImage={imageURL}
        blur={{ min: -15, max: 15 }}
        bgImageAlt="the Menu"
        strength={-200}
        >

        <div className={`  h-[${imageHeight}px] flex items-center bg-fixed `}
            style={
            {
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
            }>
                <Container>

                <div className={twMerge("bg-white  py-10 px-2 lg:px-16 w-[90%]  lg:w-[75%] mx-auto text-center text-blacks text-4xl", className)}>
                    <h1 className=' font-medium   uppercase font-cinzel mb-1 '>{title}</h1>
                    <p className={` font-normal leading-6 ${textSize}`} >{subtitle}</p>

                </div>
                </Container>
        </div>




    </Parallax>

        </>
    );
};

export default MenuHeaderCover;