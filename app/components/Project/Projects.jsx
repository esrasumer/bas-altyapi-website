import React from 'react'
import Image from 'next/image'
import projectImage from '../../../public/assets/projectImage.webp'
import Imagecar from '../../../public/assets/ProjectImage/Image1.jpeg'
import Tunel from '../../../public/assets/ProjectImage/Image2.jpeg'
import Cukur from '../../../public/assets/ProjectImage/Image3.jpeg'
import { Carousel } from 'antd'

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
        <Carousel autoplay>
          <div className='grid md:grid-cols-2 gap-8'>
            <h3 className='contentStyle'>
              <Image
                src={projectImage}
                alt='/'
                width='500'
                height='500'
                className='cursor-pointer rounded-full'
              />
            </h3>
          </div>
          <div>
            <Image
              src={Imagecar}
              alt='/'
              width='500'
              height='500'
              className='contentStyle '
            />{' '}
          </div>
          <div>
            <Image
              src={Tunel}
              alt='/'
              width='500'
              height='500'
              className='contentStyle'
            />{' '}
          </div>
          <div>
            <Image
              src={Cukur}
              alt='/'
              width='500'
              height='500'
              className='contentStyle'
            />{' '}
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
