import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import moment from "moment";
import Helmets from "../../../Components/Helmets/Helmets";

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()


    const {data : payments = []} = useQuery({
        queryKey: ['PaymentHistory', user.email],
        queryFn: async()=>{
            const res = await axiosSecure(`/payments/?email=${user.email}`)
            return res.data
        }
    })


//
//     const handleDeleteItem = (id)=>{
//
//
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 axiosSecure.delete(`/carts/${id}`)
//                 .then(data => {
//                     if(data.data.deletedCount > 0){
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your item has been deleted.",
//                             icon: "success"
//                         });
//                         refetch()
//                     }
//                 })
//             }
//           });
//     }




    return (
        <>
        <Helmets title={'Payment History'} />
        <div className="w-fit mx-auto">

        <MenuHeaderTitle className={'uppercase'} title={'Payment History'} subtitle={'---At a Glance!---'} />
        </div>

        <div className="my-16  bg-white p-6 lg:p-12 ">
            <div className="text-xl lg:text-3xl font-bold text-blacks flex flex-col md:flex-row justify-between items-center font-cinzel text-center ">
                <h1>Total Payments: {payments?.length < 9 ? `0${payments?.length}` : payments.length }</h1>

            </div>

            {payments.length ?

            <div >

            <div className="overflow-x-visible mt-8">
            <table className="table w-full table-auto">
                {/* head */}
                <thead className=" bg-fromBg text-base text-white font-semibold uppercase  ">
                <tr>
                    <th className="text-blacks">
                    #
                    </th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>TOTAL PRICE</th>
                    <th>Payment Date</th>
                </tr>
                </thead>

                <tbody>
                {
                payments?.map((payment, index)=>
                <tr key={index} className="text-base text-grayBlack font-normal">
                <th className="text-blacks">
                {index < 9 ? `0${index +1}`: index+ 1}

                </th>
                    <td>
                        {payment.email}
                    </td>
                    <td className="">
                        { payment.status === 'pending' ?
                        <p className="badge badge-warning text-blacks font-semibold">
                            Pending
                        </p>
                        :
                        <p className="badge badge-success text-white font-semibold">
                            Approve
                        </p>
                        }
                    </td>
                    <td>
                        ${payment.price}
                    </td>
                    <td>
                        { moment(payment.date).format("MMMM DD, YYYY, hh:mm A")}
                    </td>
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

        </>
    );
};

export default PaymentHistory;
