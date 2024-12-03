import React from 'react'
import Image from 'next/image'
import Imagecar from '../../../public/assets/ProjectImage/Image1.jpeg'
import Tunel from '../../../public/assets/ProjectImage/Image2.jpeg'
import Cukur from '../../../public/assets/ProjectImage/Image3.jpeg'
import Bahce from '../../../public/assets/ProjectImage/Image4.jpeg'
import Kuyu from '../../../public/assets/ProjectImage/Image5.jpeg'
import Mazgal from '../../../public/assets/ProjectImage/Image6.jpeg'
import Merdiven from '../../../public/assets/ProjectImage/Image7.jpeg'
import Kaldirim from '../../../public/assets/ProjectImage/Image8.jpeg'
import Cimen from '../../../public/assets/ProjectImage/Image9.jpeg'
import Boru from '../../../public/assets/ProjectImage/Image10.jpeg'
// import AltYapi from '../../../public/assets/ProjectImage/Image11.jpeg'
import { Carousel } from 'antd'
import './style.css'

const contentStyle = {
  margin: 0,
  height: '640px',
  color: '#fff',
  textAlign: 'center',
  background: '#364d79',
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

        <Carousel  className='slider-wrapper' arrows infinite={false}>
          <div>
            <div  style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Mazgal}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                  padding='500'
                />{' '}
                <Image
                  src={Bahce}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />{' '}
              </div>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Imagecar}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                  padding='500'
                />{' '}
                <Image
                  src={Tunel}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />{' '}
              </div>
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Merdiven}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                  padding='500'
                />{' '}
                <Image
                  src={Kuyu}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />{' '}
              </div>
            </div>
          </div>
          <div className='container'>
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
                  src={Kaldirim}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />
              </div>
            </h3>
          </div>
          <div>
            <div style={contentStyle}>
              <div className='slider'>
                <Image
                  src={Cimen}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                  padding='500'
                />{' '}
                <Image
                  src={Boru}
                  alt='/'
                  width='500'
                  height='500'
                  className='slide'
                />{' '}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
