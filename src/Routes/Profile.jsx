import { useContext } from "react";
import { ProviderContext } from "../provider/Provider";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import 'animate.css';

const Profile = () => {
    const {user} = useContext(ProviderContext);
    
   
    return (
        <div className="w-[600px] mx-auto my-8">
            <h1 className="text-center text-5xl font-medium animate__animated animate__heartBeat my-4" ><span className="text-green-800">User's</span> profile</h1>
            <div className=" card-side bg-base-100 border-b-2 border-l-2 rounded-3xl border-green-600 shadow-xl p-8">
                <figure><img src={user? user.photoURL : 'not found'} alt="Movie" className=" w-[250px] h-[250px] mx-auto rounded-full" /></figure>
                <div className="card-body items-center">
                    <h2 className="card-title flex items-center gap-2"><AiOutlineUser /><span>User Name: </span>{user && user.displayName}</h2>
                    <p className="flex items-center gap-2"><MdOutlineMailOutline /><span>Email: </span>{user && user.email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary my-4">Update your profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;