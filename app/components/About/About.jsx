import React from 'react'
import AboutImg from '../../../public/assets/about.jpg'
import Link from 'next/link';
import Image from 'next/image';
import Text from './Text'
import './style.css'

function About() {
    return (
        <div id='about' className='aboutContainer w-full p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='textAbout uppercase text-xl tracking-widest text-[#5651e5]'>
                        Hakkımızda
                    </p>
                    <h2 className='textAboutContainer py-4'>BAŞ ALTYAPI İNŞAAT ANONİM ŞİRKETİ</h2>
                    <Text />
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Projelerimize bir göz atın!
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About;