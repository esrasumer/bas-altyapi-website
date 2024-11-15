"use client"

import React, { useState } from 'react'
// import basLogo from '../../../public/assets/basAltYapiLogo.gif'
import basLogo from '../../../public/assets/ag.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import NavbarMenu from './NavbarMenu'
import Link from 'next/link';
import Image from 'next/image';
import './style.css';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div
        className='container'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image
                        src={basLogo}
                        alt='/'
                        width='300'
                        height='300'
                        className='basLogoContiner cursor-pointer'
                    />
                </Link>
                <div
                    className='menuLogo'
                    onClick={handleNav}
                >
                    <RxHamburgerMenu size={25} />
                </div>
                <NavbarMenu />
            </div>
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        {/* <Link href='/'>
                                <Image
                                    src={basLogo}
                                    width='87'
                                    height='35'
                                    alt='/'
                                />
                        </Link> */}
                        <div className='flex w-full items-center'>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer'
                            >
                                <RiCloseLargeFill />
                            </div>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Skills
                                </li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Projects
                                </li>
                            </Link>
                            <Link href='/resume'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Resume
                                </li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;