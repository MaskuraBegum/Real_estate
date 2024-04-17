import { useContext } from "react";
import { ProviderContext } from "../provider/Provider";
import { useForm } from "react-hook-form";

const Update = () => {
    const { updateUserProfile} = useContext(ProviderContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { name, image } = data;
        updateUserProfile(name,image)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message)
            })

    }


    return (
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
                                    <input type="name" placeholder="email" className="input input-bordered" {...register("name", { required: true })} />
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
    );
};

export default Update;