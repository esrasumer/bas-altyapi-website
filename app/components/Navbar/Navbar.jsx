'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { RiCloseLargeFill } from 'react-icons/ri'
import NavbarMenu from './NavbarMenu'
import './style.css'

function Navbar () {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='container'>
      <nav className='navbarContainer flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/' aria-label='Home'>
          <Image
            src='/assets/basYapıLogo.png'
            alt='Bas Yapı Logo'
            width={200}
            height={300}
            className='basLogoContiner cursor-pointer'
            priority // SEO için önemli: Sayfa yüklendiğinde logonun öncelikli yüklenmesini sağlar
          />
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
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          {/* Close Button */}
          <div className='flex w-full items-center'>
            <button
              onClick={handleNav}
              className='rounded-full shadow-lg ml-auto shadow-gray-400 p-3 cursor-pointer'
              aria-label='Close menu'
            >
              <RiCloseLargeFill />
            </button>
          </div>

          {/* Navigation Links */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              {[
                { href: '/', label: 'Home' },
                { href: '/#about', label: 'About' },
                { href: '/#skills', label: 'Skills' },
                { href: '/#projects', label: 'Projects' },
                { href: '/resume', label: 'Resume' },
                { href: '/#contact', label: 'Contact' }
              ].map(link => (
                <li
                  key={link.href}
                  onClick={() => setNav(false)}
                  className='py-4 text-sm'
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
      </div>
    </header>
  )
}

export default Navbar
