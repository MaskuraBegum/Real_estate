import 'animate.css';
import { useContext } from 'react';
import { ProviderContext } from '../provider/Provider';
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import {useLocation,useNavigate} from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';



const Login = () => {
    const { singIn, googleLogin, githubLogin,show,setshow } = useContext(ProviderContext)
    const location = useLocation()
    const navigate = useNavigate()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        singIn(email, password)
            .then(result => {
                console.log(result);
                toast('Successfully logged in');
                navigate(location?.state  ? location.state :'/')
            })
            .catch(error => {
                toast(error.message)
            })

    }

    const googleClick = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                toast('Successfully logged in');
                navigate(location?.state  ? location.state :'/')
            })
            .catch(error => {
                toast(error.message)
            })
    }
    const githubClick = () => {
        githubLogin()
        .then(result =>{
            console.log(result)
            toast('Successfully logged in');
        })
        .catch(error =>{
            toast(error.message)
        })
    }
    return (
        <div>
            <Helmet>
                <title>RoyalNest | LogIn</title>
            </Helmet>
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-4xl font-medium animate__animated animate__heartBeat" ><span className="text-green-800">LogIn</span> now!!</h1>
            </div>
            <div className="hero bg-fixed mt-10 mb-10 " style={{ backgroundImage: 'url(https://i.ibb.co/2vXjhvQ/amarna-resort-pool-ocean-views-1750x1000-jpg.webp)' }}>
                <div className="w-[320px] lg:w-[650px] p-2 lg:p-6 " >
                    <div className="hero-content ">
                        <div className="card  w-full max-w-md shadow-2xl bg-gray-200 opacity-90   ">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body -mb-8">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                                    {errors.email && <span className='text-red-500'>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? 'text':'password'} placeholder="password" className="input input-bordered"
                                        {...register("password", { required: true })}
                                        required />
                                    {errors.password && <span className='text-red-500'>This field is required</span>}
                                    <span className='absolute left-52 lg:left-96 bottom-80 top-44' onClick={()=>setshow(!show)}>
                                        {
                                            show? <FaRegEyeSlash />:<FaRegEye />
                                        }
                                    </span>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">logIn</button>
                                </div>
                                <div className='flex gap-4'>
                                    <hr className=' border-2 border-dashed ' />
                                    <p className='divider'>Or Login With</p>
                                    <hr className='border-dotted border-2' />
                                </div>
                                

                            </form>
                            <div className='space-y-4 mb-8'>
                            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                                    <div>
                                        <button onClick={googleClick} className='flex items-center btn btn-primary'>Login with <FaGoogle /></button>
                                    </div>
                                    <div>
                                        <button onClick={githubClick} className='flex items-center btn btn-primary'>Login with <FaGithub /></button>
                                    </div>
                                </div>
                            <div className='text-center '>
                                <p>Do not have account?<br /> Please <Link to='/register'><span className='text-blue-500 font-medium'>Register</span></Link></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;