import { MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import useAuth from '../../hooks/useAuth';

function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { logOut, user } = useAuth();
    const [changeHeader, setChangeHeader] = useState(false);

    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader);

    return (
        <header className={changeHeader ? "w-full fixed top-0 left-0 shadow-md z-50" : "w-full fixed top-0 left-0 z-50"}>
            <nav className="md:flex items-center justify-between bg-white py-4 xl:px-52 md:px-20 px-7">
                <div>
                    <a className="cursor-pointer" href="/">
                        <img className="h-12" src={logo} alt="logo" />
                    </a>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="h-6 w-6 absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {open ? <XIcon /> : <MenuIcon />}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 border-t-[1px] border-rose-600 md:border-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
                        open ? 'top-20 ' : 'top-[-490px]'
                    }`}
                >
                    <li className="md:ml-8 text-lg md:my-0 my-7">
                        <a
                            className="relative hover:text-rose-600 duration-500"
                            href="/cart"
                        >
                            <span className="bg-primary w-4 h-4 p-2.5 text-xs rounded-full flex items-center justify-center text-white poppins absolute md:-right-3 md:-top-2 left-5 -top-1.5">
                                5
                            </span>
                            <ShoppingCartIcon className="h-5 w-5 text-slate-900" />
                        </a>
                    </li>

                    <li className="md:ml-10 text-lg md:my-0 my-7">
                        {user?.email ? (
                            <span
                                className="text-slate-900 font-medium hover:text-rose-600 duration-500"
                            >
                                {user?.displayName}
                            </span>
                        ) : (
                            <a
                                className="text-slate-900 font-medium hover:text-rose-600 duration-500"
                                href="/login"
                            >
                                Login
                            </a>
                        )}
                    </li>

                    {!user?.email ? (
                        <button
                            type="submit"
                            onClick={() => navigate('/signup')}
                            className="bg-primary font-medium md:ml-8 px-6 py-3 text-white poppins rounded-full focus:outline-none  transform transition duration-700 hover:scale-105"
                        >
                            Sign Up
                        </button>
                    ) : (
                        <button
                            type="submit"
                            onClick={logOut}
                            className="bg-primary font-medium md:ml-8 px-6 py-3 text-white poppins rounded-full focus:outline-none  transform transition duration-700 hover:scale-105"
                        >
                            Log Out
                        </button>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
