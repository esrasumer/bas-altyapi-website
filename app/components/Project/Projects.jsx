import React from 'react'
import Image from 'next/image'
import Imagecar from '../../../public/assets/ProjectImage/Image1.jpeg'
import Tunel from '../../../public/assets/ProjectImage/Image2.jpeg'
import Cukur from '../../../public/assets/ProjectImage/Image3.jpeg'
import Bahce from '../../../public/assets/ProjectImage/Image4.jpeg'
import { Carousel } from 'antd'
import './style.css'

const contentStyle = {
  margin: 0,
  height: '640px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',
  background: '#364d79'
}
function Projects () {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projeler
        </p>
        <h2 className='py-4'>
          Hizmetlerimiz hakkında daha fazla bilgi edinmek isterseniz, bize
          ulaşmanız yeterli.
        </h2>

        <Carousel className='slider-wrapper' arrows infinite={false}>
          <div>
            <h3 style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Imagecar}
                  alt='/'
                  width='300'
                  height='300'
                  className='slide'
                  padding='300'
                />{' '}
                <Image
                  src={Tunel}
                  alt='/'
                  width='440'
                  height='440'
                  className='slide'
                />{' '}
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Cukur}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />{' '}
                <Image
                  src={Bahce}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
