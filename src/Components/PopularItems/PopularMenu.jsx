import MenuHeaderTitle from "../MenuHeaderTitle/MenuHeaderTitle";
import MenuItem from "../MenuItem/MenuItem";
import Container from "../Container/Container";
import MenuHeaderCover from "../MenuHeaderCover/MenuHeaderCover";
import chefServiceImage from '../../assets/home/chef-service.jpg'
import LinkButton from "../LinkButton/LinkButton";
import useMenuCategory from "../../Hooks/useMenuCategory";



const PopularItems = () => {
    const {popular} = useMenuCategory()

    return (
        <>
        <div className="my-28 ">

        <MenuHeaderCover imageURL={chefServiceImage} imageHeight={'450'} title={'Bistro Boss'} subtitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'} textSize={'text-lg'} />
        </div>

        <Container>
            <div >

            </div>
        <div className="mb-12">
            <MenuHeaderTitle title={'FROM OUR MENU'} subtitle={'---Check it out---'}/>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
            {
                popular?.map((item, index)=> <MenuItem key={index} item={item} />)
            }
        </div>
        <div className='w-fit mx-auto mt-4'>

        <LinkButton title={'View Full  Menu'} path={'menu'} />
        </div>
        </Container>
        </>
    );
};

export default PopularItems;