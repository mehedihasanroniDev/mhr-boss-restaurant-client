import { FaTrashAlt,  FaUsers } from "react-icons/fa";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Helmets from "../../../Components/Helmets/Helmets";


const AllUsers = () => {
    const AxiosSecure = useAxiosSecure();

    const {data: users = [], refetch}= useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res = await AxiosSecure.get('/users')
            return res.data
        }
    })

    const handleAddUserAdmin = async(user)=>{
        try{

            const res = await AxiosSecure.patch(`/users/admin/${user._id}`)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 2000,
                    customClass:{
                        title: 'customMessageStyle'
                    }
                  });
                  refetch()
            }
        }
        catch(error){
            const message = error.message
            Swal.fire({
                position: "top",
                icon: "success",
                title: `${message} added to your cart`,
                customClass: {
                    title: 'custom-title-class'
                }

            });
        }
    }



    const handleDeleteUser = async(user)=>{
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
                const res = await  AxiosSecure.delete(`/users/${user._id}`)
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your user has been deleted.",
                        icon: "success"
                    });
                    refetch()
                }



            }
          });
    }

    return (
        <div className="bg-[#F6F6F6] ">
            <Helmets title={'All Users'} />
        <div className="w-fit hidden mx-auto">

        <MenuHeaderTitle title={'MANAGE ALL USERS'} subtitle={'---How many?---'} />
        </div>

        <div className="my-16  bg-white p-6 lg:p-12 ">
            <div className="text-xl lg:text-3xl font-bold text-blacks font-cinzel ">
                <h1>Total users: {users?.length < 10 ? `0${users?.length}` : users?.length}</h1>
            </div>

            {users.length ?

            <div className="">



            <div className="">
            <table className=" table mt-8 ">
                {/* head */}
                <thead className=" bg-fromBg text-base text-white font-semibold uppercase  ">
                <tr >
                    <th className="text-blacks">
                    #
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>ACTION</th>
                </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, index)=>
                        <tr key={index} className="text-base text-grayBlack font-normal">
                        <th className="text-blacks">
                        {index < 9 ? `0${index +1}`: index+ 1}

                        </th>


                        <td className="table-cell whitespace-nowrap">
                        {user.name}
                        </td>
                        <td className="table-cell whitespace-nowrap">{user.email}</td>
                        <th className="table-cell whitespace-nowrap">
                        {
                            user?.role === 'admin' ?
                            'Admin'
                            :
                            <button
                            onClick={()=>handleAddUserAdmin(user)}
                            className="text-xl p-3 rounded-md bg-fromBg hover:bg-[#e9a033] duration-300 text-white cursor-pointer"><FaUsers/></button>
                        }
                        </th>
                        <th>
                        <button
                        onClick={()=>handleDeleteUser(user)}
                        className="text-xl p-3 rounded-md bg-red hover:bg-rose-700 duration-300 text-white cursor-pointer"><FaTrashAlt/></button>
                        </th>
                    </tr>
                        )
                    }



                </tbody>


            </table>
            </div>
            </div>

            :
            ""
            }

        </div>

        </div>
    );
};

export default AllUsers;