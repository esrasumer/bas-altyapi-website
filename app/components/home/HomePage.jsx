import Image from 'next/image'
import Whatsapp from '../../../public/assets/whatsapp.gif'
import './style.css'

export default function HomePage () {
  return (
    <main className='container'>
      <header className='title'>
        <h1>
          {' '}
          ALTYAPI İNŞAATI YAPIM HİZMETLERİMİZ TÜRKİYE GENELİ HİZMET VERMEKTEYİZ
        </h1>
      </header>
      <p className='text'>
        YAĞMURSUYU ATIKSU DENAJ İÇMESUYU HATTI YAPIMI VE GENİŞ İŞ MAKİNASI
        PARKURU İLE HİZMETİNİZDEYİZ
      </p>
      <section className='container-botton'>
        <p className='text-callNumber'>
          FİYAT TEKLİFİ VE BİLGİ İÇİN ARAYABİLİRSİNİZ
        </p>
        <div className='whatsapp-icon'>
          <a
            href=' https://wa.me/905510529516'
            target='blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp üzerinden bizimle iletişime geçin'
          >
            <Image
              width={122}
              height={122}
              src={Whatsapp}
              alt='WhatsApp İkonu'
            />
          </a>
        </div>
      </section>
    </main>
  )
}
