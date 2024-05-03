import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Logout Successfully');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>


    return (
        <div className="navbar h-20 mb-4 relative z-40">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="">
                    <img className="h-16" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    <li>
                        <details>
                            <summary>User</summary>
                            <ul className="p-2 flex flex-col gap-2">
                                {
                                    user ?
                                        <>
                                            <li>
                                                <button onClick={handleLogOut} className="btn btn-sm text-white  bg-primaryColor">LogOut</button>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <Link className="btn btn-sm bg-primaryColor text-white" to="/login">
                                                    <button>
                                                        Login
                                                    </button>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="btn btn-sm bg-primaryColor text-white" to="/signup">
                                                    <button>
                                                        Sign Up
                                                    </button>
                                                </Link>
                                            </li>
                                        </>
                                }

                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle ">
                    <HiOutlineShoppingBag className="h-5 w-5" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <CiSearch className="h-5 w-5" />
                </button>

                <a className="btn btn-outline border-primaryColor hover:border-primaryColor hover:bg-primaryColor hover:text-white ">Appointment
                </a>

            </div>
        </div>
    );
};

export default Navbar;