import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const {refetch} = useCart()
    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const {name,recipe,image, price, _id} = item || {}
    const axiosSecure = useAxiosSecure()


    const handleAddToCard = async()=>{
        if(user && user?.email){
            //send cart item to the database
            const cardItem={
                menuId: _id,
                email: user.email,
                name,
                recipe,
                image,
                price
            }
            const res = await axiosSecure.post('/carts', cardItem)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${name} added to your cart`,
                    showConfirmButton: false,
                    timer: 2500,
                    customClass:{
                        title: 'customMessageStyle'
                    }

                });
                // refetch cart to update the cart items count
                refetch();
            }

        }else{

            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //  send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }
    return (
        <>
        <div className="card hover:drop-shadow-2xl duration-500 shadow-lg  rounded-none bg-gray">
        <Link to={`/foodDetails/${_id}`} className="relative">

        <figure className="overflow-hidden">
            <img src={image} alt="MHR Boss" className="h-[250px] cursor-pointer w-full object-cover transform scale-100 transition-transform duration-[1.5s] hover:scale-110" />
        </figure>
            <p className="absolute text-base font-normal text-white bg-blacks -top-[2px] -right-[2px] px-3 py-1 shadow-2xl">$ {price}</p>
        </Link>
        <div className="m-4 p-4   border border-dashed border-[#706c6cbb] card-body  text-center">

        <h2 className="text-lg font-bold  text-blacks ">{name}</h2>
        <p className="text-blacks font-normal text-base  mx-auto leading-6 mb-2 ">{recipe}</p>

        <button className="border-b-[3px]  rounded-lg  px-6 py-3 hover:text-white  duration-500 uppercase   font-normal w-fit mx-auto text-yellow border-yellow bg-[#E8E8E8] hover:bg-[#1F2937] hover:border-[#E8E8E8] text-base"
        onClick={handleAddToCard}
        >
        add to cart
        </button>


        </div>
        </div>

        </>
    );
};

export default FoodCard;
