import Container from "../Container/Container";
import LinkButton from "../LinkButton/LinkButton";
import MenuHeaderCover from "../MenuHeaderCover/MenuHeaderCover";
import MenuHeaderTitle from "../MenuHeaderTitle/MenuHeaderTitle";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({items, coverImage, title, subTitle, category }) => {
    return (
        <div className="my-14">
        {
           coverImage ? <MenuHeaderCover
            imageURL={coverImage}
            imageHeight={'450'}
            title={title}
            subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            className={'bg-[#1515157c] text-white'}
            textSize={'text-xl'}
            />
            :
            <MenuHeaderTitle title={title} subtitle={subTitle} />
        }

        <Container>
            <div className="mt-24">
            <div className="grid lg:grid-cols-2 gap-6">
            {
                items?.map((item, index)=> <MenuItem key={index} item={item} />)
            }
        </div>
            </div>
            <div className="mt-12 mx-auto w-fit">

            <LinkButton title={'ORDER YOUR FAVOURITE FOOD'} path={`oder/${category}`}/>
            </div>
        </Container>
        </div>
    );
};

export default MenuCategory;