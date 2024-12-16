'use client'

import React, { useState } from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { CloseOutlined } from '@ant-design/icons'
import NavbarMenu from './NavbarMenu'
import './style.css'
import { NAVBAR_LINKS } from './contants.js'

function Navbar () {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='mb-10'>
      <nav className='navbarContainer flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/' aria-label='Home'>
          {/* <Image
            src='/assets/basaltyapi-Photoroom.png'
            alt='Bas Yapı Logo'
            width={200}
            height={300}
            className='basLogoContiner cursor-pointer'
            priority // SEO için önemli: Sayfa yüklendiğinde logonun öncelikli yüklenmesini sağlar
          /> */}
          LOGO
        </Link>
        <div
          className='menuLogo'
          onClick={handleNav}
          aria-label='Toggle navigation menu'
        >
          <RxHamburgerMenu size={25} />
        </div>
        <NavbarMenu />
      </nav>

      {/* Mobile Menu */}
      
      <div
  className={`${
    nav
      ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-50 dark:bg-slate-800 p-10'
      : 'fixed left-[-100%] top-0 p-10 bg-slate-50 dark:bg-slate-800'
  }`}
>
  {/* Close Button */}
  <div className='flex w-full items-center pt-3'>
    <button
      onClick={handleNav}
      className='closeIcon rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer text-black dark:text-white'
      aria-label='Close menu'
    >
      <CloseOutlined />
    </button>
  </div>

  {/* Navigation Links solved debug*/}
  <div className='py-4 flex flex-col'>
    <ul className='uppercase'>
      {NAVBAR_LINKS.map(link => (
        <li
          key={link.href}
          onClick={() => setNav(false)}
          className='py-4 text-sm text-black dark:text-white'
        >
          <Link href={link.href}>
            <div aria-label={`Navigate to ${link.label}`}>
              {link.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>


    </header>
  )
}

export default Navbar
