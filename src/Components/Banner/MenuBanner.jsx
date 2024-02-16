import MenuHeaderCover from "../MenuHeaderCover/MenuHeaderCover";

import menuBanner from '../../assets/menu/banner3.jpg'

const MenuBanner = () => {
    return (
        <div className="h-[100vh] overflow-hidden">
        <MenuHeaderCover imageURL={menuBanner} imageHeight={'700'} className={'bg-[#1515157c] text-white text-4xl lg:text-7xl  lg:w-[100%] '} title={'OUR MENU'} subtitle={'Would you like to try a dish?'} textSize={' mt-2 lg:text-2xl text-2xl'} />
        </div>
    );
};

export default MenuBanner;