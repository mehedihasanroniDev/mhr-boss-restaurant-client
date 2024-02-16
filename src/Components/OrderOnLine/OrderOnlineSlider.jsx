
const Slider = ({firstLetter, title, image}) => {
    return (
        <div className='relative w-fit -z-40'>

        <img src={image} alt=""  />
        <h1 className='absolute bottom-4 left-3 lg:left-[32%] font-cinzel text-xl lg:text-3xl  font-normal text-white uppercase first-letter'>
           <span className='lg:text-4xl text-2xl'>{firstLetter}</span>{title}
           </h1>
        </div>
    );
};

export default Slider;