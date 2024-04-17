import 'animate.css';
import { useContext } from 'react';
import { ProviderContext } from '../provider/Provider';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';



const Register = () => {
    const { createUser } = useContext(ProviderContext)



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        if (/[A-Z]/.test(password)) {
            if (/[a-z]/.test(password)) {
                if (password.length >= 6) {
                    createUser(email, password)
                        .then(result => {
                            console.log(result);
                        })
                        .catch(error => {
                            console.log(error.message);
                        })
                }
                else{
                    alert('password length must be six')
                }
            }
            else{
                alert('must have lowercase')
            }
        }
        else{
            alert('must have uppercase')
        }


    }

    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-4xl font-medium animate__animated animate__heartBeat" ><span className="text-green-800">Register</span> now!!</h1>
            </div>
            <div className="hero bg-fixed mt-10 mb-10 " style={{ backgroundImage: 'url(https://i.ibb.co/2vXjhvQ/amarna-resort-pool-ocean-views-1750x1000-jpg.webp)' }} >
                <div className=" w-[650px] p-6 " >
                    <div className="hero-content ">
                        <div className="card  w-full max-w-md shadow-2xl bg-gray-200 opacity-90  ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name"
                                        {...register("name", { required: true })}

                                        className="input input-bordered" required />
                                    {errors.name && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" placeholder="Photo url" className="input input-bordered"
                                        {...register("photo", { required: true })} required />
                                    {errors.photo && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered"
                                        {...register("password", { required: true })}
                                        required />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className='text-center'>
                                    <p>Already have account? Please <Link to='/login'><span className='text-blue-500 font-medium'>Login</span></Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;