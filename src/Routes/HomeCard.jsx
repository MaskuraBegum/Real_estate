import Facility from "./Facility";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const HomeCard = ({category}) => {

    const {image,estate_title,id,segment_name,description,area,location,price,status,facilities,button_text} = category;
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
            <div className="card bg-base-100 shadow-xl relative h-[780px] space-y-4 " >
                <figure><img src={image} alt="Shoes" className="w-full h-[250px]" /></figure>
                <p className="absolute rounded-r-full bg-green-500 text-xl px-6 py-2 border-2">{status}</p>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <div className="flex items-center justify-between gap-20">
                        <p className="badge badge-accent badge-outline">Id No: {id}</p>
                        <p className="badge badge-accent badge-outline">Segment: {segment_name}</p>
                    </div>
                    <hr className="border-dashed text-sm border-gray-300 my-4"/>
                    <p className="text-sm">{description}</p>
                    <hr className="border-dashed text-sm border-gray-300 my-4"/>
                    <div className="flex flex-row-reverse justify-between items-center gap-2 text-md">
                        <p className=" badge  bg-green-100 py-4"> price: {price}</p>
                        <p className=" badge bg-green-100 py-4 ">{location}</p>
                    </div>
                    <ul className="pl-8">
                    {
                        facilities.map((facility,idx) =><Facility key={idx} facility={facility}></Facility> )
                    }
                    </ul>
                    <div>
                        <p><span className='font-medium'>Area:</span> {area}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-500 text-white">{button_text}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;