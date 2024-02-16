import { useForm } from "react-hook-form";
import MenuHeaderTitle from "../../../Components/MenuHeaderTitle/MenuHeaderTitle";
import { GrSend } from "react-icons/gr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Helmets from "../../../Components/Helmets/Helmets";



const image_Hosting_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`

const AddItem = () => {
    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()


      const onSubmit = async(data) =>{

        const imageFile = {image : data.image[0]}


        const toastId = toast.loading('Loading...')

        try{
            const res = await axios.post(image_Hosting_Url, imageFile, {
                headers:{
                    "content-type": "multipart/form-data",
                }
            })

            if(res.data.success){
                const menuItem = {
                    name: data.name,
                    category: data.category,
                    price: parseFloat(data.price),
                    recipe: data.recipe,
                    image: res.data.data.display_url
                }
            const menuRes = await axiosSecure.post('/menu', menuItem  )
            if(menuRes.data.insertedId){
                toast.success('Successfully...', {id: toastId})
                Swal.fire({
                    title: "SignUp Successfully!",
                    text: "Chack your email and verify Email!",
                    icon: "success"
                    });
                }
                reset()
            }



        }catch(error){
            toast.error(`${error}`, {id: toastId})
        }

      }


    return (
        <div className="bg-[#F6F6F6]">
         <Helmets title={'Add Item'} />
         <MenuHeaderTitle title={'ADD AN ITEM'} subtitle="---What's new?---" />

        {/* form */}
        <div className="p-5 lg:p-[88px] bg-white mt-11 h-fit">
        <form  onSubmit={handleSubmit(onSubmit)} >
        {/* Field */}

        <div className="mb-4">
            <label htmlFor="name" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Recipe Name*</label>
            <input placeholder='Enter your name' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="name" type="text" {...register('name', {required: true})} />
            {errors.name && <span className="text-yellow text-sm font-semibold mt-1">This Name is <span className="text-base font-bold">Required.</span></span>}
        </div>


        {/* category */}
        <div className="mb-4">
            <label htmlFor="category" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Category*</label>
            {/* <input placeholder='Enter your name' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="name" type="text" {...register('category', {required: true})} /> */}

            <select  defaultValue={'default'} className="select border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="category" type="text"  {...register('category', {required: true}) }>
            <option  value={'default'} disabled>Category</option>
            <option value={'offereds'}>Offereds</option>
            <option value={'desserts'}>Desserts</option>
            <option value={'pizza'}>Pizza</option>
            <option value={'salad'}>Salad</option>
            <option value={'soups'}>Soups</option>
            <option value={'drinks'}>Drinks</option>
            </select>
            {errors.category && <span className="text-yellow text-sm font-semibold mt-1">This category is <span className="text-base font-bold">Required.</span></span>}
        </div>


        {/* price  */}
        <div className="mb-4 ">
            <label htmlFor="price" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Price*</label>
            <input placeholder='Enter your price' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="price" type="text" {...register('price', {required: true})} />
            {errors.price && <span className="text-yellow text-sm font-semibold mt-1">This price is <span className="text-base font-bold">Required.</span></span>}
        </div>



        {/* recipe Feild */}
        <div className="mb-4 md:col-span-2">
            <label htmlFor="recipe" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Recipe Details*</label>
            <textarea
            placeholder='Write your recipe here' className="textarea border border-[#D0D0D0] w-full h-[250px] text-fromGray text-base font-bold" id="recipe" {...register('recipe', {required: true})}
            >
            </textarea>
            {errors.recipe && <span className="text-yellow text-sm font-semibold mt-1">This recipe is <span className="text-base font-bold">Required.</span></span>}
        </div>

        {/* image Feild */}
        <div className="mb-6">
            <label htmlFor="image" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Image*</label>
            <input placeholder='Enter your image' className="file-input  border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="image" type="file" {...register('image', {
                required: true,
                pattern: /(\.(jpg|jpeg|png|gif))/
            // pattern: {
            //     value: /\.(jpg|jpeg|png|gif)/i,
            //     message: "Invalid file format. Please upload an image file with extension jpg, jpeg, png, or gif."
            // }
            //  pattern: /\.(jpeg|jpg|png|webp)/

            })} />
            {errors.image?.type === 'required' && <span className="text-yellow text-base font-semibold mt-1">This image is <span className="text-base font-bold">Required.</span></span>}

            {/* {errors.image && <span className="text-yellow text-base font-semibold mt-1">{errors.image.message}</span>} */}

            {errors.image?.type === 'pattern' && <span className="text-yellow text-base font-semibold mt-1">Invalid file format. Please upload an image file with extension jpg, jpeg, png, or gif.</span>}
        </div>













        {/* send message button */}
        <div className=" mt-6 mb-1 lg:mb-0">
        <button
        className="input text-center   text-xl text-white mt-2 font-bold flex items-center gap-2" type="submit"  style={{background:' linear-gradient(90deg, #835D23 0%, #B58130 100%)'}}
        >
            Send Message
            <span className="">{<GrSend/>}</span>
        </button>

        </div>

        </form>
        </div>
        </div>
    );
};

export default AddItem;
//
//
// <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
// {/* Name Feild */}
{/* <div className="mb-4">
    <label htmlFor="name" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Name*</label>
    <input placeholder='Enter your name' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="name" type="text" {...register('name', {required: true})} />
    {errors.name && <span className="text-yellow text-sm font-semibold mt-1">This Name is <span className="text-base font-bold">Required.</span></span>}
</div> */}
//
// {/* Email Feild */}
// <div className="mb-4 ">
//     <label htmlFor="email" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Email*</label>
//     <input placeholder='Enter your email' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="email" type="email" {...register('email', {required: true})} />
//     {errors.email && <span className="text-yellow text-sm font-semibold mt-1">This Emsil is <span className="text-base font-bold">Required.</span></span>}
// </div>
//
// {/* phoneNumber Feild */}
// <div className="mb-4 md:col-span-2">
//     <label htmlFor="phoneNumber" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Phone*</label>
//     <input type="number" placeholder='Enter your phone number' className="input border border-[#D0D0D0] w-full text-fromGray text-base font-bold" id="phoneNumber" {...register('phone', {required: true})} />
//     {errors.phone && <span className="text-yellow text-sm font-semibold mt-1">This phone number is <span className="text-base font-bold">Required.</span></span>}
// </div>
//
// {/* message Feild */}
// <div className="mb-4 md:col-span-2">
//     <label htmlFor="message" className="label label-text font-semibold text-xl text-fromBlack mb-2 w-fit">Message*</label>
//     <textarea
//     placeholder='Write your message here' className="textarea border border-[#D0D0D0] w-full h-[250px] text-fromGray text-base font-bold" id="message" {...register('message', {required: true})}
//     >
//     </textarea>
//     {errors.message && <span className="text-yellow text-sm font-semibold mt-1">This message is <span className="text-base font-bold">Required.</span></span>}
// </div>
//
// </div>