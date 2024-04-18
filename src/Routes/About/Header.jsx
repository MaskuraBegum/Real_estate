import { TbEyeSearch } from "react-icons/tb";
import { TbTargetArrow } from "react-icons/tb"

const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/J7Lqqvw/JUn-Ihx-SLp-Ua-Aam-Wa.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex gap-20 items-center justify-around text-left text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold flex items-center gap-2"> <TbTargetArrow className="text-green-500 text-6xl" /><span>Our <span className="text-green-500">Mission</span></span></h1>
                        <p className="mb-5">Our mission is to redefine luxury living by curating exceptional properties that epitomize sophistication, elegance, and unparalleled comfort.</p>
                        
                    </div>
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold  flex items-center gap-2"><TbEyeSearch className="text-green-500 text-6xl" /><span>Our <span className="text-green-500">Vision</span></span></h1>
                        <p className="mb-5 ">Our vision is to set new standards in luxury real estate, creating iconic residences that harmonize opulence with care. We aspire to craft timeless environments .</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;