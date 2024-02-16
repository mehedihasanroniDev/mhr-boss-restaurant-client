import Container from "../Container/Container";
import MenuHeaderTitle from "../MenuHeaderTitle/MenuHeaderTitle";
import useMenuCategory from "../../Hooks/useMenuCategory";
import FoodCard from "../FoodCard/FoodCard";

const ChefRecommends = () => {
    const {offereds} = useMenuCategory()


    return (
        <Container>
            <div className="my-28">
                <MenuHeaderTitle title={'CHEF RECOMMENDS'} subtitle={'---Should Try---'} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0 mt-12">
                    {
                        offereds?.map((item, index)=> <FoodCard key={index} item={item} />)
                    }
                </div>
                </div>

        </Container>
    );
};

export default ChefRecommends;