import React from 'react'
import AboutImg from '../../../public/assets/about.jpg'
import Link from 'next/link'
import Image from 'next/image'
import Text from './Text'
import Head from 'next/head'
import './style.css'

function About () {
  return (
    <>
      <Head>
        <title>Hakkımızda - Baş Altyapı İnşaat A.Ş.</title>
        <meta
          name='description'
          content='Baş Altyapı İnşaat Anonim Şirketi olarak altyapı inşaat projelerinde profesyonel hizmet sunuyoruz. Projelerimiz hakkında bilgi alın.'
        />
        <meta
          name='keywords'
          content='altyapı, inşaat, altyapı projeleri, Baş Altyapı İnşaat'
        />
        <meta name='author' content='Baş Altyapı İnşaat A.Ş.' />
        <link rel='canonical' href='https://example.com/#about' />
      </Head>
      <div
        id='about'
        className='aboutContainer w-full p-2 flex items-center py-16'
      >
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='textAbout uppercase text-xl tracking-widest text-[#5651e5]'>
              Hakkımızda
            </p>
            <h1 className='textAboutContainer py-4'>
              Baş Altyapı İnşaat Anonim Şirketi
            </h1>
            <Text />
            <Link href='/#projects'>
              <p
                className='py-2 text-gray-600 underline cursor-pointer'
                aria-label='Projelerimiz sayfasına git'
              >
                Projelerimize bir göz atın!
              </p>
            </Link>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image
              src={AboutImg}
              className='rounded-xl'
              alt='Baş Altyapı İnşaat şirketine ait bina görseli'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
