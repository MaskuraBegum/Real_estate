import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";

const Why = () => {
    return (
        <div>
            <div className="flex items-center justify-center text-center my-10 mt-20">
                <div className="w-[900px] space-y-4">
                    <h1 className="text-4xl font-semibold">Why<span className="text-green-900"> Us?</span></h1>
                    <p className=""> A dedicated group of professionals committed to excellence in luxury real estate. With diverse expertise and a shared passion for delivering exceptional service, our team is here to guide you through every step of your real estate journey.</p>
                </div>
            </div>
            <div className="card flex-col lg:flex-row card-side bg-base-100 shadow-xl">
                <figure><img className="w-[600px] h-full" src="https://i.ibb.co/840mx50/960x0.webp" alt="Movie" /></figure>
                <div className="card-body">
                    <div className="flex flex-col lg:flex-row px-20 pt-10 items-center gap-8">
                        <div className="border-2 border-green-900 p-4 rounded-full"><button className="btn btn-circle btn-outline text-3xl "><FaHome /></button></div>
                        <div className="w-[320px] lg:w-[400px] ">
                            <h1 className="text-xl font-medium">Exclusive access to prestigious luxury properties</h1>
                            <p className="text-md"> As a client, you'll benefit from our extensive network and insider knowledge, gaining access to exclusive listings that are not publicly available.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row px-20 pt-10 items-center gap-8">
                        <div className="border-2 border-green-900 p-4 rounded-full"><button className="btn btn-circle btn-outline text-3xl "><IoPersonSharp /></button></div>
                        <div className="w-[320px] lg:w-[400px] ">
                            <h1 className="text-xl font-medium">Personalized assistance tailored to your unique needs</h1>
                            <p className="text-md"> Our team understands that every client is different, with their own preferences, priorities, and objectives. That's why we take a personalized approach to every interaction, taking the time to listen to your needs, understand your goals, and tailor our assistance accordingly. </p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row px-20 py-10 items-center gap-8">
                        <div className="border-2 border-green-900 p-4 rounded-full"><button className="btn btn-circle btn-outline text-3xl "><BsBuildingsFill /></button></div>
                        <div className="w-[320px] lg:w-[400px] ">
                            <h1 className="text-xl font-medium">Expert Guidance Throughout the Buying or Selling Process</h1>
                            <p className="text-md">  Our team of experienced professionals will be by your side every step of the way, offering expert guidance, valuable insights, and strategic advice to help you make confident decisions and achieve successful outcomes.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Why;