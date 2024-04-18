import { useContext } from "react";
import { ProviderContext } from "../provider/Provider";
import { useForm } from "react-hook-form";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Update = () => {
    const { updateUserProfile } = useContext(ProviderContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, image } = data;
        updateUserProfile(name, image)
            .then(result => {
                console.log(result);
                toast('Successfully updated');

            })
            .catch(error => {
                toast(error.message)
            })

    }


    return (
        <div>
            <Helmet><title>RoyalNest | update profile</title></Helmet>
            <h1 className="text-4xl font-medium animate__animated animate__heartBeat text-center my-4" ><span className="text-green-800">Update</span> profile</h1>
            <div className="flex justify-center items-center">
                <div className="card w-[600px] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CvD5QQm/depositphotos-219939730-stock-illustration-handwriting-text-update-concept-meaning.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="card  w-full max-w-md shadow-2xl bg-gray-100 opacity-90   ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-8">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">New User Name</span>
                                    </label>
                                    <input type="name" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">New user image</span>
                                    </label>
                                    <input type="text" placeholder="image" className="input input-bordered"
                                        {...register("image", { required: true })}
                                        required />
                                    {errors.image && <span className='text-red-500'>This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control my-6">
                                    <button className="btn btn-primary">update</button>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default Update;