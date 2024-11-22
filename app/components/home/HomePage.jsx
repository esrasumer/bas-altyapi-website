import './style.css'
import { FaWhatsapp } from 'react-icons/fa'

export default function HomePage () {
  return (
    <div className='container'>
      <div className='title'>
        ALTYAPI İNŞAATI YAPIM HİZMETLERİMİZ TÜRKİYE GENELİ HİZMET VERMEKTEYİZ
      </div>
      <div className='text'>
        YAĞMURSUYU ATIKSU DENAJ İÇMESUYU HATTI YAPIMI VE GENİŞ İŞ MAKİNASI
        PARKURU İLE HİZMETİNİZDEYİZ
      </div>
      <div className='container-botton'>
        <div className='text-callNumber'>
          FİYAT TEKLİFİ VE BİLGİ İÇİN ARAYABİLİRSİNİZ
        </div>
        <div className='whatsapp-icon'>
          <a href=' https://wa.me/905510529516' target='blank'>
            <img
              src='https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg'
              alt=''
            />
          </a>
        </div>
      </div>
    </div>
  )
}
