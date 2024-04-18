import { useParams, useLoaderData } from 'react-router-dom'
import { FaHouseChimney } from "react-icons/fa6";
import { MdAreaChart } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { PiLineSegmentsBold } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const views = useLoaderData();
    const { id } = useParams();
    const view = views.find(viewId => viewId.id == id)

    const { estate_title, status, segment_name, large_description, facilities, location, area, price, image } = view;
    return (
        <div>
            <Helmet><title>RoyalNest | Details</title></Helmet>
            <div className=" bg-base-100 shadow-xl gap-10 py-6 items-center my-10 border-t-2 border-green-600 rounded-3xl px-10">
                <figure ><img className='rounded-2xl max-h-[500px] w-full ' src={image} alt="Album" /></figure>
                <div className="card-body w-full p-12 ">
                    <div className='  items-center justify-between gap-28'>
                        <h2 className='   text-center text-2xl rounded-2xl font-bold'>{estate_title}</h2>
                        <h2 className="font-medium text-center">Id No: {id}</h2>

                    </div >
                    <div className='px-20 p-6 flex justify-between my-8 text-xl text-center items-center '>
                        <div>
                            <p className='flex items-center gap-2 '><FaHouseChimney />For {status}</p>
                            <p className='flex items-center gap-2 '><PiLineSegmentsBold /><span className='font-medium '>segment:</span> {segment_name}</p>
                            <p className='flex items-center gap-2'><FaMapLocationDot /><span className='font-medium'>location: </span>{location}</p>
                            <p className='flex items-center gap-2'><MdAreaChart /><span className='font-medium'>Area: </span>{area}</p>
                            <p className='flex items-center gap-2'><IoMdPricetag /><span className='font-medium'>price:</span>{price}</p>
                        </div>
                        <ul className="pl-8  justify-around items-center text-green-800">
                            {
                                facilities.map((facility, idx) => <li key={idx} className=" flex items-center gap-2"><FaCircleCheck /><span>{facility}</span></li>)
                            }
                        </ul>
                    </div>

                    <hr className='border-1 border-dashed text-sm mb-6 text-center' />
                    <p><span className='font-medium text-xl'>Description: </span>{large_description}</p>




                </div>
            </div>

        </div>
    );
};

export default Details;