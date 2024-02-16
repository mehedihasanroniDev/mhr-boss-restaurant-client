import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const email = user?.email


    const {refetch,isLoading,data: cart = []} = useQuery({

    queryKey:['carts', email],
    queryFn: async()=>{
        const res = axiosSecure.get(`/carts/?email=${email}`);
        return (await res).data
    }
    })
    return {cart, refetch, isLoading}
};

export default useCart;
