import './Navbar.css'
import { CiSearch } from 'react-icons/ci';
import { HiOutlineMenu } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import SearchBar from '../../Utilis/SearchBar/SearchBar';


const Navbar = () => {
    const navLink = [
        { id: 1, name: "Home", to: "" },
        { id: 2, name: "Journals", to: "" },
        { id: 3, name: "Publish", to: "" },
        { id: 4, name: "Research", to: "" },
        { id: 5, name: "About", to: "" },
        { id: 6, name: "Blogs", to: "" },
    ]

    const [isOpen, setIsOpen] = useState(false)
    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])
    return (

        <div className='relative'>

            {/* --big-device-- */}
            <div>
                {/* ---head-nav-start--- */}
                <div className='border-b'>
                    <div className='flex items-center justify-between xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-6'>
                        <div>
                            <h2 className='leading-4 text-[#005581] text-xl font-bold'>WESTREN <br></br><span>Education Group</span></h2>
                        </div>

                        <div className='lg:flex hidden items-center justify-center space-x-4 cursor-pointer text-sm font-medium text-[#4d4c4c]'>
                            <p>Customer Services</p>
                            <p>Log In</p>
                            <p> Register</p>
                            <p>Institutional Access</p>
                        </div>

                        <div className='lg:hidden'>
                            <div className='flex items-center space-x-2 text-2xl'>
                                <div>
                                    <p><CiSearch></CiSearch></p>
                                </div>
                                <div onClick={() => setIsOpen(true)} className='px-2 py-2 cursor-pointer bg-[#005581] text-white duration-300'>
                                    <p><HiOutlineMenu /></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ---head-nav-end--- */}

                {/* ---NavLink-start--- */}
                <div className=''>
                    <div className={`xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 bg-[#E5E5E5] hidden lg:block fixed   w-full duration-300 ${changeColor ? " duration-300 shadow-md" : ""}`}>

                        <div className='flex items-center justify-between'>
                            <div className='flex space-x-8'>
                                {
                                    navLink.map(nav => <li className='list-none flex' key={nav.id}>

                                        <p className='flex items-center space-x-1 font-medium hover:text-[#005581] duration-300 cursor-pointer'>
                                            <span>{nav.name}</span><span className='text-[#005581] font-bold text-lg'>+</span>
                                        </p>

                                    </li>)
                                }
                            </div>

                            <div className='flex items-center justify-center space-x-6'>
                                <p className='text-2xl'><CiSearch></CiSearch></p>
                                <div className='h-full  bg-[#005581] px-6 py-3 text-white relative inline-block hover:bg-[#081839] duration-200 cursor-pointer'>
                                    <button className=''>Published Your Journals</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* ---NavLink-end--- */}
            </div>

            {/* --small-device-- */}
            <div className={`lg:hidden fixed top-0 duration-300 z-10 left-0 w-[100%] 
            h-screen bg-[#000000c7] ${isOpen ? "left-0" : "left-[-100%]"}`}>
                <div className='w-[60%] h-screen bg-[#E5E5E5]'>
                    <div className='bg-[#fff] xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8 flex items-center justify-between'>
                        <h2 className='leading-4 text-[#005581] text-xl font-bold'>WESTREN <br></br><span>Education Group</span></h2>
                        <p onClick={() => setIsOpen(false)} className='text-3xl cursor-pointer'>+</p>
                    </div>


                    <div className=''>
                        {
                            navLink.map(nav => <li className='list-none border-b border-[#b2b2b2] py-2 xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12  flex' key={nav.id}>

                                <p className='flex items-center space-x-1 font-medium hover:text-[#005581] duration-300 cursor-pointer'>
                                    <span>{nav.name}</span><span className='text-[#005581] font-bold text-lg'>+</span>
                                </p>

                            </li>)
                        }
                    </div>

                    <div className='list-none  bg-[#fff] cursor-pointer'>
                        <p className='xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 border-b border-[#b2b2b2] py-2'>Customer Services</p>
                        <p className='xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 border-b border-[#b2b2b2] py-2'>Log In</p>
                        <p className='xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 border-b border-[#b2b2b2] py-2'> Register</p>
                        <p className='xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 border-b border-[#b2b2b2] py-2'>Institutional Access</p>
                        <div className='xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 border-b border-[#b2b2b2] py-2'>
                            <div className='flex items-center space-x-4'>
                                <p>Share:</p>
                                <div className='flex items-center space-x-2 text-sm'>
                                    <a className='px-1 py-1 bg-[#3B5998] text-white hover:bg-[#6894f4] duration-300' href=''><FaFacebookF></FaFacebookF></a>
                                    <a className='px-1 py-1 bg-[#55ACEE] text-white hover:bg-[#6198c1] duration-300' href=''><FaInstagram></FaInstagram></a>
                                    <a className='px-1 py-1 bg-[#007BB5] text-white hover:bg-[#6ec7f0] duration-300' href=''><FaLinkedinIn></FaLinkedinIn></a>
                                    <a className='px-1 py-1 bg-[#BB0000] text-white hover:bg-[#ea5454] duration-300' href=''><FaTwitter></FaTwitter></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Navbar;