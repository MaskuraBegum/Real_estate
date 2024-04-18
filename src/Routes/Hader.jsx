
import 'animate.css';
import { Link } from 'react-router-dom';

const Hader = () => {
    return (
        <div className='relative  '>
            <div className="carousel w-full h-full lg:h-[480px] rounded-xl my-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/dKcD3Qh/Fessenden-House.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/QpGJpFY/Terricks-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/LYF3k7c/localimagereader.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/nc4Lhk1/Getty-Images-1151832961.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className=" absolute top-32 left-64 p-30 text-center bg-gray-300 opacity-60 rounded-2xl">
                <div className='animate__animated animate__pulse p-12 '>
                    <h1 className="text-7xl text-black font-bold">Indulge in <br /><span className='text-green-900'> Unparalleled Luxury</span></h1>
                    <p className='text-2xl text-black font-semibold'>Explore Our Exclusive Collection of Prestigious Properties</p>
                    <Link to='/about'><button className='px-6 py-4 rounded-xl bg-green-900 my-4 text-white'>Learn About Us</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Hader;