import React from 'react'
import './style.css'
import {
  InstagramOutlined,
  FacebookOutlined,
  WhatsAppOutlined,
  PhoneOutlined
} from '@ant-design/icons'

function TopBar () {
  return (
    <div className='containerTopBar'>
      <div className='callNumber'>
        <PhoneOutlined />
       <p> +09 0551 052 95 16</p>
      </div>
      <div className='notification'>
        <div className='email'>basaltyapi@gmail.com</div>
        <div className='socialmedia'>
          <InstagramOutlined />
          <FacebookOutlined />
          <WhatsAppOutlined />
        </div>
      </div>
    </div>
  )
}

export default TopBar
