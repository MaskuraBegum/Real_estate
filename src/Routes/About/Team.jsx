import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
    return (
        <div>
            <div className="flex items-center justify-center text-center my-10">
                <div className="w-[900px] space-y-4">
                    <h1 className="text-4xl font-semibold">Meet Our <span className="text-green-900">team</span></h1>
                    <p className=""> A dedicated group of professionals committed to excellence in luxury real estate. With diverse expertise and a shared passion for delivering exceptional service, our team is here to guide you through every step of your real estate journey.</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-20 my-10">
                <div >
                    <img className="w-72 rounded-2xl hover:w-80" src="https://i.ibb.co/kcJKdFk/360-F-325735908-Tkx-HU7okor9-CTWHBhk-Gfd-Rum-ONWf-IDEb.jpg" alt="" />
                    <h1 className="pl-2 text-2xl font-medium my-2">Josh Long</h1>
                    <p className="pl-2 mb-2">Luxury Property Specialist</p>
                    <div className="pl-2 flex items-center justify-start gap-2 text-green-900 text-2xl">
                        <Link><a><FaFacebook /></a></Link>
                        <Link><a><FaInstagramSquare /></a></Link>
                        <Link><a><FaTwitterSquare /></a></Link>
                    </div>
                </div>
                <div>
                    <img className="w-72  rounded-2xl hover:w-80" src="https://i.ibb.co/2F63pzT/360-F-142201762-q-MCu-IAolgpz4-Nb-F5-T5m66-KQJz-Yzr-Eb-Uv.jpg" alt="" />
                    <h1 className="pl-2 text-2xl font-medium my-2">Max David</h1>
                    <p className="pl-2 mb-2">Client Relations Manager</p>
                    <div className="flex items-center justify-start gap-2 text-green-900 text-2xl">
                        <Link><a><FaFacebook /></a></Link>
                        <Link><a><FaInstagramSquare /></a></Link>
                        <Link><a><FaTwitterSquare /></a></Link>
                    </div>
                </div>
                <div>
                    <img className="w-72  rounded-2xl hover:w-80" src="https://i.ibb.co/5x71L2F/istockphoto-1325565779-612x612.jpg" alt="" />
                    <h1 className="pl-2 text-2xl font-medium my-2">Lara Corft</h1>
                    <p className="pl-2 mb-2">Property Concierge</p>
                    <div className="flex items-center justify-start gap-2 text-green-900 text-2xl">
                        <Link><a><FaFacebook /></a></Link>
                        <Link><a><FaInstagramSquare /></a></Link>
                        <Link><a><FaTwitterSquare /></a></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;