import { FaEdit, FaTrashAlt } from "react-icons/fa";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useMenu from "../../../Hooks/useMenu";
import { Link} from "react-router-dom";
import Helmets from "../../../Components/Helmets/Helmets";
import loaderImage from '../../../assets/others/loader3.gif'

const  ManageItems = () => {

    const {menu, refetch, loading} = useMenu()
    const axiosSecure = useAxiosSecure()


    const handleDeleteItem =(item)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch to update the ui
                    refetch();
                }
            }

          });
    }


    if(loading){
        return <div className="h-screen flex justify-center items-center bg-white">
        <img src={loaderImage} className=" " alt="" />
        </div>
    }


    return (
        <>
        <Helmets title={'Manage Items'} />
        <div className="w-fit mx-auto">

        <MenuHeaderTitle title={'MANAGE ALL ITEMS'} subtitle={'---Hurry Up!---'} />
        </div>

        <div className="my-16  bg-white p-6 lg:p-12 ">
            <div className="text-xl lg:text-3xl font-bold text-blacks font-cinzel">
                <h1>Total Items: {menu?.length}</h1>

            </div>

            {menu.length ?

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
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {
                        menu?.map((item, index)=>
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
                            <Link to={`/dashboard/updateItem/${item._id}`}>

                            <button
                            className="text-xl p-3 rounded-md bg-fromBg hover:bg-[#e9a033] duration-300 text-white cursor-pointer"><FaEdit/>
                            </button>
                            </Link>

                        </th>
                        <th>
                            <button
                            onClick={()=>handleDeleteItem(item)}
                            className="text-xl p-3 rounded-md bg-red hover:bg-rose-700 duration-300 text-white cursor-pointer"><FaTrashAlt/>
                            </button>
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

export default  ManageItems;