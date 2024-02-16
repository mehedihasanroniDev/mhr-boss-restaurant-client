import MenuHeaderCover from "../MenuHeaderCover/MenuHeaderCover";

import contactImg from '../../assets/contact/banner.jpg'


const ContactBanner = () => {
    return (
        <div className="h-[100vh] overflow-hidden">
        <MenuHeaderCover imageURL={contactImg} imageHeight={'700'} className={'bg-[#1515157c] text-white text-4xl lg:text-7xl  lg:w-[100%] '} title={'CONTACT US'} subtitle={'Would you like to try a dish?'} textSize={' mt-2 lg:text-2xl text-2xl'} />
        </div>
    );
};

export default ContactBanner;