import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {

    return (
        <footer className="bg-gray-800 py-12">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="md:grid grid-cols-2">
                    <div className="pb-10 md:pb-0">
                        <img className='h-14' src={logo} alt="Hot Onion White Logo"/>
                    </div>

                    {/* footer link widgets  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        <div className="footer-widgets">
                            <ul className="text-white space-y-2">
                                <li className='hover:text-rose-500 transition duration-500'><a href="/about">About Online Food</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/blog">Read Our Blog</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/login">Sign up href deliver</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/add-your-restaurant">Add your restaurant</a></li>
                            </ul>
                        </div>
                        <div className="footer-widgets">
                            <ul className=" text-white space-y-2">
                                <li className='hover:text-rose-500 transition duration-500'><a href="/help">Get Help</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/faq">Read FAQ</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/cities">View All Cities</a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a href="/near-me">Restaurants near me</a></li>
                            </ul>
                        </div>

                        {/* footer social link widgets  */}
                        <div className="footer-widgets">
                            <ul className="flex lg:block justify-between text-white lg:space-y-2">
                                <li className='hover:text-rose-500 transition duration-500'><a className='flex items-center gap-2' href="/facebook"><FaFacebook/> <span className='hidden lg:block'>Facebook</span></a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a className='flex items-center gap-2' href="/instagram"><FaInstagram/> <span className='hidden lg:block'>Instagram</span></a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a className='flex items-center gap-2' href="/twitter"><FaTwitter/> <span className='hidden lg:block'>Twitter</span></a></li>
                                <li className='hover:text-rose-500 transition duration-500'><a className='flex items-center gap-2' href="/youtube"><FaYoutube/><span className='hidden lg:block'>Youtube</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer copyright widgets  */}
                <div className="flex items-center flex-wrap-reverse justify-between pt-24">
                    <div className='mt-6 lg:mt-0'>
                        <span className="text-gray-500">Copyright &copy; 2022 Red Onion Foods. Developed by <span className='text-rose-500'>❤</span> <a className='hover:underline hover:text-green-500' href="https://www.linkedin.com/in/liazul/">Liazul</a></span>
                    </div>

                    <div className=''>
                        <ul className="flex text-white">
                            <li className="hover:text-rose-500 transition duration-500"><a href="/privacy-policy">Privacy Policy</a></li>
                            <li className="hover:text-rose-500 transition duration-500 ml-3"><a href="/terms-of-use">Terms of Use</a></li>
                            <li className="hover:text-rose-500 transition duration-500 ml-3"><a href="/pricing">Pricing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;