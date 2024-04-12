import { useLoaderData } from 'react-router-dom'
import HomeCard from './HomeCard';

const Category = () => {
    const categories = useLoaderData();

    return (
        <div>
            <div className='text-center mx-auto w-[800px] mb-8 mt-20'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-medium'>Explore Our Exquisite Estates</h1>
                    <p className=' text-gray-400'>Discover a curated selection of the finest luxury estates, meticulously designed to embody elegance, sophistication, and unparalleled opulence.  </p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    categories.map(category => <HomeCard key={category.id} category={category}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Category;