import {useParams,useLoaderData} from 'react-router-dom'
import { FaHouseChimney } from "react-icons/fa6";
import { MdAreaChart } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { PiLineSegmentsBold } from "react-icons/pi";

const Details = () => {
    const views = useLoaderData();
    const {id} = useParams();
    const view = views.find(viewId => viewId.id==id)
    const {estate_title,status,segment_name,large_description,facilities,location,area,price,image} = view;
    return (
        <div>
           <div className="card lg:card-side bg-base-100 shadow-xl gap-10 p-6 items-center my-10 border-t-2 border-green-600 rounded-3xl">
                <figure ><img className='rounded-2xl min-h-[500px] ' src={image} alt="Album" /></figure>
                <div className="card-body w-[900px] ">
                    <div className='  items-center justify-between gap-28'>
                        <h2 className='   text-center text-2xl rounded-2xl font-bold'>{estate_title}</h2>
                        <h2 className="font-medium text-center">Id No: {id}</h2>
                        
                    </div>
                    <p className='flex items-center gap-2'><FaHouseChimney />For {status}</p>
                    <p className='flex items-center gap-2'><PiLineSegmentsBold /><span className='font-medium '>segment:</span> {segment_name}</p>
                    <p className='flex items-center gap-2'><FaMapLocationDot /><span className='font-medium'>location: </span>{location}</p>
                    <p className='flex items-center gap-2'><MdAreaChart /><span className='font-medium'>Area: </span>{area}</p>
                    <p className='flex items-center gap-2'><IoMdPricetag /><span className='font-medium'>price:</span>{price}</p>
                    <hr className='border-1 border-dashed text-sm'/>
                    <p><span className='font-medium'>Description:</span>{large_description}</p>
                    <ul className="pl-8">
                    {
                        facilities.map((facility,idx) => <li key={idx} className="list-disc ">{facility}</li> )
                    }
                    </ul>
                    
                    
                </div>
            </div>

        </div>
    );
};

export default Details;