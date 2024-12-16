import './style.css'

export default function Footer () {
  return (
    <footer className='footerContainer'>
      <div>
        <p className='footerCompanyName'>BAŞ ALTYAPI İNŞAAT SAN.TİC.LTD.ŞTİ</p>
      </div>
      <address className='footerAddress'>
        <a href='mailto:info@basaltyapi.com' className='footerText'>
          info@basaltyapi.com
        </a>
        <p className='footerText'>
          <a href='tel:05002393122'>0500 239 31 22</a>
        </p>
      </address>
      <div className='footerText'>
        <p>©2023, Başaltyapı tarafından</p>
        <a
          href='https://sumerdev.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          sümerdev.com
        </a>{' '}
        ile kurulmuştur.
      </div>
    </footer>
  )
}
