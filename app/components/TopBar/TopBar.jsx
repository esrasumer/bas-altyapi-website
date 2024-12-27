import React from 'react'
import './style.css'
import CallNumber from './CallNumber'
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'

function TopBar () {
  return (
    <div className='containerTopBar'>
      <CallNumber />
      <div className='notification'>
        <div className='email hidden md:block'>basaltyapi@gmail.com</div>
        <div className='socialmedia'>
          <a
            href='https://www.instagram.com/erdalbas62/?igsh=MWxmcmp6b2xuNGh5aA%3D%3D#'
            target='_blank'
            rel='noopener noreferrer'
          >
            <InstagramOutlined style={{ color: '#002050', fontSize: '24px' }} />
          </a>
          <FacebookOutlined style={{ color: '#002050', fontSize: '24px' }} />
          <a
            className='linkWrapper'
            href=' https://wa.me/905510529516'
            target='blank'
            rel='noopener noreferrer'
            aria-label='WhatsApp üzerinden bizimle iletişime geçin'
          >
            <WhatsAppOutlined style={{ color: '#002050', fontSize: '24px' }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
