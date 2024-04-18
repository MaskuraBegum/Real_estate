import { Helmet } from "react-helmet-async";
import Category from "./Category";
import Hader from "./Hader";




const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>RoyalNest | Home</title>
            </Helmet>
            <Hader></Hader>
            <Category></Category>
        </div>
    );
};

export default Home;