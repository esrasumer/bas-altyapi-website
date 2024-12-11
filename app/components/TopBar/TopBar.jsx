import React from 'react'
import './style.css'
import CallNumber from './CallNumber'
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  PhoneOutlined
} from '@ant-design/icons'

function TopBar () {
  return (
    <div className='containerTopBar'>
      <CallNumber />
      <div className='notification'>
        <div className='email'>basaltyapi@gmail.com</div>
        <div className='socialmedia'>
          <InstagramOutlined style={{ color: '#002050', fontSize: '24px' }}/>
          <FacebookOutlined style={{ color: '#002050', fontSize: '24px' }}/>
          <WhatsAppOutlined style={{ color: '#002050', fontSize: '24px' }}/>
        </div>
      </div>
    </div>
  )
}

export default TopBar
