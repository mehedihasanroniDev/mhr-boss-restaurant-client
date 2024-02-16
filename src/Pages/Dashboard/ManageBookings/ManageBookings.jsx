import { useQuery } from "@tanstack/react-query";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import moment from "moment";
import { FaCircleChevronRight } from "react-icons/fa6";
import toast from "react-hot-toast";
import Helmets from "../../../Components/Helmets/Helmets";


const ManageBookings = () => {
    const axiosSecure = useAxiosSecure()

    const {data : bookings = [], refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments-bookings`)
            return res.data
        }
    })

    const handleBookingActivity = async(booking)=>{

        const toastId = toast.loading('Loading')

        const res = await axiosSecure.patch(`/payments-bookings/?id=${booking._id}`)
        if(res.data.modifiedCount > 0){
            toast.success(`Booking Active`, {id: toastId})

            refetch()

        }
    }

    return (
        <>
        <Helmets title={'Manage Bookings'} />
        <div className="mb-10">
            <MenuHeaderTitle title={'MANAGE ALL BOOKINGS'} subtitle={'---At a Glance!---'}/>
        </div>

        <div className="my-16  bg-white p-6 lg:p-12 ">
            <div className="text-xl lg:text-3xl font-bold text-blacks flex flex-col md:flex-row justify-between items-center font-cinzel text-center ">
                <h1>Total Bookings: {bookings?.length < 9 ? `0${bookings?.length}` : bookings.length }</h1>

            </div>

            {bookings.length ?

            <div >

            <div className="overflow-x-visible mt-8">
            <table className="table w-full table-auto">
                {/* head */}
                <thead className=" bg-fromBg text-base text-white font-semibold uppercase  ">
                <tr>
                    <th className="text-blacks">
                    #
                    </th>
                    <th>User Email</th>
                    <th>BOOKING DATE and Time</th>
                    <th>ACTIVITY</th>
                    <th>ACTION</th>
                </tr>
                </thead>

                <tbody>
                {
                bookings?.map((booking, index)=>
                <tr key={index} className="text-base text-grayBlack font-normal">
                <th className="text-blacks">
                {index < 9 ? `0${index +1}`: index+ 1}

                </th>
                    <td>
                        {booking.email}
                    </td>
                    <td>
                        { moment(booking.date).format("MMMM DD, YYYY, hh:mm A")}
                    </td>


                    <td className="">
                        { booking.status === 'pending' ?
                        <p className=" text-yellow font-semibold">
                            Pending
                        </p>
                        :
                        <p className=" text-[#287855] font-semibold">
                            Done
                        </p>
                        }
                    </td>
                    <td>
                    {  booking.status === 'pending' ?
                        <button  onClick={()=>handleBookingActivity(booking)} className="text-[#80E2B7] rotate-90 bg-white text-4xl w-fit rounded-full">
                        <FaCircleChevronRight/>
                         </button>
                        :

                        <button disabled className="text-[#287855] rotate-90 bg-white text-4xl w-fit rounded-full">
                        <FaCircleChevronRight/>
                         </button>
                    }

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

export default ManageBookings;