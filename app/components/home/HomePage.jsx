import './style.css'
import { WhatsAppOutlined } from '@ant-design/icons'

export default function HomePage () {
  return (
    <main className='container homePageWrapper'>
      <header className='title'>
        <h1>
          ALTYAPI İNŞAATI OLARAK KALİTEYİ İNŞA EDİYOR, GELECEĞİ ŞEKİLLENDİRİYORUZ.
        </h1>
      </header>
      <section>
        <div className='whatsapp-icon'>
          <a
            className='linkWrapper'
            href=' https://wa.me/905510529516'
            target='blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp üzerinden bizimle iletişime geçin'
          >
            <WhatsAppOutlined className='whatsapp' />
            <p>Bize ulaşın</p>
          </a>
        </div>
      </section>
    </main>
  )
}
