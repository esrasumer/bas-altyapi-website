'use client'

import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Imagecar from '../../../public/assets/ProjectImage/Image1.jpeg'
import Tunel from '../../../public/assets/ProjectImage/Image2.jpeg'
import Cukur from '../../../public/assets/ProjectImage/Image3.jpeg'
import Bahce from '../../../public/assets/ProjectImage/Image4.jpeg'
import Kuyu from '../../../public/assets/ProjectImage/Image5.jpeg'
import Mazgal from '../../../public/assets/ProjectImage/Image6.jpeg'
import Merdiven from '../../../public/assets/ProjectImage/Image7.jpeg'
import Kaldirim from '../../../public/assets/ProjectImage/Image8.jpeg'
import Agac from '../../../public/assets/ProjectImage/Image12.jpeg'
import Boru from '../../../public/assets/ProjectImage/Image10.jpeg'
// import AltYapi from '../../../public/assets/ProjectImage/Image11.jpeg'
import { Carousel } from 'antd'
import './style.css'

const contentStyle = {
  margin: 0,
  height: '640px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79'
}
const SliderItem = ({ images }) => {
  return (
    <div style={contentStyle}>
      <div className="slider">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="/"
            width="500"
            height="500"
            className="slide"
          />
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // 768px altı mobil
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const slides = [
    [Mazgal, Bahce],
    [Imagecar, Tunel],
    [Merdiven, Kuyu],
    [Cukur, Kaldirim],
    [Boru, Agac],
  ]

  const mobileSlides = slides.flat().map((image) => [image])

  return (
    <div id='projects' className='w-full'>
      <div className='containerProject max-w-[1240px] mx-auto px-2 py-16'>
        <p className='textAbout text-xl tracking-widest uppercase text-[#5651e5]'>
          Projeler
        </p>
        <h2 className='textContainer py-4'>
          Hizmetlerimiz hakkında daha fazla bilgi edinmek isterseniz, bize
          ulaşmanız yeterli.
        </h2>

        <Carousel
          className="slider-wrapper"
          arrows
          infinite={false}
          showThumbs={false}
          showStatus={false}
          swipeable={true}
        >
          {(isMobile ? mobileSlides : slides).map((images, index) => (
            <SliderItem key={index} images={images} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
