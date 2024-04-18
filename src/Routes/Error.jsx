import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center my-10">
            <div>
                <img className="rounded-xl" src="https://i.ibb.co/2dhbNHj/768x385-21.png" alt="" />
                <div className="flex justify-center items-center my-6">
                <Link className="" to='/'><button className="btn bg-blue-400 ">Go to Home page</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;