import React from 'react'
import basLogo from '../../public/assets/basAltYapiLogo.png'
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <div className='background'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='/'>
                    <Image
                        src={basLogo}
                        alt='/'
                        width='300'
                        height='300'
                        className='cursor-pointer rounded-full'
                    />
                </Link>
                <div>
                    <ul className='hidden md:flex linkColor'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/resume'>Resume</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;