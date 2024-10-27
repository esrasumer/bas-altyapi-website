import React from 'react'
import basLogo from '../../public/assets/basAltYapiLogo.gif'
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
                        className='cursor-pointer'
                    />
                </Link>
                <div>
                    <ul className='hidden md:flex linkColor'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Anasayfa</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>Hakkımızda</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Sertfikalar</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#projects'>Projelerimiz</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/resume'>Kariyer</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact'>İletişim</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar;