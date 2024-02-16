import { useState } from "react";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Helmets from "../../../Components/Helmets/Helmets";

const AddReview = () => {
    const {user} = useAuth()
    const [ratingValue, setRatingValue] = useState(0);
    const axiosSecure = useAxiosSecure()

    const handleUserReview =async(e)=>{
        const toastId = toast.loading('Loading...')
        try{
            e.preventDefault()
            const from = e.target;
            const recipeLike = from.recipeLike.value;
            const suggestion = from.suggestion.value;
            const details = from.details.value;
            const rating = ratingValue;
            const name = user.displayName;
            const authorImage = user.photoURL;
            const email = user.email
             const date = new Date()
            const reviewInfo = {name, authorImage, rating, details, recipeLike, suggestion, email, date}


            const res = await axiosSecure.post('/reviews', reviewInfo)
            if(res.data.insertedId){
                toast.success('Successfully...', {id: toastId})
                Swal.fire({
                    title: "Review Successfully!",
                    text: "Thanks you for rate and review!",
                    icon: "success"
                    });
                setRatingValue(0)
                e.target.reset()
                }
        }catch(error){
            toast.error(`${error}`, {id: toastId})
        }
    }

    return (
        <div className="pb-10">
            <Helmets title={'Add Review'} />
            <div >
                <MenuHeaderTitle title={'GIVE A REVIEW...'} subtitle={'---Sharing is Caring!!!---'}/>
            </div>

            <div >
            <div className=" my-20 bg-base-200 p-5 lg:py-5 lg:px-12 ">
                <form onSubmit={handleUserReview}>
                    <div className="w-fit mx-auto mt-6">
                        <h1 className="text-2xl font-medium  uppercase mb-4 text-center">
                        Rate Us!
                        </h1>
                        <Rating
                            style={{ maxWidth: 210, color:'red' }}
                            value={ratingValue}
                            onChange={setRatingValue}
                            isRequired
                        />
                    </div>
                {/* recipeLike */}
                <div className="mt-10 form-control  font-medium text-blacks">
                    <label htmlFor="recipeLike" className="label label-text text-xl">Which recipe you liked most?</label>
                    <input type="text" name="recipeLike" id="recipeLike" placeholder="Recipe you liked most..." required className="input input-accent  text-lg font-medium" />
                </div>


                {/* Suggestion */}
                <div className="mt-8 form-control  font-medium text-blacks">
                    <label htmlFor="suggestion" className="label label-text text-xl">Do you have any suggestion for us?</label>
                    <input type="text" id="suggestion" name="suggestion" placeholder="Suggestion..." required className="input input-accent  text-lg font-medium" />
                </div>

                {/* Details */}
                <div className="mt-8 form-control  font-medium text-blacks">
                    <label htmlFor="yourReviewDetails" className="label label-text text-xl">Kindly express your care in a short way.</label>
                    <textarea required name="details" id="yourReviewDetails" className="textarea textarea-accent h-32 text-lg font-medium" placeholder="Review in detail">

                    </textarea>
                </div>
                <button className="mt-6 bg-[#1f2937e8] hover:bg-fromBg text-white px-7 rounded-md py-2 text-base font-medium duration-300" type="submit">Submit</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddReview;