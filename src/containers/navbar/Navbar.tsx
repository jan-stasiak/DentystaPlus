import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { RiMenu3Fill, RiCloseLine, RiMenu3Line } from "react-icons/ri";

interface MenuProps {
  onClose: () => void;
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleMenuClose = () => {
        setToggleMenu(false);
    }

    return (
        <div className="flex justify-between items-center px-6 py-2">
            <div className="flex justify-start items-center">
                <div className="mr-6">
                    <img src={logo} alt="logo" className="h-8" />
                </div>
                <div className="text-white upp text-xl my-2">
                    <p>Dentysta+</p>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <p className="mr-4 text-white capitalize"><Link to="/login">Login in</Link></p>
                <button type="button" className="px-4 py-2 text-white font-medium bg-purple-600 rounded-full sm:rounded-lg">
                    <Link to="/signup">Sign Up</Link>
                </button>
                <div className="ml-4 lg:hidden">
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                </div>
            </div>
        </div>
    );
}


export default Navbar;
