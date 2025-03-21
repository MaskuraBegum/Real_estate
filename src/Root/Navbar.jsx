import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProviderContext } from "../provider/Provider";



const Navbar = () => {
    const { user, setUser, logOut } = useContext(ProviderContext)

    const logingOut = () => {
        setUser(null)
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/update'>Update profile</NavLink></li>
        <li><NavLink to='/profile'>User profile</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>

        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">RoyalNest</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {
                    // console.log(user.displayName)
                }
                {


                    user ?
                        <div className="navbar-end">


                            <div className="tooltip  tooltip-left"  data-tip={user && `Name: ${user.displayName}\n Email:${user.email}`} >
                                <button className=" btn-ghost rounded-3xl"><img src={user && user.photoURL} alt="nai kichu" className="w-10 h-10 rounded-full" /></button>
                            </div>

                            < button onClick={logingOut}><span className="btn ml-4  bg-green-400">Log Out</span></button>

                        </div> :
                        <div className="navbar-end">

                            <Link to='/login'><span className="btn ml-4 bg-green-400">Login</span></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;