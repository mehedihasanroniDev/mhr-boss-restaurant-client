import { FaTrashAlt } from "react-icons/fa";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useCart from "../../../Hooks/useCart";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Helmets from "../../../Components/Helmets/Helmets";

const Cart = () => {
    const {cart, refetch} = useCart();
    const axiosSecure = useAxiosSecure()



    const totalPrice = cart?.reduce((total, item) => total + item.price
    ,0);
    const totalPrices = totalPrice.toFixed(2);

    const handleDeleteItem = (id)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                .then(data => {
                    if(data.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    }
                })
            }
          });
    }




    return (
        <>
        <Helmets title={'Cart'} />
        <div className="w-fit mx-auto">

        <MenuHeaderTitle title={'WANNA ADD MORE?'} subtitle={'---My Cart---'} />
        </div>

        <div className="my-16  bg-white p-6  lg:p-12 ">
            <div className="text-xl lg:text-3xl font-bold text-blacks flex flex-col md:flex-row justify-between items-center font-cinzel text-center ">
                <h1>Total orders: {cart?.length}</h1>
                <h1>total price: ${totalPrices}</h1>
                {
                    cart.length > 0 ?
                    <Link to={'/dashboard/payment'}>

                        <button className="bg-fromBg px-4 py-3 rounded-lg text-base lg:text-xl text-white uppercase">Pay</button>
                    </Link>
                    : <p className="opacity-0">No prices</p>
                }
            </div>

            {cart.length ?

            <div >

            <div className="overflow-x-visible mt-8">
            <table className="table w-full table-auto">
                {/* head */}
                <thead className=" bg-fromBg text-base text-white font-semibold uppercase  ">
                <tr>
                    <th className="text-blacks">
                    #
                    </th>
                    <th>ITEM IMAGE</th>
                    <th>ITEM NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {
                        cart?.map((item, index)=>
                        <tr key={index} className="text-base text-grayBlack font-normal">
                        <th className="text-blacks">
                        {index < 9 ? `0${index +1}`: index+ 1}

                        </th>
                        <td>
                        <div className="avatar">
                            <div className="size-[75px] rounded-md">
                                <img src={item.image} alt="MHR BOSS" />
                            </div>
                        </div>
                        </td>

                        <td>
                        {item.name}
                        </td>
                        <td>${item.price}</td>
                        <th>
                        <button
                        onClick={()=>handleDeleteItem(item._id, item.name)}
                        className="text-xl p-3 rounded-md bg-red hover:bg-rose-700 duration-300 text-white cursor-pointer"><FaTrashAlt/></button>
                        </th>
                    </tr>
                        )
                    }

                {/* row 1 */}



                </tbody>


            </table>
        </div>
            </div>
            :
            ""
            }

        </div>

        </>
    );
};

export default Cart;