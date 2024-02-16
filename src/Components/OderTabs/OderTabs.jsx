import FoodCard from "../FoodCard/FoodCard";

const OderTabs = ({items}) => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0 mt-12">
            {
                items?.map((item, index)=> <FoodCard key={index} item={item} />)
            }
        </div>
        </>
    );
};

export default OderTabs;