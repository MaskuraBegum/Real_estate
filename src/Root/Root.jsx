import Footer from "./Footer";
import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom'


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;