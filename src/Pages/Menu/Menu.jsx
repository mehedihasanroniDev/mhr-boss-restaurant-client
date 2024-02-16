import MenuBanner from "../../Components/Banner/MenuBanner";
import Helmets from "../../Components/Helmets/Helmets";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import useMenuCategory from "../../Hooks/useMenuCategory";


import dessertsImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const {offereds, desserts, pizza, salad, soups} = useMenuCategory();

    return (
        <>
        <Helmets title={'Menu'} />
        <MenuBanner/>


        {/* TODAY'S OFFER */}
        <MenuCategory items={offereds} title={"TODAY'S OFFER"} subTitle={"---Don't miss---"} category={'offereds'} />

        {/* desserts */}
        <MenuCategory items={desserts} coverImage={dessertsImage} title={"desserts"} category={'desserts'} />

        {/* pizza */}
        <MenuCategory items={pizza} coverImage={pizzaImage} title={"pizza"} category={'pizza'} />

        {/* salads */}
        <MenuCategory items={salad} coverImage={saladImage} title={"salads"} category={'salad'} />

        {/* soups */}
        <MenuCategory items={soups} coverImage={soupImage} title={"soups"} category={'soups'}  />

        </>
    );
};

export default Menu;