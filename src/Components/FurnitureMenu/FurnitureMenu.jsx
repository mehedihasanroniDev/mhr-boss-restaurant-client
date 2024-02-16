
import FurnitureImage from '../../assets/home/featured.jpg'
import LinkButton from '../LinkButton/LinkButton';
import MenuHeaderTitle from '../MenuHeaderTitle/MenuHeaderTitle';

const FurnitureMenu = () => {
    return (
        <>
        <div className="hero h-[50 0px] bg-fixed" style={{backgroundImage: `url(${FurnitureImage})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" text-neutral-content py-24">

            <MenuHeaderTitle className={'text-white'} title={'FROM OUR MENU'} subtitle={'---Check it out---'}/>

            <div className='flex flex-col lg:flex-row lg:items-center mt-12 pl-[25px] lg:pl-0'>

                <div className='mr-16 w-fit mx-auto'>
                <img src={FurnitureImage} className='h-[350px] w-fit  ' alt="" />
                </div>

             <div className="max-w-md mt-4 lg:mt-0">
                <h1 className='text-2xl font-medium text-white leading-9'>March 20, 2023</h1>
                <h2 className='text-2xl font-medium text-white uppercase leading-9'>WHERE CAN I GET SOME?</h2>
                <p className='text-xl font-normal text-white leading-8 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <LinkButton title={'Read More'} path={''} className={'border-white text-white hover:border-[#1F2937]'}/>
             </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default FurnitureMenu;