import { Link } from "react-router-dom";


const MenuItem = ({item}) => {
    const {name,recipe,image,price, _id} = item || {}
    return (
        <>
        <Link to={`/foodDetails/${_id}`} className=" flex space-x-6"

        >
        <img src={image} alt="" className="w-[100px] h-[100px] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[50%] hover:rounded-tr-none duration-200 hover:rounded-tl-[50%]"/>
        <div>
            <h1 className="text-blacks font-semibold text-xl uppercase">{name}--------------- <span className="text-xl font-normal text-grayYellow">
            ${price}
                </span></h1>
            <p className="text-base  text-grayBlack mt-2">{recipe}</p>
        </div>

        </Link>

        </>

    );
};

export default MenuItem;
