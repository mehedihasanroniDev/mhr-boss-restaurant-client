import HomeBanner from "../../Components/Banner/HomeBanner";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import ContactNumber from "../../Components/ContactNumber/ContactNumber";
import FurnitureMenu from "../../Components/FurnitureMenu/FurnitureMenu";
import Helmets from "../../Components/Helmets/Helmets";
import OrderOnline from "../../Components/OrderOnLine/OrderOnline";
import PopularItems from "../../Components/PopularItems/PopularMenu";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <>
        <Helmets title={'Home'} />
        <HomeBanner/>
        <OrderOnline/>
        <PopularItems/>
        <ContactNumber/>
        <ChefRecommends/>
        <FurnitureMenu/>
        <Testimonials/>
        </>
    );
};

export default Home;