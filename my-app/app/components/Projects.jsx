import React from 'react'
import Image from 'next/image';
import projectImage from '../../public/assets/projectImage.webp'

function Projects() {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Projeler
                </p>
                <h2 className='py-4'>Hizmetlerimiz hakkında daha fazla bilgi edinmek isterseniz, bize ulaşmanız yeterli.</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <Image
                       src={projectImage}
                       alt='/'
                       width='500'
                       height='500'
                       className='cursor-pointer rounded-full'
                    />
                   <Image
                       src={projectImage}
                       alt='/'
                       width='500'
                       height='500'
                       className='cursor-pointer rounded-full'
                    />
                   <Image
                       src={projectImage}
                       alt='/'
                       width='500'
                       height='500'
                       className='cursor-pointer rounded-full'
                    />
                   <Image
                       src={projectImage}
                       alt='/'
                       width='500'
                       height='500'
                       className='cursor-pointer rounded-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects;